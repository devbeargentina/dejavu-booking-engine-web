import React from "react";
import NavigationArrowImg from "../../../assets/images/web/right-menu-arrow.png";
const css = `

.breadcrumb {
    padding: 0px;
    background: transparent;
    list-style: none;
    overflow: hidden;
    margin-top: 3px;
  }
  
  .breadcrumb>li+li:before {
    padding: 0;
  }
  
  .breadcrumb li {
    float: left;
  }
  
  .breadcrumb li.active a {
    background: #6c757d;
  }
  
  .breadcrumb li.completed a {
    background: rgb(241, 130, 71);
  }
  
  .breadcrumb li.active a:after {
    border-left: 30px solid #6c757d;
  }
  
  .breadcrumb li.completed a:after {
    border-left: 30px solid rgb(241, 130, 71);
  }
  
  .breadcrumb li a {
    color: white;
    text-decoration: none;
    padding: 5px 0 5px 45px;
    position: relative;
    display: block;
    float: left;
  }
  
  .breadcrumb li a:hover {
    color: white;
    cursor: pointer;
  }
  
  .breadcrumb li a:after {
    content: " ";
    display: block;
    width: 0;
    height: 0;
    border-top: 50px solid transparent;
    /* Go big on the size, and let overflow hide */
    border-bottom: 50px solid transparent;
    border-left: 30px solid hsla(0, 0%, 83%, 1);
    position: absolute;
    top: 50%;
    margin-top: -50px;
    left: 100%;
    z-index: 2;
  }
  
  .breadcrumb li a:before {
    content: " ";
    display: block;
    width: 0;
    height: 0;
    border-top: 50px solid transparent;
    /* Go big on the size, and let overflow hide */
    border-bottom: 50px solid transparent;
    border-left: 30px solid white;
    position: absolute;
    top: 50%;
    margin-top: -50px;
    margin-left: 1px;
    left: 100%;
    z-index: 1;
  }
  
  .breadcrumb li:first-child a {
    padding-left: 15px;
  }
  
.breadcrumb1 {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  margin-top: 10px;
}

.breadcrumb1 ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
}

.breadcrumb1 li {
  display: inline-block;
  float: left;
  margin-right: 10px;
}

.breadcrumb1 a {
  color: #000;
  text-decoration: none;
}

.breadcrumb1 .arrow {
  margin: 0 10px;
}
`;
const Breadcrumb = ({ items }) => {
  return (
    <div className="col-lg-12 mt-5">
      <div className="col-lg-12 mb-2 pb-3 border-bottom border-secondary">
        {items.map((item, index) => (
          <>
            <small className="text-uppercase text-dark">
              <a className="text-dark" href={`/${item}`}>
                {item}
              </a>
            </small>
            {index !== items.length - 1 && (
              <img src={NavigationArrowImg} alt="" className="ml-3 mr-3" />
            )}
            {/* <small>STATE</small>
            <img src={NavigationArrowImg} alt="" className="ml-3 mr-3" />
            <small>GUJARAT</small>
            <img src={NavigationArrowImg} alt="" className="ml-3 mr-3" />
            <small>EXPERIENCE KUTCH</small> */}
          </>
        ))}
      </div>
      {/* <div className="breadcrumb1 pb-2 border-bottom border-secondary">
        <style>{css}</style>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <a href={`/${item}`}>{item}</a>
              {index !== items.length - 1 && <i className="arrow">&gt;</i>}
            </li>
          ))}
        </ul>
      </div> */}
    </div>
  );
};

export default Breadcrumb;
