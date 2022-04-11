import React, {
  useState,
  // useEffect,
  // useContext,
} from 'react';
import {
  FaArrowLeft, FaArrowRight,
} from 'react-icons/fa';
import PropTypes from 'prop-types';

function MainImage(props) {
  const {
    styles, count, view, setView,
  } = props;

  const handleMainClick = () => {
    if (view === 'default') {
      setView('expanded');
    } else {
      setView('zoom');
    }
  };

  var mainImage;
  if(styles[count]){
  mainImage = <img alt="placeholder text" className="ov-main-img" onClick={handleMainClick} key={count} src={styles[count].photos[0].url} />;
  }

  return (
    <div className="ov-main-img-nav">
      {(count > 0) && (<FaArrowLeft className="ov-left-icon" onClick={() => setCount(count - 1)} />)}
      { mainImage}
      {(count < styles.length - 1)
        && (<FaArrowRight className="ov-right-icon" onClick={() => setCount(count + 1)} />)}
    </div>
  );
}

MainImage.propTypes = {
  count: PropTypes.number,
  styles: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.array,
  ]),
};

MainImage.defaultProps = {
  count: 0,
  styles: [],
};

export default MainImage;
