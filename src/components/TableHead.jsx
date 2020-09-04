import React from "react";

function TableHead(props){
    return (
        <thead>
        <tr>
          <th>{props.firstcolumn}</th>
          <th>{props.secondcolumn}</th>
          <th>{props.thirdcolumn}</th>
          <th>{props.fourthcolumn}</th>
        </tr>
        </thead>
    );
}

export default TableHead;