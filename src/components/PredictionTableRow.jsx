import React from "react";

function PredictionTableRow(props){
    return(
        <tr>
            <td>{props.firstcolumn}</td>
            <td>{props.secondcolumn}</td>
            <td>{props.thirdcolumn}</td>
            <td>{props.fourthcolumn}</td>
            <td>{props.fifthcolumn}</td>
            <td>{props.sixthcolumn}</td>
            <td>{props.seventhcolumn}</td>
            <td>{props.eigthcolumn}</td>
        </tr>
    );
}

export default PredictionTableRow;