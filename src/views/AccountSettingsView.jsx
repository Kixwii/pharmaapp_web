import React from 'react';

const AccountSettingsView = () => (
  <div name="account">
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    </head>
    <body>

      <div className="account_settings_title">
        <h1>Account Settings</h1>
      </div>
      <div className="account-profile-container">
        <img alt="Image" />
      </div>
      <div className="account-settings-button-container">
        <div>
          <button className="logout-button">Log Out</button>
        </div>
        <div>
          <button className="change-profile-button">Change Profile Photo</button>
        </div>
      </div>

      <div className="outer-conatiner">
        <div className="setup-mobile-money-tile">
          <h3>Set up Mobile Money</h3>
          <i className="material-symbols-outlined">payments</i>
        </div>
        <div className="card-tile">
          <h3>Your cards</h3>
        </div>
      </div>
    </body>
  </div>
);

export default AccountSettingsView;
// Please note that in JSX, class names are replaced with className, and self-closing tags should end with /> instead of just >. Additionally, React does not support the head and body tags directly within components. For global styles or meta tags, consider adding them in your HTML file directly.