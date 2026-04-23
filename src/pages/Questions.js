import { useState, useEffect } from "react";

function Questions() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [questions, setQuestions] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user?.id;
  const userName = user?.name;

  // GET QUESTIONS
  const fetchQuestions = async () => {
    const res = await fetch("http://localhost:5000/api/questions");
    const data = await res.json();
    setQuestions(data);
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  // POST QUESTION
  const askQuestion = async () => {
    await fetch("http://localhost:5000/api/questions/ask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        description,
        userId,
        userName
      })
    });

    setTitle("");
    setDescription("");
    fetchQuestions();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Ask a Question</h2>

      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />

      <button onClick={askQuestion}>Post Question</button>

      <hr />

      <h2>All Questions</h2>

      {questions.map((q) => (
        <div key={q._id} style={{
          border: "1px solid #ddd",
          padding: "15px",
          margin: "10px",
          borderRadius: "10px"
        }}>
          
          <h3>{q.title}</h3>
          <p>{q.description}</p>
          <small>Posted by: {q.userName}</small>

          <h4>Answers</h4>

          {q.answers?.map((a, i) => (
            <p key={i}>
              <b>{a.userName}</b>: {a.text}
            </p>
          ))}

          <AnswerBox questionId={q._id} refresh={fetchQuestions} />
        </div>
      ))}
    </div>
  );
}

// ANSWER COMPONENT
function AnswerBox({ questionId, refresh }) {
  const [text, setText] = useState("");

  const user = JSON.parse(localStorage.getItem("user"));

  const submitAnswer = async () => {
    await fetch(`http://localhost:5000/api/questions/${questionId}/answer`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text,
        userId: user?.id,
        userName: user?.name
      })
    });

    setText("");
    refresh();
  };

  return (
    <div>
      <input
        placeholder="Write answer..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={submitAnswer}>Answer</button>
    </div>
  );
}

export default Questions;