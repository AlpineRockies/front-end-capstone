/* eslint-disable max-len */
import React, { useState, useEffect, useContext } from 'react';
import '../style.css';
import { FaWindowClose, FaCheck } from 'react-icons/fa';
import _ from 'underscore';
import ProductContext from '../../Context';
import { StyledButton } from '../StyledComponents';


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
            product.features.map((item) => {
              if (item.feature && item.value) return `${item.feature} : ${item.value}`;
              if (item.feature) return item.feature;
              if (item.value) return item.value;
            }),
          ),
        ]);
      }
    });
  }, [selectedComparisonItem]);

  useEffect(() => {
    let productFeaturesArray = [
      ...new Set(
        productInfo.features.map((item) => {
          if (item.feature && item.value) return `${item.feature} : ${item.value}`;
          if (item.feature) return item.feature;
          if (item.value) return item.value;
        }),
      ),
    ];

    const intersection = new Set(_.intersection(productFeaturesArray, compareItemFeatures));
    productFeaturesArray = _.filter(productFeaturesArray, ((element) => !intersection.has(element)));
    const copyCompareItemFeatures = _.filter(compareItemFeatures, ((element) => !intersection.has(element)));

    setSimilarFeatures([...intersection]);
    setProductFeatures(productFeaturesArray);
    setSelectedItemFeatures(copyCompareItemFeatures);
  }, [compareItemFeatures]);

  return (
    <div className="ri-modal-Background">
      <div className="ri-modal-Container">
        <div className="ri-modal-Title-Close-Button">
          <button type="button" onClick={() => setOpenModal(false)}>
          <FaWindowClose />
          </button>
        </div>
        <div className="ri-modal-Title">
          <h3>Comparing</h3>
        </div>
        <div className="ri-modal-Body">
          <table>
            <tbody>
              <tr>
                <th>{compareItemName}</th>
                <th>Feature/Value</th>
                <th>{productInfo.name}</th>
              </tr>
              {similarFeatures.map((item, index) => (
                <tr key={index}>
                  <td>
                    <FaCheck />
                  </td>
                  <td>{item}</td>
                  <td>
                    <FaCheck />
                  </td>
                </tr>
              ))}
              {selectedItemFeatures.map((item, index) => (
                <tr key={index}>
                  <td>
                    <FaCheck />
                  </td>
                  <td>{item}</td>
                  <td></td>
                </tr>
              ))}
              {productFeatures.map((item, index) => (
                <tr key={index}>
                  <td></td>
                  <td>{item}</td>
                  <td>
                    <FaCheck />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="ri-modal-Footer">
          <StyledButton onClick={() => setOpenModal(false)}>CLOSE</StyledButton>
        </div>
      </div>
    </div>
  );
}
export default ComparisonModal;
