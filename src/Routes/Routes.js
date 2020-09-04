import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import App from "../components/Apps";
import AllMatch from "../components/AllMatch"
import GetMatchesBySeriesId from "../components/getMatchesBySeries"
import CreateSeries from "../components/CreateSeries";
import CreateMatchBySeries from "../components/CreateMatchBySeries";
import UpdateSeries from "../components/UpdateSeries";
import UpdateMatch from "../components/UpdateMatch";
import MasterPannel from "../components/MasterPannel";
import MatchMasterPanel from "../components/MatchMasterPanel";
import SeriesMasterPanel from "../components/SeriesMasterPanel";
import Prediction from "../components/Prediction";
import history from "../components/history";

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={MasterPannel} />
                    <Route path="/MatchMasterPanel" exact component={MatchMasterPanel} />
                    <Route path="/SeriesMasterPanel" exact component={SeriesMasterPanel} />
                    <Route path="/GetAllSeries" exact component={App} />
                    <Route path="/AllMatch" exact component={AllMatch} />
                    <Route path="/GetMatchesBySeriesId" exact component={GetMatchesBySeriesId} />
                    <Route path="/CreateSeries" exact component={CreateSeries} />
                    <Route path="/CreateMatchBySeries" exact component={CreateMatchBySeries} />
                    <Route path="/UpdateSeries" exact component={UpdateSeries} />
                    <Route path="/UpdateMatch" exact component={UpdateMatch} />
                    <Route path="/Prediction" exact component={Prediction} />
                </Switch>
            </Router>
        )
    }
}