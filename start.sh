#!/bin/bash

# 执行构建
npm run build

# 如果构建成功，启动服务
if [ $? -eq 0 ]; then
  npm run start
else
  echo "Build failed, exiting..."
  exit 1
fi