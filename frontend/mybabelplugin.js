// mybarbelplugin.js:
module.exports = function myplugin() {
    return {
        visitor: {
            // Identifier(path) {
            //     const name = path.node.name;
            //     //path를 통해서 트리를 만들었고 트리의 특정 노드를 출력

            //     // 바벨이 만든 AST 노드를 출력한다
            //     console.log('Identifier() name:', name) 
                
            //     // 변환작업: 코드 문자열을 역순으로 변환한다
            //     //노드에 있는 문자값을 바꾸는 것
            //     path.node.name = name
            //     .split("")
            //     .reverse()
            //     .join("");
            // } 
            VariableDeclaration(path) {
                console.log('VariableDeclaration() kind:', path.node.kind); // const
                
                if (path.node.kind === 'const') {
                path.node.kind = 'var'
                }
            }           
        },
    };
}