import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Signup from './pages/Signup.js';
import Dashboard from './pages/Dashboard.js';
import { UserProvider } from './context/User.js';
import { useEffect, useState } from 'react';
import NotLoggedIn from './pages/NotLoggedIn.js';
import axios from 'axios';
import AddNew from './components/AddNew.js';
import SpeechEnh from './components/SpeechEnh.js';
import Transcription from './components/Transcription.js';
import Translation from './components/Translation.js';
import Folders from './components/Folders.js';

function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  const addUser = (user) => {
    setUser(user);
  }

  const setLogIn = () => {
    setLoggedIn("true");
  }

  const setLogOut = () => {
    setLoggedIn("false");
  }

  useEffect(() => {
    if (user) {
      axios
        .get(`https://www.googleapis.com/oauth2/v1/userinfo`, {
          headers: {
            Authorization: `Bearer ${user.access_token}`,
            Accept: 'application/json'
          }
        })
        .then((res) => {
          addUser(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  return (
    <UserProvider value={{ loggedIn, user, addUser, setLogIn, setLogOut }}>
      <Router>
        <Routes>
          <Route exact path='/' element={<Signup />}></Route>
          <Route path='/dashboard' element={loggedIn ? <Dashboard /> : <NotLoggedIn />}>
            <Route path='/dashboard/addNew' element={<AddNew />}></Route>
            <Route path='/dashboard/speechEnhancement' element={<SpeechEnh />}></Route>
            <Route path='/dashboard/transcription' element={<Transcription />}></Route>
            <Route path='/dashboard/translation' element={<Translation />}></Route>
            <Route path='/dashboard/folders' element={<Folders />}></Route>
          </Route>
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
