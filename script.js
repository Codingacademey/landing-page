Shery.imageEffect("#hey",{
     style: 4, 
  config:{"uColor":{"value":false},"uSpeed":{"value":0.6,"range":[0.1,1],"rangep":[1,10]},"uAmplitude":{"value":0.5,"range":[0,5]},"uFrequency":{"value":0.25,"range":[0,10]},"geoVertex":{"range":[1,64],"value":32},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":1.3773173391494002},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":5.4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1.07,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.5,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":3}},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.36,"range":[0,2]},"noise_scale":{"value":15.7,"range":[0,100]}} ,
    
     gooey:true,
    });



var elm=document.querySelectorAll(".elem1");
elm.forEach(function(elem1)
{
     var index=0;
     var animating=false;

     var h1s=elem1.querySelectorAll(" h1");
document.querySelector(".main").addEventListener("click",function(){
   
     gsap.to(h1s[index],{
          top:"-=100% ",
          duration:1,
          ease:Expo.easeInOut,
          onComplete:function(){
               gsap.set(this._targets[0],{top:"100%"});
          },
     })
index===h1s.length-1?(index=0) : index++;
     gsap.to(h1s[index],{
          top:"-=100% ",
          duration:1,
          ease:Expo.easeInOut,
     })

    

})
     
})
 



