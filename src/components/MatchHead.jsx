import React from "react";

function MatchHead(props){
    return (
        <thead>
        <tr>
          <th>{props.firstcolumn}</th>
          <th>{props.secondcolumn}</th>
          <th>{props.thirdcolumn}</th>
          <th>{props.fourthcolumn}</th>
          <th>{props.fifthcolumn}</th>
        </tr>
        </thead>
    );
}

export default MatchHead;