 


$('.duration').click(()=>{$('.dropdown-content').show()})
$('.week').click(()=>{$('.duration').html('week');$('.dropdown-content').hide() })
$('.month').click(()=>{$('.duration').html('month');$('.dropdown-content').hide() })
$('.year').click(()=>{$('.duration').html('year');$('.dropdown-content').hide() })

//revenue calculator

$(document).ready(function(){
  $('.cal-input').keypress(function(e){
    if(e.keyCode==13)
    $('.ravenue-btn').click();
  });
});


function calculate(){
  var input = $('.cal-input').val();
  
  var result = input * 1.2 
  var comma  = result.toLocaleString()
  console.log(comma);
 $('.result').html(comma);
 $('.gradian').css('left', '0%');
 $('.result-h1').css('color', 'rgba(24, 17, 58, 0.9)');
}
 
 
 
 
 
 
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