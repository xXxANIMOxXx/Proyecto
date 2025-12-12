import React from 'react';

function ServiceCard({ title, text, img, bgColor }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100" style={{ backgroundColor: bgColor }}>
        {img && (
          <img src={img} className="card-img-top" alt={title} />
        )}
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
