import { Link } from "react-router-dom";

const HeaderPreview = () => {
  return (
    <article className="header">
      <h1 className="header-font white-text h1-tag">
        Hi, I'm <br></br>
        <em className="blue-text">Saurabh</em>
        <br></br>Web Developer
      </h1>
      <p className="gray-text p-tag">Front End Development</p>
      <Link className="blue-text" to="/portfolio">
        Check My Work
      </Link>
    </article>
  );
};

export default HeaderPreview;
