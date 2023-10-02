score=0;
cross=true;
document.onkeydown=function(e){
    console.log("key code is:",e.keyCode)
    if(e.keyCode==38){
        dino=document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(()=>{
            dino.classList.remove('animateDino')
        },800);
    }
}
setInterval(()=>{
 dino=document.querySelector('.dino');
  gameOver=document.querySelector('.gameOver');
 obstacle=document.querySelector('.obstacle');
 dx=parseInt(window.getComputedStyle(dino,null).getPropertyValue('right'));
 dy=parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'));
 ox=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('right'));
 oy=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));
 offsetX=Math.abs(dx-ox);
 offsetY=Math.abs(dy-oy);
 console.log(offsetX,offsetY)
 if(offsetX<93 && offsetY<52){
     gameOver.style.visibility='visible';
     obstacle.classList.remove('obst');
 }
 else if(offsetX<130 && cross){
    score+=10;
    updateScore(score);
    cross=false;
    setTimeout(()=>{
        cross=true;
    },1000);
 }
 },100);
 function updateScore(score){
    scorecont.innerHTML="YOUR SCORE:"+score
 }