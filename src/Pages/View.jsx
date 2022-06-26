import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

function View() {
  const { id } = useParams();

  const [post, setPost] = useState("");
  const [err, setErr] = useState(null);

  useEffect(() => {
    const post = fetch(
      `https://raw.githubusercontent.com/ACuteWoof/blog-md/main/posts/${id}.md`
    ).then((res) => res.text());
    post.then((data) => {
      if (data === "404: Not Found") {
        setErr(404);
      }
      setPost(data);
    });
  }, [id]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "3rem 1rem",
      }}
    >
      <article class="prose">
        {err === 404 ? (
          <h1>404: Not Found</h1>
        ) : (
          <ReactMarkdown>{post}</ReactMarkdown>
        )}
      </article>
    </div>
  );
}

export default View;
