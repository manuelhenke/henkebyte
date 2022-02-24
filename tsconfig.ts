export default {
  include: ["./src/**/*"],
  compilerOptions: {
    baseUrl: "src",
    paths: {
      "@/*": ["./*"],
    },
  },
  exclude: ["node_modules"],
};
