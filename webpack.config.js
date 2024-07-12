import path from 'path'

export default (env, argv) => ({
  entry: "./src/entry.js",
  output: {
    filename: `bundle.${process.env.NODE_ENV || "production"}.js`,
    path: path.resolve(
      process.cwd(),
      process.env.NODE_ENV === "development" ? ".dev" : "dist"
    ),
  },
  resolve: {
    // extensions: [".js", ".jsx", ".ts"],
    extensions: [".js", ".jsx"],
    alias: {
      react: "preact/compat",
      "react-dom/test-utils": "preact/test-utils",
      "react-dom": "preact/compat",
      "react/jsx-runtime": "preact/jsx-runtime",
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: [["@babel/plugin-transform-react-jsx", { pragma: "h" }]],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "assets/[hash].[ext]",
            },
          },
        ],
      },
      // {
      //   test: /\.ts$/,
      //   use: "ts-loader",
      //   exclude: /node_modules/,
      // }
    ],
  },
  devServer: {
    allowedHosts: "all",
    server: "https",
    client: {
      webSocketURL: "wss://localhost:8080/ws",
      progress: true,
      reconnect: true,
      overlay: false,
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization",
    },
  },
});
