import React from "react";
import axios from "axios";
import Option from "./Option";

class CreateMatchBySeries extends React.Component{
    constructor(){
        super();
        this.state = {
            team1 : '',
            team2 : '',
            city : '',
            date : '',
            series_id : '',
            series : []
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

    handleChange = async(event) =>{
        await this.setState({series_id: event.target.value});
        console.log(this.state.series_id);
    }

    //to load all the series
    componentDidMount(){  
        fetch('http://localhost:8080/winsoft/BCCI/series').then((resp)=>{
          resp.json().then((result)=>{
            console.warn(result);
            this.setState({series:result});
          })
        })
    }
    
    saveData = async () =>{
        window.alert("clicked");
        await axios.post(`http://localhost:8080/winsoft/BCCI/match/${this.state.series_id}`,{
           team1 : this.state.team1,
           team2 : this.state.team2,
           city : this.state.city,
           date : this.state.date
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
         window.alert("some error occurred = ");
   }

    render(){
        return(
            <div className = "bg-wrap-series">
            <div className="wrap-series">
                <form className="createseries">
                    <span className="contact2-form-title">
						Create Match By Series Id
					</span>
                    <input type="text" className = "createseriesinput" id="team1" 
                    placeholder = "Team 1 Name" onChange = {this.handleInputChange}
                    name = "team1" value = {this.state.team1}
                    />
                    <input type="text" className = "createseriesinput" id="team2" 
                    placeholder = "Team 2 Name" onChange = {this.handleInputChange}
                    name = "team2" value = {this.state.team2}
                    />
                    <input type="text" className = "createseriesinput" id="city" 
                    placeholder = "City Name" onChange = {this.handleInputChange}
                    name = "city" value = {this.state.city}
                    />
                    <input type = "date"  className = "createseriesinput" min="2020-01-01" 
                    max="2020-12-31" id = "date"
                    name = "date" value = {this.state.date} onChange = {this.handleInputChange}
                    />
                    <div>
                    <label  className = "selectser">Select Series</label>
                    <select value = {this.state.value} onChange = {this.handleChange}
                    className="selectOption">
                    {
                        this.state.series.map(singleseries =>
                            <Option
                                key = {singleseries.series_id}
                                value = {singleseries.series_id}
                                name = {singleseries.series_name}
                            />
                        )
                    }
                </select>
                <br/><br/>
                <button className="btn" onClick = {this.saveData}>
							Save Data
					</button>
                </div>
                    
                </form>
            </div>
            </div>   
        );
    };
}

export default CreateMatchBySeries;