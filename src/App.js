import Header from "./containers/Header";
import {
  BrowserRouter as Router,

} from "react-router-dom";

import RoutesPages from "./containers/RoutesPages";



function App() {
  return (
    <div className="container  mt-5">
      <Router>
        <div className="container  mt-5">
          <Header />
          <hr />
          <RoutesPages />
        </div>
      </Router>

    </div>
  );
}

export default App;
