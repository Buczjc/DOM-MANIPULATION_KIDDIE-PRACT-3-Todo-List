let getInputTxt = document.querySelector("#txt_input");
let addInputTxtBTN = document.querySelector("#add_list_btn");
let todoList_container = document.querySelector(".todo_container");

addInputTxtBTN.addEventListener("click", () => {
  if (!getInputTxt.value.trim()) {
    alert("ADD A LIST !");
  } else {
    //Creates a div (list_container) container and storing the content (checkbox, <p>, & button)
    let list_container = document.createElement("div");
    list_container.classList.add("list_container");
    list_container.innerHTML = `<div class="input_box">
      <input type="checkbox" class="input_checkbox" />
      <p>${getInputTxt.value}</p>
    </div> <button class="del-listContainer">DEL</button>`;

    //Appends the new div in todo_container
    todoList_container.append(list_container);
    resetInputBox();

    //Adds a line-through in <p> when checkbox is click
    document.querySelectorAll(".input_checkbox").forEach((check_list) => {
      check_list.addEventListener("click", () => {
        check_list.nextElementSibling.style.textDecoration = "line-through";
      });
    });
    //Deletes the container (list_container) when DEL button is clicked
    document.querySelectorAll(".del-listContainer").forEach((del_list) => {
      del_list.addEventListener("click", () => {
        del_list.parentElement.remove();
      });
    });
  }
});

//Resets the value inside the input text when ADD button is pressed
function resetInputBox() {
  getInputTxt.value = "";
}
