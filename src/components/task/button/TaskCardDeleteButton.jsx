import React from "react";

const TaskCardDeleteButton = ({
  taskCardsList,
  setTaskCardsList,
  taskCard,
}) => {
  console.log(taskCard);
  const taskCardDeleteButton = (id) => {
    // タスクカードを削除する
    console.log(id);
    setTaskCardsList(taskCardsList.filter((e) => e.id !== id));
  };
  return (
    <div>
      <button
        className="taskCardDeleteButton"
        onClick={() => taskCardDeleteButton(taskCard.id)}
      >
        削除
        {/* <i className="fa-solid fa-xmark"></i> */}
      </button>
    </div>
  );
};

export default TaskCardDeleteButton;
