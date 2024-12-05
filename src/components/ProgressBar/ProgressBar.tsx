import React from "react";
import "./progressBar.css";

interface ProgressBarProps {
  percentage: number;
  title: string;
}

// Componente de una barra individual
const ProgressBar: React.FC<ProgressBarProps> = ({ percentage, title }) => {
  return (
    <div className="progress-bar-wrapper">
      <p className="progress-bar-title">{title}</p>
      <div className="progress-bar-container">
        <div
          className="progress-bar-fill"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

// Interfaz para múltiples barras
interface ProgressBarsProps {
  data: { percentage: number; title: string }[]; // Array de objetos con datos de las barras
}

// Componente para múltiples barras
const ProgressBars: React.FC<ProgressBarsProps> = ({ data }) => {
  return (
    <>
      {data.map((item, index) => (
        <ProgressBar
          key={index}
          percentage={item.percentage}
          title={item.title}
        />
      ))}
    </>
  );
};

export default ProgressBars;
