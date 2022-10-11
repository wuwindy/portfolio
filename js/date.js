$(() => {

    // footer
    var dt = new Date();
    var thisYear = dt.getFullYear();

    $("[data-id='footer']").append("© WU MENG CHUN | WINDY WU | " + thisYear);


       //Navigation

    $('#menu ul li a[href^="#"]').on('click', function(event) {
        $('#menu ul li a[href^="#"]').removeClass("active");

        var target = $($(this).attr('href'));

         $(this).addClass("active");

        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 500);
        }

    });


    //Toggle Menu
    $('#menu-toggle').on('click', () => {
        $('#menu-toggle').toggleClass('closeMenu');
        $('ul').toggleClass('showMenu');

        $('li').on('click', () => {
            $('ul').removeClass('showMenu');
            $('#menu-toggle').removeClass('closeMenu');
        });
    });



});