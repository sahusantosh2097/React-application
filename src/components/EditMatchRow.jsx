import React from "react";

class EditMatchRow extends React.Component{
    render(){
    return(
        <tr>
            <td><input value = {this.props.firstcolumn} onChange={this.props.handleInputChange} 
            name="match_id"/></td>
            <td><input value ={this.props.secondcolumnValue} onChange={this.props.handleInputChange} 
            name="team1"/></td>
            <td><input value ={this.props.thirdcolumnValue} onChange={this.props.handleInputChange}
             name="team2"/></td>
             <td><input value ={this.props.fourthcolumnValue} onChange={this.props.handleInputChange}
             name="city"/></td>
            <td><input value ={this.props.fifthcolumnValue} type = "date" 
            onChange={this.props.handleInputChange} 
            name="date"/></td>
        </tr>
    )
    };
}

export default EditMatchRow;