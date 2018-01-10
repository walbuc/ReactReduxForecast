import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchWeather } from '../actions/index'

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {term: ''}
    //bind the context
    this.onInputChange = this.onInputChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  render() {
    return (
      <div>
      <form onSubmit={ this.onFormSubmit }>
        <input value={ this.state.term }
        placeholder= "Type a city name from US - like 'San francisco'"
        onChange={ this.onInputChange }
        className="form-control search-bar"
         />
      </form>
      </div>
    )
  }
  //bind the context or replace this function with an arrow function
  onInputChange(event) {
    this.setState({ term: event.target.value })
  }

  //fetch data
  onFormSubmit(event) {
    event.preventDefault()
    this.props.fetchWeather(this.state.term)
    this.setState({term: ''})
  }
}

//hook action creator fetchWeather to container
//map our dispatch to the props of our container
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch)
}
//We don need access to App state
export default connect(null, mapDispatchToProps)(SearchBar)
