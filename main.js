//NAV 

$(document).ready(function() {
 
  $(window).scroll(function() {
      if ($(document).scrollTop() > 150) {
          $('#navbar').addClass('scrooled-nav');
          $('.circel-nav').css('bottom','49px')
      }
      else {
        $('#navbar').removeClass('scrooled-nav');
        $('.circel-nav').css('bottom','25px')
      }
  });
});
 
// $(window).scroll(function(){
 
//   var scrollPosition = $(document).scrollTop()
//   if ($(document).height() <= 8710 && $(document).width()<= 1866){
//     console.log("1440")
//     if (scrollPosition >= 4400 && scrollPosition <= 4645){
//       $('.circel-nav').css('margin-left','550px');
//       $('.one').removeClass('active');
//       $('.three').removeClass('active');
//       $('.four').removeClass('active');
//       $('.five').removeClass('active');
//       $('.two').addClass('active');
//     } else if (scrollPosition <= 4400 ){
//       $('.circel-nav').css('margin-left','400px')
//       $('.one').addClass('active');
//       $('.two').removeClass('active');
//       $('.three').removeClass('active');
//       $('.four').removeClass('active');
//       $('.five').removeClass('active');
//     } else if (scrollPosition >= 4600 && scrollPosition <= 5840 ){
//       $('.circel-nav').css('margin-left','701px')
//       $('.one').removeClass('active');
//       $('.two').removeClass('active');
//       $('.three').addClass('active');
//       $('.four').removeClass('active');
//       $('.five').removeClass('active');
//     } else if (scrollPosition >= 5800 ){
//       $('.circel-nav').css('margin-left','828px')
//       $('.one').removeClass('active');
//       $('.two').removeClass('active');
//       $('.three').removeClass('active');
//       $('.four').addClass('active');
//       $('.five').removeClass('active');
//     }
//   } 
  
//   if ($(document).height() <= 8363){
//     console.log("1740")
//     if (scrollPosition >= 4300 && scrollPosition <= 4845){
//       $('.circel-nav').css('margin-left','550px');
//       $('.one').removeClass('active');
//       $('.three').removeClass('active');
//       $('.four').removeClass('active');
//       $('.five').removeClass('active');
//       $('.two').addClass('active');
//     } else if (scrollPosition <= 4400 ){
//       $('.circel-nav').css('margin-left','400px')
//       $('.one').addClass('active');
//       $('.two').removeClass('active');
//       $('.three').removeClass('active');
//       $('.four').removeClass('active');
//       $('.five').removeClass('active');
//     } else if (scrollPosition >= 4800 && scrollPosition <= 5740 ){
//       $('.circel-nav').css('margin-left','701px')
//       $('.one').removeClass('active');
//       $('.two').removeClass('active');
//       $('.three').addClass('active');
//       $('.four').removeClass('active');
//       $('.five').removeClass('active');
//     } else if (scrollPosition >= 5700 ){
//       $('.circel-nav').css('margin-left','828px')
//       $('.one').removeClass('active');
//       $('.two').removeClass('active');
//       $('.three').removeClass('active');
//       $('.four').addClass('active');
//       $('.five').removeClass('active');
//     }
//   }else {
//     console.log('yes')
//       if (scrollPosition >= 4400 && scrollPosition <= 5245){
//     $('.circel-nav').css('margin-left','600px');
//     $('.one').removeClass('active');
//     $('.three').removeClass('active');
//     $('.four').removeClass('active');
//     $('.five').removeClass('active');
//     $('.two').addClass('active');
//   } else if (scrollPosition <= 4400 ){
//     $('.circel-nav').css('margin-left','400px')
//     $('.one').addClass('active');
//     $('.two').removeClass('active');
//     $('.three').removeClass('active');
//     $('.four').removeClass('active');
//     $('.five').removeClass('active');
//   } else if (scrollPosition >= 5252 && scrollPosition <= 6140 ){
//     $('.circel-nav').css('margin-left','801px')
//     $('.one').removeClass('active');
//     $('.two').removeClass('active');
//     $('.three').addClass('active');
//     $('.four').removeClass('active');
//     $('.five').removeClass('active');
//   } else if (scrollPosition >= 6140 ){
//     $('.circel-nav').css('margin-left','948px')
//     $('.one').removeClass('active');
//     $('.two').removeClass('active');
//     $('.three').removeClass('active');
//     $('.four').addClass('active');
//     $('.five').removeClass('active');
//   }
//   }


