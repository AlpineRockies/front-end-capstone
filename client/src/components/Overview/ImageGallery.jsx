/* eslint-disable react/no-array-index-key */
import React, {
// useState,
// useEffect,
//  useContext
} from 'react';
import {
  FaArrowDown, FaArrowLeft, FaArrowRight, FaArrowUp,
} from 'react-icons/fa';
import PropTypes from 'prop-types';

function ImageGallery(props) {
  const { styles, count, counter } = props;
  // const [
  //   count,
  //   // setCount
  // ] = useState(0);
  let galleryThumbnails;
  let mainImage;
  if (styles[count]) {
    galleryThumbnails = styles.map((image, index) => <img alt="placeholder text" className="thumbnailGallery" key={index} src={image.photos[0].thumbnail_url} />);
    mainImage = <img alt="placeholder text" className="mainImage" key={count} src={styles[count].photos[0].url} />;
  }
  return (
    <div className="ov-imageContainer">
      <div className="ov-galleryThumbnails">
        <FaArrowUp className="ov-up" />
        {galleryThumbnails}
        <FaArrowDown className="ov-down" />
      </div>
      <div className="ov-galleryMain" />
      <FaArrowLeft className="ov-Left" />
      {mainImage}
      <FaArrowRight className="ov-Right" onClick={counter} />
    </div>
  );
}

ImageGallery.propTypes = {
  count: PropTypes.number,
  counter: PropTypes.func.isRequired,
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
