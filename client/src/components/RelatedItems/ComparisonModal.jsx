import React, { useState, useEffect, useContext } from 'react';
import './style.css';
import ProductContext from '../Context';
import _ from 'underscore';
import { FaCheck } from 'react-icons/fa';

/* eslint-disable react/prop-types */
function Comparison({ setOpenModal, selectedComparisonItem }) {
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
              if (item.feature) {
                if (item.value) {
                  return `${item.feature} : ${item.value}`;
                }
                return item.feature;
              }
              return item.value;
            })
          ),
        ]);
      }
    });
  }, [selectedComparisonItem]);

  useEffect(() => {
    const productFeaturesArray = [
      ...new Set(
        productInfo.features.map((item) => {
          if (item.feature) {
            if (item.value) {
              return `${item.feature} : ${item.value}`;
            }
            return item.feature;
          }
          return item.value;
        })
      ),
    ];

    // check for any similar items in both arrays
    const copyCompareItemFeatures = compareItemFeatures.slice();
    const similarFeaturesArray = [];
    _.each(productFeaturesArray, (feature1, index1) => {
      _.each(copyCompareItemFeatures, (feature2, index2) => {
        if (feature1 === feature2) {
          similarFeaturesArray.push(feature1);
          productFeaturesArray.splice(index1, 1);
          copyCompareItemFeatures.splice(index2, 1);
        }
      });
    });
    setSimilarFeatures(similarFeaturesArray);
    setProductFeatures(productFeaturesArray);
    setSelectedItemFeatures(copyCompareItemFeatures);
  }, [compareItemFeatures]);

  return (
    <div className="ri-modal-Background">
      <div className="ri-modal-Container">
        <div className="ri-modal-Title-Close-Button">
          <button type="button" onClick={() => setOpenModal(false)}>
            X
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
          <button type="button" onClick={() => setOpenModal(false)}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
export default Comparison;
