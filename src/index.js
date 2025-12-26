import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const tiffenData = [
  {
    name: "Idli",
    ingredients:
      "Streamed rice cake with spice podi oil, coconet chutney, sambar",
    price: 6,
    photoName: "tiffen/idli.jpg",
    soldOut: false,
  },
  {
    name: "Dosai",
    ingredients: "roosted dosai with seseme oil, chutney, sambar",
    price: 10,
    photoName: "tiffen/dosa.jpg",
    soldOut: false,
  },
  {
    name: "Vadai",
    ingredients: "crispy vada, tomato onion chutney, sambar with ghee",
    price: 12,
    photoName: "tiffen/vadai.jpg",
    soldOut: false,
  },
  {
    name: "Pongal",
    ingredients:
      "Ghee pongal, sambar, coconet chutney, and fried spicy onion chutney",
    price: 12,
    photoName: "tiffen/pongal.jpg",
    soldOut: false,
  },
  {
    name: "Poori",
    ingredients: "crispy wheat bread, potato gravy, and chenna masala",
    price: 15,
    photoName: "tiffen/poori.jpg",
    soldOut: true,
  },
  {
    name: "Sweet Kesari",
    ingredients: "Colorful Semiya, Sugar, Ghee, Cashewnut, spices",
    price: 18,
    photoName: "tiffen/kesari.jpg",
    soldOut: false,
  },
];
function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast Tiffen Stall Co.</h1>
    </header>
  );
}
function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <ul className="pizzas">
        {tiffenData.map((tiffen) => (
          <Tiffen tiffenObj={tiffen} key={tiffen.name} />
        ))}
      </ul>
      {/* <Tiffen
        name="idli"
        ingredients="Streamed rice cake with spice podi oil, coconet chutney, sambar"
        photoName="tiffen/idli.jpg"
        price={10}
      />
      <Tiffen
        name="dosai"
        ingredients="roosted dosai with seseme oil, chutney, sambar"
        photoName="tiffen/dosa.jpg"
        price={40}
      />
      <Tiffen
        name="Vadai"
        ingredients="crispy vada, tomato onion chutney, sambar with ghee"
        photoName="tiffen/vadai.jpg"
        price={10}
      />
      <Tiffen
        name="pongal"
        ingredients="Ghee pongal, sambar, coconet chutney, and fried spicy onion chutney"
        photoName="tiffen/pongal.jpg"
        price={40}
      />
      <Tiffen
        name="poori"
        ingredients="crispy wheat bread, potato gravy, and chenna masala"
        photoName="tiffen/poori.jpg"
        price={40}
        /> */}
    </main>
  );
}
function Tiffen(props) {
  console.log(props);
  return (
    <ul className="pizza">
      <img src={props.tiffenObj.photoName} alt={props.tiffenObj.name} />
      <div>
        <h3>{props.tiffenObj.name}</h3>
        <p>{props.tiffenObj.ingredients}</p>
        <span>{props.tiffenObj.price}</span>
      </div>
    </ul>
  );
}
function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  //if (hour >= openHour && hour <= closeHour) alert("We're Currently Open");
  //else alert("Sorry, soon will open  at " + openHour + "PM");
  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()} We're Currently Open
    </footer>
  );
  //return React.createElement("footer", null, "we're currently open !");
}

// version 18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// before version 18
//React.render(<App />);
