import React from "react";
import Option from "./Option";
import EditTableRow from "./EditTableRow"
import axios from 'axios';
import TableHead from "./TableHead";

class UpdateSeries extends React.Component{
    constructor(){
        super();
        this.state = {
            series_id : '',
            series : [],
            
            series_name : '',
            start_date : '',
            end_date : '',
            updateSeries : []
        }
        this.handleChange = this.handleChange.bind(this);
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
        await axios.get(`http://localhost:8080/winsoft/BCCI/series/${seriesId}`)
                .then(response => {
                  console.warn(response.data);
                  console.warn(response.data.length);
                  this.setState({updateSeries:response.data});
                  this.setState({
                    series_name : response.data[0].series_name,
                    start_date : response.data[0].start_date,
                    end_date : response.data[0].end_date
                });
                console.log("series_name : "+response.data[0].series_name);
                })
                .catch(function (error){
                  if (error.response) {
                    console.log(error.response.status);
                    console.log(error.response.header);
                  }
                });

    } 

    saveUpdatedSeries = async () =>{
        await axios.put('http://localhost:8080/winsoft/BCCI/series/'+this.state.series_id,{
           series_name : this.state.series_name,
           start_date : this.state.start_date,
           end_date : this.state.end_date,
           series_id : this.state.series_id
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

   deleteSeries = async () =>{
    await axios.delete('http://localhost:8080/winsoft/BCCI/series/'+this.state.series_id,{
       
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

    render(){
        return(
            <div className = "container">
                <center><h1>Update Series</h1></center>
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
                <table>
        <TableHead
          firstcolumn = "Series Id"
          secondcolumn = "Series Name"
          thirdcolumn = "Start Date"
          fourthcolumn = "End Date"
          onChange = {this}
        />
        <tbody>
        {
          this.state.updateSeries.map(singleseries =>

            <EditTableRow key={singleseries.series_id}
            handleInputChange = {this.handleInputChange}
            firstcolumn = {singleseries.series_id} 
            secondcolumnValue = {this.state.series_name}
            thirdcolumnValue = {this.state.start_date}
            fourthcolumnValue = {this.state.end_date} 
            
            />)
        }
        </tbody>
        </table>
            <br/><br/>
            <button className = "btn" onClick = {this.saveUpdatedSeries}>Upate Series</button>
            <button  className = "delbtn" onClick = {this.deleteSeries}>Delete Series</button>
            </div>
        );
    };
}

export default UpdateSeries;