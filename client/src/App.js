import { SearchBar } from "./components/SearchBar";
import { ListOfPhotos } from "./components/ListOfPhotos";
import "./GlobalStyles.css";

function App() {
  const imgs = [
    {
      url: "https://picsum.photos/600",
      name: "Picsum photos",
      tags: ["dogs", "cat", "buildings"]
    },
  ];
  return (
    <div>
      <SearchBar />
      <ListOfPhotos pictures={imgs} />
      <h1>Photo Gallery📸</h1>
    </div>
  );
}

export default App;
