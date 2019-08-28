$(document).ready(function(){
  $('.slider').slick({
    	arrows : true,
    	dots : true,
    	// autoplay : true,
    	autoplaySpeed: 2000,
    	// dotsClass : 'myDots',
      nextArrow : '<button type="button" class="my-arrow-next"></button>',
      prevArrow : '<button type="button" class="my-arrow-prev"></button>'
  })
  $('.slider2').slick({
      arrows : true,
      dots : true,
      // autoplay : true,
      autoplaySpeed: 2000,
      // dotsClass : 'myDots2',
      nextArrow : '<button type="button" class="my-arrow-next2"></button>',
      prevArrow : '<button type="button" class="my-arrow-prev2"></button>'

  })
  $('.slider2-768').slick({
      arrows : true,
      dots : true,
      // autoplay : true,
      autoplaySpeed: 2000,
      // dotsClass : 'myDots2',
      nextArrow : '<button type="button" class="my-arrow-next2-768"></button>',
      prevArrow : '<button type="button" class="my-arrow-prev2-768"></button>'

  })
})


$('.drop-down-btn').click(function(){
  $('.drop-down-768').toggleClass('show')
})
