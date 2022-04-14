/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect, useContext } from 'react';
import '../style.css';
import _ from 'underscore';
import ComparisonModalTable from './ComparisonModalTable';
import ProductContext from '../../Context';
import { StyledButton, StyledFaWindowClose } from '../StyledComponents';

/* eslint-disable react/prop-types */
function ComparisonModal({ setOpenModal, selectedComparisonItem }) {
  const { productInfo, joinedAPIDetails } = useContext(ProductContext);

  const [compareItemName, setCompareItemName] = useState('');
  const [compareItemFeatures, setCompareItemFeatures] = useState([]);
  const [productFeatures, setProductFeatures] = useState([]);
  const [similarFeatures, setSimilarFeatures] = useState([]);
  const [selectedItemFeatures, setSelectedItemFeatures] = useState([]);

  useEffect(() => {
    _.each(joinedAPIDetails, (product) => {
      if (product.product_id === selectedComparisonItem) {
        setCompareItemName(product.name);
        setCompareItemFeatures([
          ...new Set(
            // eslint-disable-next-line consistent-return
            product.features.map((item) => {
              if (item.feature && item.value)
                return `${item.feature} : ${item.value}`;
              if (item.feature) return item.feature;
              if (item.value) return item.value;
              return null;
            })
          ),
        ]);
      }
    });
  }, [selectedComparisonItem]);

  useEffect(() => {
    let productFeaturesArray = [
      ...new Set(
        // eslint-disable-next-line consistent-return
        productInfo.features.map((item) => {
          if (item.feature && item.value)
            return `${item.feature} : ${item.value}`;
          if (item.feature) return item.feature;
          if (item.value) return item.value;
          return null;
        })
      ),
    ];

    const intersection = new Set(
      _.intersection(productFeaturesArray, compareItemFeatures)
    );
    productFeaturesArray = _.filter(
      productFeaturesArray,
      (element) => !intersection.has(element)
    );
    const copyCompareItemFeatures = _.filter(
      compareItemFeatures,
      (element) => !intersection.has(element)
    );

    setSimilarFeatures([...intersection]);
    setProductFeatures(productFeaturesArray);
    setSelectedItemFeatures(copyCompareItemFeatures);
  }, [compareItemFeatures]);

  return (
    <div>
      <div className="ri-modal-Container">
        <div
          className="ri-modal-Title-Close-Button"
          role="button"
          tabIndex={0}
          onClick={() => setOpenModal(false)}
          onKeyDown={() => setOpenModal(false)}
        >
          <StyledFaWindowClose />
        </div>
        <div className="ri-modal-Title">
          <h3>Comparing</h3>
        </div>
        <ComparisonModalTable
          compareItemName={compareItemName}
          similarFeatures={similarFeatures}
          selectedItemFeatures={selectedItemFeatures}
          productFeatures={productFeatures}
        />
        <div className="ri-modal-Footer">
          <StyledButton onClick={() => setOpenModal(false)}>Close</StyledButton>
        </div>
      </div>
    </div>
  );
}
export default ComparisonModal;
