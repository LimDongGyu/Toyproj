module.exports = function customloader(content){
    console.log('직접 작성한 커스텀 로더 동작');
    // return content;
    return content.replace('console.log(', 'alert(');
    //console.log( -> alert( 로 치환

    //로더가 읽은 파일의 내용이 함수의 파라미터인 content로 전달됨
    //로더를 사용하려면 /root/webpack.config.js 설정파일 module 객체에 추가해야 함
};