// });


let nav0 = gsap.timeline({
  scrollTrigger :{
      trigger : "#banner-section",
      scrub: 0.2,
 
      start : "top top",
      end: 'bottom bottom',
 
  }
})
 
nav0.to('.circel-nav', 0.1 , {x: '0px', })
nav0.to('#nav1', 0.1 , {fontFamily: 'Mont-bold', })
nav0.to('#nav2', 0.1 , {fontFamily: 'Mont regular', })
nav0.to('#nav3', 0.1 , {fontFamily: 'Mont regular', })
nav0.to('#nav4', 0.1 , {fontFamily: 'Mont regular', })
 

let nav1 = gsap.timeline({
  scrollTrigger :{
      trigger : ".increase-ravenue-p",
      scrub: 0.2,
      
      start : "top top",
      end: 'bottom bottom',
 
  }
})
if (screenSize >= 1900 && window.devicePixelRatio >= 2){
  nav1.to('.circel-nav', 0.1 , {marginLeft:'12%'})
}else if(screenSize >= 1700) {
  nav1.to('.circel-nav', 0.1 , {marginLeft:'9%'})
}else {
  nav1.to('.circel-nav', 0.1 , {marginLeft: '17%', })
}
 

nav1.to('#nav2', 0.1 , {fontFamily: 'Mont-bold', })
nav1.to('#nav1', 0.1 , {fontFamily: 'Mont regular', })
nav1.to('#nav3', 0.1 , {fontFamily: 'Mont regular', })
nav1.to('#nav4', 0.1 , {fontFamily: 'Mont regular', })




let nav2 = gsap.timeline({
  scrollTrigger :{
      trigger : ".steps-row",
      scrub: 0.2,
 
      start : "top top",
      end: 'bottom bottom',
      onLeave: ()=> $('#nav').css('font-family','Mont regular')
    
  }
})
var screenSize = $(window).width()
console.log(screenSize)
console.log( window.devicePixelRatio)

if (screenSize >= 1900 && window.devicePixelRatio >= 2){
  nav2.to('.circel-nav', 0.1 , {marginLeft:'23%'})
}else if(screenSize >= 1400 && window.devicePixelRatio >= 2) {
  nav2.to('.circel-nav', 0.1 , {marginLeft:'28%'})
}else if(screenSize >= 1700) {
  nav2.to('.circel-nav', 0.1 , {marginLeft:'23%'})
}else{
  nav2.to('.circel-nav', 0.1 , {marginLeft: screenSize >= 1500 ? '29%' : '27%',})
}

nav2.to('#nav3', 0.1 , {fontFamily: 'Mont-bold', })
nav2.to('#nav1', 0.1 , {fontFamily: 'Mont regular', })
nav2.to('#nav2', 0.1 , {fontFamily: 'Mont regular', })
nav2.to('#nav4', 0.1 , {fontFamily: 'Mont regular', })


