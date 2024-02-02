import React from 'react';
import HistoryItem from '../components/HistoryItem';

const OrderHistoryView = () => (
  <div name="history">
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    </head>
    <body>
      <div className="history-page-title">
        <h1>Order History</h1>
      </div>
      <div className="outer-history-container">
        <HistoryItem />
      </div>
    </body>
  </div>
);

export default OrderHistoryView;
