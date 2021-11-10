'use strict';

const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // Папка в которой ведется разработка
    context: path.join(__dirname, 'src'),
    // Точка входа в приложение
    entry: './index.js',
    // Выходные файлы
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist'),
    },
    // добавляет исходные карты к js файлу
    devtool: 'eval',
    // Для development
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    // настройки DevServera
    devServer: {
        port: 4200,
    },
    plugins: [
        // Позволяет собрать html файл вместе с js
        new HtmlWebpackPlugin({
            title: 'Native Framework',
            template: './index.html',
        }),
    ]
}