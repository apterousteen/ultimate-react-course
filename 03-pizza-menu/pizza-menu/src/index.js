import React from 'react';
import ReactDOM from 'react-dom/client';
import { pizzaData } from './data';
import './index.css';

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Menu />
        <Footer />
      </div>
    </>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza</h1>
    </header>
  );
}

function Menu() {
  const numPizza = pizzaData.length;

  return (
    <main className="menu">
      <h2>Our menu</h2>

      {numPizza > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from.
            <br />
            All from our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p className="message">
          We're still working on our menu.
          <br />
          Please, come back later ;)
        </p>
      )}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  return (
    <li className={`pizza ${pizzaObj.soldOut ? 'sold-out' : ''}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? 'SOLD OUT' : `${pizzaObj.price} €`}</span>
      </div>
    </li>
  );
}

function Footer() {
  const curHour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;

  const isOpen = curHour > openHour && curHour < closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <FooterMessage openHour={openHour} closeHour={closeHour} />
      )}
    </footer>
  );
}

function Order({ closeHour }) {
  return (
    <div className="order">
      <p>
        We're open until{' '}
        <span className="underlined">
          {(closeHour + '').padStart(2, '0')}:00
        </span>
        . One of our waiters will take your order soon.
      </p>
    </div>
  );
}

function FooterMessage(props) {
  const { openHour, closeHour } = props;

  return (
    <p>
      We're closed now. But would be happy to welcome you between{' '}
      <span className="underlined">{openHour}:00</span> and{' '}
      <span className="underlined">{closeHour}:00</span>!
    </p>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
