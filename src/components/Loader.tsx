import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="loader-container">
      <div className="cosmic-loader">
        <div className="cosmic-rays">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="ray" style={{ '--i': i } as React.CSSProperties} />
          ))}
        </div>
        <div className="planet">
          <div className="ring"></div>
          <div className="surface"></div>
        </div>
      </div>
      <div className="loading-text">
        Entering Space...
      </div>
    </div>
  );
};

export default Loader;
