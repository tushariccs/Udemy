
var NoofDrums  = document.querySelectorAll(".drum").length;

for (let i = 0; i < NoofDrums; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {  //(parameter) => i.e function() is just 
        //repalced by () =>i.e anonymous function
        var option = this.innerHTML; 
        makeSound(option);
        buttonAnimation(option);
    //     console.log(option)
    //     switch (option)
    //     {
    //         case "w":
    //             var audio = new Audio("sounds/tom-1.mp3");
    //             audio.play();
    //             break;
    //         case "a":
    //             var audio = new Audio("sounds/tom-2.mp3");
    //             audio.play();
    //             break;
    //         case "s":
    //             var audio = new Audio("sounds/tom-3.mp3");
    //             audio.play();
    //             break;
    //         case "d":
    //             var audio = new Audio("sounds/tom-4.mp3");
    //             audio.play();
    //             break;
    //         case "d":
    //             var audio = new Audio("sounds/tom-4.mp3");
    //             audio.play();
    //             break;
    //         case "j":
    //             var audio = new Audio("sounds/snare.mp3");
    //             audio.play();
    //             break;
    //         case "k":
    //             var audio = new Audio("sounds/crash.mp3");
    //             audio.play();
    //             break;
    //         case "l":
    //             var audio = new Audio("sounds/kick-bass.mp3");
    //             audio.play();
    //             break;
    //         default:
    //             console.log("Button imporriate");
    //     }
    });
}
    document.addEventListener("keypress", function (event) {
        //alert("Key pressed");
   
        makeSound(event.key);
        buttonAnimation(event.key);
        
        //O/p
        //index.js:52 KeyboardEvent {isTrusted: true, key: 'w', code: 'KeyW', location: 0, ctrlKey: false, …}isTrusted: truealtKey: falsebubbles: truecancelBubble: falsecancelable: truecharCode: 119code: "KeyW"composed: truectrlKey: falsecurrentTarget: nulldefaultPrevented: falsedetail: 0eventPhase: 0isComposing: falsekey: "w"keyCode: 119location: 0metaKey: falsepath: (4) [body, html, document, Window]repeat: falsereturnValue: trueshiftKey: falsesourceCapabilities: InputDeviceCapabilities {firesTouchEvents: false}srcElement: bodytarget: bodytimeStamp: 437.89999997615814type: "keypress"view: Window {window: Window, self: Window, document: document, name: '', location: Location, …}which: 119[[Prototype]]: KeyboardEvent
        // index.js:52 KeyboardEvent {isTrusted: true, key: 'a', code: 'KeyA', location: 0, ctrlKey: false, …}
        // index.js:52 KeyboardEvent {isTrusted: true, key: 's', code: 'KeyS', location: 0, ctrlKey: false, …}
        // index.js:52 KeyboardEvent {isTrusted: true, key: 'd', code: 'KeyD', location: 0, ctrlKey: false, …}
    });



function makeSound(key)
{     switch (key)
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
    
    }


function buttonAnimation(currentKey)
{
    var animation = document.querySelector("." + currentKey);
    animation.classList.add("pressed");

    setTimeout(function () {
        animation.classList.remove("pressed");
    },100);
}


// document.querySelector("button").addEventListener("click", function () {
//     alert("I got clicked");
// });


// var audio = new Audio("sounds/tom-1.mp3");
        // audio.play();