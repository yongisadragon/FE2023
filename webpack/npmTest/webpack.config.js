const path = require("path"); //운영체제별로 상이한 경로 문법을 해결해 절대 경로로 반환하는 역할을 합니다.
const webpack = require("webpack");
const childProcess = require("child_process");
const HtmlWebpackPlugin = require("html-webpack-plugin");
require("dotenv").config();
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  // mode: process.env.NODE_ENV 조건식을 만족하기 위해 패키지 제이슨에 build, build:pro추가해줌.

  mode: process.env.NODE_ENV === "development" ? "development" : "production",
  entry: {
    main: path.resolve("./src/app.js")
  },
  output: {
    filename: "[name].js",
    path: path.resolve("./dist")
  },
  module: {
    rules: [
      // 여기서 로더를 추가할 수 있는 부분입니다.
      // {
      //   //.js로 끝나는 정규식 표현
      //   test: /\.js$/,
      //   use: [path.resolve("./myLoader.js")]
      // }
      // 로더는 아래부터 순차로 읽기 때문에 style-loader와 css-loader의 순서를 주의하자
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        // Base64 포멧으로 이미지 불러오기. webpack5이전에는 url로더를 설치해야헀지만, 그냥 로더에 추가하면 된다. inline을 빼고 asset만 쓰면 크기가 8kb 미만인 파일은 asset/inline 모듈로 처리되고 그렇지 않으면 일반적인 리소스 파일로 처리합니다.
        test: /\.(png|jpg|gif|svg)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 80 * 1024 // 1kb가 1024byte 이기 때문에 80kb를 원한다면 1024에 80을 곱합니다.
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin({
      // banner: `
      // Commit Version : ${childProcess.execFileSync(
      //   "git rev-parse --short HEAD"
      // )}
      // Committer : ${childProcess.execFileSync("git config user.name")}
      // Commit Date : 마지막 빌드 시간은 ${new Date().toLocaleString()}입니다.
      // `
      banner: `
      Commit Date : 마지막 빌드 시간은 ${new Date().toLocaleString()}입니다.
      `
    }),
    new webpack.DefinePlugin({
      dev: JSON.stringify("process.env.DEV_API"),
      pro: JSON.stringify("process.env.PRO_API")
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html" // 목표 html 파일의 위치입니다.
    }),
    new CleanWebpackPlugin()
  ]
};
