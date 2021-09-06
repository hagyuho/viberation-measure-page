import React from "react";
import { CSVLink } from "react-csv";

const ExcelControl = (props) => {
  const { data, headers } = props;

  return (
    <div>
      <CSVLink
        headers={headers}
        data={data}
        filename="list.csv"
        target="_black"
      >
        <button> export Excel</button>
      </CSVLink>


    </div>
  );
};

export default ExcelControl;
