const refreshBtn = document.querySelector(".refresh-btn");
const container = document.querySelector(".container");

const maxPalatteboxes = 20;
const palatte = () => {
  container.innerHTML = "";
  for (let i = 0; i < maxPalatteboxes; i++) {
    let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
    randomHex = `#${randomHex.padStart(6, "0")}`;
    let color = document.createElement("li")
    color.classList.add("color")
    color.innerHTML = `<div class="rect-color" style="background: ${randomHex};"></div>
                       <span class="hex-value">${randomHex}</span>`
                       color.addEventListener("click",() => copyColor(color,randomHex))
    container.appendChild(color)
    
  }

}

palatte();

const copyColor = (elem,hexVal) =>{
  let colorElement = elem.querySelector(".hex-value")
  navigator.clipboard.writeText(hexVal).then(() => {
    colorElement.innerText = "copied";
    setTimeout(() => colorElement.innerText = hexVal, 1000)
  }).catch(() => alert("Fail to copy the color code!"))
}

refreshBtn.addEventListener('click', palatte);