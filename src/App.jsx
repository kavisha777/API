import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error('Error fetching users:', error));
  }, []);

  return (
<>
    <h1 className='text'>React Application with GitHub API and useEffect</h1>
    <div className="App">
      
      <div className="user-grid">
        {users.map((user) => (
          <div key={user.id} className="user-card">
            <img src={user.avatar_url} alt={user.login} className="avatar" />
            <h3>{user.login}</h3>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer">
              {user.html_url}
            </a>
          </div>
        ))}
      </div>
    </div>

    </> 
  );
}

export default App;
