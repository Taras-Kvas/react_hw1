
import './App.css';
import {useEffect, useState} from "react";


function App() {
  let [users, setUsers] = useState([]);
  let [posts, setPosts] = useState([]);
  let [comments, setComments] = useState([]);


  useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
          .then(value => value.json())
          .then(value => {
              setUsers(value);
              });
      fetch('https://jsonplaceholder.typicode.com/posts')
          .then(value => value.json())
          .then(value => {
              setPosts(value);
          });
      fetch('https://jsonplaceholder.typicode.com/comments')
          .then(value => value.json())
          .then(value => {
              setComments(value);
          });
  }, [] );

  return (
      <div className="wrap">
          <ul className="user">
              <h1 className="name">Users</h1>
              {
              users.map(value => <li>{value.name}</li>)
              }
          </ul>
          <ul className='post'>
              <h2 className='name'>Posts</h2>
              {
                  posts.map(value => <li key={value.id}>{value.title}</li>)
              }
          </ul>
          <ul className="comments">
              <h3 className='name'>Comments</h3>
              {
                  comments.map(value => <li key={value.id}>{value.body}</li>)
              }
          </ul>
      </div>

  );
}

export default App;
