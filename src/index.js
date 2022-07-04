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

  // 完了ボタンを生成
  const completeButton = document.createElement("button");
  completeButton.innerHTML = "完了";
  completeButton.addEventListener("click", () => {
    alert("完了");
  });

  // 削除ボタンを生成
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親であるliを削除
    // これでどこの要素が押されたかを判断できる(親が探せる)
    const deleteSubTarget = deleteButton.parentNode;
    const deleteTarget = deleteSubTarget.parentNode;
    // ulタグの配下のdeleteTargetを削除
    document.getElementById("incomplete-list").removeChild(deleteTarget);
  });

  //divタグの中にinputTextを代入
  div.innerHTML = inputText;

  // liタグの中にdivタグを
  li.appendChild(div);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // ulタグの配下にliタグを
  document.getElementById("incomplete-list").appendChild(li);
};

const addButton = document.getElementById("add-button");
addButton.addEventListener("click", () => onClickAdd());
