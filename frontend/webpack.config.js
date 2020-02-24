/**
 * /root/webpack.config.js
 */

const path = require('path');
const CustomPlugin = require('./customplugin');
const webpack = require('webpack');
const banner = require('./banner.js')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
                test: /\.(scss|css)$/, 
                use: [
                    process.env.NODE_ENV === 'production'
                    ? MiniCssExtractPlugin.loader  //배포 환경
                    : 'style-loader', 'css-loader'  //개발 환경
                ]
            },
            { 
                test: /\.(jpg|png|gif|svg)$/, 
                loader: 'url-loader', 
                options:{
                    publicPath: './dist/',          //prefix를 output 경로로 지정
                    name: '[name].[ext]?[hash]',    //파일명 형식
                    //publicPath: file-loader가 처리하는 파일을 모듈로 사용할 때, 경로 앞에 추가되는 문자열
                    //name: loader가 파일을 output에 복사할 때 사용하는 파일 이름
                    limit:10000  //10kb 미만 파일만 data url로 처리
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            }
        ]
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

        /**
         * 3. Html-Webpack-Plugin
         */
        new HtmlWebpackPlugin({
            template: './src/index.html',   //템플릿 경로 지정
            templateParameters:{
                //템플릿에 주입할 파라미터 변수 지정
                env: process.env.NODE_ENV === 'development' ? '(개발용)' : '',
                //NODE_ENV=development이면 타이틀(개발용)
                //NODE_ENV=production이면 타이틀로 출력 됨
            },
            //운영환경에서는 파일을 압축하고 불필요한 주석 제거 필요
            minify: process.env.NODE_ENV === 'production' ? {
                collapseWhitespace: true,       //빈칸 제거
                removeComments: true,           //주석 제거
            }: false,
            //정적 파일을 불러올 때 쿼리문자열에 webpack 해시 값을 추가
            // hash: true,
        }),

        /**
         * 4. CleanWebpackPlugin()
         * 
         *  ./dist에서 불필요한 것들을 제거하고 다시 build ehlehfhr gka
         */
        new CleanWebpackPlugin(),

        /**
         * 5. MiniCssContractPlugin()
         * 
         * 보통 개발환경에서는 사용하지 않고, 운영환경에서 사용함
         */
            //filename에 설정한 값으로 output 경로에 css 파일이 생성될 것
        ...(
            process.env.NODE_ENV === 'production'
            ? [ new MiniCssExtractPlugin({filename: `[name].css`})]
            : []
        ),

        // TODO: HtmlTemplatePlugin : 동적으로 html 파일을 생성하라
        // TODO: BannerPlugin: 결과물에 빌드 시간을 출력
    ]
}