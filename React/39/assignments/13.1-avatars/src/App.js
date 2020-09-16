import React, { Component } from 'react';
import api from './api/api';
import PersonCardComponent from './components/PersonCardComponent';
import SearchBar from './components/SearchBar';
import './App.css';
class App extends Component {

  state = {
    avatars: [],
    search: ''
  }
  componentDidMount = () => {
    this.getAvatars();
  }
  getAvatars = async () => {
    try {
      const data = await api.get();
      if (data.status != 200)
        throw "not found " + data.status;

      const newAvatars = this.mapAvatarsToCards(data.data);
      this.setState({ avatars: newAvatars });
    } catch (e) {
      console.log(e);
    }

  }

  mapAvatarsToCards = (data) => {
    const cardsDataArr = data.map(p => {
      const data = {
        firstname: p.first_name,
        lastname: p.last_name,
        id: p.avatars_origin.id,
        src: p.avatars[1].url,

      }
      return data;
    });
    console.log(cardsDataArr);
    return cardsDataArr;
  }

  onFormSubmit = () => {
    console.log("submit");
  }
  onSearchChange = (e) => {this.setState({search:e.target.value.toLocaleLowerCase()})}
  render() {
  
    const persons = this.state.avatars
    .filter(p => {
      console.log(p);
      if(`${p.firstname}${p.lastname}`.toLocaleLowerCase().includes(this.state.search))
      return true;

      return false;
    })
    .map(p => {
      return <PersonCardComponent key={p.id} data={p} value={this.state.search}/>
    });
    return (
      <div className='App'>
      <SearchBar onFormSubmit={this.onFormSubmit} onChange={this.onSearchChange}/>
      {persons.length>0 ? 
       ( <div className="container" style={{ display: "grid", gridTemplateColumns: '1fr 1fr 1fr 1fr', justifyItems: 'center', background: '#333' }}>
        {persons}
        </div>)
        :<h1 >No Results</h1>}
      </div>
    );
  }
}
export default App;