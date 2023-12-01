//div의 스크롤바 내린 양 + 눈에 보이는div 높이 == div의 실제 높이
$('.lorem').on('scroll', function () {
    var 스크롤양 = document.querySelector('.lorem').scrollTop;
    var 실제높이 = document.querySelector('.lorem').scrollHeight;
    var 높이 = document.querySelector('.lorem').clientHeight;
    if (스크롤양 + 높이 > 실제높이 - 10) {
        alert('다읽음')
    }
});

// window.addEventListener('scroll', function () {
//     console.log(window.screenY);
// });

$(window).on('scroll', function () {
    var 스크롤 = $(window).scrollTop()
    // $(window).scrollTop().css('font-size','10px');
    if (스크롤 < 100) {
        $('.navbar-brand').css('font-size', '50px');
    }
    else {
        $('.navbar-brand').css('font-size', '10px');
    }
});
// 버튼 0 누르면
// - 모든버튼에 붙은 orange 클래스명 제거
// - 버튼0에 orange 클래스명 추가
// - 모든 div에 show 클래스명 제거
// - div0에 show 클래스명 추가

// $('.tab-button').eq(0).on('click', function() {
//     $('.tab-button').removeClass('orange');
//     $('.tab-button').eq(0).addClass('orange');

//     $('.div').removeClass('show');
//     $('.tab-content').eq(0).addClass('show');
// });

// $('.tab-button').eq(1).on('click', function() {
//     $('.tab-button').removeClass('orange');
//     $('.tab-button').eq(1).addClass('orange');

//     $('.div').removeClass('show');
//     $('.tab-content').eq(1).addClass('show');
// });

// $('.tab-button').eq(2).on('click', function() {
//     $('.tab-button').removeClass('orange');
//     $('.tab-button').eq(2).addClass('orange');

//     $('.div').removeClass('show');
//     $('.tab-content').eq(2).addClass('show');
// });

// for (let i = 0; i < $('.tab-button').length; i++) {
//     $('.tab-button').eq(i).on('click', function() {
//         탭열기(i)
//     });

// }
$('.list').click(function (e) {

    탭열기(e.target.dataset.id);

})

// document.querySelector('.tab-button').dataset.id

function 탭열기(숫자) {
    $('.tab-button').removeClass('orange');
    $('.tab-button').eq(숫자).addClass('orange');
    $('.div').removeClass('show');
    $('.tab-content').eq(숫자).addClass('show');
}

var car = ['쏘나타', '50000', 'white']; // Array
var car2 = { name: '쏘나타', price: [50000, 3000, 4000] };
// document.querySelector('.car-title').innerHTML = car2.name;
// document.querySelector('.car-price').innerHTML = car2.price[1];
// car[0] = '아반떼';
car2.price = 6000;
console.log(car[1]);
console.log(car['name']);
console.log(car.name);

// array 와 Object 의 차이점 ?
// arry 는 자료간 순서 존재
// car.sort(); 정렬 이됨
// car.slice(1,3); 중간에 자르기도 가능

// object는 없다 

var products = [
    { id: 0, price: 70000, title: 'Blossom Dress' },
    { id: 1, price: 50000, title: 'Springfield Shirt' },
    { id: 2, price: 60000, title: 'Black Monastery' },
    { id: 3, price: 60000, title: 'Black Monastery' }
];
// 아이디가 0 인 카드 값에 h5에는 제목 p에는 가격을 적는
// 코드를 작성해보자
console.log(products[0].price);
// document.querySelectorAll('.card-title')[0].innerHTML = products[0].title;
// document.querySelectorAll('.card-price')[0].innerHTML = products[0].price;
// document.querySelectorAll('.card-title')[1].innerHTML = products[1].title;
// document.querySelectorAll('.card-price')[1].innerHTML = products[1].price;
// document.querySelectorAll('.card-title')[2].innerHTML = products[2].title;
// document.querySelectorAll('.card-price')[2].innerHTML = products[2].price;

// for (let i = 0; i < $('.card').length; i++) {

//     document.querySelectorAll('.card-title')[i].innerHTML = products[i].title;
//     document.querySelectorAll('.card-price')[i].innerHTML = products[i].price;

