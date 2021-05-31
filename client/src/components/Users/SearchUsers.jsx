import React from 'react';
import findUsers from './helpers/findUsers.js';
import firebase from 'firebase';
import 'firebase/auth';

class SearchUsers extends React.Component {
  constructor(props) {
    super(props);
    this.auth = firebase.auth();
    this.state = {
      search: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (e) {
    const search = findUsers(e.target.value, this.props.users, this.props.location);
    this.props.updateUsers(search, e.target.value.length);

    this.setState({
      search: e.target.value
    })
  }

  render () {
    return (
      <div className="forms">
        <div className="add">
            {this.auth.currentUser
              ? <button
                  onClick={this.props.addUser}>Join List</button>
              : <span
                  className="seeMore signIn"
                  onClick={() => {this.props.changeFeed('Profile')}}>Sign in to join list
                </span>}
          </div>
        <form className="search">
          <input
            className="search"
            type="text"
            value={this.state.search}
            placeholder="Search Events"
            onChange={this.handleChange} />
        </form>
      </div>
    )
  }
}

export default SearchUsers;