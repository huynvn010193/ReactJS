import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProductList from './../components/ProductList';
import PropTypes from 'prop-types';

import * as config from './../constants/Config';
import ProductItem from './../components/ProductItem';

class ProductsContainer extends Component {
    render() {
        let { products } = this.props;
        return (
            <ProductList>
                {this.showElementProduct(products)}
            </ProductList>
        );
    }

    showElementProduct(products)
    {
        let xhtml = <b>{ config.NOTI_EMPTY_PRODUCT }</b>
        if(products.length > 0)
        {
            xhtml = products.map((product, index) =>
            {
                return (
                    <ProductItem key = {index} product={product} index={index}/>    
                );
            });
        }

        return xhtml;
    }
}

// lấy state.product trong store;

// Thiết lập xem product có những kiểu dữ liệu gì
ProductsContainer.propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        summary: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        canBuy: PropTypes.bool.isRequired
    })).isRequired,
}

const mapStateToProps = state =>
{
    return {
        products: state.products
    }
}

export default connect(mapStateToProps, null)(ProductsContainer);