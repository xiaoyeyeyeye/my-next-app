module.exports = {
    apps: [
      {
        name: "my-next-app", // 应用名称
        script: "npm",       // 使用 npm 启动
        args: "run start",   // 运行 `npm run start`
        env: {
          NODE_ENV: "production", // 设置环境变量
          PORT: 3000,             // 指定端口号（可选）
        },
      },
    ],
  };