let nav3 = gsap.timeline({
  scrollTrigger :{
      trigger : "#About",
      scrub: 0.1,
    
      start : "top top",
      end: 'top bottom',

    
  }
})
if (screenSize >= 1900 && window.devicePixelRatio >= 2){
  nav3.to('.circel-nav', 0.1 , {marginLeft:'32%'})
}else if (window.devicePixelRatio >= 2){
  nav3.to('.circel-nav' , {marginLeft:screenSize <= 1499 ? '36.5%' : '37%'}, "s")

}else if(screenSize >= 1700) {
  nav3.to('.circel-nav', 0.1 , {marginLeft:'31%'})
}else{
  nav3.to('.circel-nav' , {marginLeft:screenSize <= 1499 ? '35%' : '38%'}, "s")
}

 
nav3.to('#nav4', 0.1 , {fontFamily: 'Mont-bold', }, "s")
nav3.to('#nav3', 0.1 , {fontFamily: 'Mont regular', }, "s")
nav3.to('#nav1', 0.1 , {fontFamily: 'Mont regular', }, "s")
nav3.to('#nav2', 0.1 , {fontFamily: 'Mont regular', }, "s")

 

 
function ravcontainer() {
  if ( window.devicePixelRatio >= 2){
    $('html,body').animate({
      scrollTop: $(".increase-ravenue-p").offset().top + 100});
  }else {
    $('html,body').animate({
    
      scrollTop: $(".increase-ravenue-p").offset().top});
  }

      
}
function about() {
  $('html,body').animate({
    scrollTop: $("#About").offset().top + 200});
}
function steps() {
  if ( window.devicePixelRatio >= 2){
    $('html,body').animate({
      scrollTop: $(".steps-row").offset().top + 100});
  }else {
    $('html,body').animate({
      scrollTop: $(".steps-row").offset().top +2});
  }

      
}


//NAV ENDS 

//BANNER ANIMATION

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


//BANNER ANIMATION ENDS



//IMAGES ANIMATION
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
tl2.to('.new-horizen-image-2',1,{ y:"-800px"}, "first");
tl2.to('.new-horizen-image-3',1,{ y:"-500px"}, "first");

//IMAGES ANIMATION ENDS

//PILLS ANIMATION
let tl3 = gsap.timeline({
  scrollTrigger :{
      trigger : "#shave-hours",
      scrub: 0.2,
     
 
      start : "top center",
      end: "bottom bottom",
          onLeave: () =>{
        
    
     
   
      },
      onEnterBack: () =>{
    
      }
  }
})

tl3.from('.pill-1',1,{x:"800px"},'first')
tl3.from('.pill-2',1,{x:"-800px"},'second')
tl3.from('.pill-3',1,{x:"800px"},'third')
tl3.from('.pill-4',1,{x:"-800px"},'forth')





$('.form-popUp').hide();
$('#closePopUp').hide();
function openPopUp(){
  $('.form-popUp').fadeIn();
$('#closePopUp').fadeIn();
}
$('#closePopUp').click(function(){
  $('.form-popUp').hide();
$('#closePopUp').hide();
});
//PILLS ANIMATION ENDS

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

 
//revenue calculator

 

$(document).ready(function(){
  $('.cal-input').keypress(function(e){
    if(e.keyCode==13)
    $('.ravenue-btn').click();
  });
});

$('.cal-input').keypress((e)=>{
  $('.gradian').css('left', '-120%');
  $('.result-h1').css('color', '#ED1D6D');
  $('.start-growing-btn').css('box-shadow', '2px 1000px 1px #FCF8F3 inset');
  $('.start-growing-btn').css('border', 'solid 3px transparent');
  $('.start-growing-btn').css('color', '#006EB9');
  $('.result-p').css('color', '#000');
  $('.your-current-text').html('Your current revenue')
  
})

function updateTextView(_obj){
  var num = getNumber(_obj.val().toLocaleString());
 
  if(num==0){
    _obj.val('');
  }else{
    _obj.val(num.toLocaleString());
  }
}
function getNumber(_str){
  var arr = _str.split('');
  var out = new Array();
  for(var cnt=0;cnt<arr.length;cnt++){
    if(isNaN(arr[cnt])==false){
      out.push(arr[cnt]);
    }
  }
  return Number(out.join(''));
}
 
$("input").on("input", function(){
  // Print entered value in a div box
  updateTextView($(this));
  $(".result").html($(this).val());
  var x = $(this).val().length
  var xs = x * 8
  if ( x > 5){
    $('input').css('width', 150 + xs +'px')
  }
});
 
