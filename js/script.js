window.addEventListener("load", () => {
    let sounds = document.querySelectorAll('.sound');
    let pads = document.querySelectorAll('.pads div');

    
    

    pads.forEach((pad, index) => {
        pad.addEventListener("click", function(){
            sounds[index].loop = true;
            if (sounds[index].paused){
                sounds[index].play();
            } else {
                sounds[index].pause();
        }
         this.classList.toggle("toggle");
        });
    });

    
});