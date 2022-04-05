/* eslint-disable arrow-body-style */
/* eslint-disable react/destructuring-assignment */
import React, {
// useState,
// useEffect,
// useContext
} from 'react';
import axios from 'axios';
import { FaFacebook, FaPinterest } from 'react-icons/fa';
// eslint-disable-next-line import/no-unresolved
import { CgTwitter } from 'react-icons/Cg';
import PropTypes from 'prop-types';

class ProductInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: [],
    };
  }

  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
    axios.get('/products/37311')
      .then((response) => {
        this.setState(() => {
          return { description: response.data };
        });
      })
      .catch((err) => {
        console.log('err in client', err);
      });
  }
  // const [data, setData] = useState([])

  // useEffect(() => {
  //   axios
  //     .get("'/products/37311'")
  //     .then(response => set(response.data));
  // }, []);

  render() {
    const { description } = this.state;
    // eslint-disable-next-line no-unused-vars
    const { styles } = this.props;
    return (
      <div>
        <p>stars and review</p>
        <p>
          {description && description.category}
        </p>
        <p>{description && description.name}</p>
        <div>
          {/* {styles[0].original_price} */}
          {' '}
        </div>
        <div className="SocialMedia">
          <FaFacebook className="Facebook" />
          <CgTwitter className="Twitter" />
          <FaPinterest className="Pinterest" />
        </div>
      </div>
    );
  }
}

ProductInfo.propTypes = {
  styles: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.array,
  ]),
};

ProductInfo.defaultProps = {
  styles: [],
};

export default ProductInfo;
