import React, { useState, useEffect, useContext } from 'react';
import { FaShoppingCart, FaHeart, FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import './ProductCard.scss';
import Modal from './Modal';
import { WishlistContext } from '../../context/WishlistContext'; // Ensure the correct path

const ProductCard = ({ product }) => {
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const { addToWishlist, removeFromWishlist, wishlist } = useContext(WishlistContext);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000); // Simulate a loading time
    return () => clearTimeout(timer);
  }, []);

  const getRating = (rating) => {
    const stars = [];
    for (let i = 0; i < Math.floor(rating); i++) {
      stars.push(<FaStar key={i} />);
    }
    if (rating % 1 >= 0.5) {
      stars.push(<FaStarHalfAlt key={'half'} />);
    }
    while (stars.length < 5) {
      stars.push(<FaRegStar key={stars.length} />);
    }
    return stars;
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleLike = () => {
    setLiked(!liked);
    if (disliked) setDisliked(false); // Ensure only one of like/dislike can be active at a time
    if (!liked) {
      addToWishlist(product);
    } else {
      removeFromWishlist(product);
    }
  };

  const toggleDislike = () => {
    setDisliked(!disliked);
    if (liked) setLiked(false); // Ensure only one of like/dislike can be active at a time
  };

  if (loading) {
    return (
      <div className="product-card loading">
        <div className="product-image skeleton"></div>
        <div className="product-info">
          <div className="title skeleton"></div>
          <div className="rating skeleton"></div>
          <div className="price-info">
            <div className="price skeleton"></div>
            <div className="old-price skeleton"></div>
            <div className="discount skeleton"></div>
          </div>
        </div>
      </div>
    );
  }

  const oldPrice = product.oldPrice || (product.price + 50); // Assuming the old price is product price + 50 if not provided
  const discount = ((oldPrice - product.price) / oldPrice) * 100; // Calculating the discount percentage

  return (
    <>
      <div className="product-card">
        <div className="product-image" onClick={openModal}>
          <img src={product.image} alt={product.title} />
          <div className="overlay">
            <button className="cart-btn"><FaShoppingCart /></button>
            <button className="like-btn" onClick={toggleLike}><FaHeart /></button>
          </div>
        </div>
        <div className="product-info">
          <h3 className="title">{product.title}</h3>
          <div className="rating">
            {getRating(product.rating.rate)}
          </div>
          <div className="price-info">
            <h2 className="price">${product.price.toFixed(2)}</h2>
            <p className="old-price">${oldPrice.toFixed(2)}</p>
            <h3 className="discount">{discount.toFixed(0)}% Off</h3>
          </div>
        </div>
      </div>
      {isModalOpen && <Modal title={product.title} image={product.image} onClose={closeModal} />}
    </>
  );
};

export default ProductCard;
