// get elements 

let letter1 = document.getElementById("1");
let letter2 = document.getElementById("2");
let letter3 = document.getElementById("3");
let letter4 = document.getElementById("4");
let letter5 = document.getElementById("5");
let letter6 = document.getElementById("6");
let letter7 = document.getElementById("7");
let letter8 = document.getElementById("8");
let letter9 = document.getElementById("9");
let letters = document.getElementById("letters");
let content = document.getElementById("content")
let xSpan = document.getElementById("xSpan");
let oSpan = document.getElementById("oSpan");
let title = document.getElementById("title");
let congratulation = document.getElementById("congratulation");
let winnerPlayer = document.getElementById("winner");
let loserPlayer = document.getElementById("loser");
let replay = document.getElementById("replay");
let mood = "x";



// click funtion 

letter1.onclick = function() {
    if (mood === "x" && letter1.innerText == "") {
        letter1.innerHTML = "x";
        mood = "o";
        title.innerHTML = "O"
    } else if (mood === "o" && letter1.innerText === "") {
        letter1.innerHTML = "o";
        mood = "x";
        title.innerHTML = "X"
    }
    winner()
    result()
    btnReplay()
}
letter2.onclick = function() {
    if (mood === "x" && letter2.innerText === "") {
        letter2.innerHTML = "x";
        mood = "o";
        title.innerHTML = "O "
    } else if (mood === "o" && letter2.innerText === "") {
        letter2.innerHTML = "o";
        mood = "x";
        title.innerHTML = "X"
    }
    winner()
    result()
    btnReplay()
}
letter3.onclick = function() {
    if (mood === "x" && letter3.innerText === "") {
        letter3.innerHTML = "x";
        mood = "o";
        title.innerHTML = "O "
    } else if (mood === "o" && letter3.innerText === "") {
        letter3.innerHTML = "o";
        mood = "x";
        title.innerHTML = "X"
    }
    winner()
    result()
    btnReplay()
}
letter4.onclick = function() {
    if (mood === "x" && letter4.innerText === "") {
        letter4.innerHTML = "x";
        mood = "o";
        title.innerHTML = "O "
    } else if (mood === "o" && letter4.innerText === "") {
        letter4.innerHTML = "o";
        mood = "x";
        title.innerHTML = "X"
    }
    winner()
    result()
    btnReplay()
}
letter5.onclick = function() {
    if (mood === "x" && letter5.innerText === "") {
        letter5.innerHTML = "x";
        mood = "o";
        title.innerHTML = "O "
    } else if (mood === "o" && letter5.innerText === "") {
        letter5.innerHTML = "o";
        mood = "x";
        title.innerHTML = "X"
    }
    winner()
    result()
    btnReplay()
}
letter6.onclick = function() {
    if (mood === "x" && letter6.innerText === "") {
        letter6.innerHTML = "x";
        mood = "o";
        title.innerHTML = "O "
    } else if (mood === "o" && letter6.innerText === "") {
        letter6.innerHTML = "o";
        mood = "x";
        title.innerHTML = "X"
    }
    winner()
    result()
    btnReplay()
}
letter7.onclick = function() {
    if (mood === "x" && letter7.innerText === "") {
        letter7.innerHTML = "x";
        mood = "o";
        title.innerHTML = "O "
    } else if (mood === "o" && letter7.innerText === "") {
        letter7.innerHTML = "o";
        mood = "x";
        title.innerHTML = "X"
    }
    winner()
    result()
    btnReplay()
}
letter8.onclick = function() {
    if (mood === "x" && letter8.innerText === "") {
        letter8.innerHTML = "x";
        mood = "o";
        title.innerHTML = "O "
    } else if (mood === "o" && letter8.innerText === "") {
        letter8.innerHTML = "o";
        mood = "x";
        title.innerHTML = "X"
    }
    winner()
    result()
    btnReplay()
}
letter9.onclick = function() {
    if (mood === "x" && letter9.innerText === "") {
        letter9.innerHTML = "x";
        mood = "o";
        title.innerHTML = "O "
    } else if (mood === "o" && letter9.innerText === "") {
        letter9.innerHTML = "o";
        mood = "x";
        title.innerHTML = "X"
    }
    winner()
    result()
    btnReplay()
}

// winner function 
let x = 0;
let z = 0;

