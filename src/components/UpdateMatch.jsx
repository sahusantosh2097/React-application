import React from "react";
import Option from "./Option"
import axios from "axios";
import MatchTableHead from "./MatchTableHead";
import EditMatchTableRow from "./EditMatchTableRow"
import EditMatchRow from "./EditMatchRow";
import MatchHead from "./MatchHead";

class UpdateMatch extends React.Component{
    constructor(){
        super();
        this.state = {
            series_id : '',
            series : [],
            match : [],
            match_id : '',
            team1 : '',
            team2 : '',
            city : '',
            date : '',
            newMatch : []
       }
       this.handleCheckChange = this.handleCheckChange.bind(this);
       this.handleInputChange = this.handleInputChange.bind(this);
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
                  this.setState({match:response.data});
                })
                .catch(function (error){
                  if (error.response) {
                    console.log(error.response.status);
                    console.log(error.response.header);
                    window.alert("No matches found in this series = "+error.response.status);
                  }
                });

    }

    getData = async (matchId) => {
        await axios.get(`http://localhost:8080/winsoft/BCCI/match/${matchId}`)
                .then(response => {
                  console.warn(response.data);
                  console.warn(response.data.length);
                  this.setState({newMatch:response.data});
                  console.log(response.data.team1);
                  this.setState({
                    match_id : response.data[0].match_id,
                    team1 : response.data[0].team1,
                    team2 : response.data[0].team2,
                    city : response.data[0].city,
                    date : response.data[0].date
                });
                })
                .catch(function (error){
                  if (error.response) {
                    console.log(error.response.status);
                    console.log(error.response.header);
                    window.alert("No matches found in this series = "+error.response.status);
                  }
                });

    }

    saveUpdatedMatch = async () =>{
        await axios.put('http://localhost:8080/winsoft/BCCI/match/'+this.state.match_id,{
           team1 : this.state.team1,
           team2 : this.state.team2,
           city : this.state.city,
           date : this.state.date,
           match_id : this.state.match_id
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

   deleteMatch = async () =>{
    await axios.delete('http://localhost:8080/winsoft/BCCI/match/'+this.state.match_id,{
       
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

    handleChange = async(event) =>{
        await this.setState({series_id: event.target.value});
        console.log(this.state.series_id);
        this.fetchData(this.state.series_id);
    }

    handleInputChange(event){
        const value = event.target.value;
        const name = event.target.name;
        console.warn(name + " "+value);
        this.setState({
            [name] : value
        });

        console.warn(name + " "+value);
    }

    handleCheckChange(e) {
        const item = e.target.name;
        console.log("match ID = "+item);
        this.getData(item);
        //window.alert("match ID = "+item);
      }

    render(){
        return(
            <div className = "container">
                <center><h1>Update Match By Series Id</h1></center>
                <br/>
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
                <label  className = "selectser">Select Match</label>
                <table>
                    <MatchTableHead
                        firstcolumn = "MatchId"
                        secondcolumn = "Team 1"
                        thirdcolumn = "Team 2"
                        fourthcolumn = "City Name"
                        fifthcolumn = "Match Date"
  
                    />
                    <tbody>
                        {
                            this.state.match.map(singlematch =>

                            <EditMatchTableRow key={singlematch.match_id}
                            handleCheckChange = {this.handleCheckChange}
                            handleInputChange = {this.handleInputChange}
                            firstcolumn = {singlematch.match_id} 
                            secondcolumnValue = {singlematch.team1}
                            thirdcolumnValue = {singlematch.team2}
                            fourthcolumnValue = {singlematch.city}
                            fifthcolumnValue = {singlematch.date} 
                            />)
                        }
                </tbody>
                </table>
                    <br/><br/>
                    <label  className = "selectser">Update The Suitable Information Match</label>
                    <table>
                    <MatchHead
                        firstcolumn = "MatchId"
                        secondcolumn = "Team 1"
                        thirdcolumn = "Team 2"
                        fourthcolumn = "City Name"
                        fifthcolumn = "Match Date"
  
                    />
                    <tbody>
                        {
                            this.state.newMatch.map(singlematch =>
                            <EditMatchRow key={singlematch.match_id}
                            handleInputChange = {this.handleInputChange}
                            firstcolumn = {this.state.match_id} 
                            secondcolumnValue = {this.state.team1}
                            thirdcolumnValue = {this.state.team2}
                            fourthcolumnValue = {this.state.city}
                            fifthcolumnValue = {this.state.date} 
                            />)
                        }
                    </tbody>
                    </table>

                    <br/><br/>
                    <button  className = "btn" onClick = {this.saveUpdatedMatch}>Update Match</button>
                    <button  className = "delbtn" onClick = {this.deleteMatch}>Delete Match</button>
            </div>
            
        )
    };
}

export default UpdateMatch;