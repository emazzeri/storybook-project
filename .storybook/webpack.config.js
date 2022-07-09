// const path = require('path');

// module.exports = async ({ config }) => {
//   config.module.loaders.push({
//     test: /\.(png|woff|woff2|eot|ttf|svg)$/,
//     use: [
//       {
//         loader: 'file-loader',
//         query: {
//           name: '[name].[ext]'
//         }
//       }
//     ],
//     include: path.resolve(__dirname, '../')
//   });

//   return config;
// };