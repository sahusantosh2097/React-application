import React from "react";
import TableRow from "./TableRow"
import axios from 'axios';
import TableHead from "./TableHead";
class App extends React.Component{
  constructor(){
    super();
    this.state = {
      series : []
    }
  }
  /*componentDidMount(){  
    fetch('http://localhost:8080/winsoft/BCCI/series').then((resp)=>{
      resp.json().then((result)=>{
        console.warn(result);
        this.setState({series:result});
      })
    })
  }*/
fetchData = async () => {
    const response = await axios.get('http://localhost:8080/winsoft/BCCI/series');
    this.setState({series:response.data});
  }
    render() {
      return(
        <div className="container">
        <button onClick={this.fetchData} className="btn">get Data</button>
        <div>
        <table>
        <TableHead
          firstcolumn = "Series Id"
          secondcolumn = "Series Name"
          thirdcolumn = "Start Date"
          fourthcolumn = "End Date"

        />
        <tbody>
        {
          this.state.series.map(singleseries =>
            <TableRow key={singleseries.series_id} 
            firstcolumn = {singleseries.series_id} 
            secondcolumn = {singleseries.series_name} 
            thirdcolumn = {singleseries.start_date} 
            fourthcolumn = {singleseries.end_date}

            />)
        }
        </tbody>
        </table>
        </div>
        </div>
      );
      }
}

export default App;