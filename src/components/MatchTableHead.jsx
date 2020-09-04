import React from "react";

function MatchTableHead(props){
    return (
        <thead>
        <tr>
          <th>select Status</th>
          <th>{props.firstcolumn}</th>
          <th>{props.secondcolumn}</th>
          <th>{props.thirdcolumn}</th>
          <th>{props.fourthcolumn}</th>
          <th>{props.fifthcolumn}</th>
        </tr>
        </thead>
    );
}

export default MatchTableHead;