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
    <>
      <Header />
      <Menu />
      <Footer />
    </>
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
  const tiffens = tiffenData;
  const numTiffens = tiffens.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {numTiffens > 0 ? (
        <>
          <p>
            Authentic Indian cuisine. 6 creative dishes to choose from. All from
            our kitchen, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {tiffens.map((tiffen) => (
              <Tiffen tiffenObj={tiffen} key={tiffen.name} />
            ))}
          </ul>
        </>
      ) : null}

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
function Tiffen({ tiffenObj }) {
  console.log(tiffenObj);
  //if (tiffenObj.soldOut) return null;
  return (
    <ul className={`pizza ${tiffenObj.soldOut ? "sold-out" : ""}`}>
      <img src={tiffenObj.photoName} alt={tiffenObj.name} />
      <div>
        <h3>{tiffenObj.name}</h3>
        <p>{tiffenObj.ingredients}</p>
        {/* {tiffenObj.soldOut ? (
          <span>SOLD OUT</span>
        ) : (
          <span>tiffenObj.price</span>
        )} */}
        <span>{tiffenObj.soldOut ? "SOLD OUT" : tiffenObj.price}</span>
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
  //if (!isOpen) return <p>CLOSED</p>;
  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00
        </p>
      )}
    </footer>
  );
  //return React.createElement("footer", null, "we're currently open !");
}
function Order(props) {
  return (
    <div className="order">
      <p>
        We're open until {props.closeHour}:00. Come visit us or order online.{" "}
      </p>
      <button className="btn">Order</button>
    </div>
  );
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
