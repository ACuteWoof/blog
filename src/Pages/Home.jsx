import PostCard from "../Components/PostCard";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (window.location.href.includes("?")) {
      navigate(window.location.href.split("?")[1]);
    }
    const json = fetch(
      "https://raw.githubusercontent.com/ACuteWoof/blog-md/main/posts.json"
    ).then((res) => res.json());
    json.then((data) => {
      console.log(data);
      setPosts(data.posts);
    });
  }, [navigate]);

  return (
    <>
      <div class="flex flex-wrap justify-evenly items-stretch py-10">
        {posts.map((post) => (
          <PostCard
            key={post.title}
            image={post.image}
            title={post.title}
            description={post.content}
            category={post.category}
            link={`/view/${post.loc}`}
          />
        ))}
      </div>
    </>
  );
}

export default Home;
