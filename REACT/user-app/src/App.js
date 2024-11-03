import './App.css';
import CreateUser  from './components/CreateUser';
import UserList from "./components/UserList";

function App() {
  return (
    <div className="App">
      <h2>Create User</h2>
      <CreateUser/>
      <h2>User List</h2>
      <UserList />
    </div>
  );
}

export default App;
