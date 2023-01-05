// string 타입의 자료를 넣고 number타입을 return하는 유형.
type funcType = (a:string) => number;

let functypetest :funcType = function (a) {
    return 10;
}


// object 자료 안의 함수 타입지정(methods)
// hw1. 함수에 타입지정
type memberType = {
    name : string,
    plusOne : (a:number) => number,
    changeName: () => void
}

let memberInfo :memberType = {
    name: 'kim',
    plusOne(a){
        return a + 1;
    },
    changeName : () => {}
}

memberInfo.plusOne(3);


//----------------------------------------------//


// hw2. 함수 2개 생성 및 타입 지정

type cutType = (a:string) => string;
let cutZero :cutType = function (a) {
    if (a[0] == '0') return a.substring(1);
}

console.log(cutZero('023'));


type removeType = (a:string) => number;
let removeDash :removeType = function (a) {
    let result = a.replace(/-/g,'');
    return parseFloat(result);
}
console.log(removeDash('0-9-7'));
