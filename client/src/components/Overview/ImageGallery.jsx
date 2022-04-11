/* eslint-disable no-useless-return */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, {
  useState,
  // useEffect,
  useContext,
} from 'react';
import {
  FaArrowDown, FaArrowLeft, FaArrowRight, FaArrowUp,
} from 'react-icons/fa';
import PropTypes from 'prop-types';

function ImageGallery(props) {
  const {
    styles, count, setCount, description, setSelectedThumbnail, selectedThumbnail,
  } = props;

  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(6);

  const [displayedThumbnails, setDisplayedThumbnails] = useState([0, 1, 2, 3, 4, 5, 6]);

  let galleryThumbnails;
  let mainImage;

  const handleMainClick = () => {
    console.log('Hello World');
  };

  const handleDownClick = () => {
    if (selectedThumbnail < styles.length - 1) {
      setSelectedThumbnail(selectedThumbnail + 1);
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
  };

  const handleUpClick = () => {
    if (selectedThumbnail > 0) {
      setSelectedThumbnail(selectedThumbnail - 1);
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
  };

  const handleThumbnailSelect = (index) => {
    setSelectedThumbnail(index);
  };

  if (styles[count]) {
    const photoUrl = styles[count].photos[0].url;

    galleryThumbnails = styles.map((style, index) => {
      const altTxt = `${style.name} ${description.category}`;
      const thumbnailUrl = style.photos[0].thumbnail_url;
      const thumbnailClass = selectedThumbnail === index ? 'ov-thumbnail-gallery-selected' : 'ov-thumbnail-gallery';
      const thumbnailKey = `TN-${style.style_id}`;

      if (displayedThumbnails.includes(index)) {
        return (<img alt={altTxt} className={thumbnailClass} key={thumbnailKey} src={thumbnailUrl} onClick={() => handleThumbnailSelect(index)} />);
      }
    });

    mainImage = <img alt="placeholder text" className="ov-main-img" onClick={handleMainClick} key={count} src={photoUrl} />;
  }

  return (
    <div className="ov-img-carousel">
      <div className="ov-thumbnail-img-nav">
        {(selectedThumbnail > 0) && (<FaArrowUp className="ov-up-icon" onClick={handleUpClick} />)}
        { galleryThumbnails}
        {(selectedThumbnail < styles.length - 1) && (<FaArrowDown className="ov-down-icon" onClick={handleDownClick} />)}
      </div>
      <div className="ov-main-img-nav">
        {(count > 0) && (<FaArrowLeft className="ov-left-icon" onClick={() => setCount(count - 1)} />)}
        { mainImage}
        {(count < styles.length - 1)
        && (<FaArrowRight className="ov-right-icon" onClick={() => setCount(count + 1)} />)}
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
};

ImageGallery.defaultProps = {
  count: 0,
  styles: [],
};

export default ImageGallery;
