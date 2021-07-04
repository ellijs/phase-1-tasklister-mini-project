function updateList(obj) {
  let newList = document.createElement("li");
  let removeBtn = document.createElement("button");
  newList.textContent = obj.newTaskDescription;
  removeBtn.textContent = "X";
  newList.append(removeBtn);

  document.querySelector("#tasks").append(newList);

  // Remove Event
  removeBtn.addEventListener("click", () => newList.remove());
}

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelector("#create-task-form")
    .addEventListener("submit", (e) => {
      e.preventDefault();
      // console.log(e);
      let newTask = {
        newTaskDescription: e.target.newTaskDescription.value,
      };
      updateList(newTask);
      document.forms[0].reset();
    });
});
