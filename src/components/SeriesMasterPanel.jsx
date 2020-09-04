import React from "react";
import history from "./history";

class SeriesMasterPanel extends React.Component{
    render(){
        return(
            <div className="container">
                <h1>Welcome To Series Match Pannel</h1>
                <button className="matchmasterpannelbtn" onClick={()=> history.push('GetAllSeries')}>
                 Series Details</button>
                <button className="matchmasterpannelbtn" onClick={()=> history.push('UpdateSeries')} >
                Update Series</button>
                <button className="matchmasterpannelbtn" onClick={()=> history.push('UpdateSeries')}>
                Delete Series</button>
                <button className="matchmasterpannelbtn" onClick={()=> history.push('GetMatchesBySeriesId')}>
                Match Details</button>
            </div>
        )
    };
}

export default SeriesMasterPanel;