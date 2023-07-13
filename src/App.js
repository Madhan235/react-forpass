
import {Switch } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Signup from './Components/Signup';
import { Route } from 'react-router-dom/cjs/react-router-dom';
import Login from './Components/Login';
import { useEffect, useState } from 'react';
import Forgetpass from './Components/Forgetpass';
import Content from './Components/Content';
import Home from './Components/Home';
import Resetpass from './Components/Resetpass';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const [confirmPassword, setConfirmPassword] = useState();
  const history = useHistory();
 
  return (
    <div className="App">
        <Switch>
          <Route exact path="/">
<Home/>
          </Route>
          <Route  path ="/signup">
<Signup
email={email}
setEmail={setEmail}
password={password}
setPassword={setPassword}
/>
          </Route>

          <Route path="/login">
            <Login
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            />
          </Route>
          <Route path="/forgetpass">
<Forgetpass
email={email}
setEmail={setEmail}
password={password}
setPassword={setPassword}
code={code}
setCode={setCode}
/>
          </Route>

          <Route path="/movies">
            <Content/>
          </Route>
          <Route path="/resetpass">
<Resetpass
email={email}
setEmail={setEmail}
password={password}
setPassword={setPassword}
confirmPassword={confirmPassword}
setConfirmPassword={setConfirmPassword}
/>
          </Route>
        </Switch>
    </div>
  );
}

export default App;