function winner() {

    // x winner
    if (letter1.innerHTML === "x" && letter2.innerHTML === "x" && letter3.innerHTML === "x") {
        title.innerHTML = "X Player Is Winner";
        timeOut()
        setTimeout(function() { title.innerHTML = "O Player will start"; }, 4000)
        x += 1;
        xSpan.innerHTML = x;
    } else if (letter1.innerHTML === "x" && letter4.innerHTML === "x" && letter7.innerHTML === "x") {
        title.innerHTML = "X Player Is Winner";
        timeOut()
        setTimeout(function() { title.innerHTML = "O Player will start"; }, 4000)
        x += 1;
        xSpan.innerHTML = x;
    } else if (letter1.innerHTML === "x" && letter5.innerHTML === "x" && letter9.innerHTML === "x") {
        title.innerHTML = "X Player Is Winner";
        timeOut()
        setTimeout(function() { title.innerHTML = "O Player will start"; }, 4000)
        x += 1;
        xSpan.innerHTML = x;
    } else if (letter2.innerHTML === "x" && letter5.innerHTML === "x" && letter8.innerHTML === "x") {
        title.innerHTML = "X Player Is Winner";
        timeOut()
        setTimeout(function() { title.innerHTML = "O Player will start"; }, 4000)
        x += 1;
        xSpan.innerHTML = x;
    } else if (letter3.innerHTML === "x" && letter5.innerHTML === "x" && letter7.innerHTML === "x") {
        title.innerHTML = "X Player Is Winner";
        timeOut()
        setTimeout(function() { title.innerHTML = "O Player will start"; }, 4000)
        x += 1;
        xSpan.innerHTML = x;
    } else if (letter3.innerHTML === "x" && letter6.innerHTML === "x" && letter9.innerHTML === "x") {
        title.innerHTML = "X Player Is Winner";
        timeOut()
        setTimeout(function() { title.innerHTML = "O Player will start"; }, 4000)
        x += 1;
        xSpan.innerHTML = x;
    } else if (letter4.innerHTML === "x" && letter5.innerHTML === "x" && letter6.innerHTML === "x") {
        title.innerHTML = "X Player Is Winner";
        timeOut()
        setTimeout(function() { title.innerHTML = "O Player will start"; }, 4000)
        x += 1;
        xSpan.innerHTML = x;
    } else if (letter7.innerHTML === "x" && letter8.innerHTML === "x" && letter9.innerHTML === "x") {
        title.innerHTML = "X Player Is Winner";
        timeOut()
        setTimeout(function() { title.innerHTML = "O Player will start"; }, 4000)
        x += 1;
        xSpan.innerHTML = x;
    }
    // o winner
    if (letter1.innerHTML === "o" && letter2.innerHTML === "o" && letter3.innerHTML === "o") {
        title.innerHTML = "O Player Is Winner";
        timeOut()
        setTimeout(function() { title.innerHTML = "X Player will start"; }, 4000)
        z += 1;
        oSpan.innerHTML = z;
    } else if (letter1.innerHTML === "o" && letter4.innerHTML === "o" && letter7.innerHTML === "o") {
        title.innerHTML = "O Player Is Winner";
        timeOut()
        setTimeout(function() { title.innerHTML = "X Player will start"; }, 4000)
        z += 1;
        oSpan.innerHTML = z;
    } else if (letter1.innerHTML === "o" && letter5.innerHTML === "o" && letter9.innerHTML === "o") {
        title.innerHTML = "O Player Is Winner";
        timeOut()
        setTimeout(function() { title.innerHTML = "X Player will start"; }, 4000)
        z += 1;
        oSpan.innerHTML = z;
    } else if (letter2.innerHTML === "o" && letter5.innerHTML === "o" && letter8.innerHTML === "o") {
        title.innerHTML = "O Player Is Winner";
        timeOut()
        setTimeout(function() { title.innerHTML = "X Player will start"; }, 4000)
        z += 1;
        oSpan.innerHTML = z;
    } else if (letter3.innerHTML === "o" && letter5.innerHTML === "o" && letter7.innerHTML === "o") {
        title.innerHTML = "O Player Is Winner";
        timeOut()
        setTimeout(function() { title.innerHTML = "X Player will start"; }, 4000)
        z += 1;
        oSpan.innerHTML = z;
    } else if (letter3.innerHTML === "o" && letter6.innerHTML === "o" && letter9.innerHTML === "o") {
        title.innerHTML = "O Player Is Winner";
        timeOut()
        setTimeout(function() { title.innerHTML = "X Player will start"; }, 4000)
        z += 1;
        oSpan.innerHTML = z;
    } else if (letter4.innerHTML === "o" && letter5.innerHTML === "o" && letter6.innerHTML === "o") {
        title.innerHTML = "O Player Is Winner";
        timeOut()
        setTimeout(function() { title.innerHTML = "X Player will start"; }, 4000)
        z += 1;
        oSpan.innerHTML = z;
    } else if (letter7.innerHTML === "o" && letter8.innerHTML === "o" && letter9.innerHTML === "o") {
        title.innerHTML = "O Player Is Winner";
        timeOut()
        setTimeout(function() { title.innerHTML = "X Player will start"; }, 4000)
        z += 1;
        oSpan.innerHTML = z;
    }
}


// clear function 

function clear() {
    letter1.innerHTML = "";
    letter2.innerHTML = "";
    letter3.innerHTML = "";
    letter4.innerHTML = "";
    letter5.innerHTML = "";
    letter6.innerHTML = "";
    letter7.innerHTML = "";
    letter8.innerHTML = "";
    letter9.innerHTML = "";
}


// congratulation function




// result function 

function result() {
    if (xSpan.innerHTML == 3) {
        content.style.display = "none";
        replay.style.display = "none";
        winnerPlayer.innerHTML = "X ";
        loserPlayer.innerHTML = "O ";
        congratulation.style.display = "block";
    } else if (oSpan.innerHTML == 3) {
        content.style.display = "none";
        replay.style.display = "none";
        winnerPlayer.innerHTML = "O ";
        loserPlayer.innerHTML = "X ";
        congratulation.style.display = "block";
    }
}




// Draw function 
function btnReplay() {
    if (letter1.innerText != "") {
        if (letter2.innerText != "") {
            if (letter9.innerText != "") {
                if (letter3.innerText != "") {
                    if (letter4.innerText != "") {
                        if (letter5.innerText != "") {
                            if (letter6.innerText != "") {
                                if (letter7.innerText != "") {
                                    if (letter8.innerText != "") {
                                        replay.style.display = "flex"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    } else {
        replay.style.display = "none";
    }
}

function Draw() {
    clear();
    title.innerHTML = "let's start again...";
    replay.style.display = "none";
}


// back function 

function back() {
    clear();
    congratulation.style.display = "none";
    content.style.display = "grid";
    replay.style.display = "none";
    x = 0;
    z = 0;
    xSpan.innerHTML = x;
    oSpan.innerHTML = z;
    title.innerHTML = "Let's Start";
}


function timeOut() {
    let dots = setInterval(function() { title.innerHTML += "." }, 1000);
    setTimeout(function() { clear() }, 4000);
    setTimeout(function() { clearInterval(dots) }, 3000);
}
