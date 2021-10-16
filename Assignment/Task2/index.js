
function move(){
    var redEl = document.getElementById('bl');
    var poe = 0;
    var anim = setInterval(animate,1000);
    console.log(window.screen.height);
    console.log(window.screen.width);
    
    function animate(){
        if(poe>window.screen.height|| poe >window.screen.width){
            poe-=10
            
            redEl.style.top = poe+"px";
            redEl.style.left = poe+"px";
            console.log(redEl.style.top)
        }else{
        poe+=10;
        redEl.style.top = poe+"px";
        redEl.style.left = poe+"px";
        }
        
    }
    
}