//Q1. Array에서 철수라는 자료를 찾고 싶다.
//array에서 이름을 찾아주는 함수를 만들고 있습니다.
//함수 안에 파라미터로 이름을 집어넣으면 그 이름이 출석부에 있으면 콘솔창에 출력해주는 함수를 만들어봅시다.
// 동작예시)
//이름찾기('철수'); 라고 쓰면 콘솔창에 '있어요'라는 글자가 떠야합니다.
//이름찾기('명수'); 라고 쓰면 콘솔창에 아무 글자도 뜨지 않아야합니다.

var check = ['이대호', '한동희', '전준우', '정훈'];

function findName(name) {
    check.forEach((v)=> {
        if ( v == name ) console.log("있어요.");
    })
}

findName('이대호');
// findName('유강남');