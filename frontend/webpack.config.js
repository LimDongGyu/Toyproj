/**
 * /root/webpack.config.js
 */

const path = require('path');
const CustomPlugin = require('./customplugin');
const webpack = require('webpack');
const banner = require('./banner.js')

module.exports = {
    mode: 'development',
    entry: {
        main: './src/app.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve('./dist'),
    },
    module: {
        rules: [
            {
                test: /\.jpg$/,
                loader: 'url-loader',
                options:{
                    publicPath: './dist/',
                    name: '[name].[ext]?[hash]',
                    limit: 5000,    //5kb 미만의 파일만 data url로 처리
                }
            },
            /* { 
                test: /\.jpg$/, 
                loader: 'file-loader', 
                options:{
                    publicPath: './dist/',          //prefix를 output 경로로 지정
                    name: '[name].[ext]?[hash]',    //파일명 형식
                    
                    //publicPath: file-loader가 처리하는 파일을 모듈로 사용할 때, 경로 앞에 추가되는 문자열
                    //name: loader가 파일을 output에 복사할 때 사용하는 파일 이름
                }
            }, */
            { test: /\.css$/, use: ['style-loader', 'css-loader']},
        ],
    },
    plugins: [
        /**
         * 1. BannerPlugin()
         */
        // new CustomPlugin(),
        // new webpack.BannerPlugin({
        //     // 생성자 함수에 전달하는 옵션 객체의 banner 속성에 문자열을 전달
        //     // banner: '배너 내용입니다. 빌드 정보나 커밋버전 등을 추가할 수 있습니다.',
        // }),

        /** 배너 정보가 많으면 별도 파일로 분리해도 좋음.
             *  1. banner.js 파일을 생성해서 배너 정보를 담음
             *  2. 설정파일 상단에 const banner = require('./banner.js); 선언
             *  3. plugins 속성에 new webpack.BannerPlugin(banner);
             */
        new webpack.BannerPlugin(banner),

        /**
         * 2. DefinePlugin()
         * 
         * //노드 환경정보인 process.env.NODE_ENV는 기본적으로 있는 설정값
         */
        new webpack.DefinePlugin({
            VERSION: JSON.stringify('v.1.2.3'),
            MAX_COUNT: JSON.stringify(999),
            'api.domain': JSON.stringify('http://127.0.0.1'),
        }),
    ]
}