import React, { useEffect, useState } from 'react';

const ListProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Kiểm tra xem products đã được lưu trong localStorage chưa
    const savedProducts = localStorage.getItem('products');

    if (!savedProducts) {
      
      const defaultProducts = [
        { id: 1, name: 'Iphone', price: 5000000, image: '/', description: 'Smartphone Iphone' },
        { id: 2, name: 'Samsung Galaxy', price: 7000000, image: '/', description: 'Smartphone Samsung' },
        // Thêm nhiều sản phẩm khác
      ];

      // Lưu vào localStorage
      localStorage.setItem('products', JSON.stringify(defaultProducts));
      setProducts(defaultProducts); // Cập nhật state products
    } else {
      
      setProducts(JSON.parse(savedProducts));
    }
  }, []);

  return (
    <div>
      <h2>Danh sách sản phẩm</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Giá: {product.price} VNĐ</p>
            <button>Xem chi tiết</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListProduct;
