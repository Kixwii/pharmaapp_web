import React from 'react';

const HomeView = () => (
  <div name="home">
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    </head>
    <body>
      <div className="search-segment">
        <i className="material-symbols-outlined">search</i>
        <input type="text" placeholder="Search" />
      </div>

      <div className="patient-welcome-text">
        <h1>Welcome, {username}</h1>
      </div>

      <div className="home-image-container">
        <img src="../assets/3d doctor asset 1.png" alt="Home Image" />
      </div>

      <div className="home-container">
        <div className="notifications-container">
          <h3>Enjoy Discounts of up to 50%</h3>

          <div className="notifications-button-container">
            <button>Buy Now</button>
          </div>
        </div>

        <div className="order-container">
          <h3>View your order</h3>
          <div className="view-order-button">
            <button> <i className="material-symbols-outlined">arrow_forward</i>
            </button>
          </div>
        </div>
      </div>

      <div className="scan-button">
        <button className="please-scan">
          <i className="material-symbols-outlined">document_scanner</i>
        </button>
      </div>
    </body>
  </div>
);

export default HomeView;
