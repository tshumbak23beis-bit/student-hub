import { useState, useEffect } from "react";
import AnswerBox from "../components/AnswerBox";

function Questions() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [questions, setQuestions] = useState([]);

  const userId = "123";

  const fetchQuestions = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/questions");
      const data = await res.json();
      setQuestions(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  const askQuestion = async () => {
    if (!title || !description) {
      alert("Please fill all fields");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/questions/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ title, description, userId })
      });

      const data = await res.text();
      alert(data);

      setTitle("");
      setDescription("");
      fetchQuestions();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #667eea, #764ba2)",
      padding: "40px",
      fontFamily: "Segoe UI, sans-serif"
    }}>

      <div style={{
        maxWidth: "850px",
        margin: "auto",
        backdropFilter: "blur(15px)",
        background: "rgba(255,255,255,0.15)",
        padding: "30px",
        borderRadius: "20px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
        color: "white"
      }}>

        <h1 style={{
          textAlign: "center",
          marginBottom: "20px",
          fontWeight: "600"
        }}>
          ✨ Ask Something ✨
        </h1>

        <input
          placeholder="Title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "10px",
            borderRadius: "10px",
            border: "none",
            outline: "none"
          }}
        />

        <textarea
          placeholder="Write your question..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            borderRadius: "10px",
            border: "none",
            outline: "none"
          }}
        />

        <button
          onClick={askQuestion}
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "10px",
            border: "none",
            background: "#ffffff",
            color: "#333",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "0.3s"
          }}
        >
          🚀 Post Question
        </button>

        <hr style={{ margin: "25px 0", opacity: 0.3 }} />

        <h2>💬 Questions</h2>

        {questions.length === 0 ? (
          <p>No questions yet...</p>
        ) : (
          questions.map((q) => (
            <div key={q._id} style={{
              background: "rgba(255,255,255,0.2)",
              padding: "15px",
              borderRadius: "15px",
              marginTop: "15px",
              backdropFilter: "blur(10px)"
            }}>
              <h3>{q.title}</h3>
              <p>{q.description}</p>

              <h4>Answers</h4>

              {q.answers && q.answers.length > 0 ? (
                q.answers.map((a, i) => (
                  <p key={i}>
                    💬 <b>{a.userName}</b>: {a.text}
                  </p>
                ))
              ) : (
                <p style={{ opacity: 0.7 }}>No answers yet</p>
              )}

              <AnswerBox questionId={q._id} refresh={fetchQuestions} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Questions;