console.log("salom");
let btn = document.querySelector(".collorChanger");

btn.addEventListener("click", () => {
  let colors = "0123456789ABCDFE";
  let randCol = "#";
  for (let i = 0; i < 6; i++) {
    randCol += colors[Math.floor(Math.random() * colors.length)];
  }
  let collorDiv = document.querySelector(".color_container");
  //   console.log(randCol);
  collorDiv.style.backgroundColor = randCol;
});
