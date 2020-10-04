
// UserForm is the form shown for the creation and editing of users
function UserForm({ user, updateUser, formMode, submitCallback, cancelCallback }) {

  let cancelClicked = (event) => {
    event.preventDefault()
    cancelCallback()
  }

  // The form will have two different sets of buttons:
  // * A "Create" button when creating, and 
  // * An "Update" and "Cancel" button when updating.
  let renderButtons = () => {
    if (formMode === "new") {
      return (
        <button type="submit" className="btn btn-primary">Create</button>
      )
    }
    else {
      return (
        <div className="form-group">
          <button type="submit" className="btn btn-primary">Save</button>
          <button type="submit" className="btn btn-danger" onClick={cancelClicked} >Cancel</button>
        </div>
      )
    }
  }

  // In this version, the Users component needs access to the state so it can initialize the 
  // form fields when the edit button is clicked.  Therefore we move the state up.

  let formSubmitted = (event) => {
    // Prevent the browser from re-loading the page.
    event.preventDefault()
    submitCallback()
  }

  return (
    <div className="user-form">
      <h1> User </h1>
      <form onSubmit={formSubmitted}>
        <div className="form-group">
          <img className="col-md-3" src={user.thumb}></img>
        </div>
        <div className="form-group">
          <label>First Name:</label>
          <input type="text" className="form-control" autoComplete='given-name' name="fname" id="fname"
            placeholder="First Name" value={user.fname} onChange={(event) => updateUser('fname', event.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="lname">Last Name:</label>
          <input type="text" className="form-control" autoComplete='family-name' name="lname" id="lname"
            placeholder="Last Name" value={user.lname} onChange={(event) => updateUser('lname', event.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address:</label>
          <input type="email" className="form-control" autoComplete='email' name="email" id="email"
            placeholder="name@example.com" value={user.email} onChange={(event) => updateUser('email', event.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="thumb">Avatar:</label>
          <select className="form-group" name='img' id="img">
            <option value="default.png">default.png</option>
          </select>
        </div>
        <br></br>
        {renderButtons()}
      </form>
    </div>
  )
}

function UserListItem({ user, onEditClicked, onDeleteClicked }) {
  return (
    <tr>
      <td className="col-md-3">{user.fname}</td>
      <td className="col-md-3">{user.lname}</td>
      <td className="col-md-3">{user.email}</td>
      <td className="col-md-3">
        <img className="col-md-3" src={user.thumb}></img>
      </td>
      <td className="col-md-3 btn-toolbar">
        <button className="btn btn-success btn-sm" onClick={event => onEditClicked(user)}>
          <i className="glyphicon glyphicon-pencil"></i> Edit
          </button>
        <button className="btn btn-danger btn-sm" onClick={event => onDeleteClicked(user.id)}>
          <i className="glyphicon glyphicon-remove"></i> Delete
          </button>
      </td>
    </tr>
  )
}

// UserList returns a table of the users and their respective properties
function UserList({ users, onEditClicked, onDeleteClicked }) {
  const userItems = users.map((user) => (
    <UserListItem key={user.id} user={user} onEditClicked={onEditClicked} onDeleteClicked={onDeleteClicked} />
  ));

  return (
    <div className="user-list">
      <table className="table table-hover">
        <thead>
          <tr>
            <th className="col-md-3">First Name</th>
            <th className="col-md-3">Last Name</th>
            <th className="col-md-3">Email</th>
            <th className="col-md-3">Avatar</th>
            <th className="col-md-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {userItems}
        </tbody>
      </table>
    </div>
  )
}

// Users is the entry-point for this app.
function Users() {
  // this data is the state of our react app
  let [userList, setUserList] = React.useState([
    { id: 0, lname: 'Shaney', fname: 'Slim', email: 'atotallyreal@mail.com', thumb: 'default.png'},
    { id: 1, lname: 'Jones', fname: 'Bob', email: 'donteventry@mail.com', thumb: 'default.png'},
    { id: 2, lname: 'Stacy', fname: 'Shane', email: 'areyoureadingthese@mail.com', thumb: 'default.png'}
  ])
  // formMode is a string used to denote the type of form submission, stored in state
  let [formMode, setFormMode] = React.useState("new")
  // empty user template
  let emptyUser = { fname: '', lname: '', email: '', thumb: 'default.png'}
  // store this template in the state
  let [currentUser, setCurrentUser] = React.useState(emptyUser)

  let updateUser = (field, value) => {
    let newUser = { ...currentUser }
    newUser[field] = value
    setCurrentUser(newUser)
  }
  // when form submitted
  let formSubmitted = () => {
    if (formMode === "new") {
      // the user id will be equal to the max found plus one
      currentUser.id = Math.max(...userList.map((item) => item.id)) + 1
      // add the user to the state
      setUserList([...userList, currentUser])
    }
    else {
      // the new user list is equal to the old one
      let newUserList = [...userList]
      // get the user id of the current user
      let userIndex = userList.findIndex((user) => user.id === currentUser.id)
      // set that user to now equal the current user
      newUserList[userIndex] = currentUser
      // set the state to the new user list
      setUserList(newUserList)

      // Run this code instead to see that you have to clone objects
      // when updating state.
      if (false) {
        console.log("Here!");
        userList[userIndex] = currentUser;
        setUserList(userList);
      }
    }
  }

  // when a edit button for a certain user is clicked, form mode is update
  let editClicked = (user) => {
    setFormMode("update")
    setCurrentUser(user)
  }
  // when cancel is clicked, form mode is new with an empty user
  let cancelClicked = () => {
    setFormMode("new")
    setCurrentUser(emptyUser)
  }
  // when delete clicked for user
  let deleteClicked = (id) => {
    setUserList(userList.filter((item) => item.id !== id))

    // reset the form after someone clicks delete.
    cancelClicked()
  }

  return (
    <div className="users">
      <h1> Users </h1>
      <UserForm formMode={formMode} user={currentUser} updateUser={updateUser}
        submitCallback={formSubmitted} cancelCallback={cancelClicked} />
      <div />
      <UserList users={userList} onEditClicked={editClicked} onDeleteClicked={deleteClicked} />
    </div>
  )
}

ReactDOM.render(<Users />, document.getElementById('root'));