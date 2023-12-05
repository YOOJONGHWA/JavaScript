var products = [
    { id: 0, price: 70000, title: 'Blossom Dress', picture: 'https://via.placeholder.com/600' },
    { id: 1, price: 50000, title: 'Springfield Shirt', picture: 'https://via.placeholder.com/600' },
    { id: 2, price: 60000, title: 'Black Monastery', picture: 'https://via.placeholder.com/600' }
];



products.forEach(data => {
    var 탬플릿 = `<div class="col-sm-4">
        <img src="${data.picture}" class="w-100">
        <h5>${data.title}</h5>
        <p>${data.price}</p>
        <button class="buy">구매</button>
     </div>`;
    $('#first').append(탬플릿);
});

var clickCount = 0;

$('#more').on('click', function () {
    clickCount++;

    if (clickCount == 1) {
        $.get('https://codingapple1.github.io/js/more1.json').done(data => {
            data.forEach(a => {
                var 탬플릿 = `<div class="col-sm-4">
                    <img src="https://via.placeholder.com/600" class="w-100">
                    <h5>${a.title}</h5>
                    <p>${a.price}</p>
                 </div>`;
                $('.row').append(탬플릿);
            });
        });
    } else if (clickCount == 2) {
        $.get('https://codingapple1.github.io/js/more2.json').done(data => {
            data.forEach(a => {
                var 탬플릿 = `<div class="col-sm-4">
                    <img src="https://via.placeholder.com/600" class="w-100">
                    <h5>${a.title}</h5>
                    <p>${a.price}</p>
                </div>`;
                $('.row').append(탬플릿);
            });
        });
    } else {
        // 초기화 버튼 클릭 시 내용 초기화
        $('#more').html('초기화');
        $('.row').html('');
        // clickCount 초기화
        clickCount = 0;
    }
});

var 어레이 = [7, 3, 5, 2, 40];
var 어레이2 = ['a', 'c', 'b'];
어레이.sort(function (a, b) {
    return a - b
});
어레이2.sort(function (a, b) {
    return a > b
})
console.log(어레이2);

$('#array').click(function () {
    products.sort(function (a, b) {

        return a.price - b.price;
    });
    $('.row').html('');
    products.forEach(data => {
        var 탬플릿 =
            `<div class="col-sm-4">
            <img src="https://via.placeholder.com/600" class="w-100">
            <h5>${data.title}</h5>
            <p>${data.price}</p>
        </div>`;
        $('.row').append(탬플릿);
    })
})

var 어레이 = [7, 3, 5, 2, 40];

var 새어레이 = 어레이.filter(function (a) {
    return a < 4
});
console.log(" asd" + 새어레이);

var 새어레이 = 어레이.map(function (a) {
    return a * 100
})
console.log("asdasd" + 새어레이);



// 숙제 1. "상품명 다나가순 정렬" 버튼 과 기능

$('#name-array').click(function () {

    products.sort(function (a, b) {
        if (a.title < b.title) {
            return 1;
        }
        if (a.title > b.title) {
            return -1;
        }
        else { return 0; }
    })
    console.log(products);
    $('.row').html('');
    products.forEach(data => {
        var 탬플릿 =
            `<div class="col-sm-4">
            <img src="https://via.placeholder.com/600" class="w-100">
            <h5>${data.title}</h5>
            <p>${data.price}</p>
        </div>`;
        $('.row').append(탬플릿);
    })

})

// 숙제 2. 6만원 이하 상품만 보기 버튼 과 기능
$('#price-low').click(function () {
    var newProducts = products.filter(function (a) {

        return a.price <= 60000

    })
    $('.row').html('');
    newProducts.forEach(data => {
        var 탬플릿 =
            `<div class="col-sm-4">
            <img src="https://via.placeholder.com/600" class="w-100">
            <h5>${data.title}</h5>
            <p>${data.price}</p>
        </div>`;
        $('.row').append(탬플릿);
    })

})
// var 새어레이 = 어레이.filter(function (a) {
//     return a < 4
// });
$('#name-arr').click(function () {
    products.sort(function (a, b) {
        if (a.title > b.title) {
            return 1;
        }
        if (a.title < b.title) {
            return -1;
        }
        else { return 0; }
    })
    console.log(products);
    $('.row').html('');
    products.forEach(data => {
        var 탬플릿 =
            `<div class="col-sm-4">
            <img src="https://via.placeholder.com/600" class="w-100">
            <h5>${data.title}</h5>
            <p>${data.price}</p>
        </div>`;
        $('.row').append(탬플릿);
    })
})
$('#name-arr2').click(function () {
    var newProducts = products.filter(function (a) {

        return a.price <= $('#search').val()

    })
    $('.row').html('');
    newProducts.forEach(data => {
        var 탬플릿 =
            `<div class="col-sm-4">
            <img src="https://via.placeholder.com/600" class="w-100">
            <h5>${data.title}</h5>
            <p>${data.price}</p>
        </div>`;
        $('.row').append(탬플릿);
    })

})

var currentState = JSON.stringify(products);
$('#f5').click(function () {

    products = JSON.parse(currentState);
    products.push({ name: "새로운 상품", price: 10 });

    // 현재 상태 갱신
    currentState = JSON.stringify(products);

})
localStorage.setItem('이름', 'kim');
localStorage.getItem('이름');
// localStorage.removeItem('이름');

var arr = [1, 2, 3]
var newArr = JSON.stringify(arr);
localStorage.setItem('num', newArr);
var 꺼낸거 = localStorage.getItem('num');
꺼낸거 = JSON.parse(꺼낸거);
// console.log(JSON.parse(꺼낸거)[0]);


// var products = [
//     { id: 0, price: 70000, title: 'Blossom Dress', picture: 'https://via.placeholder.com/600' },
//     { id: 1, price: 50000, title: 'Springfield Shirt', picture: 'https://via.placeholder.com/600' },
//     { id: 2, price: 60000, title: 'Black Monastery', picture: 'https://via.placeholder.com/600' }
// ];


$('.buy').click(function (e) {
    var title = $(e.target).siblings('h5').text();
    var cartItems = [];

    if (localStorage.getItem('cart') !== null) {
        cartItems = JSON.parse(localStorage.getItem('cart'));
        cartItems.push(title);
        localStorage.setItem('cart', JSON.stringify(cartItems));
    } else {
        localStorage.setItem('cart', JSON.stringify([title]));
    }

 
});

//   localStorage에 있던 상품들 꺼내주세요
//   꺼낸 상품 갯수만큼 <p>상품명</p>을 위에 생성해주세요