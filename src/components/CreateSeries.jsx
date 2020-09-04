import React from "react";
import axios from 'axios';
class CreateSeries extends React.Component {
    constructor(){
        super();
        this.state = {
            series_name : '',
            start_date : '',
            end_date : ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event){
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name] : value
        });

        console.warn(name + " "+value);
    }

    saveData = async () =>{
         await axios.post('http://localhost:8080/winsoft/BCCI/series',{
            series_name : this.state.series_name,
            start_date : this.state.start_date,
            end_date : this.state.end_date,
            matches : []
        },{"headers": {

            "content-type": "application/json",

          },})
        .then(response => {
            console.warn(response.data);
            console.warn(response.data.length);
            window.alert(response.data);
            //transfer code to be written here
          })
          .catch(function (error){
            if (error.response) {
              console.log(error.response.status);
              console.log(error.response.header);
              window.alert("some error occurred = "+error.response.status);
            }
          });
    }

    render(){
        return(
            <div className = "bg-wrap-series">
            <div className="wrap-series">
                <form className="createseries">
                    <span className="contact2-form-title">
						Create Series
					</span>
                    <input type="text" className = "createseriesinput" id="series_name" 
                    placeholder = "series name" onChange = {this.handleInputChange}
                    name = "series_name" value = {this.state.series_name}
                    />
                    <input type = "date" min="2020-01-01" max="2020-12-31" 
                    className = "createseriesinput" name = "start_date"
                    id = "start_date" placeholder = "start date"
                    value = {this.state.start_date} onChange = {this.handleInputChange}
                    />
                    <input type = "date"  className = "createseriesinput" min="2020-01-01" 
                    max="2020-12-31" id = "end_date" placeholder = "end_date" 
                    name = "end_date" value = {this.state.end_date} onChange = {this.handleInputChange}
                    /> 
                    <button className="btn" onClick = {this.saveData}>
								Save Data
					</button>
                </form>
            </div>
            </div>
        );
    };
}

export default CreateSeries;