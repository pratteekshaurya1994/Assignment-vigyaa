import React, { useEffect, useState } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import "../../src/App.css";

function Check() {
  const allStateMap = {
    Portugal: 0,
    Nicaragua: 1,
    "Marshall Islands": 2,
  };
  const INITIAL_STATE = {
    Portugal: ["language1", "language2", "language3", "language4"],
    Nicaragua: ["language1", "language2", "language3", "language4"],
    "Marshall Islands": ["language1", "language2"],
  };
  const [allTasks, setTask] = useState(INITIAL_STATE);
  const [selectedTask, setSelectedTask] = useState([]);
  const [list1, setList1] = useState([]);
  const [list2, setList2] = useState([]);
  const [list3, setList3] = useState([]);

  useEffect(() => {
    console.log(list1, allTasks);
  }, [list1]);

  //TODO single function for handling
  const pushHandler = ({ type, data }) => {
    const typeData = allTasks[type];
  };

  const pushHandler1 = (data) => {
    let newArr = [];
    if (!list1.includes(data)) {
      newArr = [...list1, data];
      setList1(newArr);
      console.log("put: ", newArr);
    } else {
      newArr = list1.filter((id) => id !== data);
      setList1(newArr);
      console.log("pull", newArr);
    }
  };
  const pushHandler2 = (data) => {
    let newArr = [];
    if (!list2.includes(data)) {
      newArr = [...list2, data];
      setList2(newArr);
    } else {
      newArr = list2.filter((id) => id !== data);
      setList2(newArr);
    }
  };
  const pushHandler3 = (data) => {
    let newArr = [];
    if (!list3.includes(data)) {
      newArr = [...list3, data];
      setList3(newArr);
    } else {
      newArr = list3.filter((id) => id !== data);
      setList3(newArr);
    }
  };

  return (
    <div className="flex-container">
      <div id="listBox1">
        <div>
          <p className="task-sub-label">Portugal</p>
        </div>
        <div>
          <Checkbox
            defaultChecked={false}
            color="primary"
            inputProps={{ "aria-label": "secondary checkbox" }}
            onChange={(e) => pushHandler1(e.target.name)}
            name="Language1"
          />
          <label>Language1</label>
        </div>
        <div>
          <Checkbox
            defaultChecked={false}
            color="primary"
            inputProps={{ "aria-label": "secondary checkbox" }}
            onChange={(e) => pushHandler1(e.target.name)}
            name="Language2"
          />
          <label>Language2</label>
        </div>
        <div>
          <Checkbox
            defaultChecked={false}
            color="primary"
            inputProps={{ "aria-label": "secondary checkbox" }}
            onChange={(e) => pushHandler1(e.target.name)}
            name="Language3"
          />
          <label>Language3</label>
        </div>
        <div>
          <Checkbox
            defaultChecked={false}
            color="primary"
            inputProps={{ "aria-label": "secondary checkbox" }}
            onChange={(e) => pushHandler1(e.target.name)}
            name="Language4"
          />
          <label>Language4</label>
        </div>
        <div>
          <p className="task-sub-label">Nicaragua</p>
        </div>
        <div>
          <Checkbox
            defaultChecked={false}
            color="primary"
            inputProps={{ "aria-label": "secondary checkbox" }}
            onChange={(e) => pushHandler2(e.target.name)}
            name="Language1"
          />
          <label>Language1</label>
        </div>
        <div>
          <Checkbox
            defaultChecked={false}
            color="primary"
            inputProps={{ "aria-label": "secondary checkbox" }}
            onChange={(e) => pushHandler2(e.target.name)}
            name="Language2"
          />
          <label>Language2</label>
        </div>
        <div>
          <Checkbox
            defaultChecked={false}
            color="primary"
            inputProps={{ "aria-label": "secondary checkbox" }}
            onChange={(e) => pushHandler2(e.target.name)}
            name="Language3"
          />
          <label>Language3</label>
        </div>
        <div>
          <Checkbox
            defaultChecked={false}
            color="primary"
            inputProps={{ "aria-label": "secondary checkbox" }}
            onChange={(e) => pushHandler2(e.target.name)}
            name="Language4"
          />
          <label>Language4</label>
        </div>
        <div>
          <p className="task-sub-label">Marshall Islands</p>
        </div>
        <div>
          <Checkbox
            defaultChecked={false}
            color="primary"
            inputProps={{ "aria-label": "secondary checkbox" }}
            onChange={(e) => pushHandler3(e.target.name)}
            name="Language1"
          />
          <label>Language1</label>
        </div>
        <div>
          <Checkbox
            defaultChecked={false}
            color="primary"
            inputProps={{ "aria-label": "secondary checkbox" }}
            onChange={(e) => pushHandler3(e.target.name)}
            name="Language2"
          />
          <label>Language2</label>
        </div>
      </div>

      <div id="listBox2">
        {list1.length > 0 && (
          <div className="checkList">
            <p>Portugal</p>
            {list1 &&
              list1.length > 0 &&
              list1.map((ele, index) => {
                return (
                  <div key={index} className="listItemDiv">
                    <p>{ele}</p>
                    <i
                      class="fa fa-times"
                      aria-hidden="true"
                      onClick={(e) => pushHandler1(ele)}
                    ></i>
                  </div>
                );
              })}
          </div>
        )}
        {list2.length > 0 && (
          <div className="checkList">
            <p>Nicaragua</p>
            {list2 &&
              list2.length > 0 &&
              list2.map((ele, index) => {
                return (
                  <div key={index} className="listItemDiv">
                    <p>{ele}</p>
                    <i
                      class="fa fa-times"
                      aria-hidden="true"
                      onClick={(e) => pushHandler2(ele)}
                    ></i>
                  </div>
                );
              })}
          </div>
        )}
        {list3.length > 0 && (
          <div className="checkList">
            <p>Marshall Islands</p>
            {list3 &&
              list3.length > 0 &&
              list3.map((ele, index) => {
                return (
                  <div key={index} className="listItemDiv">
                    <p>{ele}</p>
                    <i
                      class="fa fa-times"
                      aria-hidden="true"
                      onClick={(e) => pushHandler3(ele)}
                    ></i>
                  </div>
                );
              })}
          </div>
        )}

        {!list1.length && !list2.length && !list3.length ? (
          <div id="emptyList">
            <p>No Value Selected</p>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Check;
