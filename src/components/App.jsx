import { Link as RouterLink, BrowserRouter as Router, Route as RouterView } from 'react-router-dom';

const App = () => (
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
    <header>
      <div className="wrapper">
        <nav className="navbar">
          <RouterLink to="/" className="nav-item"><i className="material-symbols-outlined">home</i></RouterLink>
          <RouterLink to="/history" className="nav-item"><i className="material-symbols-outlined">history</i></RouterLink>
          <RouterLink to="/cart" className="nav-item"><i className="material-symbols-outlined">shopping_cart</i></RouterLink>
          <RouterLink to="/account" className="nav-item"><i className="material-symbols-outlined">account_circle</i></RouterLink>
        </nav>
      </div>
    </header>

    <RouterView />
  </div>
);

export default App;
