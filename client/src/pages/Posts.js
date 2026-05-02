import { useState, useEffect } from "react";

function Posts() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [type, setType] = useState("notes");
  const [subject, setSubject] = useState("");
  const [posts, setPosts] = useState([]);

  const userId = "123";

  const fetchPosts = async () => {
    const res = await fetch("http://localhost:5000/api/posts");
    const data = await res.json();
    setPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const createPost = async () => {
    const res = await fetch("http://localhost:5000/api/posts/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ title, content, type, subject, userId })
    });

    const msg = await res.text();
    alert(msg);

    setTitle("");
    setContent("");
    setSubject("");
    fetchPosts();
  };

  return (
  <div className="posts-container">
    <div className="posts-box">

      <h2>📚 Share Notes / Assignments</h2>

      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />

      <select onChange={(e) => setType(e.target.value)}>
        <option value="notes">Notes</option>
        <option value="assignment">Assignment</option>
      </select>

      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <button onClick={createPost}>Post</button>

      <hr />

      <h3>All Posts</h3>

      {posts.map((p) => (
        <div key={p._id} className="post-card">
          <h4>{p.title}</h4>
          <p>{p.content}</p>
          <small>{p.type} | {p.subject}</small>
        </div>
      ))}

    </div>
  </div>
);
  
}

export default Posts;