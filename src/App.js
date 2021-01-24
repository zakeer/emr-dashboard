import React from "react"

import './App.css';
import { AppContext } from "./AppProvider";
import EmrSearchContainer from './containers/emr-search/EmrSearchContainer';
import EmrClientDashboardContainer from "./containers/EmrClientDashboard/EmrClientDashboardContainer";

function App() {
  const { showDashboard, setShowDashboard } = React.useContext(AppContext)

  return <React.Fragment>
    {showDashboard ? <EmrClientDashboardContainer /> : <EmrSearchContainer onSearch={setShowDashboard} />}
  </React.Fragment>
}

export default App;
