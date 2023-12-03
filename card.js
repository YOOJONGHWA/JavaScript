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
        $('.row').eq(1).empty();
        // clickCount 초기화
        clickCount = 0;
    }
});

var 어레이 = [7,3,5,2,40];
어레이.sort(function(a,b) {
    return a - b
});
console.log(어레이);