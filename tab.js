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
$('.form-select').on('input',function() {

    // var 셔츠 = document.querySelectorAll('.form-select')[0].value;
    // var 셔츠 = $('.form-select').eq(0).val()
    var 셔츠 = this.value;
    console.log(셔츠);

    if(셔츠 == '셔츠') {
        $('.form-select').eq(1).removeClass('down'); 
    }
    else {
        $('.form-select').eq(1).addClass('down');
    }
})