import { useGetSystemHealthQuery } from "./systemApi";

const SystemDashboard = () => {
  const { data, error, isLoading, isFetching, isError, refetch } =
    useGetSystemHealthQuery(undefined, {
      pollingInterval: 30_000,
    });

  const isHealthy = data?.status === "UP";

  if (isLoading) {
    return (
      <section className="rounded-xl border border-slate-200 bg-white p-8">
        <p className="text-sm text-slate-500">
          Connecting to KnowledgeHub AI backend...
        </p>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="rounded-xl border border-red-200 bg-white p-8">
        <h2 className="text-lg font-semibold text-red-700">
          Backend connection failed
        </h2>

        <p className="mt-2 text-sm text-slate-600">
          Unable to retrieve the system health status. Verify that Spring Boot
          is running on port 8080.
        </p>

        <p className="mt-3 break-all text-xs text-slate-500">
          {JSON.stringify(error)}
        </p>

        <button
          type="button"
          onClick={() => void refetch()}
          className="mt-5 rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700"
        >
          Retry connection
        </button>
      </section>
    );
  }

  return (
    <div className="space-y-8">
      <section>
        <p className="text-sm font-medium text-blue-600">SYSTEM OVERVIEW</p>

        <div className="mt-2 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">
              System Dashboard
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Monitor your KnowledgeHub AI application.
            </p>
          </div>

          <button
            type="button"
            onClick={() => void refetch()}
            disabled={isFetching}
            className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isFetching ? "Refreshing..." : "Refresh status"}
          </button>
        </div>
      </section>

      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-medium text-slate-500">Backend Status</p>

          <div className="mt-4 flex items-center gap-3">
            <span
              className={`h-3 w-3 rounded-full ${
                isHealthy ? "bg-emerald-500" : "bg-red-500"
              }`}
            />

            <span
              className={`text-2xl font-bold ${
                isHealthy ? "text-emerald-700" : "text-red-700"
              }`}
            >
              {data?.status ?? "UNKNOWN"}
            </span>
          </div>

          <p className="mt-3 text-xs text-slate-500">Live application health</p>
        </article>

        <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-medium text-slate-500">Application</p>

          <p className="mt-4 text-xl font-bold">
            {data?.application ?? "Unavailable"}
          </p>

          <p className="mt-3 text-xs text-slate-500">Spring Boot application</p>
        </article>

        <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-medium text-slate-500">
            Last Health Check
          </p>

          <p className="mt-4 text-lg font-bold">
            {data?.timestamp
              ? new Date(data.timestamp).toLocaleTimeString()
              : "Unavailable"}
          </p>

          <p className="mt-3 text-xs text-slate-500">
            Automatically refreshed every 30 seconds
          </p>
        </article>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-base font-semibold">Backend Integration</h3>

        <div className="mt-5 space-y-4 text-sm">
          <div className="flex flex-wrap justify-between gap-2">
            <span className="text-slate-500">API endpoint</span>
            <code className="text-slate-700">GET /api/v1/system/health</code>
          </div>

          <div className="flex flex-wrap justify-between gap-2">
            <span className="text-slate-500">API response</span>
            <span className="font-medium text-emerald-700">
              {data ? "Received successfully" : "Unavailable"}
            </span>
          </div>

          <div className="flex flex-wrap justify-between gap-2">
            <span className="text-slate-500">Data fetching</span>
            <span className="font-medium text-slate-700">RTK Query</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SystemDashboard;
