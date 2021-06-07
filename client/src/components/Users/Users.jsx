import React from 'react';
import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/app';
import User from './User.jsx';
import AddUser from './AddUser.jsx';
import EditUser from './EditUser.jsx';
import SearchUsers from './SearchUsers.jsx';
import UserInfo from './UserInfo.jsx';
import getUsers from './helpers/getUsers.js';
import findUsers from './helpers/findUsers.js';
import submitUser from './helpers/submitUser.js';
import editUser from './helpers/editUser.js';

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.auth = firebase.auth();
    this.state = {
      users: [],
      display: [],
      length: 5,
      searching: false,
      modal: false,
      edit: false,
      user: {}
    }
    this.loader = React.createRef(null);
    this.updateUsers = this.updateUsers.bind(this);
    this.loadMore = this.loadMore.bind(this);
    this.addUser = this.addUser.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.submitInfo = this.submitInfo.bind(this);
    this.showEditModal = this.showEditModal.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  componentDidMount() {
    getUsers().then(data => {
      const sort = findUsers('', data, this.props.location);
      this.setState({
      users: data,
      display: sort.slice(0, 5)
      })
    })
  }

  submitInfo (data) {
    console.log('DATA',data);
    submitUser(data).then(res => {
      console.log('RES', res);
      const sort = findUsers('', res, this.props.location);
      this.setState({
        users: res,
        display: sort.slice(0, this.state.length)
        })
    })
  }

  handleEdit (id, path, data) {
    editUser(id, path, data).then(results => {
      const sort = findUsers('', results, this.props.location);
      this.setState({
      users: results,
      display: sort.slice(0, this.state.length)
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
      modal: false,
      edit: false
    })
  }

  showEditModal (user) {
    this.setState({
      edit: !this.state.edit,
      modal: false,
      user: user
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
          {this.state.edit
          ? <EditUser
              closeModal={this.showEditModal}
              user={this.state.user}
              handleEdit={this.handleEdit}/>
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
          {this.state.display.map((user, index) => <User key={index} user={user} showEditModal={this.showEditModal}/>)}
        </ul>
        <div ref={this.loader}>
        </div>
      </div>
    )
  }
}

export default Users;
