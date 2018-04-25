import React from 'react'

import { connect } from 'react-redux'
import ProductList from '../components/ProductList';

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

// ProductsContainer.propTypes = {
//   products: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     title: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     inventory: PropTypes.number.isRequired
//   })).isRequired,
//   addToCart: PropTypes.func.isRequired
// }

// const mapStateToProps = state => ({
//   products: getVisibleProducts(state.products)
// })

// export default connect(
//   mapStateToProps,
//   { addToCart }
// )(ProductsContainer)
