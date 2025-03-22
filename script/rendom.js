const generateRGBcolor =()=>{
  const r =Math.floor(Math.random()*255);
  const g =Math.floor(Math.random()*255);
  const b =Math.floor(Math.random()*255);
  return `rgb(${r}, ${g}, ${b})`
}
// console.log(generateRGBcolor())
const updateColor =()=>{
const color = generateRGBcolor()
const colorBox = document.getElementById("colorBox")
const colorCode = document.getElementById("colorCode")
colorBox.style.backgroundColor = color;
colorCode.innerText = color
}

copyColorCOde=()=>{
    const colorCode = document.getElementById("colorCode")
    const inputTag = document.createElement("input");
    document.body.appendChild(inputTag);
    inputTag.value = colorCode.innerText;

    inputTag.select();
    document.execCommand("copy");
    document.body.removeChild(inputTag)
    alert("color copy'd")
}

document.getElementById("copyButton").addEventListener("click",()=>{
    copyColorCOde()
})
function generateNewColor(){
    updateColor()
}








