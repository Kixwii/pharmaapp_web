import React from 'react';

const PatientLoginView = () => (
  <div>
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="patient_login.css" />
      <title>Document</title>
    </head>
    <body>
      <div className="login-text">
        <h1>Welcome back !!</h1>
      </div>

      <div className="login-container">

        <form className="login-form">
          <input type="text" name="username" placeholder="Username" required />
          <input type="password" name="password" placeholder="Password" required />

          <div className="login-button">
            <button>Log In</button>
          </div>
        </form>
      </div>
    </body>
  </div>
);

export default PatientLoginView;
