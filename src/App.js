import "./styles.css";
import useData from "./Hooks/useJSONData";
function App() {
  let { users, posts } = useData();
  return (
    <div className="App">
      <h1>users</h1>
      {users.map((user) => {
        return <p>{user.name}</p>;
      })}
      <h2>Post </h2>
      {posts.map((post) => {
        return <p>{post.title}</p>;
      })}
    </div>
  );
}
export default App;
