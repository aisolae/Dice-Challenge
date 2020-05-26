function click1() {
    var randomNumber1 = Math.floor(Math.random() * 6) +1;

    var radomDiceImage = "dice" + randomNumber1  + ".png";

    var randomImageSource = "images/" + radomDiceImage;

    var image1 = document.querySelectorAll("img ")[0];

    var click1 = image1.setAttribute("src", randomImageSource);


}


function click2() {
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;

    var randomDiceImage2 = "dice"+randomNumber2 + ".png";

    var randomImageSource2 = "images/" + randomDiceImage2;

    var image2 = document.querySelectorAll("img")[1];
    image2.setAttribute("src", randomImageSource2);

}

