import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Main from "./Component/Main";

function App() {
  return (
    <Router>
      <div className="App" >
        <nav id = 'manu-block'>
          <ul id = 'manu' className = 'container'>
            <li>
              <Link to = '/' className = 'manu-li'>PSD WEBSITES</Link>
            </li>
            <li>
              <Link to = '/UI_Kits' className = 'manu-li'>UI KITS</Link>
            </li>
            <li>
              <Link to  = '/Premium_psd_files' className = 'manu-li' >PREMIUM PSD FILES</Link>
            </li>
            <li>
              <Link to = '/About' className = 'manu-li' >ABOUT</Link>
            </li>
            <li>
              <Link to = '/Blog' className = 'manu-li' >BLOG</Link>
            </li>

          </ul>
        </nav>

        <Switch>
          <Route path = '/' exact component = {Main}/>
          <Route path = '/UI_Kits' />
          <Route path = '/Premium_psd_files' />
          <Route path = '/About' />
          <Route path = '/Blog' />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
