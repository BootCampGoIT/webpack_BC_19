const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
    entry: './src/index.js', //точка входа откуда начинается построение всех зависимостей
    output: { //всегда объект. Куда положить результирующий файл
        filename: 'main.js', //название результирующего файла
        path: path.resolve(__dirname, 'dist'), //путь к файлу из встроенной библиотеки node js
    },
    module: { //создает объект загрузчиков
        rules: [ // создаем массив объектов загрузчиков
            {
                test: /\.js$/,  // найти все файлы которые заканчиваются на .js
                exclude: /node_modules/, // не искать тут файлы .js
                use: ["babel-loader"] // массив загрузчиков
            },
            {
                test: /\.css$/,  // найти все файлы которые заканчиваются на .css
                exclude: /node_modules/, // не искать тут файлы .css
                use: ["style-loader", "css-loader"] // массив загрузчиков
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ filename: 'index.html', template: './src/index.html', inject: true }),
        new CleanWebpackPlugin(),
        new webpack.ProgressPlugin(),
    ]
};