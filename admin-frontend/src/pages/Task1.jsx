import React from "react";

export default function Task1() {
  return (
        <form action="http://localhost:8080/api/add-task" method="POST">
          <label>
            Задание
            <input name="text"/>
          </label>
          <label>
            Пропущенное слово
            <input name="missed-word"/>
          </label>
          <label>
            1
            <input name="options"/>
          </label>
          <label>
            2
            <input name="options"/>
          </label>
          <label>
            3
            <input name="options"/>
          </label>
          <label>
            4
            <input name="options"/>
          </label>
          <button>Add task</button>
        </form>
  );
}