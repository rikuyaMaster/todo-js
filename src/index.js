import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  createIncompleteList(inputText);
};

// 未完了リストに追加する関数
const createIncompleteList = (text) => {
  // divタグの生成
  const div = document.createElement("div");
  div.className = "list-row";

  // liタグの生成
  const li = document.createElement("li");

  // pタグの生成
  const p = document.createElement("p");
  //pタグの中にinputTextを代入
  p.innerHTML = text;

  // 完了ボタンを生成
  const completeButton = document.createElement("button");
  completeButton.innerHTML = "完了";
  completeButton.addEventListener("click", () => {
    // 完了リストに追加する要素
    const addTarget = completeButton.parentNode;
    const text = addTarget.firstElementChild.innerText;
    console.log(text);

    // 完了のものを削除
    const completeSubTarget = completeButton.parentNode;
    const completeTarget = completeSubTarget.parentNode;
    // ulタグの配下のdeleteTargetを削除
    document.getElementById("incomplete-list").removeChild(completeTarget);

    // 中身の初期化
    div.innerHTML = "";

    // 完了したテキストを完了したほうに移す
    const p = document.createElement("p");
    p.innerHTML = text;

    // buttonの生成
    const backButton = document.createElement("button");
    backButton.innerHTML = "戻す";
    backButton.addEventListener("click", () => {
      // 押されたら戻すボタンの親タグを完了リストから削除
      const deleteSubTarget = backButton.parentNode;
      const deleteTarget = deleteSubTarget.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);
      // テキスト取得
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    // 要素の設定
    li.appendChild(div);
    div.appendChild(p);
    div.appendChild(backButton);
    console.log(li);
    const completeList = document.getElementById("complete-list");
    completeList.appendChild(li);
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

  // liタグの中にdivタグを
  li.appendChild(div);
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // ulタグの配下にliタグを
  document.getElementById("incomplete-list").appendChild(li);
};

const addButton = document.getElementById("add-button");
addButton.addEventListener("click", () => onClickAdd());
