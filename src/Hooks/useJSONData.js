import { useState, useEffect } from "react";

function useJSONData() {
  const [users, setUser] = useState([]);
  const [posts, setPosts] = useState([]);

  const getUser = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUser(data));
  };

  const getPost = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  };

  useEffect(() => {
    getPost();
    getUser();
  }, []);

  return { users, posts };
}
export default useJSONData;
