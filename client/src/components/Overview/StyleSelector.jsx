/* eslint-disable react/no-array-index-key */
import React, {
// useState,
// useEffect,
// useContext
} from 'react';
import PropTypes from 'prop-types';

function StyleSelector(props) {
  const { styles } = props;
  let stylesThumbnail;

  if (styles !== undefined) {
    stylesThumbnail = styles.map((image, index) => <span><img alt="placeholder text" className="ov-style-selector-thumbnails" key={index} src={image.photos[0].thumbnail_url} /></span>);
  }

  return (
    <div className="ov-style-selector">
      <b>{'STYLE > '}</b>
      {' '}
      {styles[0] && styles[0].name.toUpperCase()}
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
