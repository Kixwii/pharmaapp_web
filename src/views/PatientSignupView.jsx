import React from 'react';

const PatientSignupView = () => (
  <div>
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />
    </head>
    <body>
      <div className="patient-signup-text">
        <h1>Don't have an account? Create one.</h1>
      </div>

      <div className="patient-signup-container">

        <form className="signup-form">
          <input type="text" name="username" placeholder="Username" required />
          <input type="text" name="email" placeholder="Email" required />
          <input type="password" name="password" placeholder="Password" required />

          <div className="signup-button">
            <button>
              Create Account
              <i className="material-symbols-outlined">arrow_forward</i>
            </button>
          </div>
        </form>
      </div>
    </body>
  </div>
);

export default PatientSignupView;
