/* eslint-disable react/jsx-no-bind */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
import React, {
// useState,
// useEffect,
// useContext,
} from 'react';
import {
  FaExpandAlt,
} from 'react-icons/fa';
import Zoom from 'react-img-zoom';

function MainImage(props) {
  const {
    styles, count,
    // setCount,
    view, setView,
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
  } else if (styles[count] && view === 'zoom') {
    mainImage = (
      <div className="ov-main-zoom">
        <Zoom
          img={styles[count].photos[0].url}
          zoomScale={2.5}
          height={700}
          width={1300}
        />
      </div>
    );
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
      <FaExpandAlt className="ov-expanded-icon" onClick={expandOrNot} />
      { mainImage}
    </div>
  );
}

export default MainImage;
