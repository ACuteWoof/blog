import PostCard from "../Components/PostCard";
import { useState, useEffect } from "react";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const json = fetch(
      "https://raw.githubusercontent.com/ACuteWoof/blog-md/main/posts.json"
    ).then((res) => res.json());
    json.then((data) => {
      console.log(data);
      setPosts(data.posts);
    });
  }, []);

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
          />
        ))}
      </div>
    </>
  );
}

export default Home;
