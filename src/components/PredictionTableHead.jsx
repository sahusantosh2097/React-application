import React from "react";

function PredictionTableHead(props){
    return (
        <thead>
        <tr>
          <th>{props.firstcolumn}</th>
          <th>{props.secondcolumn}</th>
          <th>{props.thirdcolumn}</th>
          <th>{props.fourthcolumn}</th>
          <th>{props.fifthcolumn}</th>
          <th>{props.sixthcolumn}</th>
          <th>{props.seventhcolumn}</th>
          <th>{props.eigthcolumn}</th>
        </tr>
        </thead>
    );
}

export default PredictionTableHead;