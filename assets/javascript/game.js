//create variables
//crystal variable

//scores
var crystalOne = 0;
var crystalTwo = 0;
var crystalThree = 0;
var crystalFour = 0;
var currentScore = 0;
var targetScore = 0;
var crystals = crystalOne += crystalTwo += crystalThree += crystalFour;
var addvalue = 0;

//wins and losses

var winCount = 0;
var losseCount = 0;

$(document).ready(function () {
    //function
    var getRandom = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    var startGame = function() {
        //reset the current score
        currentScore = 0;
        targetScore = getRandom(19, 120);
        crystalOne = getRandom(1, 12);
        crystalTwo = getRandom(1, 12);
        crystalThree = getRandom(1, 12);
        crystalFour = getRandom(1, 12);

        $("#targetScore").html(targetScore);

        currentScore = currentScore + crystals;

        $("#yourScore").html(currentScore);


        //checkWin();

        console.log("your total score: " + currentScore);

    }

    var checkWin = function() {
        if (currentScore > targetScore) {
            alert("you lost");
            console.log("you lost");
            losseCount++;
            $("#loss").html(losseCount);
            startGame();
        

        }

        else if (currentScore == targetScore) {
            alert("you won!");
            console.log("you won");
            winCount++;
            $("#wins").html(winCount);
            startGame();
            // checkWin();
        }        

    }


    //adding crystals

    //main process
    startGame();
    
    $("#one").click(function () {
        console.log("one: " + crystalOne);
        currentScore += crystalOne;
        $("#yourScore").html(currentScore);
        checkWin();
    });

    $("#two").click(function () {
        currentScore += crystalTwo;
        $("#yourScore").html(currentScore);
        checkWin();
    });

    $("#three").click(function () {
        currentScore += crystalThree;
        $("#yourScore").html(currentScore);
        checkWin();

    });

    $("#four").click(function () {
        currentScore += crystalFour;
        $("#yourScore").html(currentScore);
        checkWin();

    });
});