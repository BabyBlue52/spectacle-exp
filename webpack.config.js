const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const includePaths = [
    path.resolve(__dirname, 'src'),
    path.resolve(__dirname, 'test'),
    path.resolve(__dirname, 'package.json'),
    path.resolve(__dirname, 'src'),
];
module.exports = {
  entry: './src/index.tsx',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Society of the Spectacle',
    }),
  ],
  module: {
    rules: [
        {
            test: /\.s[ac]ss$/i,
            use: [
              // Creates `style` nodes from JS strings
              "style-loader",
              // Translates CSS into CommonJS
              "css-loader",
              // Compiles Sass to CSS
              "sass-loader",
            ],
          },
          {
            test: /\.(js|jsx)$/,
            include: path.resolve(__dirname, 'src'),
            exclude: /(node_modules|bower_components|build)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env', '@babel/preset-react'],
              },
            },
          },
          {
            test: /\.tsx?$/,
            use: [
                {
                    loader: 'ts-loader',
                },
            ],
            include: includePaths,
            exclude: '/node_modules/'
        },
      

          { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
          {
            test: /\.(gif|png|jpg|eot|woff|ttf|svg)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: 'web/[hash].[ext]',
                    },
                },
            ],
                include: includePaths,
            },
         
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                  loader: 'url-loader',
                  options: {
                    name: '[name].[ext]',
                    outputPath: './fonts/' //dont actually use these fonts but still need to process them
                  }
                }],
                type: 'asset/resource',
              }
    ],
  },
  resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,    
  },
  devServer: {
    contentBase: './dist'
  },
  mode: 'development'
};