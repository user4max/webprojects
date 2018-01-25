window.onload=function(){
	$('.slidermax').slick(
	{
		infinite: true,
		autoplay:true,
		autoplaySpeed:1500,
		arrows:true,
		speed: 500,
		slidesToShow: 7,
		slidesToScroll: 2,
		responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
			}
		},
	    {
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1}
		}
					]
});
};
