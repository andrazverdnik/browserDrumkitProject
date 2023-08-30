const body = document.getElementById("body")
const drums = document.querySelectorAll(".drum")

const tom1 = document.getElementById("Tom 1")
const tom2 = document.getElementById("Tom 2")
const tom3 = document.getElementById("Tom 3")
const hihatOpen = document.getElementById("Open hihat")
const hihatClosed = document.getElementById("Closed hihat")
const snare = document.getElementById("Snare")
const kick = document.getElementById("Kick")
const crash = document.getElementById("Crash")

var crashaudio = new Audio("/audio/crash.mp3")
var tom1audio = new Audio("/audio/tom1.mp3")
var tom2audio = new Audio("/audio/tom2.mp3")
var tom3audio = new Audio("/audio/tom3.mp3")
var hihatOpenaudio = new Audio("/audio/hihat_open.mp3")
var hihatClosedaudio = new Audio("/audio/hihat_closed.mp3")
var snareaudio = new Audio("/audio/snare.mp3")
var kickaudio = new Audio("/audio/kick.mp3")

let isCrashPlaying = false;
let isTom1Playing = false;
let isTom2Playing = false;
let isTom3Playing = false;
let isHihatOpenPlaying = false;
let isHihatClosedPlaying = false;
let isSnarePlaying = false;
let isKickPlaying = false;

// Adding event listener to every button to play and animate

crash.addEventListener("click", () => {
    if (isCrashPlaying) {
        crash.classList.add("drumPressed");
        crash.classList.remove("drum");
        crashaudio.currentTime = 0;
        setTimeout(() => {
            crash.classList.remove("drumPressed");
            crash.classList.add("drum");
        }, 50);
    } else {
        crash.classList.add("drumPressed");
        crash.classList.remove("drum");
        crashaudio.play();
        isCrashPlaying = true;
        setTimeout(() => {
            crash.classList.remove("drumPressed");
            crash.classList.add("drum");
        }, 50);
    }
})

crashaudio.addEventListener("ended", () => {
    isCrashPlaying = false
})

tom1.addEventListener("click", () => {
    if (isTom1Playing) {
        tom1.classList.add("drumPressed");
        tom1.classList.remove("drum");
        tom1audio.currentTime = 0;
        setTimeout(() => {
            tom1.classList.remove("drumPressed");
            tom1.classList.add("drum");
        }, 50);
    } else {
        tom1.classList.add("drumPressed");
        tom1.classList.remove("drum");
        tom1audio.play();
        isTom1Playing = true;
        setTimeout(() => {
            tom1.classList.remove("drumPressed");
            tom1.classList.add("drum");
        }, 50);
    }
})

tom1audio.addEventListener("ended", () => {
    isTom1Playing = false
})

tom2.addEventListener("click", () => {
    if (isTom2Playing) {
        tom2.classList.add("drumPressed");
        tom2.classList.remove("drum");
        tom2audio.currentTime = 0;
        setTimeout(() => {
            tom2.classList.remove("drumPressed");
            tom2.classList.add("drum");
        }, 50);
    } else {
        tom2.classList.add("drumPressed");
        tom2.classList.remove("drum");
        tom2audio.play();
        isTom2Playing = true;
        setTimeout(() => {
            tom2.classList.remove("drumPressed");
            tom2.classList.add("drum");
        }, 50);
    }
})

tom2audio.addEventListener("ended", () => {
    isTom2Playing = false
})

tom3.addEventListener("click", () => {
    if (isTom3Playing) {
        tom3.classList.add("drumPressed");
        tom3.classList.remove("drum");
        tom3audio.currentTime = 0;
        setTimeout(() => {
            tom3.classList.remove("drumPressed");
            tom3.classList.add("drum");
        }, 50);
    } else {
        tom3.classList.add("drumPressed");
        tom3.classList.remove("drum");
        tom3audio.play();
        isTom3Playing = true;
        setTimeout(() => {
            tom3.classList.remove("drumPressed");
            tom3.classList.add("drum");
        }, 50);
    }
})

