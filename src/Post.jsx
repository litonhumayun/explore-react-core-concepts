// import "./Friends.css";

// export default function Posts({ post }) {
//   const [userId, id, title, body] = post;
//   return (
//     <div className="box">
//       <h4>Posts: {title}</h4>
//       <p>User: {userId}</p>
//       <p>Id: {id}</p>
//       <p>Posts: {body}</p>
//     </div>
//   );
// }
import "./Friends.css";

export default function Post({ post }) {
  const { userId, id, title, body } = post;

  return (
    <div className="box">
      <h4>Title: {title}</h4>
      <p>User: {userId}</p>
      <p>Id: {id}</p>
      <p>Content: {body}</p>
    </div>
  );
}
