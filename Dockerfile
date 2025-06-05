FROM node:18

# 安裝 expo-cli
RUN npm install -g expo-cli -g @expo/ngrok@^4.1.0

# ✅ COPY 全部專案程式碼（給 build 階段使用）
COPY . /app

# 建立工作目錄
WORKDIR /app

# ✅ 安裝相依套件
RUN npm install

# 開放 Expo 使用的 ports
EXPOSE 8081 19000 19001 19002

CMD ["npx", "expo", "start", "--tunnel"]