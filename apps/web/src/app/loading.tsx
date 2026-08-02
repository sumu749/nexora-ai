export default function Loading() {
    return (
        <div className="flex min-h-[60vh] items-center justify-center px-6 py-16">
            <div className="flex flex-col items-center gap-4 rounded-2xl border border-slate-200/70 bg-white/80 p-8 text-center shadow-lg backdrop-blur dark:border-slate-800 dark:bg-slate-900/80">
                <div className="relative h-12 w-12 animate-spin rounded-full border-4 border-slate-300 border-t-sky-500 dark:border-slate-700 dark:border-t-sky-400" />
                <div className="space-y-2">
                    <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                        Loading SkillForge
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                        Preparing your next learning experience...
                    </p>
                </div>
            </div>
        </div>
    );
}
