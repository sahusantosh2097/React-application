import React from "react";

function TableRow(props){
    return(
        <tr>
            <td>{props.firstcolumn}</td>
            <td>{props.secondcolumn}</td>
            <td>{props.thirdcolumn}</td>
            <td>{props.fourthcolumn}</td>
        </tr>
    );
}

export default TableRow;