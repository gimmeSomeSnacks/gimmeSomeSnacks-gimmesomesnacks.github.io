function swapImage(smallImageSrc, bigImageSrc) {
    var bigImg = document.getElementById(bigImageSrc);
    var smallImg = document.getElementById(smallImageSrc);
    bigImg.src = smallImg.src;
}

