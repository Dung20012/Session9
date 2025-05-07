// ProductDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Lấy dữ liệu từ localStorage
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    const foundProduct = storedProducts.find(prod => prod.id === parseInt(id));
    setProduct(foundProduct);
  }, [id]);

  if (!product) {
    return <p>Không tìm thấy sản phẩm!</p>;
  }

  return (
    <div>
      <h2>Chi tiết sản phẩm</h2>
      <img src={product.image} alt={product.name} width={200} />
      <h3>{product.name}</h3>
      <p>{product.price} VND</p>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetail;
