import { useState } from "react";

function AnswerBox({ questionId, refresh }) {
  const [text, setText] = useState("");

  const submitAnswer = async () => {
    if (!text) {
      alert("Please write an answer");
      return;
    }

    try {
      const res = await fetch(`http://localhost:5000/api/questions/${questionId}/answer`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          text,
          userId: "123",
          userName: "Gabriella"
        })
      });

      const data = await res.text();
      alert(data);

      setText("");
      refresh();
    } catch (err) {
      console.log(err);
      alert("Error submitting answer");
    }
  };

  return (
    <div style={{ marginTop: "10px" }}>
     <input
  placeholder="Write an answer..."
  value={text}
  onChange={(e) => setText(e.target.value)}
  style={{
    padding: "10px",
    width: "70%",
    borderRadius: "8px",
    border: "none",
    marginTop: "10px"
  }}
/>

<button
  onClick={submitAnswer}
  style={{
    padding: "10px",
    marginLeft: "10px",
    borderRadius: "8px",
    border: "none",
    background: "#ffffff",
    cursor: "pointer"
  }}
>
  Reply
</button>
    </div>
  );
}

export default AnswerBox;