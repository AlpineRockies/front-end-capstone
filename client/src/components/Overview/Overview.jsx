import React, {
  useState,
  useEffect,
  useContext,
} from 'react';
import axios from 'axios';
import './style.css';
import ProductInfo from './ProductInfo';
import AddToCart from './AddToCart';
import ImageGallery from './ImageGallery';
import StyleSelector from './StyleSelector';
import ProductContext from '../Context';

function Overview() {
  const { productId, productInfo, avgRating } = useContext(ProductContext);

  const [styles, setStyles] = useState([]);
  const [count, setCount] = useState(0);
  const [resultCount, setResultCount] = useState(0);
  const [styleSelector, selectStyleSelector] = useState(0);
  const [selectedThumbnail, setSelectedThumbnail] = useState(count);
  const [view, setView] = useState('default');

  useEffect(() => {
    axios
      .get(`/products/${productId}/styles`)
      .then((res) => setStyles(res.data.results))
      // eslint-disable-next-line no-console
      .catch((err) => console.error(err));
  }, [productId]);

  if (view === 'default') {
    return (
      <div className="ov-overview">
        <div className="ov-gallery">
          <ImageGallery
            styles={styles}
            count={count}
            setCount={setCount}
            description={productInfo}
            selectedThumbnail={selectedThumbnail}
            setSelectedThumbnail={setSelectedThumbnail}
            view={view}
            setView={setView}
          />
        </div>

        <div className="ov-cart">
          <ProductInfo
            styles={styles}
            description={productInfo}
            styleSelector={styleSelector}
            selectStyleSelector={selectStyleSelector}
            avgRating={avgRating}
          />

          <StyleSelector
            styles={styles}
            styleSelector={styleSelector}
            selectStyleSelector={selectStyleSelector}
            setCount={setCount}
            selectedThumbnail={selectedThumbnail}
            setSelectedThumbnail={setSelectedThumbnail}
          />

          <AddToCart
            styles={styles}
            count={count}
            setCount={setCount}
            resultCount={resultCount}
            setResultCount={setResultCount}
            styleSelector={styleSelector}
          />
        </div>
        <div className="ov-description">
          {/* Extract to component */}
          <span className="ov-description-details">
            <h5>{productInfo.slogan}</h5>
            <p>{productInfo.description}</p>
          </span>
          <span className="ov-description-ul">
            <ul>
              <li>GMO and Pesticide-free</li>
              <br />
              <li>Made with 100% Genetic Modification</li>
              <br />
              <li> This is 100% Made up</li>
            </ul>
          </span>
        </div>
        {/* End Extraction */}
      </div>
    );
  }
  return (
    <div>
      <div className="ov-overview-expanded">
        <ImageGallery
          styles={styles}
          count={count}
          setCount={setCount}
          view={view}
          setView={setView}
          setSelectedThumbnail={setSelectedThumbnail}
          selectedThumbnail={selectedThumbnail}
        />
      </div>
      <div className="ov-product-info-extended">
        <span className="ov-description-details">
          <h5>{productInfo.slogan}</h5>
          <p>{productInfo.description}</p>
        </span>
        <span className="ov-description-ul">
          <ul>
            <li>GMO and Pesticide-free</li>
            <br />
            <li>Made with 100% Genetic Modification</li>
            <br />
            <li> This is 100% Made up</li>
          </ul>
        </span>
      </div>
    </div>
  );
}

export default Overview;
