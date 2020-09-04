import React from "react";
import axios from 'axios';
import Option from "./Option";
import PredictionTableHead from "./PredictionTableHead";
import PredictionTableRow from "./PredictionTableRow";

class Prediction extends React.Component{
    constructor(){
        super();
        this.state = {
            series : [],
            prediction : [],
            resposelength : '0',
            weatherCat : '',
            weatherPerc : '',
            perc : '',
            iconId : ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.getValue = this.getValue.bind(this);
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
        await axios.get(`http://localhost:8080/winsoft/BCCI/weather/${seriesId}`)
                .then(response => {
                  console.warn(response.data);
                  console.warn(response.data.length);
                  this.setState({prediction:response.data, resposelength:response.data.length});
                  console.log(Object.keys(response.data[0].predictionData));
                  var value;
                  var finalvalue;
                  Object.keys(response.data[0].predictionData).forEach(function(key){
                    value = response.data[0].predictionData[key];
                    Object.keys(value).forEach(function(ke){
                       finalvalue = value[ke]; 
                       console.log("weather cat"+ke);
                    });
                    console.log("inside console : "+value)
                    console.log("console : "+finalvalue)
                    
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

    handleChange = async (event) =>{
        await this.setState({value: event.target.value});
        console.log("selected Series  = "+this.state.value);
        this.fetchData(this.state.value);
    }

    getWeatherCat = (singlePredication) =>{
        var value;
        var weatherCat;
        Object.keys(singlePredication.predictionData).forEach(function(key){
        value = singlePredication.predictionData[key];
        Object.keys(value).forEach(function(ke){
            weatherCat = ke;
         });
        });
        return weatherCat;
    }

    getValue = (singlePredication) =>{

        var value;
        var per;
        Object.keys(singlePredication.predictionData).forEach(function(key){
        value = singlePredication.predictionData[key];
        Object.keys(value).forEach(function(ke){
            per = value[ke];
         });
        });
        return per;
    }
    fetchImageUrl = (singlePredication) => {
        console.log("in image : "+Object.keys(singlePredication.predictionData));
        return "http://openweathermap.org/img/w/"+Object.keys(singlePredication.predictionData)+".png"
    }
    render(){
        return(
            <div>
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
                </div>
                <div>
                <table>
          
                <PredictionTableHead
                    firstcolumn = "Series Name"
                    secondcolumn = "Team 1"
                    thirdcolumn = "Team 2"
                    fourthcolumn = "City Name"
                    fifthcolumn = "Match Date"
                    sixthcolumn = "Weather Condition"
                    seventhcolumn = "prediction Percentage"
                    eigthcolumn = "weather photo"
                />
                <tbody>
                {
                    this.state.prediction.map(singlePredication =>
                        <PredictionTableRow
                            key={singlePredication.match_id}
                            firstcolumn = {singlePredication.series_name}
                            secondcolumn = {singlePredication.team1}
                            thirdcolumn = {singlePredication.team2}
                            fourthcolumn = {singlePredication.city}
                            fifthcolumn = {singlePredication.match_date}
                            sixthcolumn = {
                                this.getWeatherCat(singlePredication)
                            }
                            seventhcolumn = {this.getValue(singlePredication)}
                            eigthcolumn = {<img  src={this.fetchImageUrl(singlePredication)} alt="weather" />}
                        /> 
                        
                    )
                }
                </tbody>
                </table>
            </div>
            </div>
            
        )
    };

}
export default Prediction;