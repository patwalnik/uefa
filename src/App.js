
import './App.css';
import React, {Component} from 'react';


class App extends Component{

  state = {
    data : []
  }

componentDidMount(){
  

  fetch('http://localhost:3001/home')
  .then( res => {res.json()
    console.log('this is data 1', res)
  })
  .then(users=> {
    console.log('user data', users)
    this.setState({users})
}
  );
  console.log('this is data', this.state.users)
}

render(){
  return(
    <div className="App">
      <h1>Users</h1>
    
      <ul>
        {this.state.users ? this.state.users.map(user =>
              <li key={user.id}> {user.teamname}</li>)
        : 
        <li>Loading</li>
        }
      </ul>
    </div>
  )
}



}

export default App;
