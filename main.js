var boxes = document.querySelectorAll('.on');
var turn = 0;
var turnP = document.querySelector('#turn');
var winnerP = document.querySelector('#winner');
var C1 = document.querySelector('#c1');
var C2 = document.querySelector('#c2');
var C3 = document.querySelector('#c3');
var C4 = document.querySelector('#c4');
var C5 = document.querySelector('#c5');
var C6 = document.querySelector('#c6');
var C7 = document.querySelector('#c7');
var C8 = document.querySelector('#c8');
var C9 = document.querySelector('#c9');
var refresh = document.querySelector("#refresh");


var w1 = ['1', '2', '3']
var w2 = ['1', '4', '7']
var w3 = ['1', '5', '9']
var w4 = ['2', '5', '8']
var w5 = ['3', '5', '7']
var w6 = ['3', '6', '9']
var w7 = ['4', '5', '6']
var w8 = ['7', '8', '9']

var winnerCombinations = [w1, w2, w3, w4, w5, w6, w7, w8]

var oBoxes = [];
var crossBoxes = [];

console.log(boxes)

function checkWinner(arr){
    var n = winnerCombinations.length;
    let i = 0;
    console.log(winnerCombinations)
    console.log(arr);
    while(i < n){
        let j;
        for(j = 0; j < 3; j++){
           
            if(!arr.includes(winnerCombinations[i][j])){
                break;
            }
        }

        if(j == 3){
            return true;
        }
        i++;
    }
    return false;
}

function boxClick(){
        var flag = false;
        if(turn%2 == 0){
            turn++;
            crossBoxes.push(this.getAttribute('value'));
            this.textContent = 'X'
            this.className = 'cross'
            console.log("in click", crossBoxes)
            if(checkWinner(crossBoxes)){
                winnerP.textContent = "Winner is X"
                afterGame();
                turnP.textContent = ""
                flag = true;
            }else{
                turnP.textContent = "O's turn"
            }
        }else{
            turn++
            oBoxes.push(this.getAttribute('value'));
            this.textContent = 'O'
            this.className = 'o'
            if(checkWinner(oBoxes)){
                winnerP.textContent = "Winner is O"
                afterGame();
                turnP.textContent = "";
                flag = true;
            }else{
                turnP.textContent = "X's turn"
            }
        }
        if(turn == 9 && !flag){
            turnP.textContent = ""
            winnerP.textContent = "Game is draw"
        }
        this.removeEventListener('click', boxClick);
}

boxes.forEach(box => {
    box.addEventListener('click', boxClick, {once:true})
});



function afterGame(){
    boxes.forEach(box => {
        box.removeEventListener('click', boxClick, {once:true})
    }); 
}

refresh.addEventListener('click', function(){
    window.location.reload();
})
