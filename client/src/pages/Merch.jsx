import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { useMediaQuery } from 'react-responsive';

export function Component() {
  const isMobile = useMediaQuery({ query: '(max-width: 639px)' });

  const products = useMemo(
    () => [
      {
        name: 'MOKSHA IX',
        alt: 'Moksha Black T-shirt',
        image: '../../public/images/merch/black-512x450.png',
        price: 499,
        originalPrice: 999,
        color: 'black',
      },
      {
        name: 'MOKSHA IX',
        alt: 'Moksha White T-shirt',
        image: '../../public/images/merch/white-512x450.png',
        price: 499,
        originalPrice: 999,
        color: 'white',
      },
    ],
    []
  );

  const sizeOptions = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  const colorOptions = ['white', 'black'];
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedProductIndex, setSelectedProductIndex] = useState(0);

  const currentProduct = products[selectedProductIndex];

  const handleColorClick = (color) => {
    const index = products.findIndex((product) => product.color === color);
    if (index !== -1) setSelectedProductIndex(index);
  };

  return (
    <>
      <Helmet>
        <title>Product Card</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <link href="https://fonts.googleapis.com/css?family=Muli" rel="stylesheet" />
      </Helmet>

      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Muli', sans-serif; }
        .card {
          display: flex;
          align-items: center;
          background: #252831 url(https://www.dropbox.com/s/fuadz3vmw2nsylm/bg.png?raw=1) no-repeat;
          height: 600px;
          width: 800px;
          margin: 2% auto;
          box-shadow: 0px 15px 50px 10px rgba(0, 0, 0, 0.4);
        }
        .left {
          height: 395px;
          width: 330px;
          display: flex;
          align-items: center;
          background-color: #ff6d39;
          margin-left: 93px;
          border-radius: 0% 50% 50% 0%;
          position: absolute;
          z-index: 5;
        }
        .left img { margin-left: -88px; margin-top: 60px; }
        .color-buttons {
          position: absolute;
          bottom: 40px;
          left: 50px;
          display: flex;
          gap: 10px;
        }
        .color-button {
          width: 25px;
          height: 25px;
          border-radius: 50%;
          cursor: pointer;
          border: 2px solid transparent;
          transition: border 0.3s;
        }
        .color-button.selected {
          border: 2px solid grey;
        }
        .right {
          height: 395px;
          width: 550px;
          background-color: #2a2f40;
          z-index: 3;
          margin-left: 200px;
        }
        .product-info {
          position: absolute;
          margin-left: 245px;
          height: 394px;
          width: 305px;
          z-index: 10;
        }
        .product-name h1 {
          color: #ff6d39;
          font-weight: bold;
          font-size: 22px;
          margin-top: 21px;
          display: inline-block;
        }
        .details h3, .details h2, .details h4, .details h4.dis {
          color: #ffffff;
          font-family: 'muli';
        }
        .details h3 { margin-top: 84px; font-size: 20px; font-weight: 500; }
        .details h2 { margin-top: 10px; font-weight: 800; font-size: 29px; }
        .details h4 { display: inline-block; font-weight: bold; font-size: 20px; }
        .details h4.dis {
          display: inline-block;
          font-weight: 400;
          font-size: 17px;
          margin-left: 30px;
          text-decoration: line-through #ea3201;
        }
        .size-buttons {
          margin-top: 20px;
          display: flex;
          gap: 8px;
        }
        .size-circle {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background-color: #444;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 12px;
          transition: background-color 0.3s;
        }
        .size-circle.selected {
          background-color: #ff6d39;
        }
        .foot {
          color: #ffffff;
          margin-top: 20px;
          margin-right: 50px;
          font-weight: 500;
          font-size: 11px;
          float: left;
          transition: 0.3s all ease;
          padding: 8px 12px;
          border-radius: 5px;
          background-color: #3a3f52;
        }
        .foot:hover { color: #f76b39; cursor: pointer; background-color: #4b5166; }
        .selected-size {
          color: #fff;
          font-size: 13px;
          margin-top: 10px;
        }
      `}</style>

      <div className="card">
        <div className="left">
          <img src={currentProduct.image} alt={currentProduct.alt} />
          <div className="color-buttons">
            {colorOptions.map(color => (
              <div
                key={color}
                className={`color-button ${color} ${currentProduct.color === color ? 'selected' : ''}`}
                style={{ backgroundColor: color }}
                onClick={() => handleColorClick(color)}
              ></div>
            ))}
          </div>
        </div>
        <div className="right">
          <div className="product-info">
            <div className="product-name">
              <h1>{currentProduct.name}</h1>
            </div>
            <div className="details">
              <h3>Moksha Special Collection</h3>
              <h2>{currentProduct.alt}</h2>
              <h4>₹{currentProduct.price}</h4>
              <h4 className="dis">₹{currentProduct.originalPrice}</h4>
            </div>
            <ul>
              <li>SIZE</li>
            </ul>
            <div className="size-buttons">
              {sizeOptions.map(size => (
                <div
                  key={size}
                  className={`size-circle ${selectedSize === size ? 'selected' : ''}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </div>
              ))}
            </div>
            <div className="selected-size">Selected Size: {selectedSize}</div>
            <span className="foot"><i className="fa fa-shopping-bag"></i> Buy Now</span>
            <span className="foot"><i className="fa fa-shopping-cart"></i> Add to Cart</span>
          </div>
        </div>
      </div>
    </>
  );
}

Component.displayName = 'MerchCard';