function calculate(){
  var input = $('.cal-input').val();
  var removeComma = parseFloat(input.replace(/,/g,''))
  var result = removeComma * 1.2 
  var comma  = result.toLocaleString()
 


  if (!input){
    alert('please Enter amount')
  }else {
      $({ countNum: 0 }).animate({ countNum: 1000 }, {
    duration: 1000, // tune the speed here
    easing: 'linear',
    step: function() {
      // What todo on every count
      $('.result').html(Math.floor(this.countNum));
  
    },
    complete: function() {
      $('.result').html(comma)
 
    }
  });

 $('.gradian').css('left', '0%');
 $('.result-h1').css('color', '#fff');
 $('.start-growing-btn').css('box-shadow', 'none');
 $('.start-growing-btn').css('border', 'solid 3px #fff');
 $('.start-growing-btn').css('color', '#fff');
 $('.result-p').css('color', '#fff')
 $('.your-current-text').html('Your new potential revenue when you join 360Wellness')
  }

}


 

$('.duration').click((event)=>{event.stopPropagation();$('.dropdown-content').addClass('open');$('.fa-chevron-down.tow').css('transform', 'rotate(180deg)')})
$('.week').click(()=>{$('.duration').html('week');$('.dropdown-content').removeClass('open');$('.fa-chevron-down.tow').css('transform', 'rotate(0deg)') })
$('.month').click(()=>{$('.duration').html('month');$('.dropdown-content').removeClass('open');$('.fa-chevron-down.tow').css('transform', 'rotate(0deg)') })
$('.year').click(()=>{$('.duration').html('year');$('.dropdown-content').removeClass('open');$('.fa-chevron-down.tow').css('transform', 'rotate(0deg)') })


$('.fa-chevron-down.one').click(function(){
 
  if ($('.dropdown-currency').hasClass('open')){
    $('.dropdown-currency').toggleClass('open');$('.fa-chevron-down.one').css('transform', 'rotate(0deg)')
  }else{
    $('.dropdown-currency').toggleClass('open');$('.fa-chevron-down.one').css('transform', 'rotate(180deg)')
  }
})
$('.fa-chevron-down.tow').click(function(){
  if ($('.dropdown-content').hasClass('open')){
    $('.dropdown-content').toggleClass('open');$('.fa-chevron-down.tow').css('transform', 'rotate(0deg)')
  }else{
    $('.dropdown-content').toggleClass('open');$('.fa-chevron-down.tow').css('transform', 'rotate(180deg)')
  }
})


$('.usd').click((event)=>{event.stopPropagation();$('.dropdown-currency').addClass('open');$('.fa-chevron-down.one').css('transform', 'rotate(180deg)')})

 
$("ul[id*=currency] li").click(function () {
 
  $('.currency-title, .usd').html($(this).attr('value'));
  $('.fa-chevron-down.one').css('transform', 'rotate(0deg)');
  $('.dropdown-currency').removeClass('open') 
});

window.onclick = function(event) {
  $('.dropdown-currency').removeClass('open') 
  $('.fa-chevron-down.one').css('transform', 'rotate(0deg)')
  $('.dropdown-content').removeClass('open') 
  $('.fa-chevron-down.tow').css('transform', 'rotate(0deg)')
 
}
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
    text.hover(function () {

       
 

          var els = document.getElementsByClassName("steps-text");
          for(var i = 0; i < els.length; i++)
          {
            $('.steps-text').removeClass('steps-active')
          }

          $(this).addClass('steps-active')
          block.removeClass('active');
          block.eq($(this).index()-1).addClass('active');
          item.removeClass('active');
          item.eq($(this).index()-1).addClass('active');
      
          pause = true;
          
            
      
      }, function () {
      
      //when hover event ends, start interval function
          pause = false;
      });

  
  });




  //Getting users location 
$.get("https://ipinfo.io", function(response) {
    $.get("https://restcountries.eu/rest/v2/alpha/"+response.country.toLowerCase(), function(res) {
        console.log(res.currencies);
    });
}, "json");
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


