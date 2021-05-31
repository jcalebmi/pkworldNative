import React from 'react';
import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/app';
import User from './User.jsx';
import AddUser from './AddUser.jsx';
import SearchUsers from './SearchUsers.jsx';
import UserInfo from './UserInfo.jsx';
import getUsers from './helpers/getUsers.js';
import findUsers from './helpers/findUsers.js';
import submitUser from './helpers/submitUser.js';

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.auth = firebase.auth();
    this.state = {
      users: [],
      display: [],
      length: 5,
      searching: false,
      modal: false
    }
    this.loader = React.createRef(null);
    this.updateUsers = this.updateUsers.bind(this);
    this.loadMore = this.loadMore.bind(this);
    this.addUser = this.addUser.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.submitInfo = this.submitInfo.bind(this);
  }

  componentDidMount() {
    getUsers().then(data => {
      this.setState({
      users: data,
      display: data.slice(0, 5)
      })
    })
  }

  submitInfo (data) {
    submitUser(data).then(res => {
      this.setState({
        users: res,
        display: res.slice(0, 5)
        })
    })
  }

  updateUsers (search, length) {
    let isSearching = false;
    if (length > 0) {
      isSearching = true;
      this.setState({
        display: search.slice(0),
        searching: isSearching,
      });
    } else {
      this.setState({
        display: search.slice(0, this.state.length),
        searching: isSearching,
      })
    }
  }

  addUser (e) {
    if (this.state.modal) {
      this.closeModal();
      return;
    }
    this.setState({
      modal: true
    });
  }
  closeModal () {
    this.setState({
      modal: false
    })
  }
/////////////////////////////////
  loadMore (entries) {
    const target = entries[0];
    if (target.isIntersecting && this.state.display.length !== this.state.users.length) {
      if (!this.state.searching) {
        const sort = findUsers('', this.state.users, this.props.location);
        this.setState({
          length: this.state.length + 2,
          display: sort.slice(0, this.state.length + 2)
        })
      }
    }
  };

  componentDidUpdate () {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: .25,
    };
    const observer = new IntersectionObserver(this.loadMore, options);

    if (this.loader && this.loader.current) {
      observer.observe(this.loader.current);
    }
    return () => observer.unobserve(this.loader.current);
  };
//////////////////////////////

  render() {
    return (
      <div id="users">
        {this.state.modal
          ? <AddUser
              closeModal={this.closeModal}
              modal={this.state.modal}
              submitInfo={this.submitInfo}
              />
          : null}
        <UserInfo />
        <ul className="dataLists">
         <div className="formsContainer">
          <SearchUsers
            addUser={this.addUser}
            changeFeed={this.props.changeFeed}
            users={this.state.users}
            updateUsers={this.updateUsers}
            location={this.props.location}/>
          </div>
          {this.state.display.map((user, index) => <User key={index} user={user}/>)}
        </ul>
        <div ref={this.loader}>
        </div>
      </div>
    )
  }
}

export default Users;