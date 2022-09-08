import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate, Link} from 'react-router-dom';
import Login from './Components/Login';
import FriendsList from './Components/FriendsList';
import AddFriend from './Components/AddFriend';


function App() {
  return (
      <div className="App">
        <header>
          <h2>Friends</h2>
          <Link className="link" to="login">Login</Link>
          <Link className="link" to="friends">Friends List</Link>
          <Link className="link" to="friends/add">Add Friend</Link>
          <Link className="link" to="friends">Logout</Link>
        </header>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/friends" element={<FriendsList />} />
          <Route exact path="/friends/add" element={<AddFriend />} />
        </Routes>
      </div>
  );
}

export default App;
