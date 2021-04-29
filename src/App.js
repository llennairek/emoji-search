import "./App.css";
import Search from "./components/Search";
import Line from "./components/Line";
import Footer from "./components/Footer";
import data from "./emojiList.json";
import { useState } from "react";

function App() {
  const [searchInput, setSearchInput] = useState("");

  //function to filter depending off the search input, and return the 20 first
  const filter = (array) => {
    return array
      .filter((item) => {
        return item.keywords.includes(searchInput);
      })
      .slice(0, 20);
  };

  return (
    <div>
      <Search searchInput={searchInput} setSearchInput={setSearchInput} />
      {filter(data).map((item) => {
        return <Line key={item.title} symbol={item.symbol} title={item.title} />;
      })}
      <Footer />
    </div>
  );
}

export default App;
