/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import React, {
  useState,
} from 'react';
import {
  FaArrowDown, FaArrowLeft, FaArrowRight, FaArrowUp,
} from 'react-icons/fa';
import PropTypes from 'prop-types';
import MainImage from './MainImage';

function ImageGallery(props) {
  const {
    styles, count, setCount, description, setSelectedThumbnail, selectedThumbnail, view, setView,
  } = props;

  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(6);

  const [displayedThumbnails, setDisplayedThumbnails] = useState([0, 1, 2, 3, 4, 5, 6]);

  let galleryThumbnails;
  let mainImage;

  const handleDownClick = () => {
    if (selectedThumbnail < styles.length - 1) {
      setSelectedThumbnail(selectedThumbnail + 1);
      setCount(count + 1);
    }

    if (styles.length > 7) {
      if (end === styles.length - 1) {
        return;
      }

      const updatedThumbnails = [...Array(end - start + 1).keys()].map((i) => i + start);

      setDisplayedThumbnails(updatedThumbnails);
      setStart(start + 1);
      setEnd(end + 1);
    }
    setCount(count + 1);
  };

  const handleUpClick = () => {
    if (selectedThumbnail > 0) {
      setSelectedThumbnail(selectedThumbnail - 1);
      setCount(count - 1);
    }

    if (styles.length > 7) {
      if (start === 0) {
        return;
      }

      const updatedThumbnails = [...Array(end - start + 1).keys()].map((i) => i + start);

      setDisplayedThumbnails(updatedThumbnails);
      setStart(start - 1);
      setEnd(end - 1);
    }
    setCount(count - 1);
  };

  const handleThumbnailSelect = (index) => {
    setSelectedThumbnail(index);
    setCount(index);
  };

  if (styles[count]) {
    const photoUrl = styles[count].photos[0].url;

    galleryThumbnails = styles.map((style, index) => {
      const altTxt = `${style && style.name} ${description && description.category}`;
      const thumbnailUrl = style.photos[0].thumbnail_url;
      const thumbnailClass = selectedThumbnail === index ? 'ov-thumbnail-gallery-selected' : 'ov-thumbnail-gallery';
      const thumbnailKey = `TN-${style.style_id}`;

      if (displayedThumbnails.includes(index)) {
        return (
          <img
            alt={altTxt}
            className={thumbnailClass}
            key={thumbnailKey}
            src={thumbnailUrl}
            onClick={() => handleThumbnailSelect(index)}
            onKeyPress={() => handleThumbnailSelect(index)}
          />
        );
      }
    });
  }

  return (
    <div className="ov-img-carousel">

      <div className="ov-thumbnail-img-nav">
        <div className="ov-arrow">{(selectedThumbnail > 0 && view === 'default') && (<FaArrowUp className="ov-up-icon" onClick={handleUpClick} />)}</div>
        { galleryThumbnails}
        <div className="ov-arrow">{(selectedThumbnail < styles.length - 1 && view === 'default') && (<FaArrowDown className="ov-down-icon" onClick={handleDownClick} />)}</div>
      </div>
      <div className="ov-main-img-nav">
        {(count > 0) && (<FaArrowLeft className="ov-left-icon" onClick={handleUpClick} />)}
        <MainImage
          styles={styles}
          count={count}
          setCount={setCount}
          view={view}
          setView={setView}
        />
        {(count < styles.length - 1)
        && (<FaArrowRight className="ov-right-icon" onClick={handleDownClick} />)}
      </div>
    </div>
  );
}

ImageGallery.propTypes = {
  count: PropTypes.number,
  styles: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.array,
  ]),
  setCount: PropTypes.func.isRequired,
  description: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.array,
  ]).isRequired,
  setSelectedThumbnail: PropTypes.func.isRequired,
  selectedThumbnail: PropTypes.number.isRequired,
  view: PropTypes.string.isRequired,
  setView: PropTypes.func.isRequired,
};

ImageGallery.defaultProps = {
  count: 0,
  styles: [],
};

export default ImageGallery;
