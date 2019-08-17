let topText = document.getElementById("top-text")
let bottomText = document.getElementById("bottom-text")
let above = document.getElementById("top")
let bottom = document.getElementById("bottom")
let generateButton = document.getElementById("gen")
let allMemeImgs
let img = document.getElementById('img')
generateButton.addEventListener("click", generateMeme);
topText.addEventListener("keyup", enterPressed);
bottomText.addEventListener("keyup", enterPressed);

function enterPressed(event) {
    if (event.key === "Enter") {
        generateMeme()
    }
}

function generateMeme() {
    if ((topText.value == "") || (bottomText.value == "")) {
        alert("Empty Input")
    } else {
        generating()
    }
}

function generating() {
    fetch('https://api.imgflip.com/get_memes')
        .then(response => response.json())
        .then(response => {
            const memes = response.data.memes
            let random = Math.floor(Math.random() * 99)
            allMemeImgs = memes[random].url
            console.log(allMemeImgs)
        })

}

var loading, loaded;
var mimg;
var samples;

function setup() {

    createCanvas(400, 400)
    console.log('setup');
    loading = false;
    loaded = false;

}



function draw() {
    if (!loading && !loaded) {
        loading = true;
        console.log('start loading');
        loadImage('https://i.imgflip.com/s4f1k.jpg', function (i) {
            loaded = true;
            mimg = i;
        }, function (e) {
            console.log(e);
        })
    }
    if (loaded) {
        image(mimg, 0, 0, 400, 300);
        textSize(32);
        fill(255, 0, 0)

        text(topText.value, 30, 20);
        text(bottomText.value, 150, 180);


    }
}