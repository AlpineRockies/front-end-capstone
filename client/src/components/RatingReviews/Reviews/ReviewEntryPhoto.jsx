import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import {
  StyledOverlay,
  StyledModal,
  ThumbnailImg,
  ExpandImg,
} from '../Style/RatingReviewStyle';

function ReviewEntryPhoto({ photo }) {
  const [photoModal, setPhotoModal] = useState(false);

  return (
    <div className="RR-entry-photo">
      <div>
        <ThumbnailImg src={photo} onClick={() => setPhotoModal(true)} />
      </div>
      {createPortal(
        <div>
          {photoModal ? (
            <StyledOverlay>
              <StyledModal>
                <ExpandImg src={photo} onClick={() => setPhotoModal(false)} />
              </StyledModal>
            </StyledOverlay>
          ) : null}
        </div>,
        document.getElementById('portal'),
      )}
    </div>
  );
}

export default ReviewEntryPhoto;