tom3audio.addEventListener("ended", () => {
    isTom3Playing = false
})

hihatOpen.addEventListener("click", () => {
    if (isHihatOpenPlaying) {
        hihatOpen.classList.add("drumPressed");
        hihatOpen.classList.remove("drum");
        hihatOpenaudio.currentTime = 0;
        setTimeout(() => {
            hihatOpen.classList.remove("drumPressed");
            hihatOpen.classList.add("drum");
        }, 50);
    } else {
        hihatOpen.classList.add("drumPressed");
        hihatOpen.classList.remove("drum");
        hihatOpenaudio.play();
        isHihatOpenPlaying = true;
        setTimeout(() => {
            hihatOpen.classList.remove("drumPressed");
            hihatOpen.classList.add("drum");
        }, 50);
    }
})

hihatOpenaudio.addEventListener("ended", () => {
    isHihatOpenPlaying = false
})

hihatClosed.addEventListener("click", () => {
    if (isHihatClosedPlaying) {
        hihatClosed.classList.add("drumPressed");
        hihatClosed.classList.remove("drum");
        hihatClosedaudio.currentTime = 0;
        setTimeout(() => {
            hihatClosed.classList.remove("drumPressed");
            hihatClosed.classList.add("drum");
        }, 50);
    } else {
        hihatClosed.classList.add("drumPressed");
        hihatClosed.classList.remove("drum");
        hihatClosedaudio.play();
        isHihatClosedPlaying = true;
        setTimeout(() => {
            hihatClosed.classList.remove("drumPressed");
            hihatClosed.classList.add("drum");
        }, 50);
    }
})

hihatClosedaudio.addEventListener("ended", () => {
    isHihatClosedPlaying = false
})

snare.addEventListener("click", () => {
    if (isSnarePlaying) {
        snare.classList.add("drumPressed");
        snare.classList.remove("drum");
        snareaudio.currentTime = 0;
        setTimeout(() => {
            snare.classList.remove("drumPressed");
            snare.classList.add("drum");
        }, 50);
    } else {
        snare.classList.add("drumPressed");
        snare.classList.remove("drum");
        snareaudio.play();
        isSnarePlaying = true;
        setTimeout(() => {
            snare.classList.remove("drumPressed");
            snare.classList.add("drum");
        }, 50);
    }
})

snareaudio.addEventListener("ended", () => {
    isSnarePlaying = false
})

kick.addEventListener("click", () => {
    if (isKickPlaying) {
        kick.classList.add("drumPressed");
        kick.classList.remove("drum");
        kickaudio.currentTime = 0;
        setTimeout(() => {
            kick.classList.remove("drumPressed");
            kick.classList.add("drum");
        }, 50);
    } else {
        kick.classList.add("drumPressed");
        kick.classList.remove("drum");
        kickaudio.play();
        isKickPlaying = true;
        setTimeout(() => {
            kick.classList.remove("drumPressed");
            kick.classList.add("drum");
        }, 50);
    }
})

kickaudio.addEventListener("ended", () => {
    isKickPlaying = false
})

// Checking for key presses and playing and animating

