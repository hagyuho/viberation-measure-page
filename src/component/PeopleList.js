import React, { useEffect, useState } from "react";
import { observer } from "mobx-react";
import UseStore from "../store/UseStore";
import ExcelControl from "./ExcelControl";

const PeopleList = observer(() => {
  const { UserStore } = UseStore();

  const [searchForm, setSearchForm] = useState({
    type: "",
    text: "",
  });

  const column = ["이름", "흥미", "예정일"];

  const headers = [
    { label: "Name", key: "name" },
    { label: "Interest", key: "interest" },
    { label: "retireDday", key: "retireDday" },
  ];

  useEffect(() => {
    UserStore.getUsers();
    console.log(UserStore.userList);
  }, []);

  const handleOnChangeSearch = (e) => {
    const { name, value, selected } = e.target;
    setSearchForm({
      ...searchForm,
      [name]: value,
    });
  };

  return (
    <>
      <div>
        <h1>전체목록</h1>
        <ExcelControl data={UserStore.userList} headers={headers} />
      </div>
      <div>
        <select></select>  
        <input
          type="text"
          placeholder="검색어를입력해주세요"
          onChange={handleOnChangeSearch}
        />
        <button>조회</button>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              {column.map((column) => (
                <th key={column}>{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {!!UserStore.userList &&
              UserStore.userList.map((data) => (
                <tr key={data.id}>
                  <td>{data.name}</td>
                  <td>{data.interest}</td>
                  <td>{data.retireDday}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
});

export default PeopleList;
