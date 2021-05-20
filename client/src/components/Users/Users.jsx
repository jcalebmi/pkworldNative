import React from 'react';
import User from './User.jsx';
import AddUser from './AddUser.jsx';
import getUsers from './helpers/getUsers.js';
import findUsers from './helpers/findUsers.js';
import submitUser from './helpers/submitUser.js';

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      display: [],
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

  updateUsers (search) {
    this.setState({
      display: search.slice(0, this.state.length)
    })
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

  };

  componentDidUpdate () {

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
        <ul className="dataLists">
          {this.state.display.map((user, index) => <User key={index} user={user}/>)}
        </ul>
        <div ref={this.loader}>
          <button onClick={this.addUser}>Join</button>
        </div>
      </div>
    )
  }
}

export default Users;