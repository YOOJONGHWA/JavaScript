
$.ajax({
    url: 'store.json',
    dataType: 'json',
    success: function (data) {
        data.products.forEach(product => {
            var template = `
                <div class="card sm-3" style="width: 18rem;" id="drag" draggable="true">
                    <img src="${product.photo}" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${product.title}</h5>
                        <p class="card-text">${product.brand}</p>
                        <p class="card-text">${product.price}</p>
                        <a href="#" class="btn btn-primary">담기</a>
                    </div>
                </div>`;
            $('.row').append(template);

            var text = '';
            $(".search").on("keyup", function () {

                text = $('#text').val();
                if (product.title.includes(text) && text.length >= 2) {
                    $('.row').html('');
                    var template = `
                    <div class="card sm-3" style="width: 18rem;" id="drag" draggable="true">
                        <img src="${product.photo}" class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">
                            <span style="background : yellow">${product.title}
                            </span></h5>
                            <p class="card-text">${product.brand}</p>
                            <p class="card-text">${product.price}</p>
                            <a href="#" class="btn btn-primary">담기</a>
                        </div>
                    </div>`;
                    $('.row').append(template);
                    console.log();
                }
                if (product.brand.includes(text) && text.length >= 2) {
                    $('.row').html('');
                    var template = `
                    <div class="card sm-3" style="width: 18rem;" id="drag" draggable="true">
                        <img src="${product.photo}" class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title"></h5>
                            <p class="card-text">
                            <span style="background : yellow">${product.brand}</span></p>
                            <p class="card-text">${product.price}</p>
                            <a href="#" class="btn btn-primary">담기</a>
                        </div>
                    </div>`;
                    $('.row').append(template);
                    console.log();
                }
            });

        });
    },
    error: function () {
        console.log('실패함');
    }
});
 $(function(){
        $('#drag').on({
            //드래그 시작시 요소 id 저장
            'dragstart':function(e){
                e.originalEvent.dataTransfer.setData('text',e.target.id);
                $(this).css('border','solid 2px Red');
            },
            //드래그 종료
            'dragend':function(e){
                $(this).css('border','none');
            }
        });
  
        $('#drop').on({
            'dragenter':function(e){
                $(this).css('background-color','#fc0');
            },
            'dragleave':function(e){
                $(this).css('background-color','#ffc');
            },
            //브라우저 표중 동작 취소
            'dragover':function(e){
                e.preventDefault();
            },
            'drop':function(e){
                $(e.target).append($('#'+e.originalEvent.dataTransfer.getData('text')));
                e.preventDefault();
            }
        });
    });


