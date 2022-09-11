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
    if (mood === "x") {
        letter1.innerHTML = "x";
        mood = "o";
        title.innerHTML = "O"
    } else {
        letter1.innerHTML = "o";
        mood = "x";
        title.innerHTML = "X"
    }
    winner()
    result()
}
letter2.onclick = function() {
    if (mood === "x") {
        letter2.innerHTML = "x";
        mood = "o";
        title.innerHTML = "O "
    } else {
        letter2.innerHTML = "o";
        mood = "x";
        title.innerHTML = "X"
    }
    winner()
    result()
}
letter3.onclick = function() {
    if (mood === "x") {
        letter3.innerHTML = "x";
        mood = "o";
        title.innerHTML = "O "
    } else {
        letter3.innerHTML = "o";
        mood = "x";
        title.innerHTML = "X"
    }
    winner()
    result()
}
letter4.onclick = function() {
    if (mood === "x") {
        letter4.innerHTML = "x";
        mood = "o";
        title.innerHTML = "O "
    } else {
        letter4.innerHTML = "o";
        mood = "x";
        title.innerHTML = "X"
    }
    winner()
    result()
}
letter5.onclick = function() {
    if (mood === "x") {
        letter5.innerHTML = "x";
        mood = "o";
        title.innerHTML = "O "
    } else {
        letter5.innerHTML = "o";
        mood = "x";
        title.innerHTML = "X"
    }
    winner()
    result()
}
letter6.onclick = function() {
    if (mood === "x") {
        letter6.innerHTML = "x";
        mood = "o";
        title.innerHTML = "O "
    } else {
        letter6.innerHTML = "o";
        mood = "x";
        title.innerHTML = "X"
    }
    winner()
    result()
}
letter7.onclick = function() {
    if (mood === "x") {
        letter7.innerHTML = "x";
        mood = "o";
        title.innerHTML = "O "
    } else {
        letter7.innerHTML = "o";
        mood = "x";
        title.innerHTML = "X"
    }
    winner()
    result()
}
letter8.onclick = function() {
    if (mood === "x") {
        letter8.innerHTML = "x";
        mood = "o";
        title.innerHTML = "O "
    } else {
        letter8.innerHTML = "o";
        mood = "x";
        title.innerHTML = "X"
    }
    winner()
    result()
}
letter9.onclick = function() {
    if (mood === "x") {
        letter9.innerHTML = "x";
        mood = "o";
        title.innerHTML = "O "
    } else {
        letter9.innerHTML = "o";
        mood = "x";
        title.innerHTML = "X"
    }
    winner()
    result()
}

// winner function 
let x = 0;
let z = 0;

function winner() {

    // x winner
    if (letter1.innerHTML === "x" && letter2.innerHTML === "x" && letter3.innerHTML === "x") {
        title.innerHTML = "X Player Is Winner";
        clear()
        x += 1;
        xSpan.innerHTML = x;
    } else if (letter1.innerHTML === "x" && letter4.innerHTML === "x" && letter7.innerHTML === "x") {
        title.innerHTML = "X Player Is Winner";
        clear()
        x += 1;
        xSpan.innerHTML = x;
    } else if (letter1.innerHTML === "x" && letter5.innerHTML === "x" && letter9.innerHTML === "x") {
        title.innerHTML = "X Player Is Winner";
        clear()
        x += 1;
        xSpan.innerHTML = x;
    } else if (letter2.innerHTML === "x" && letter5.innerHTML === "x" && letter8.innerHTML === "x") {
        title.innerHTML = "X Player Is Winner";
        clear()
        x += 1;
        xSpan.innerHTML = x;
    } else if (letter3.innerHTML === "x" && letter5.innerHTML === "x" && letter7.innerHTML === "x") {
        title.innerHTML = "X Player Is Winner";
        clear()
        x += 1;
        xSpan.innerHTML = x;
    } else if (letter3.innerHTML === "x" && letter6.innerHTML === "x" && letter9.innerHTML === "x") {
        title.innerHTML = "X Player Is Winner";
        clear()
        x += 1;
        xSpan.innerHTML = x;
    } else if (letter4.innerHTML === "x" && letter5.innerHTML === "x" && letter6.innerHTML === "x") {
        title.innerHTML = "X Player Is Winner";
        clear()
        x += 1;
        xSpan.innerHTML = x;
    } else if (letter7.innerHTML === "x" && letter8.innerHTML === "x" && letter9.innerHTML === "x") {
        title.innerHTML = "X Player Is Winner";
        clear()
        x += 1;
        xSpan.innerHTML = x;
    }
    // o winner
    if (letter1.innerHTML === "o" && letter2.innerHTML === "o" && letter3.innerHTML === "o") {
        title.innerHTML = "O Player Is Winner";
        clear()
        z += 1;
        oSpan.innerHTML = z;
    } else if (letter1.innerHTML === "o" && letter4.innerHTML === "o" && letter7.innerHTML === "o") {
        title.innerHTML = "O Player Is Winner";
        clear()
        z += 1;
        oSpan.innerHTML = z;
    } else if (letter1.innerHTML === "o" && letter5.innerHTML === "o" && letter9.innerHTML === "o") {
        title.innerHTML = "O Player Is Winner";
        clear()
        z += 1;
        oSpan.innerHTML = z;
    } else if (letter2.innerHTML === "o" && letter5.innerHTML === "o" && letter8.innerHTML === "o") {
        title.innerHTML = "O Player Is Winner";
        clear()
        z += 1;
        oSpan.innerHTML = z;
    } else if (letter3.innerHTML === "o" && letter5.innerHTML === "o" && letter7.innerHTML === "o") {
        title.innerHTML = "O Player Is Winner";
        clear()
        z += 1;
        oSpan.innerHTML = z;
    } else if (letter3.innerHTML === "o" && letter6.innerHTML === "o" && letter9.innerHTML === "o") {
        title.innerHTML = "O Player Is Winner";
        clear()
        z += 1;
        oSpan.innerHTML = z;
    } else if (letter4.innerHTML === "o" && letter5.innerHTML === "o" && letter6.innerHTML === "o") {
        title.innerHTML = "O Player Is Winner";
        clear()
        z += 1;
        oSpan.innerHTML = z;
    } else if (letter7.innerHTML === "o" && letter8.innerHTML === "o" && letter9.innerHTML === "o") {
        title.innerHTML = "O Player Is Winner";
        clear()
        z += 1;
        oSpan.innerHTML = z;
    }

}


// clear function 

function clear() {
    letter1.innerHTML = "<p></p>";
    letter2.innerHTML = "<p></p>";
    letter3.innerHTML = "<p></p>";
    letter4.innerHTML = "<p></p>";
    letter5.innerHTML = "<p></p>";
    letter6.innerHTML = "<p></p>";
    letter7.innerHTML = "<p></p>";
    letter8.innerHTML = "<p></p>";
    letter9.innerHTML = "<p></p>";
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

function Draw() {
    clear()
    title.innerHTML = "let's start again..."
}


// back function 

function back() {
    congratulation.style.display = "none";
    content.style.display = "grid";
    replay.style.display = "block";
    xSpan.innerHTML = 0;
    oSpan.innerHTML = 0;
    title.innerHTML = "<p>Let's Start...</p>";
}