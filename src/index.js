import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // divタグの生成
  const div = document.createElement("div");
  div.className = "list-row";

  // liタグの生成
  const li = document.createElement("li");

  //divタグの中にinputTextを代入
  div.innerHTML = inputText;
  console.log(div);

  // liタグの中にdivタグを
  li.appendChild(div);
  console.log(li);

  // ulタグの配下にliタグを
  document.getElementById("incomplete-list").appendChild(li);
};

const addButton = document.getElementById("add-button");
addButton.addEventListener("click", () => onClickAdd());
