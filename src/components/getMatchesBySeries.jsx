import React from "react";
import axios from 'axios';
import Option from "./Option";
import TableRow from "./TableRow"
import TableHead from "./TableHead";

class GetMatchesBySeriesId extends React.Component{
    constructor(){
        super();
        this.state = {
            match : [],
            series : [],
            value : '',
            resposelength : '0'
        }
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount(){  
        fetch('http://localhost:8080/winsoft/BCCI/series').then((resp)=>{
          resp.json().then((result)=>{
            console.warn(result);
            this.setState({series:result});
          })
        })
    }
    fetchData = async (seriesId) => {
                              await axios.get(`http://localhost:8080/winsoft/BCCI/matches/series/${seriesId}`)
                                      .then(response => {
                                        console.warn(response.data);
                                        console.warn(response.data.length);
                                        this.setState({match:response.data, resposelength:response.data.length});
                                      })
                                      .catch(function (error){
                                        if (error.response) {
                                          console.log(error.response.status);
                                          console.log(error.response.header);
                                          window.alert("No matches found in this series = "+error.response.status);
                                        }
                                      });
        
      }

      handleChange = async (event) =>{
        await this.setState({value: event.target.value});
        console.log("selected Series  = "+this.state.value);
        this.fetchData(this.state.value);
      }



    render(){
        return(
            <div className="container">
                <select value = {this.state.value} onChange = {this.handleChange}>
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

                <div>
          <table>
          <TableHead
            firstcolumn = "Team 1"
            secondcolumn = "Team 2"
            thirdcolumn = "City Name"
            fourthcolumn = "Match Date"
  
          />
          <tbody>
          {
            this.state.match.map(singlematch =>
            <TableRow key={singlematch.match_id} 
            firstcolumn = {singlematch.team1} 
            secondcolumn = {singlematch.team2} 
            thirdcolumn = {singlematch.city} 
            fourthcolumn = {singlematch.date}

            />)
        }
          </tbody>
          </table>
          </div>
            </div>
        );
    }
}

export default GetMatchesBySeriesId;