import React, {
  useState,
  // useEffect,
  // useContext,
} from 'react';
import {
  FaArrowLeft, FaArrowRight,
  FaExpand,
} from 'react-icons/fa';
import PropTypes from 'prop-types';
import Zoom from 'react-img-zoom';

function MainImage(props) {
  const {
    styles, count, setCount, view, setView,
  } = props;

  const handleMainClick = () => {
    if (view === 'default') {
      setView('expanded');
    } else if (view === 'expanded') {
      setView('zoom');
    }
  };

  let mainImage;
  if (styles[count] && view === 'default') {
    mainImage = <img alt="pretty Kitty" className="ov-main-img" onClick={handleMainClick} key={count} src={styles[count].photos[0].url} />;
  } else if (styles[count] && view === 'expanded') {
    mainImage = <img alt="pretty Kitty" className="ov-main-expanded" onClick={handleMainClick} key={count} src={styles[count].photos[0].url} />;
  } else if (styles[count] && view === 'zoom') { mainImage =
  <Zoom
  img={styles[count].photos[0].url}
  zoomScale={2.5}
  height={700}
  width={1300}
  className="ov-main-zoom"
  />
}

  function expandOrNot() {
    if (view === 'zoom') {
      setView('expanded');
    } else if (view === 'expanded') {
      setView('default');
    }
  }

  return (
    <div>
      <FaExpand className="ov-expanded-icon" onClick={expandOrNot} />
      { mainImage}
    </div>
  );
}

export default MainImage;
