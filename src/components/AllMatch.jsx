import React from "react";
import TableRow from "./TableRow"
import axios from 'axios';
import TableHead from "./TableHead";
class AllMatch extends React.Component{
    constructor(){
        super();
        this.state = {
          match : []
        }
    }

    fetchData = async () => {
        const response = await axios.get('http://localhost:8080/winsoft/BCCI/match');
        console.warn(response.data);
        this.setState({match:response.data});
      }

      render() {
        return(
          <div className="container">
          <button onClick={this.fetchData}>get Data</button>
          <div>
          <table>
          <TableHead
            firstcolumn = "team1"
            secondcolumn = "team2"
            thirdcolumn = "city"
            fourthcolumn = "match_date"
  
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

export default AllMatch;