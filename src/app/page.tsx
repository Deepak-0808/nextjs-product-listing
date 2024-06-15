"use client"
// src/pages/index.js
import axios from 'axios';
import { useState, useEffect } from 'react';
import ProductList from './components/ProductList';
import Navbar from './components/Navbar';
import IconBar from './components/IconBar';
import styles from './styles/Home.module.css';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching the products:', error));
  }, []);

  return (
    <div className={styles.container}>
      <Navbar />
      <IconBar />
      <ProductList products={products} />
    </div>
  );
}
