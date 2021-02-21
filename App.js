import React from 'react';
import './App.css';
import List from './List'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameList: [],
      emailList: [],
      currentName: {
        name: '',
        email: '',
        key: ''
      }
    }
    this.handleInput = this.handleInput.bind(this)
    this.addName = this.addName.bind(this)
    this.handleEmail = this.handleEmail.bind(this)
  }
  handleInput(event) {
    event.preventDefault();
    this.setState({
      currentName: {
        name: event.target.value,
        key: Date.now()
    }
  });
}
handleEmail(e) {
  e.preventDefault();
  this.setState({
    currentName: {
      email:e.target.value,
      key: Date.now()
    }
  })
}

  addName(e) {
    e.preventDefault()
    const {nameList} = this.state;
    const inputName = this.inputName.value;

    const {emailList} = this.state
    const inputEmail = this.inputEmail.value

    this.setState({
      nameList: [...this.state.nameList,inputName],
      emailList: [...this.state.emailList,inputEmail] 
    })
    this.addForm.reset();
  }

  render() { 
    return ( 
      <div className='App'>
          <form onSubmit={this.addName} ref={(input) => {this.addForm = input}}>
          <label htmlFor='studentName'>Username : </label>
          <input type='text'
          className='formSize'
          placeholder='Insert your username'
          // value={this.state.currentName.name}
          id='studentName'
          ref={(input) => {this.inputName = input}}
          onChange={this.handleInput}
          ></input>

           <br />

          <label>Thesis's Title </label>
          <input type='text'
          className='formSize'
          placeholder='Insert your Thesis Title'></input>
          <br />

          <label>Subject </label>
          <select>
            <option>Philosophy</option>
            <option>Math</option>
            <option>Physic</option>
            <option>Computer</option>
          </select>
          <br />

          <label htmlFor='studentEmail'>Email </label>
          <input type='text'
          className='formSize'
          placeholder='eg: john@doe.com'
          id='studentEmail'
          ref={(email) => {this.inputEmail = email}}
          // value={this.state.currentName.email}
          onChange={this.handleEmail}
          ></input>

          <br />
          <input type='checkbox' required/>
          <label>I hereby declare that all provided information are true, and all the works are genuine</label>
          <br />
          <button type='submit' className='submit'>Submit</button>
          </form>
          <List nameList={this.state.nameList} emailList={this.state.emailList} />
      </div>
     );
  }
}
 
export default App;