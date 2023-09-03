/** @type {import('next').NextConfig} */

const debug = process.env.NODE_ENV !== "production";
const repository = "https://justinchoihokyeong.github.io/";

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: !debug ? `/${repository}/` : "", // production 일때 prefix 경로
  trailingSlash: true, // 빌드 시 폴더 구조 그대로 생성하도록
  images: {
    loader: "imgix",
    path: "https://justinchoihokyeong.github.io/",
  },
};

module.exports = nextConfig;