// }
const cards = document.querySelectorAll('.card');

cards.forEach((card, index) => {
    const titleElement = card.querySelector('.card-title');
    const priceElement = card.querySelector('.card-price');

    titleElement.innerHTML = products[index].title;
    priceElement.innerHTML = '가격 : ' + products[index].price;
});

// 서버에서 데이터를 가져올때 하드 코딩으로 만들어버리면 
// 내일 당장 데이터가 추가되면 다시 수정해야 되니 
// 그래서 반복문을 사용하는 것이 좋다!

var products = [
    { title: '모자', hat: ['S', 'L', 'XL'] },
    { title: '셔츠', shirts: [95, 100, 105] },
    { title: '바지', pants: [28, 30, 32, 34] }
];

// 첫 번째 <select> 초기화
var firstSelect = $('.form-select').eq(0);
firstSelect.html('');
products.forEach(data => {
    firstSelect.append(`<option>${data.title}</option>`);


    $('.form-select').eq(0).on('click', function () {  // 두 번째 <select>의 이벤트 핸들러 등록
        var value = this.value;
        var secondSelect = $('.form-select').eq(1);


        secondSelect.removeClass('down').html(''); // 두 번째 <select> 초기화

        // 선택된 값과 일치하는 제품 찾기
        var selectedProduct = products.find(product => product.title == value);

        if (selectedProduct) {
            // 일치하는 제품이 있으면 두 번째 드롭다운에 옵션 추가
            selectedProduct[Object.keys(selectedProduct)[1]].forEach(data => {
                secondSelect.append(`<option>${data}</option>`);
            });
        } else {
            console.error("선택된 제품을 찾을 수 없습니다.");
        }

    });

});
// Object.keys(selectedProduct): 이 부분은 selectedProduct 객체의 키들을 배열로 반환합니다.Object.keys 함수는 객체의 키를 배열로 추출합니다.여기서는 selectedProduct의 모든 키를 배열로 가져오게 됩니다.

// [1]: 이 부분은 앞서 언급한 키 배열에서 두 번째 키(인덱스 1)를 선택합니다.여기서는 title 이후의 두 번째 속성, 즉 해당 제품의 크기 배열(hat, shirts, pants)이 됩니다.

//     selectedProduct[Object.keys(selectedProduct)[1]]: 이 부분은 실제로 두 번째 속성에 해당하는 배열을 반환합니다.

// .forEach(data => { secondSelect.append(<option>${data}</option>); });: 이 부분은 해당 배열을 순회하면서 각 원소(data)에 대해 < option > 을 생성하고, 이를 secondSelect에 추가합니다.결과적으로, 두 번째 드롭다운에는 선택된 제품의 크기에 따른 옵션이 추가되게 됩니다.

// 만약 selectedProduct 객체의 속성 구조가 바뀐다면 이 코드도 조금 수정해야 할 수 있습니다.현재 코드는 두 번째 속성을 기반으로 동적으로 옵션을 생성하고 추가하는 방식으로 작동합니다.




// var obj = { name: 'kim', age: 20 }

// for (var key in obj) {
//     console.log(obj[key]);
// }

// hat.forEach((data) => {
//     $('.form-select').eq(1).append(`<option>${data}</option>`)
// })
// var a = document.createElement('p');
// a.innerText = '안녕';
// document.querySelector('#test').appendChild(a);
// var a = '<option>28</option>';
// $('#test').append(a);
// var a = '<p>안녕</p>';
// document.querySelector('#test').innerHTML = 탬플릿;
// var a = '<p>안녕</p>';
// $('#test').append(a);

// 바지를 선택하면 옵션 선택창이 나오고 95 100 이 아니라 28 30 이 나오도록 작성해보자




var 출석부 = ['흥민', '영희', '철수', '재석'];
var found = false;
function 이름찾기(name) {
    for (var i = 0; i < 출석부.length; i++) {
        if (name == 출석부[i]) {
            found = true;
            break;
        }
    }
    if(found) {
        console.log('있어요');
    }
    else {
        console.log('없어요');
    }
}


var obj = { name: 'kim', age: 20 }

for (var key in obj) {
    console.log('안녕')
}



