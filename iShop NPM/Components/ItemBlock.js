import React from 'react';
import PropTypes from 'prop-types';

import './../CSS/ItemBlock.css';

class ItemBlock extends React.Component {

    static propTypes = {
      catalog: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          URL: PropTypes.string.isRequired,
          code: PropTypes.number.isRequired,
          price: PropTypes.number.isRequired,
          residue: PropTypes.number.isRequired,
          selected: PropTypes.boolean,
        })
      ),
    };

    render() {
    return (
    
      <tr className='Product'>
        <td className='Product_name'>{this.props.name}</td>
        <td className='Product_foto'>
          <img src={this.props.URL}/>
        </td>
        <td className='Product_count'>{this.props.code}</td>
        <td className='Product_price'>{this.props.price}</td>
        <td className='Product_residue'>{this.props.residue}</td>
        <td className='Product_residue'><button>Редактировать</button></td>
        <td className='Product_residue'><button>Удалить</button></td>
      </tr>
    
    );
  }
};

export default ItemBlock;