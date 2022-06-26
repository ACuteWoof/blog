import { useNavigate } from "react-router-dom";

function PostCard(props) {
  const { image, title, description, category, link } = props;
  const navigate = useNavigate();

  return (
    <div
      class="card w-96 bg-base-200 shadow-xl transition ease-in-out duration-150 hover:shadow-lg"
      onClick={() => {
        navigate(link);
      }}
    >
      <figure>
        <img
          src={
            image
              ? image
              : `https://source.unsplash.com/random/400x225/?${category}`
          }
          alt={title}
        />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{title}</h2>
        <p>{description}</p>
        <div class="card-actions justify-end">
          <div class="badge badge-outline">{category}</div>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
