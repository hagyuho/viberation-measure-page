import React, { useEffect, useState } from "react";
import { observer } from "mobx-react";
import UseStore from "../store/UseStore";
import ExcelControl from "./ExcelControl";
import PeopleList from "./PeopleList";

const PeopleListTemplete = observer(() => {
  const { UserStore } = UseStore();

  const [searchForm, setSearchForm] = useState({
    category :"name",
    content:""
  });

  useEffect(() => {
    UserStore.getUsers();
  }, []);

  const handleOnChangeSearch = (e) => {
    const { name, value } = e.target;
    setSearchForm({
      ...searchForm,
      [name]: value,
    });
  };

  const handleOnClick = () => {
    console.log("req1 : " + searchForm.text + "/" + searchForm.type)
    UserStore.getUsersWithSearch(searchForm);

  }

  return (
    <>
      <h1>전체목록</h1>
      <ExcelControl data={UserStore.userList} />
      <div>
        <select name="category" onChange={handleOnChangeSearch}>
          <option value="name"> 이름 </option>
          <option value="interest"> 흥미 </option>
          <option value="retireBday"> 예정일 </option>
        </select>
        <input
          type="text"
          name="searchWord"
          placeholder="검색어를입력해주세요"
          onChange={handleOnChangeSearch}
        />
        <button onClick={handleOnClick} >조회</button>
      </div>
      <PeopleList UserStore={UserStore} />
    </>
  );
});

export default PeopleListTemplete;
