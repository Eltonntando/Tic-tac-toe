let turn = "playesOne";
let playerOnePoints = [];
let playerTwoPoints = [];

document.querySelectorAll("td").forEach((item) => {
    item.addEventListener("click", function () {
        let playerOneTotal = 0;
        let playerTwoTotal = 0;
        if (this.children.length == 0) {

            if (turn == "playesOne") {
                turn = "playesTwo"
                this.innerHTML = `<i class="fa-solid fa-x"></i>`;
                playerOnePoints.push(this.getAttribute("id"));
            }
            else {
                turn = "playesOne"
                this.innerHTML = `<i class="fa-regular fa-circle"></i>`;
                playerTwoPoints.push(this.getAttribute("id"));
            }
        }
        function funcFor3(player1points, playerTotal, player) {
            player1points.forEach((item) => {
                playerTotal += Number(item);
            })
            if (player == "Player 1") {
                playerOneTotal = playerTotal;
                if (playerTotal == 15 && playerOnePoints.length > 2) {
                    win(player + "  Won!!!")
                }
                else {

                }
            }
            else {
                playerTwoTotal = playerTotal;
                if (playerTotal == 15 && playerOnePoints.length > 2) {
                    win(player + "  Won!!!")
                }
            }
        }

        function funcFor4(playerPoints, TotalMarks, player) {
            if (playerPoints.length > 3) {
                for (let i = 0; i < playerPoints.length; i++) {
                    let temp = []
                    for (let j = 0; j < playerPoints.length; j++) {

                        if (i != j) {
                            temp.push(playerPoints[j]);
                        }
                    }
                    funcFor3(temp, 0, player);
                }
            }
        }

        switch (playerOnePoints.length) {

            case 3:
                funcFor3(playerOnePoints, 0, "Player 1");
                funcFor3(playerTwoPoints, 0, "Player 2");
                break;
            case 4:
                funcFor4(playerOnePoints, 0, "Player 1");
                funcFor4(playerTwoPoints, 0, "Player 2");
                break;
            case 5:
                if (playerTwoPoints.length == 4) {
                    draw();
                }
                for (let i = 0; i < 5; i++) {
                    let playerOneTotal = 0;
                    let tempArray = [];
                    let tempPoint = 0;
                    for (let j = 0; j < playerOnePoints.length; j++) {
                        if (j != i) {
                            tempPoint += Number(playerOnePoints[j]);
                            tempArray.push(Number(playerOnePoints[j]));
                        }
                    }
                    funcFor4(tempArray, tempPoint, "player 1");
                }
                break;
        }
    })
})

function win(player) {
    document.getElementById("winner").innerHTML = player;
    document.getElementById("popUp").style.transform = "translateY(-200px)";
    
}
function draw() {
    document.getElementById("winner").innerHTML = "Match Draw";
    document.getElementById("popUp").style.transform = "translateY(-200px)";

}
function restart() {
    location.reload();
}

