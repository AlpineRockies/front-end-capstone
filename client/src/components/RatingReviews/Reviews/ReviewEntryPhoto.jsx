import React, { useState } from 'react';

function ReviewEntryPhoto({ photo }) {
  const [photoModal, setPhotoModal] = useState(false);

  const imgThumb = {
    height: '60px',
    width: '60px',
    borderRadius: '50px',
    padding: '10px',
    flex: '1 20%',
  };

  const imgExpand = {
    borderRadius: '10px',
    maxHeight: '600px',
    maxWidth: '800px',
    margin: 'auto',
    backdropFilter: 'blur( 2.5px )',
  };

  const overlayStyle = {
    position: 'fixed',
    zIndex: 1020,
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    background: 'rgba(255, 255, 255, 0.75)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };
  const modalStyle = {
    background: 'white',
    width: '45rem',
    maxWidth: 'calc(100vw - 2rem)',
    maxHeight: 'calc(100vh - 2rem)',
    overflowY: 'auto',
    position: 'relative',
    border: '1px solid #ccc',
    borderRadius: '0.3rem',
  };

  return (
    <div className="RR-entry-photo">
      <div>
        <img src={photo} style={imgThumb} onClick={() => setPhotoModal(true)} />
      </div>
      <div>
        {photoModal ? (
          <div style={overlayStyle}>
            <div style={modalStyle}>
              <img
                src={photo}
                style={imgExpand}
                onClick={() => setPhotoModal(false)}
              />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default ReviewEntryPhoto;
