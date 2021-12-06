$(document).ready(function() {
 
  $(window).scroll(function() {
      if ($(document).scrollTop() > 150) {
          $('#navbar').addClass('scrooled-nav');
      }
      else {
        $('#navbar').removeClass('scrooled-nav');
      }
  });
});
gsap.config({nullTargetWarn: false});

let tl = gsap.timeline({
    scrollTrigger :{
        trigger : "#banner-section",
        scrub: 0.2,
 
        start : "bottom bottom",
        end: "+=" + (window.innerHeight * 10),
        onLeave: () =>{
          
      
       
     
        },
        onEnterBack: () =>{
      
        }
    }
})


 
tl.to('.banner-image',0.5,{x :'202%', y:"200%",display:"none"}, "first");

$('.duration').click(()=>{$('.dropdown-content').show()})
$('.week').click(()=>{$('.duration').html('week');$('.dropdown-content').hide() })
$('.month').click(()=>{$('.duration').html('month');$('.dropdown-content').hide() })
$('.year').click(()=>{$('.duration').html('year');$('.dropdown-content').hide() })






let tl2 = gsap.timeline({
  scrollTrigger :{
      trigger : "#new-horizons",
      scrub: 0.2,
 
      start : "top center",
      end: "+=" + (window.innerHeight * 10),
      onLeave: () =>{
        
    
     
   
      },
      onEnterBack: () =>{
    
      }
  }
})

 
tl2.to('.new-horizen-image-1',1,{ y:"-500px"}, "first");
tl2.to('.new-horizen-image-2',1,{ y:"-500px"}, "first");
tl2.to('.new-horizen-image-3',1,{ y:"-500px"}, "first");



var windowWidth = $(window).width();

$('#new-horizons').mousemove(function(event){
  var moveX = (($(window).width() / 50) - event.pageX)/100;
  var moveY = (($(window).height() / 50) - event.pageY)/200;
  $('.new-horizen-image-1').css('margin-left', moveX + 'px');
  $('.new-horizen-image-1').css('margin-top', -moveY + 'px');
  $('.new-horizen-image-2').css('margin-left', -moveX + 'px');
  $('.new-horizen-image-2').css('margin-right', -moveX + 'px');
  $('.new-horizen-image-3').css('margin-top', -moveY + 'px');
}); 

$('.jelly-drops-container').mousemove(function(event){
  var mX = (($(window).width() / 5) - event.pageX) * 0.01;
  var mY = (($(window).height()/10) - event.pageY) * 0.00002 ;
  $('.jelly-drops-container ').css('right', mX + 'px');
}); 
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
 
 

  $(document).ready(function () {
    //save boolean
    var pause = false;
    
    // detect scrolling 
    var tempScrollTop = $(window).scrollTop();
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


  //Getting users location 

  
// function ipLookUp () {
//   $.ajax('http://ip-api.com/json/')
//   .then(
//       function success(response) {
//           console.log('User\'s Location Data is ', response);
//           console.log('User\'s Country', response.country);
//       },

//       function fail(data, status) {
//           console.log('Request failed.  Returned status of', status);
//       }
//   );
// }
// ipLookUp()


