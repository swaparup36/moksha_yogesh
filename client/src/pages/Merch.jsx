import React, { useState, useMemo } from 'react'
import { Helmet } from 'react-helmet'

export function Component() {
  const products = useMemo(
    () => [
      {
        name: 'MOKSHA IX',
        alt: 'Moksha Black T-shirt',
        image: '../../public/images/merch/MOKSHA IX OFFICIAL MERCH (1).jpg',
        price: 499,
        originalPrice: 699,
        color: 'black',
      },
    ],
    []
  )

  const sizeOptions = [
    { label: 'XS', dimensions: '36" Chest / 26" Height / 7" Sleeve' },
    { label: 'S', dimensions: '38" Chest / 27" Height / 7.5" Sleeve' },
    { label: 'M', dimensions: '40" Chest / 28" Height / 8" Sleeve' },
    { label: 'L', dimensions: '42" Chest / 29" Height / 8" Sleeve' },
    { label: 'XL', dimensions: '44" Chest / 30" Height / 8.5" Sleeve' },
    { label: 'XXL', dimensions: '48" Chest / 30" Height / 9" Sleeve' },
  ]

  const [selectedSize, setSelectedSize] = useState('M')
  const currentProduct = products[0]
  const [isHovered, setIsHovered] = useState(false)

  return (
    <>
      <Helmet>
        <title>Merchandise</title>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
        />
        <link href='https://fonts.googleapis.com/css?family=Muli' rel='stylesheet' />
      </Helmet>

      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
          
          .card {
          font-family: 'Muli', sans-serif;
          display: flex;
          align-items: center;
          background: rgb(125,125,125, 0.3);
          height: 600px;
          width: 900px;
          margin: 2% auto;
          box-shadow: 0px 15px 50px 10px rgba(0, 0, 0, 0.1);
          position: relative;
          z-index: 500;
        }

        .left {
          height: 395px;
          width: 330px;
          display: flex;
          align-items: center;
          background-color: #e0ece4;
          margin-left: 93px;
          border-radius: 0% 50% 50% 0%;
          position: absolute;
          z-index: 5;
          transition: transform 0.3s ease; /* Add transition for smooth animation */
        }

        .left:hover {
          transform: scale(1.1); /* Scale up the image on hover */
        }

        .left img {
          margin-left: -88px;
          margin-top: 60px;
          max-width: 100%; /* Ensure image doesn't overflow */
          max-height: 100%;
          display: block;
        }

        .right {
          height: 395px;
          width: 550px;
          background-color: #f9f9f9;
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
          color: #2c2c2c;
          font-weight: bold;
          font-size: 22px;
          margin-top: 21px;
          display: inline-block;
        }

        .details h3,
        .details h2,
        .details h4,
        .details h4.dis {
          color: #444;
        }

        .details h3 {
          margin-top: 84px;
          font-size: 20px;
          font-weight: 500;
        }

        .details h2 {
          margin-top: 10px;
          font-weight: 800;
          font-size: 29px;
        }

        .details h4 {
          display: inline-block;
          font-weight: bold;
          font-size: 20px;
        }

        .details h4.dis {
          display: inline-block;
          font-weight: 400;
          font-size: 17px;
          margin-left: 30px;
          text-decoration: line-through #d9534f;
        }

        .dropdown {
          margin-top: 20px;
          width: 100%;
          background-color: #e0ece4;
          color: #000;
          padding: 10px;
          border-radius: 5px;
        }

        .dropdown select {
          width: 100%;
          padding: 5px;
          background-color: #e0ece4;
          color: #000;
          font-size: 14px;
          border: none;
        }

        .foot {
          color: #fff;
          margin-top: 20px;
          font-weight: 500;
          font-size: 11px;
          transition: 0.3s all ease;
          padding: 8px 12px;
          border-radius: 5px;
          background-color: #333;
          display: block; /* Make it a block element */
          width: fit-content; /* Adjust width to content */
          margin: 20px auto 0; /* Center horizontally */
          text-align: center; /* Center text within the button */
        }

        .foot:hover {
          color: #e0ece4;
          cursor: pointer;
          background-color: #555;
        }
      `}</style>

      <div className='card'>
        <div
          className='left'
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img src={currentProduct.image} alt={currentProduct.alt} />
        </div>
        <div className='right'>
          <div className='product-info'>
            <div className='product-name'>
              <h1>{currentProduct.name}</h1>
            </div>
            <div className='details'>
              <h3>Moksha Special Collection</h3>
              <h2>{currentProduct.alt}</h2>
              <h4>₹{currentProduct.price}</h4>
              <h4 className='dis'>₹{currentProduct.originalPrice}</h4>
            </div>
            <div className='dropdown'>
              <label htmlFor='size-select'>Select Size: </label>
              <select
                id='size-select'
                value={selectedSize}
                onChange={e => setSelectedSize(e.target.value)}
              >
                {sizeOptions.map(option => (
                  <option key={option.label} value={option.label}>
                    {option.label} - {option.dimensions}
                  </option>
                ))}
              </select>
            </div>
            <span className='foot'>
              <i className='fa fa-shopping-bag'></i> Buy Now
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

Component.displayName = 'MerchCard'