/**
 * 개발스펙
 * 
 * os : windows10 pro 64bit
 * php : 7.4.2
 * composer: 1.9.3
 * node: 13.2.0
 * npm: 6.13.1
 * laravel: 6.1.2
 * laravel/ui : 1.2.0
 */

 /**
  * 
  * 개발순서
  * 
  *  0. 사전준비
  *    0.1. laravel install
  *      [terminal] composer create-project --prefer-dist laravel/laravel <프로젝트명>
  *    0.2. npm install
  *      [terminal] npm install
  *    0.3. AdminLTE 3 install
  *      [terminal] npm install admin-lte@^3.0 --save 또는
  *      [terminal] composer require "almasaeed2010/adminlte=~3.0"
  *         [참고] https://github.com/ColorlibHQ/AdminLTE
  *    0.4. DB schema(dashboard) 생성
  *      0.4.1. DB config 수정 > /root/.env
  *    0.5. auth install
  *      0.5.1. laravel 6이하 버전
  *        [terminal] php artisan make:auth
  *      0.5.2. laravel 6.x버전
  *      [terminal] composer require laravel/ui
  *      [terminal] php artisan ui vue --auth
  *      [terminal] npm install
  *    0.6. database migration
  * 
  * 1. /root/resources/js/bootstraps.js
  *   15줄 추가 require('admin-lte');
  * 2. /root/resources/sass/app.scss
  *   추가 @import '~admin-lte/dist/css/adminlte.css';
  * 3. npm run watch
  * 
  */