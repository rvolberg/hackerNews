const CardFull = (props) => {
  return (
    <div className="card card-full mt-4">
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
        <div className="card-text">
          {props.text ? props.text : ""}
          {props.url ? (
            <p>
              <a className="card-link" href={props.url}>
                {props.url}
              </a>
            </p>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default CardFull;
