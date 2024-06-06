var paragraph = document.querySelector("p");
var heading = document.querySelector("h1");
var changeSizeBtn = document.querySelector("button");

function changeSize(){
    paragraph.classList.toggle("changeFontSize")
    heading.classList.toggle("changeFontSize")
}

changeSizeBtn.onclick = changeSize;