document.onkeydown = function (keyPressed) {
    console.log(keyPressed.key)
    
    switch(keyPressed.key) {
        case "q":
            if (isCrashPlaying) {
                crash.classList.add("drumPressed");
                crash.classList.remove("drum");
                crashaudio.currentTime = 0;
                setTimeout(() => {
                    crash.classList.remove("drumPressed");
                    crash.classList.add("drum");
                }, 50);
            } else {
                crash.classList.add("drumPressed");
                crash.classList.remove("drum");
                crashaudio.play();
                isCrashPlaying = true;
                setTimeout(() => {
                    crash.classList.remove("drumPressed");
                    crash.classList.add("drum");
                }, 50);
            }
            break
        case "w":
            if (isTom1Playing) {
                tom1.classList.add("drumPressed");
                tom1.classList.remove("drum");
                tom1audio.currentTime = 0;
                setTimeout(() => {
                    tom1.classList.remove("drumPressed");
                    tom1.classList.add("drum");
                }, 50);
            } else {
                tom1.classList.add("drumPressed");
                tom1.classList.remove("drum");
                tom1audio.play();
                isTom1Playing = true;
                setTimeout(() => {
                    tom1.classList.remove("drumPressed");
                    tom1.classList.add("drum");
                }, 50);
            }
            break
        case "e":
            if (isTom2Playing) {
                tom2.classList.add("drumPressed");
                tom2.classList.remove("drum");
                tom2audio.currentTime = 0;
                setTimeout(() => {
                    tom2.classList.remove("drumPressed");
                    tom2.classList.add("drum");
                }, 50);
            } else {
                tom2.classList.add("drumPressed");
                tom2.classList.remove("drum");
                tom2audio.play();
                isTom2Playing = true;
                setTimeout(() => {
                    tom2.classList.remove("drumPressed");
                    tom2.classList.add("drum");
                }, 50);
            }
            break
        case "r":
            if (isTom3Playing) {
                tom3.classList.add("drumPressed");
                tom3.classList.remove("drum");
                tom3audio.currentTime = 0;
                setTimeout(() => {
                    tom3.classList.remove("drumPressed");
                    tom3.classList.add("drum");
                }, 50);
            } else {
                tom3.classList.add("drumPressed");
                tom3.classList.remove("drum");
                tom3audio.play();
                isTom3Playing = true;
                setTimeout(() => {
                    tom3.classList.remove("drumPressed");
                    tom3.classList.add("drum");
                }, 50);
            }
            break
        case "t":
            if (isHihatOpenPlaying) {
                hihatOpen.classList.add("drumPressed");
                hihatOpen.classList.remove("drum");
                hihatOpenaudio.currentTime = 0;
                setTimeout(() => {
                    hihatOpen.classList.remove("drumPressed");
                    hihatOpen.classList.add("drum");
                }, 50);
            } else {
                hihatOpen.classList.add("drumPressed");
                hihatOpen.classList.remove("drum");
                hihatOpenaudio.play();
                isHihatOpenPlaying = true;
                setTimeout(() => {
                    hihatOpen.classList.remove("drumPressed");
                    hihatOpen.classList.add("drum");
                }, 50);
            }
            break
        case "y":
            if (isHihatClosedPlaying) {
                hihatClosed.classList.add("drumPressed");
                hihatClosed.classList.remove("drum");
                hihatClosedaudio.currentTime = 0;
                setTimeout(() => {
                    hihatClosed.classList.remove("drumPressed");
                    hihatClosed.classList.add("drum");
                }, 50);
            } else {
                hihatClosed.classList.add("drumPressed");
                hihatClosed.classList.remove("drum");
                hihatClosedaudio.play();
                isHihatClosedPlaying = true;
                setTimeout(() => {
                    hihatClosed.classList.remove("drumPressed");
                    hihatClosed.classList.add("drum");
                }, 50);
            }
            break
        case "u":
            if (isSnarePlaying) {
                snare.classList.add("drumPressed");
                snare.classList.remove("drum");
                snareaudio.currentTime = 0;
                setTimeout(() => {
                    snare.classList.remove("drumPressed");
                    snare.classList.add("drum");
                }, 50);
            } else {
                snare.classList.add("drumPressed");
                snare.classList.remove("drum");
                snareaudio.play();
                isSnarePlaying = true;
                setTimeout(() => {
                    snare.classList.remove("drumPressed");
                    snare.classList.add("drum");
                }, 50);
            }
            break
        case "i":
            if (isKickPlaying) {
                kick.classList.add("drumPressed");
                kick.classList.remove("drum");
                kickaudio.currentTime = 0;
                setTimeout(() => {
                    kick.classList.remove("drumPressed");
                    kick.classList.add("drum");
                }, 50);
            } else {
                kick.classList.add("drumPressed");
                kick.classList.remove("drum");
                kickaudio.play();
                isKickPlaying = true;
                setTimeout(() => {
                    kick.classList.remove("drumPressed");
                    kick.classList.add("drum");
                }, 50);
            }
            break
    }

}