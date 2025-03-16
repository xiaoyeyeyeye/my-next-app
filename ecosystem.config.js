module.exports = {
  apps: [
    {
      name: "next-app",
      script: "yarn",
      args: "run build && npm run start",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
      out_file: "/app/logs/out.json",
      error_file: "/app/logs/error.json",
      log_type:"json",
      merge_logs: true,
      log_date_format: "YYYY-MM-DD HH:mm:ss",
      autorestart: true,
      max_restarts: 10,
      restart_delay: 5000,
      exp_backoff_restart_delay: 100,
      max_memory_restart: "500M",
      watch: false,
      // instances: "max",
      // exec_mode: "cluster",
      cron_restart: "0 2 * * *",
    },
  ],
};