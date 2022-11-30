$(document).ready(function () {
    /* 프로그램 끝날 때까지 언제 어디서나 사용할 수 있는 변수 */
    var hCont = $('.history_slide');
    var hBtn = $('.history_btn li');
    var hIndex;

    hCont.slick({});

    hBtn.click(function (e) {
        /* function문 안에서만 쓸 수 있는 변수(한 번 실행하면 사라짐) */
        e.preventDefault();
        var target = $(this); //$(this) 는 li 중 내가 선택한 그것
        var index = target.index(); //li의 색인번호 호출
        console.log(index);

        if (index == 0) {
            hIndex = 0;
        } else if (index == 1) {
            hIndex = 4;
        } else if (index == 2) {
            hIndex = 8;
        } else if (index == 3) {
            hIndex = 12;
        } else if (index == 4) {
            hIndex = 16;
        }

        /* slick.js ==> Method */
        hCont.slick('slickGoTo', hIndex);

        /* history_btn을 클릭했을 때 화면의 슬라이드에 맞게 이동시킴 */
        hBtn.removeClass('active');
        target.addClass('active');
    });

    /* 밑의 버튼으로 슬라이드를 이동시켰을 때 위의 history_btn도 이에 맞게 이동시킴 */
    hCont.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        console.log(nextSlide);

        if (nextSlide >= 0 && nextSlide <= 3) {
            hBtn.removeClass('active');
            hBtn.eq(0).addClass('active');
        } else if (nextSlide >= 4 && nextSlide <= 7) {
            hBtn.removeClass('active');
            hBtn.eq(1).addClass('active');
        } else if (nextSlide >= 8 && nextSlide <= 11) {
            hBtn.removeClass('active');
            hBtn.eq(2).addClass('active');
        } else if (nextSlide >= 12 && nextSlide <= 15) {
            hBtn.removeClass('active');
            hBtn.eq(3).addClass('active');
        } else if (nextSlide >= 16 && nextSlide <= 19) {
            hBtn.removeClass('active');
            hBtn.eq(4).addClass('active');
        }
        $('.history_page em').text(nextSlide + 1);
    }); //beforeChange


    //history_poster 탭메뉴
    var posterBtn = $('.poster_btn li'),
        posterCont = $('.poster_cont .poster');

    posterCont.hide().eq(0).show();

    posterBtn.click(function (e) {
        e.preventDefault();       /* 눌렀을 때 위로 튕겨올라가는 것을 막아줌 */
        var pTarget = $(this);    /* 내가 클릭하는 그것 */
        var pIndex = pTarget.index();
        console.log(pIndex);

        posterCont.hide();
        posterCont.hide().eq(pIndex).fadeIn();

        posterCont.find('figure').removeClass('move');
        posterCont.eq(pIndex).find('figure').addClass('move');


    })

    /* cider_bottle */

    $('.cider_bottle').slick({
        centerMode: true,
        centerPadding: '380px',
        dots: true
    });




}); //ready