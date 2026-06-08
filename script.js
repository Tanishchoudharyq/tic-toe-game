let boxes = document.querySelectorAll(".box")

let arr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
let newgame = document.querySelector(".reset")


turn = true;

boxes.forEach((boxes) => {
    boxes.addEventListener("click", () => {
        // console.log("btn clicked")
        if (turn) {
            boxes.innerText = "0"
            turn = false;
            boxes.disabled = true;
            
        } else {
            
            boxes.innerText = "x"
            turn = true;
            boxes.disabled = true;
        }
        checkwinner()
    })
})
let offbox = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
let checkwinner = () => {
    for (let pattern of arr) {
        let pos1val = boxes[pattern[0]].innerText
        let pos2val = boxes[pattern[1]].innerText
        let pos3val = boxes[pattern[2]].innerText
        
        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                if (pos1val === "x") {
                    document.querySelector(".para").innerText = "playe X win"
                    alert("restart the game player x wins")
                    offbox();
                } else if (pos1val === "0") {
                    document.querySelector(".para").innerText = "playe O win"
                    alert("restart the game , winner  is 0")
                    offbox();
                }
            } let filled = 0;
            
            for (let box of boxes) {
                if (box.innerText !== "") {
                    filled++;
                }
            }
            
            if (filled === 9) {
                document.querySelector(".para").innerText = "you  both are loosers, no one wins "
            }
        }
    }
}


// console.log(checkwinner)


newgame.addEventListener("click", () => {
    boxes.forEach(input => {
        input.innerText = "";
        input.disabled = false;
    });
    document.querySelector(".para").innerText = "winner will be shown after end of match here";
    turn = true;

})