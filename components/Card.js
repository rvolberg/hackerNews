const Card = (props) => {
  return (
    <div className="card mt-4">
      <div className="card-body">
        <div className="card-title">
          <h1 className="fs-5">{props.title}</h1>
          <div className="card-subtitle text-muted d-flex flex-column">
            <small>
              {props.type} by {props.author}
            </small>
            <small>{props.date}</small>
            <small>
              {props.score} {props.score > 1 ? "points" : "point"}
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
