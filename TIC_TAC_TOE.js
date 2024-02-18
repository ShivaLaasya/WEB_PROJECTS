let btns = document.querySelectorAll(".button");
let restartBtn = document.querySelector("#restart-btn");

// let turn = "O";
// btns.forEach(btn => {
//     btn.addEventListener("click", ()=>{
//         if (turn === "O") {
//             btn.innerText = "O";
//             turn = "X";
//         }
//         else {
//             btn.innerText = "X";
//             turn = "O";
//         }
//         btn.disabled=true;
//     })
// });

let turnO = true;
$(".button").click(function(){
    if (turnO) {
        $(this).text("O");
        turnO = false;
        $(this).prop("disabled",true);
    }
    else {
        $(this).text("X");
        turnO = true;
        $(this).prop("disabled",true);
    }
});
 
