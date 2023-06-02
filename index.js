
$(document).ready(function () {

    // 프로필 프레임 설정
    var count = 0;
    const image = document.getElementById('profile_photo');
    var frames = ['./images/lion_1.png', './images/lion_2.png', './images/lion_3.png', './images/lion_4.png'];
    setInterval(function () {
        image.src = frames[count % frames.length];
        count++;
    }, 500);

    // 네비게이션바에서 단일 웹 페이지 구현
    $("#nav_item_main").click(function () {
        $('.main').removeClass('main_view');
        $('.intro').removeClass('intro_view');
        $('.tmi').removeClass('tmi_view');
    });
    $("#nav_item_intro").click(function () {
        $('.main').addClass('main_view');
        $('.intro').addClass('intro_view');
        $('.tmi').removeClass('tmi_view');
    });
    $("#nav_item_tmi").click(function () {
        $('.main').addClass('main_view');
        $('.intro').removeClass('intro_view');
        $('.tmi').addClass('tmi_view');
    });

    //intro 사진 변경
    var width = $('[data-role="slider"]').attr('data-width');
    var height = $('[data-role="slider"]').attr('data-height');
    var count_intro = $('[data-role="slider"] div.item').length / 2;
    $('[data-role="slider"]').css({
        position: 'relative', overflow: 'hidden', width: width, height: height
    })
        .find('.container').css({
            position: 'absolute', width: count_intro * width, overflow: 'hidden'
        })
        .find('.item').css({
            width: width, height: height, float: 'left'
        });
    var currentPage = 0;
    var changePage = function () {
        $('[data-role="slider"] > .container').animate({ left: -currentPage * width }, 500);
    };

    $('#left-button').click(function () {
        if (currentPage > 0) { currentPage--; changePage(); }
    });
    $('#right-button').click(function () {
        if (currentPage < count_intro - 1) { currentPage++; changePage(); }
    });

});
