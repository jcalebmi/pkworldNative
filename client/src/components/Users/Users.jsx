import React from 'react';
import User from './User.jsx';

class Users extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="users">
        <ul className="dataLists">
          {this.props.users.map((user, index) => <User key={index} user={user}/>)}
        </ul>
      </div>
    )
  }
}

export default Users;