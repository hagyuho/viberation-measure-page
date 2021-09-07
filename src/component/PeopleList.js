import React from "react";

const PeopleList = (props) => {
  const { UserStore } = props;
  const column = ["이름", "흥미", "예정일"];

  return (
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
  );
};

export default PeopleList;
