import { useState } from "react";

const Tour = ({ item, handleDelete }) => {
  const { id, name, info, image, price } = item;

  const [readMore, setReadmore] = useState(false);

  return (
    <div className="single-tour">
      <img className="img" src={image} alt={name} />
      <div className="tour-info">
        <h5>{name}</h5>
        <p>{readMore ? info : `${info.substring(0, 200)}...`}
        <button
          type="button"
          onClick={() => setReadmore(!readMore)}
          className="info-btn"
        >
          {readMore ? `Show Less..`: `Read More`}
        </button>
        </p>
        <button
          type="button"
          onClick={() => handleDelete(id)}
          className="btn btn-block delete-btn"
        >
          Not Interested
        </button>
      </div>

      <p className="tour-price">{price}</p>
    </div>
  );
};

export default Tour;
