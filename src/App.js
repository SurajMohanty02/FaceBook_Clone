import logo from "./logo.svg";
import "./App.css";
import Header from "./Facebook/Header";
import Sidebar from "./Facebook/Sidebar";
import Post from "./Facebook/Post";
import Chatbar from "./Facebook/Chatbar";
import Chatbox from "./Facebook/Chatbox";
import { useStatevalue } from "./Facebook/StateProvider";
import Login from "./Facebook/Login";
import { auth } from "./Facebook/firebase";

function App() {
  const [{ user }, dispatch] = useStatevalue();

  return (
    <section>
      {user ? (
        <div className="App">
          <Header />
          <div className="facebook">
            <Sidebar />
            <Post />
            <Chatbar accessstate={"false"} />
          </div>
        </div>
      ) : (
        <Login />
      )}
    </section>
  );
}

export default App;
