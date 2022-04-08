/* eslint-disable react/no-array-index-key */
import React, {
useState,
// useEffect,
// useContext
} from 'react';
import PropTypes from 'prop-types';

function StyleSelector(props) {
  const { styles, styleSelector, selectStyleSelector } = props;
  let stylesThumbnail;

  if (styles !== undefined) {
    stylesThumbnail = styles.map((image, index) => <span><img alt="placeholder text" key={index}className="ov-style-selector-thumbnails" onClick={() => selectStyleSelector(index)} src={image.photos[0].thumbnail_url} /></span>);
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
