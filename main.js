 


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

$('.usd').click(()=>{$('.dropdown-currency').show()})
$('.USD').click(()=>{$('.usd').html('USD');$('.dropdown-currency').hide() })
$('.RM').click(()=>{$('.usd').html('RM');$('.dropdown-currency').hide() })
$('.SUD').click(()=>{$('.usd').html('SUD');$('.dropdown-currency').hide() })
 
 
 
 
 
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

  $(document).ready(function () {
    //save boolean
    var pause = false;
    //save items that with number
    var item=  $('.select-item');
    //save blocks
    var block=  $('.bg-block');

    //text activation 

    var text = $('.steps-text')
    //variable for counter
    var k =0;
          
    text.mouseover(()=>{pause = true})
    text.mouseout(()=>{pause = false})
    
     //interval function works only when pause is false
      setInterval(function () {
          if (!pause) {
              var $this = item.eq(k);
            
            if (item.hasClass('active'))  {
              item.removeClass('active');
            };
             block.removeClass('active').eq(k).addClass('active');
              $this.addClass('active');
             text.removeClass('steps-active').eq(k).addClass('steps-active');
              $this.addClass('steps-active');
            //increase k every 1.5 sec
              k++;
            //if k more then number of blocks on page
              if (k >= block.length ) {
                //rewrite variable to start over
                  k = 0;
              }
          }
        //every 1.5 sec
      }, 2000);
  
  
    item.hover(function () {
      //remove active class from all except this
          $(this).siblings().removeClass("active");
         $(this).addClass('active');
        //remove active class from all
        block.removeClass('active');
        text.removeClass('steps-active')
      //add active class to block item which is accounted as index cliked item
        block.eq($(this).index()).addClass('active');
        text.eq($(this).index()).addClass('steps-active');
      //on hover stop interval function
          pause = true;
      }, function () {
      
      //when hover event ends, start interval function
          pause = false;
      });

  
  });