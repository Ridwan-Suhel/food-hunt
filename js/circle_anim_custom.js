//ISPIRATION: https://www.uplabs.com/posts/xore-solar-system
//Full page simoberny.it
//Best on mobile

/* Inizializzazione HammerJS */
var element = document.getElementById('mobile_control');
var hammertime = new Hammer(element);


hammertime.get('swipe').set({ direction: Hammer.DIRECTION_ALL });
hammertime.on('swipeleft', function(ev) {
  cmove("prev");
});
hammertime.on('swiperight', function(ev) {
  cmove("next");
});
/* * * * * * * * * */

$(".action").on("click", function(){
  cmove($(this).attr('id'));
});


var angle = 0;
var food_id = 0;

function cmove(dir){
  var n_food = 8, next_id;
  var prev, next;
  var top = $("#pl"+ food_id);
  var orbit = $(".food_wrapper");
  
  top.removeClass("pt");
  
  if(food_id == 0){
    prev = $("#pl"+ (n_food-1));
    next = $("#pl"+ (food_id+1)%n_food);
  }else{
    prev = $("#pl"+ (food_id-1));
    next = $("#pl"+ (food_id+1)%n_food);
  }
  
  if(dir == "prev"){
    next_id = (food_id + 1) % n_food;
    angle -= 45;
    next.addClass("pt");
    food_id++;
  }else{
    if(food_id == 0){
      next_id = 7;
      food_id = 7;
    }else{
      next_id = food_id-1;
      --food_id;
    }
    angle += 45;
    prev.addClass("pt");
  }
  $(".active").removeClass("active");
  $("#p" + food_id).addClass("active");

  
  $('.pn').each(function(){
    $(this).html(food[next_id].replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
  });
  
  anime.timeline({})
  .add({
    targets: '.pn .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: function(el, i) {
      return 500 + 30 * i;
    }
  });
  
  var ani_dir = (dir == "next") ? "0%" : "100%";
  
  anime.timeline({})
  .add({
    targets: '.food_photo',
    backgroundPosition: ['50% -75%', ani_dir + ' -85%'],
    opacity: {
      value: [1,0]
    },
    duration: 700,
    easing: 'easeOutQuad',
    complete: function(anim){
      $(".food_photo").css("background-image", "url(" + photo_food[next_id] +")"); 
      // url("../images/image-1.png");
    }
  })
  .add({
    targets: '.food_photo',
    backgroundPosition: ['0% -85%', '50% -75%'],
    opacity: [0.2,1],
    duration: 500,
    easing: 'easeOutQuad'
  });
  
  orbit.css("transform", "rotateZ(" + angle + "deg)");
}



var photo_food = ["./images/image-1.png", "./images/image-2.png", "./images/image-3.png", "./images/image-4.png", "./images/image-5.png", "./images/image-2.png", "./images/image-3.png", "./images/image-4.png"];
var food = ["focaccia", "coburg", "Lorem", "Emmet", "bagel", "Ipsum", "bl oatmeal", "burrito"];
