import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "";
const DEFAULT_API_BASE_URL = "https://skill-forge-api.vercel.app";
const isBrowser = typeof window !== "undefined";
const isLocalhost =
    isBrowser && /^(localhost|127\.0\.0\.1)$/i.test(window.location.hostname);
const BASE_URL =
    API_URL || (isLocalhost ? "http://localhost:4000" : DEFAULT_API_BASE_URL);

function normalizeError(error: unknown) {
    if (error instanceof Error) return error.message;
    if (error && typeof error === "object") {
        const anyError = error as Record<string, unknown>;
        return (
            (typeof anyError.message === "string" && anyError.message) ||
            (typeof anyError.type === "string" && anyError.type) ||
            JSON.stringify(anyError)
        );
    }
    return String(error);
}

export const api = axios.create({
    baseURL: `${BASE_URL}/api`,
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
});

export async function streamChat(
    messages: { role: string; content: string }[],
    conversationId: string | undefined,
    onChunk: (text: string) => void,
    onDone: (conversationId: string) => void,
    onError: (error: string) => void,
    courseContext?: { courseId?: string; courseTitle?: string },
) {
    try {
        const payload = {
            messages,
            courseContext,
            ...(conversationId ? { conversationId } : {}),
        };
        const chatBaseUrl =
            API_URL ||
            (isLocalhost ? "http://localhost:4000" : DEFAULT_API_BASE_URL);
        const response = await fetch(`${chatBaseUrl}/api/ai/chat`, {
            method: "POST",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            onError(`Request failed: ${response.status}`);
            return;
        }

        const reader = response.body?.getReader();
        if (!reader) {
            onError("No response stream");
            return;
        }

        const decoder = new TextDecoder();
        let buffer = "";

        while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            buffer += decoder.decode(value, { stream: true });
            const lines = buffer.split("\n\n");
            buffer = lines.pop() || "";

            for (const line of lines) {
                if (line.startsWith("data: ")) {
                    try {
                        const data = JSON.parse(line.slice(6));
                        if (data.type === "chunk") onChunk(data.content);
                        else if (data.type === "done")
                            onDone(data.conversationId);
                        else if (data.type === "error") onError(data.error);
                    } catch {
                        /* ignore parse errors */
                    }
                }
            }
        }
    } catch (error) {
        const message = normalizeError(error);
        onError(message || "Stream failed");
    }
}
