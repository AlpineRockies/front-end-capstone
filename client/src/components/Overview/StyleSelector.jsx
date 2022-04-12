/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/no-array-index-key */
import React, {
// useState,
// useEffect,
// useContext
} from 'react';
import PropTypes from 'prop-types';
import {
  FaCheckCircle,
} from 'react-icons/fa';

function StyleSelector(props) {
  const {
    styles, styleSelector, selectStyleSelector, setCount, selectedThumbnail, setSelectedThumbnail,
  } = props;
  let stylesThumbnail;

  if (styles !== undefined) {
    stylesThumbnail = styles.map((image, index) => (styleSelector === index
      ? (
        <a key={index}>
          <img alt="placeholder text" className="ov-style-selector-thumbnails" onClick={() => (selectStyleSelector(index), setCount(index), setSelectedThumbnail(index))} src={image.photos[0].thumbnail_url} />
          <FaCheckCircle className="ov-Checkmark" />
        </a>
      )
      : <a key={index}><img alt="placeholder text" className="ov-style-selector-thumbnails" onClick={() => (selectStyleSelector(index), setCount(index), setSelectedThumbnail(index))} src={image.photos[0].thumbnail_url} /></a>));
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
};

StyleSelector.defaultProps = {
  styles: [],
};

export default StyleSelector;
