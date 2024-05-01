var drums = document.querySelectorAll(".drum");

for (var i = 0; i < drums.length; i++) {
    drums[i].addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML;
        switch(buttonInnerHTML){
            case "A":
                var audio = new Audio("sounds/crash.mp3");
                audio.play();
                break;
            case "B":
                var audio = new Audio("sounds/kick-bass.mp3");
                audio.play();
                break;                                                                     
            case "C":
                var audio = new Audio("sounds/snare.mp3");
                audio.play();
                break;
            case "D":
                var audio = new Audio("sounds/tom-1.mp3");
                audio.play();
                break;
            case "E":
                var audio = new Audio("sounds/tom-2.mp3");
                audio.play();
                break;
            case "F":
                var audio = new Audio("sounds/tom-3.mp3");
                audio.play();
                break;
            case "G":
                var audio = new Audio("sounds/tom-4.mp3");
                audio.play();
                break;
        }
        
    });
}