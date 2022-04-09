/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import ProductContext from '../../Context';
import { StyledCheck } from '../StyledComponents';

function ComparisonModalTable({
  compareItemName,
  similarFeatures,
  selectedItemFeatures,
  productFeatures,
}) {
  const { productInfo } = useContext(ProductContext);
  return (
    <div className="ri-modal-Body">
      <table>
        <tbody>
          <tr>
            <th className="ri-modal-item-name" >{compareItemName}</th>
            <th>Feature/Value</th>
            <th className="ri-modal-item-name" >{productInfo.name}</th>
          </tr>
          {similarFeatures.map((item, index) => (
            <tr key={index}>
              <td>
                <StyledCheck />
              </td>
              <td>{item}</td>
              <td>
                <StyledCheck />
              </td>
            </tr>
          ))}
          {selectedItemFeatures.map((item, index) => (
            <tr key={index}>
              <td>
                <StyledCheck />
              </td>
              <td>{item}</td>
              <td />
            </tr>
          ))}
          {productFeatures.map((item, index) => (
            <tr key={index}>
              <td />
              <td>{item}</td>
              <td>
                <StyledCheck />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ComparisonModalTable;
