 


$('.duration').click(()=>{$('.dropdown-content').show()})
$('.week').click(()=>{$('.duration').html('week');$('.dropdown-content').hide() })
$('.month').click(()=>{$('.duration').html('month');$('.dropdown-content').hide() })
$('.year').click(()=>{$('.duration').html('year');$('.dropdown-content').hide() })


const swiper = new Swiper('.swiper', {
    // Optional parameters
    autoplay: {
        delay: 1500},
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
 
  });