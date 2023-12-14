import React from "react";

const ItemResultsLoading = () => {
  const loading = [...Array(10).keys()];
  return (
    <React.Fragment>
      {loading.map(item => (
        <article className="docker-result docker-result-loading" key={item}>
          <figure>
            <div className="sk-wave">
              <div className="sk-rect sk-rect1" />
              <div className="sk-rect sk-rect2" />
              <div className="sk-rect sk-rect3" />
              <div className="sk-rect sk-rect4" />
              <div className="sk-rect sk-rect5" />
            </div>
          </figure>
          <div className="docker-result-info">
            <h3>&nbsp;</h3>
            <p>&nbsp;</p>
            <span className="star-ratting-new">&nbsp;</span>
          </div>
        </article>
      ))}
    </React.Fragment>
  );
};

export default ItemResultsLoading;
