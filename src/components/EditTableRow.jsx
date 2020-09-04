import React from "react";

class EditTableRow extends React.Component{
    render(){
    return(
        <tr>
            <td><input value = {this.props.firstcolumn} onChange={this.props.handleInputChange} 
            name="series_id"/></td>
            <td><input value ={this.props.secondcolumnValue} onChange={this.props.handleInputChange} 
            name="series_name"/></td>
            <td><input value ={this.props.thirdcolumnValue} type = "date" 
            onChange={this.props.handleInputChange}
             name="start_date"/></td>
            <td><input value ={this.props.fourthcolumnValue} type = "date"
             onChange={this.props.handleInputChange} 
            name="end_date"/></td>
        </tr>
    )
    };
}

export default EditTableRow;