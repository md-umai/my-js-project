let randomBtn = document.querySelector(".randomBtn");
let applyBtn = document.querySelector(".applyBtn");
let currentColor = document.querySelector(".currentColor");
let inputColor = document.querySelector("#inputColor");

const colorArray = ["red", "green", "blue", "yellow", "pink", "purple", "orange", "brown", "black", "white", "gray", "cyan", "magenta", "lime", "maroon", "navy", "olive", "teal", "violet", "indigo", "gold", "silver", "beige", "coral", "crimson", "fuchsia", "khaki", "lavender", "plum", "salmon", "tan", "turquoise"];
const generateRandomColor = () =>{
    let randomColor = Math.floor(Math.random()*colorArray.length);
    // console.log(colorArray[randomColor]);
    return colorArray[randomColor];
}

const changeColor = (color) =>{
    document.body.style.backgroundColor = color;
    currentColor.innerHTML = `Current color:${color}`;
}

const handleRandomBtn = () =>{
    // console.log(Math.floor(Math.random()*colorArray.length));
   let colour = generateRandomColor();
    changeColor(colour);
}

const handleApplyBtn = () =>{
    let color = inputColor.value;
    changeColor(color);
    inputColor.value = "";
}
applyBtn.addEventListener("click", handleApplyBtn);
randomBtn.addEventListener("click", handleRandomBtn);