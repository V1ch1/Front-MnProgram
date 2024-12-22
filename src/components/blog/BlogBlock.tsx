import React from "react";
import { useLocation } from "react-router-dom"; // Importa useLocation
import { pageData } from "../../data/data"; // Importamos los datos
import "./Blogblock.css";
import TypingEffect from "../TypingEffect/TypingEffect";

const BlogBlock: React.FC = () => {
  const location = useLocation(); // Obtén la ruta actual
  const slug = location.pathname.split("/")[1].toLowerCase(); // Extrae el slug de la URL

  // Comprobamos si el slug es una clave válida en pageData
  if (slug in pageData) {
    const currentPage = pageData[slug as keyof typeof pageData]; // Accedemos al objeto de la página
    const { blog } = currentPage;

    return (
      <div className="blog-block container">
        <div className="header">
          <TypingEffect
            fixedText="25 años"
            typingTexts={["dando soporte", "creciendo contigo", "a tu lado"]}
            fixedTextColor="#000000" // Negro para el texto fijo
            typingTextColor="#FD4B5C" // Naranja para el texto dinámico
          />
        </div>

        <div className="left-column">
          <img
            srcSet={`${blog.leftColumn.image}?w=480 480w, ${blog.leftColumn.image}?w=800 800w, ${blog.leftColumn.image}?w=1200 1200w`}
            sizes="(max-width: 640px) 480px, (max-width: 1024px) 800px, 1200px"
            src={blog.leftColumn.image}
            alt={blog.leftColumn.title} // Mejorar la accesibilidad con un alt descriptivo
            className="blog-image w-full sm:w-80 sm:h-60 lg:w-96 lg:h-72 object-cover"
            loading="lazy"
          />
          <h2 className="blog-title">{blog.leftColumn.title}</h2>
          <p
            className="blog-text"
            dangerouslySetInnerHTML={{ __html: blog.leftColumn.text }}
          />
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
            srcSet={`${blog.rightColumn.image}?w=480 480w, ${blog.rightColumn.image}?w=800 800w, ${blog.rightColumn.image}?w=1200 1200w`}
            sizes="(max-width: 640px) 480px, (max-width: 1024px) 800px, 1200px"
            src={blog.rightColumn.image}
            alt={blog.rightColumn.title} // Mejorar la accesibilidad con un alt descriptivo
            className="blog-image w-full sm:w-80 sm:h-60 lg:w-96 lg:h-72 object-cover"
            loading="lazy"
          />
          <h2 className="blog-title">{blog.rightColumn.title}</h2>
          <p
            className="blog-text"
            dangerouslySetInnerHTML={{ __html: blog.rightColumn.text }}
          />
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
  } else {
    return <div>Página no encontrada</div>;
  }
};

export default BlogBlock;
