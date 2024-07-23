let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let turnO = true;
let msgContainer = document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
const win = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            turnO = false;
            box.style.color="#Lime Green";
        } else {
            box.innerText = "X";
            turnO = true;
            box.style.color="#32CD32F";
        }

        box.disabled = true;
        let isWinner=checkWinner();
    });
});

const rest=()=>{
    turnO = true;
    msgContainer.classList.add("hide");  
    msg.innerText = "";  
    msgContainer.style.height = "0"; 
    enableBoxes();

}
const disableBoxes = () => {
    for (let box of boxes) {
      box.disabled = true;
    }
};
const enableBoxes = () => {
    for (let box of boxes) {
      box.disabled = false;
      box.innerText="";
    }
};
function checkWinner() {
    for (let pattern of win) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
    
        if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("winner" ,pos1Val);
                showWinner(pos1Val);
                return true;
            }
        }
    }
    return false;
}

reset.addEventListener("click",rest);
const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.style.height = "50px";  
    msgContainer.style.width = "100%";  
    msgContainer.style.display = "flex";
    msgContainer.style.alignItems = "center"; 
    msgContainer.style.justifyContent = "center";  
    msg.style.color = "white";  
    msg.style.fontSize = "5vmin";
    msgContainer.classList.remove("hide");
    disableBoxes();
};



