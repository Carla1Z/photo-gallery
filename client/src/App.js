import { SearchBar } from "./components/SearchBar";
import { ListOfPhotos } from "./components/ListOfPhotos";
import { UploadPhoto } from "./components/UploadPhoto";
import "./GlobalStyles.css";

function App() {
  return (
    <div>
      <SearchBar />
      <ListOfPhotos />
      <UploadPhoto />
    </div>
  );
}

export default App;
