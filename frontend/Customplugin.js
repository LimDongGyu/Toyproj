/**
 * /root/customplugin.js
 */


//플러그인은 클래스로 제작함
//플러그인 작업이 완료되는 시점에 로그를 찍는 함수
class Customplugin{
    apply(compiler){
        compiler.hooks.done.tap('custom Plugin', stats => {
            console.log('custom plugin : done');
        })

        //compiler.plugin() 함수로 후처리 함
        //emit 이벤트가 발생하면 실행되는 부분
        //번들된 결과가 compilation 객체에 들어있으며, 아래 source 함수로 접근 할 수 있음
        compiler.plugin('emit', (compilation, callback) => {
            const source = compilation.assets['main.js'].source();

            //실행결과 터미널에 번들링 된 결과물을 확인 가능
            // console.log(source);

            compilation.assets['main.js'].source = () => {
                const banner = [
                    '/**',
                    '* 이것은 BannerPlugin이 처리한 결과입니다.',
                    '*/'
                ].join('\n');
                return banner + '\n\n' + source;
            }
            callback();
        })
    }
}

module.exports = Customplugin;