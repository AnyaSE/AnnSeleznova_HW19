const selectedImage = document.getElementById("image");

const myImages = ["imgs/1.png", "imgs/2.png", "imgs/3.png", "imgs/4.png", "imgs/5.png", "imgs/6.png", "imgs/7.png", "imgs/8.png", "imgs/9.png"];

function randomImage(){
    for (let i=0; i < myImages.length; i++) {
        const randomNumber = Math.floor(Math.random()*myImages.length);
        const image = myImages[randomNumber];
        return image;
    }
}

selectedImage.src = randomImage(myImages);

