// import { useEffect, useState } from "react";
// import Post from "./Post";

// export default function Posts() {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then((res) => res.json())
//       .then((data) => setPosts(data));
//   }, []);
//   return (
//     <div>
//       <h4>Posts:{posts.length} </h4>
//       {posts.map((post) => (
//         <Post post={post}></Post>
//       ))}
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import Post from "./Post";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Failed to fetch posts:", error));
  }, []);

  return (
    <div>
      <h4>Posts: {posts.length}</h4>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
