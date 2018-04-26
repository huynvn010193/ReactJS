import React from 'react'
import { connect } from 'react-redux'
import ProductList from '../components/ProductList';
import PropTypes from 'prop-types';

const ProductsContainer = ({ products }) => (
    <ProductList products={products}></ProductList>
)

// lấy state.product trong store;

const mapStateToProps = state =>
{
    return {
        products: state.products
    }
}
export default connect(mapStateToProps, null)(ProductsContainer);

///const ProductsContainer = ({ products, addToCart }) => (
//   <ProductsList title="Products">
//     {products.map(product =>
//       <ProductItem
//         key={product.id}
//         product={product}
//         onAddToCartClicked={() => addToCart(product.id)} />
//     )}
//   </ProductsList>
// )

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
