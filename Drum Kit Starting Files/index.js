
var NoofDrums  = document.querySelectorAll(".drum").length;

for (let i = 0; i < NoofDrums; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        var option = this.innerHTML; 
        console.log(option)
        switch (option)
        {
            case "w":
                var audio = new Audio("sounds/tom-1.mp3");
                audio.play();
                break;
            case "a":
                var audio = new Audio("sounds/tom-2.mp3");
                audio.play();
                break;
            case "s":
                var audio = new Audio("sounds/tom-3.mp3");
                audio.play();
                break;
            case "d":
                var audio = new Audio("sounds/tom-4.mp3");
                audio.play();
                break;
            case "d":
                var audio = new Audio("sounds/tom-4.mp3");
                audio.play();
                break;
            case "j":
                var audio = new Audio("sounds/snare.mp3");
                audio.play();
                break;
            case "k":
                var audio = new Audio("sounds/crash.mp3");
                audio.play();
                break;
            case "l":
                var audio = new Audio("sounds/kick-bass.mp3");
                audio.play();
                break;
            default:
                console.log("Button imporriate");
        }
    });
}


// document.querySelector("button").addEventListener("click", function () {
//     alert("I got clicked");
// });


// var audio = new Audio("sounds/tom-1.mp3");
        // audio.play();