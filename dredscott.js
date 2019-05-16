
var score=0;

function add(Nscore){
    score=0;
    score += Nscore;
    localStorage.setItem("score",score);
}