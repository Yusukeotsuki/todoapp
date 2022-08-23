import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  createToImcompleteList(inputText);
};

//   // 未完了リストから指定の要素を削除
const deleteFromImcompleteList = (target) => {
  document.getElementById("imcomplete-list").removeChild(target);
};

const createToImcompleteList = (text) => {
  // Generate div tag
  const div = document.createElement("div");
  div.className = "list-row";

  // Generate li tag
  const li = document.createElement("li");
  li.innerText = text;

  // Generate button
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // move this tag to the complete list
    // Generate Tags
    const div = document.createElement("div");
    div.className = "list-row";
    // li
    const li = document.createElement("li");
    li.innerText = text;
    // button
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      const text = backButton.parentNode.firstElementChild.innerText;
      createToImcompleteList(text);
    });

    // set each element on div tag children
    div.appendChild(li);
    div.appendChild(backButton);

    // add complete-list
    document.getElementById("complete-list").appendChild(div);
    // delete from completelist
    deleteFromImcompleteList(deleteButton.parentNode);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // delete div tag from imcomplete list
    deleteFromImcompleteList(deleteButton.parentNode);
  });

  // set each element on div tag childlen
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  // add imcomplete-list
  document.getElementById("imcomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
