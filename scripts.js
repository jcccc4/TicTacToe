// const Player = () => {

// };
// const P1 = Player();
// const P2 = Player();
let playerTurn = true;
let turn = 0;
const arr = [];
const display = document.getElementById('myModal');

function Board() {
    const board = document.getElementById('ticBoard');
    const span = document.getElementsByClassName("close")[0];

    for (let row = 0; row < 3; row++) {
        const box = [];
        for (let column = 0; column < 3; column++) {
            const tiles = document.createElement('div');

            board.appendChild(tiles);
            tiles.className = `tile row${row} col${column}`;
            box.push([tiles, '']);
        }
        arr.push(box);
    }

    for (let x = 0; x < 3; x++) {
        for (let y = 0; y < 3; y++) {
            arr[x][y][0].addEventListener('click', () => {
                if (playerTurn && (arr[x][y][1] === '')) {

                    arr[x][y][0].innerText = 'X';
                    arr[x][y][1] = 'X';
                    playerTurn = false;
                    turn++;
                } else if (!playerTurn && (arr[x][y][1] === '')) {

                    arr[x][y][0].innerText = 'O';
                    arr[x][y][1] = 'O';
                    playerTurn = true;
                    turn++;
                }

            });
        }
    }
    span.onclick = function () {
        display.style.display = "none";
    };

    window.onclick = function (event) {
        console.log(event.target);
        if (event.target == display) {
            display.style.display = "none";
        }
    };
}
function boardChecker(sign, name) {
    let checker = document.querySelectorAll('.tile');
    let winner = document.getElementsByClassName('modal-content');

    const winText = document.createElement('div');

    checker.forEach(element => {
        element.addEventListener('click', () => {
            for (let i = 0; i < 3; i++) {
                if (arr[i].every(x => x[1] === sign)) {
                    console.log(`${name} is the winner row = ${i}`);


                    display.display = 'flex';
                    winner[0].appendChild(winText);
                }
            }
            for (let i = 0; i < 3; i++) {
                if (arr.every(x => x[i][1] === sign)) {
                    console.log(`${name} is the winner column = ${i}`);
                    winText.innerHTML = "YOU WIN asdf";
                    display.style.display = 'flex';
                    winner[0].appendChild(winText);
                }
            }
            if (arr.every((x, y) => x[y][1] === sign)) {
                console.log(`${sign} is the winner diag`);
                winText.innerHTML = "YOU WIN asdf";
                display.style.display = 'flex';
                winner[0].appendChild(winText);
            }
            else if (arr[0][2][1] === sign && arr[1][1][1] === sign && arr[2][0][1] === sign) {
                console.log(`${name} is the winner diag`);
                winText.innerHTML = "YOU WIN asdf";
                winner[0].app.styleendChild(winText);
            }
            else if (turn === 9) {
                console.log(`it is a tie`);
            }
        });
    });
}

Board();
boardChecker('X', 'Player1');
boardChecker('O', 'Player2');