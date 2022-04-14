/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React, {
} from 'react';
import PropTypes from 'prop-types';
import {
  FaCheckCircle,
} from 'react-icons/fa';

function StyleSelector(props) {
  const {
    styles, styleSelector, selectStyleSelector, setCount,
    setSelectedThumbnail,
  } = props;
  let stylesThumbnail;

  if (styles !== undefined) {
    stylesThumbnail = styles.map((image, index) => {
      const thumbnailKey = `TN-${styles[index].style_id}`; return (styleSelector === index
        ? (
          <a key={thumbnailKey}>
            <img
              alt="placeholder text"
              className="ov-style-selector-thumbnails"
              onClick={() => {
                selectStyleSelector(index);
                setCount(index);
                setSelectedThumbnail(index);
              }}
              src={image.photos[0].thumbnail_url}
              onKeyPress={() => {
                selectStyleSelector(index);
                setCount(index);
                setSelectedThumbnail(index);
              }}
            />
            <FaCheckCircle className="ov-Checkmark" />
          </a>
        )
        : (
          <a key={thumbnailKey}>
            <img
              alt="placeholder text"
              className="ov-style-selector-thumbnails"
              onClick={() => {
                selectStyleSelector(index);
                setCount(index);
                setSelectedThumbnail(index);
              }}
              onKeyPress={() => {
                selectStyleSelector(index);
                setCount(index);
                setSelectedThumbnail(index);
              }}
              src={image.photos[0].thumbnail_url}
            />
          </a>
        ));
    });
  }

  return (
    <div className="ov-style-selector">
      <b>{'STYLE > '}</b>
      {' '}
      {styles[styleSelector] && styles[styleSelector].name.toUpperCase()}
      <br />
      <br />
      {stylesThumbnail}
    </div>
  );
}

StyleSelector.propTypes = {
  styles: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.array,
  ]),
  selectStyleSelector: PropTypes.func.isRequired,
  setCount: PropTypes.func.isRequired,
  setSelectedThumbnail: PropTypes.func.isRequired,
  styleSelector: PropTypes.number.isRequired,
};

StyleSelector.defaultProps = {
  styles: [],
};

export default StyleSelector;
