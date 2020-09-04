import React from "react";
import history from "./history";

class MatchMasterPanel extends React.Component{
    render(){
        return(
            <div className="container">
                <h1>Welcome To Master Match Pannel</h1>
                <button className="matchmasterpannelbtn" onClick={()=> history.push('GetMatchesBySeriesId')}>
                Match Details</button>
                <button className="matchmasterpannelbtn" onClick={()=> history.push('UpdateMatch')} >
                Update Match</button>
                <button className="matchmasterpannelbtn" onClick={()=> history.push('UpdateMatch')}>
                Delete Match</button>
                <button className="matchmasterpannelbtn" onClick={()=> history.push('Prediction')}>
                 Predict Matches</button>
            </div>
        )
    };
}

export default MatchMasterPanel;