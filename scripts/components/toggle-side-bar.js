$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        toggleSidebar();
    });
});

$(document).resize(function () {
    $('#sidebarCollapse').on('click', function () {
        toggleSidebar();
    });
});

function toggleSidebar(){
    if(screen.width >= 992){
        $('#sidebar').toggleClass('active');

        if($('#sidebar').hasClass('active')){
            $('.sidebar-wrapper').removeClass('col-lg-3');
            $('.sidebar-wrapper').removeClass('col-xl-3');
            $('.sidebar-wrapper').removeClass('col-xxl-2');
            $('.sidebar-wrapper').addClass('col-lg-1');
            $('.sidebar-wrapper').addClass('col-xl-1');
            $('.sidebar-wrapper').addClass('col-xxl-1');
    
            $('.content-wrapper').removeClass('col-lg-9');
            $('.content-wrapper').removeClass('col-xl-9');
            $('.content-wrapper').removeClass('col-xxl-10');
            $('.content-wrapper').addClass('col-lg-11');
            $('.content-wrapper').addClass('col-xl-11');
            $('.content-wrapper').addClass('col-xxl-11');
        }
        else{
            $('.sidebar-wrapper').removeClass('col-lg-1');
            $('.sidebar-wrapper').removeClass('col-xl-1');
            $('.sidebar-wrapper').removeClass('col-xxl-1');
            $('.sidebar-wrapper').addClass('col-lg-3');
            $('.sidebar-wrapper').addClass('col-xl-3');
            $('.sidebar-wrapper').addClass('col-xxl-2');
    
            $('.content-wrapper').removeClass('col-lg-11');
            $('.content-wrapper').removeClass('col-xl-11');
            $('.content-wrapper').removeClass('col-xxl-11');
            $('.content-wrapper').addClass('col-lg-10');
            $('.content-wrapper').addClass('col-xl-10');
            $('.content-wrapper').addClass('col-xxl-10');
        }
    }

    else{
        $('.sidebar-wrapper').toggleClass('active');
        $('.sidebar-wrapper').removeClass('col-2');
        $('.sidebar-wrapper').removeClass('col-1');

        if($('.sidebar-wrapper').hasClass('active')){
            $("#main-content").css('background-color', 'rgba(0, 0, 0, 0.5)');
            $(".dashboard-wrapper").css('z-index', '-1');
            $(".page-details").css('z-index', '-1');
        }
        else{
            $("#main-content").css('background-color', 'unset');
            $(".page-details").css('z-index', '10');
            $(".dashboard-wrapper").css('z-index', '10');
        }
    }
}