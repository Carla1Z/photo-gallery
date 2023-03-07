import { SearchBar } from "./components/SearchBar";
import { ListOfPhotos } from "./components/ListOfPhotos";
import { UploadPhoto } from "./components/UploadPhoto";
import "./GlobalStyles.css";
import { BiUpArrow } from "react-icons/bi";

function App() {
  const imgs = [
    {
      url: "https://picsum.photos/600",
      name: "Picsum photos",
      tags: ["dogs", "cat", "buildings"],
    },
  ];
  return (
    <div>
      <SearchBar />
      <ListOfPhotos pictures={imgs} />
      <UploadPhoto />
    </div>
  );
}

export default App;
