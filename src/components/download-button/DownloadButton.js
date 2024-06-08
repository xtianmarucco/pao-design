import React from 'react';

const DownloadButton = ({ filePath, fileName }) => {
  return (
    <a href={filePath} download={fileName}>
      <button className="download-button">
        Descargar PDF
      </button>
    </a>
  );
};

export default DownloadButton;
