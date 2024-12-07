import React from "react";
import { useLocation } from "react-router-dom"; // Importa useLocation
import pageData from "../../data/data"; // Importamos los datos
import "./Blogblock.css";
import TypingEffect from "../TypingEffect/TypingEffect";

const BlogBlock: React.FC = () => {
  const location = useLocation(); // Obtén la ruta actual
  const slug = location.pathname.split("/")[1].toLowerCase(); // Extrae el slug de la URL

  // Busca los datos correspondientes al slug en pageData
  const currentPage = pageData[slug];

  // Si no existe la página, mostramos un mensaje de error o algo adecuado
  if (!currentPage) {
    return <div>Página no encontrada</div>;
  }

  const { blog } = currentPage;

  return (
    <div className="blog-block container">
      <div className="header">
        <TypingEffect
          fixedText="25 años"
          typingTexts={["dando soporte", "creciendo contigo", "a tu lado"]}
        />
      </div>

      <div className="left-column">
        <img
          src={blog.leftColumn.image}
          alt="Imagen de la izquierda"
          className="blog-image"
        />
        <h2 className="blog-title">{blog.leftColumn.title}</h2>
        <p className="blog-text">{blog.leftColumn.text}</p>
        <a
          href={blog.leftColumn.button.url}
          target="_blank"
          className="blog-button"
        >
          {blog.leftColumn.button.text}
        </a>
      </div>

      <div className="right-column">
        <img
          src={blog.rightColumn.image}
          alt="Imagen de la derecha"
          className="blog-image"
        />
        <h2 className="blog-title">{blog.rightColumn.title}</h2>
        <p className="blog-text">{blog.rightColumn.text}</p>
        <a
          href={blog.rightColumn.button.url}
          target="_blank"
          className="blog-button"
        >
          {blog.rightColumn.button.text}
        </a>
      </div>
    </div>
  );
};

export default BlogBlock;
