import type { IncomingMessage, ServerResponse } from "http";
import express from "express";
import cors from "cors";
import { config } from "../src/config";
import { connectDatabase } from "../src/db/connection";
import { seedCourses, seedReviews } from "../src/seed/courses";
import { seedCourses as persistSeed } from "../src/services/courseService";
import { apiRateLimiter } from "../src/middleware/rateLimit";
import { optionalAuth } from "../src/middleware/auth";
import coursesRouter from "../src/routes/courses";
import aiRouter from "../src/routes/ai";
import usersRouter from "../src/routes/users";

let appInstance: express.Express | null = null;
let bootstrapPromise: Promise<express.Express> | null = null;

async function getApp(): Promise<express.Express> {
    if (appInstance) return appInstance;

    if (!bootstrapPromise) {
        bootstrapPromise = (async () => {
            const storageMode = await connectDatabase();
            await persistSeed(seedCourses, seedReviews);

            const app = express();
            app.set("trust proxy", 1);

            app.use(
                cors({
                    origin: true,
                    credentials: true,
                }),
            );
            app.use(express.json({ limit: "1mb" }));
            app.use(apiRateLimiter);
            app.use(optionalAuth());

            app.get("/", (_req, res) => {
                res.json({
                    success: true,
                    message: "SkillForge API is running 🚀",
                    docs: "/api/health",
                });
            });

            app.get("/api/health", (_req, res) => {
                res.json({
                    status: "ok",
                    storage: storageMode,
                    timestamp: new Date().toISOString(),
                });
            });

            app.use("/api/courses", coursesRouter);
            app.use("/api/ai", aiRouter);
            app.use("/api/users", usersRouter);

            app.use((_req, res) => {
                res.status(404).json({ error: "Not found" });
            });

            appInstance = app;
            return app;
        })();
    }

    return bootstrapPromise;
}

export default async function handler(
    req: IncomingMessage,
    res: ServerResponse,
) {
    const app = await getApp();
    return app(req as any, res as any);
}
