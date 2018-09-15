$(document).ready(function() {

    function resize() {
        var navbar = $('.navbar');
        var header = $('.header')
        var widthWindow = $(window).width();
		if (widthWindow < 768) {
            navbar.css({'display':'none'});
            header.addClass('mobile');
		} else {
            navbar.css({'display':'flex'});
            header.removeClass('mobile');
		}
	}
	resize();

	$(window).resize(function() {
        resize();
    });

    $('.hamburger').click(function(){
    	element = $('.navbar');
    	display = element.css('display');
    	if(display == 'none') {
            $('.navbar').slideDown(400);
        }
    	else {
            $('.navbar').slideUp(400);
        }
    });

    $('.navbar a').click(function(){
        var widthWindow = $(window).width();
		if (widthWindow < 768)
    	    $('.navbar').slideUp(400);
    });

    $('.levelLine .someLevel').mouseup(function () {
        var level = $(this).data('level');
        var lineClass = 'line active' + level;
        var pointClass = 'point active' + level;


            $('.jsLevelInner .line').attr('class', lineClass);
            $('.levelLine .point').attr('class', pointClass);
    })

    $('.experienceInner .part').mouseup(function () {
        $(this).find('.customBox').toggleClass('active');
        console.log(this);
    })

    $('.select').click(function () {
        var list = $('.select .list');
        display = list.css('display');
    	if(display == 'none') {
            $('.select .current .arrow').css('transform', 'rotate(180deg)');
            list.slideDown(400);
        }
    	if(display == 'block') {
            list.slideUp(400);
            $('.select .current .arrow').css('transform', 'rotate(0deg)');
        }

        $(list).text(newContent);
    })

    $('.select .list li').click(function () {
        var current = $('.select .current');
        var newContent = $(this).text();

        current.text(newContent);
    })

});