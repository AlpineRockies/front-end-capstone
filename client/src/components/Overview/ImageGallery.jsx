/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
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
  const { styles, count, setCount } = props;
  // const [
  //   count,
  //   // setCount
  // ] = useState(0);
  let galleryThumbnails;
  let mainImage;
  const handleMainClick = () => {
    console.log('Hello World');
  };

  if (styles[count]) {
    if (count < 7) {
      galleryThumbnails = styles.slice(0, 6).map((image, index) => <img alt="a beautiful flower" className="ov-thumbnail-gallery" onClick={() => setCount(index)} key={index} src={image.photos[0].thumbnail_url} />);
    } else {
      galleryThumbnails = styles.slice(count - 6, count).map((image, index) => <img alt="a playfull cat" className="ov-thumbnail-gallery" onClick={() => setCount(index)} key={index} src={image.photos[0].thumbnail_url} />);
    }
    mainImage = <img alt="placeholder text" className="ov-main-img" onClick={handleMainClick} key={count} src={styles[count].photos[0].url} />;
  }

  let leftRight;
  if (count === 0) {
    leftRight = (
      <>
        {mainImage}
        <FaArrowRight className="ov-right-icon" onClick={() => setCount(count + 1)} />
      </>
    );
  } else if (count === styles.length - 1) {
    leftRight = (
      <>
        <FaArrowLeft className="ov-left-icon" onClick={() => setCount(count - 1)} />
        ;
        {mainImage}
      </>
    );
  } else {
    leftRight = (
      <>
        <FaArrowLeft className="ov-left-icon" onClick={() => setCount(count - 1)} />
        { mainImage}
        <FaArrowRight className="ov-right-icon" onClick={() => setCount(count + 1)} />
      </>
    );
  }

  return (
    <div className="ov-img-carousel">
      <div className="ov-thumbnail-img-nav">
        <FaArrowUp className="ov-up-icon" />
        {galleryThumbnails}
        <FaArrowDown className="ov-down-icon" />
      </div>
      <div className="ov-main-img-nav" />
      {leftRight}
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
