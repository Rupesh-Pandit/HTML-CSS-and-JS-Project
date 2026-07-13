let add = document.querySelector("#btn");
let input = document.getElementById("input");
let container = document.querySelector(".container");

add.addEventListener("click", AddingList);

function AddingList() {
  if (input.value == "") return;

  let div = document.createElement("div");
  div.classList.add("list");

  let div1 = document.createElement("div");
  div1.classList.add("listValue");
  div1.innerText = input.value;
  div.appendChild(div1);

  let div2 = document.createElement("div");
  div2.classList.add("delIcon");
  let i = document.createElement("i");
  i.className = "fa-solid fa-trash-can";
  i.style.color = "white";
  div2.append(i);

  // for deletin
  i.addEventListener("click", () => {
    div.remove();
  });

  div.appendChild(div2);

  container.append(div);
  input.value = "";
}
