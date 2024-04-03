import "./style.scss";

const index = ({ data: { title, body, id }, onDelete }) => {
  return (
    <div className="card">
      <h1>{title}</h1>
      <p>{body}</p>

      <button onClick={() => onDelete(id)} className="delete-btn">
        x
      </button>
    </div>
  );
};

export default index;
