import ListProducts from "./Components/ListProducts";
import FirebaseContext from "./context/FirebaseContext";

function App() {
  return (
    <FirebaseContext>
      <div className="mt-5 pl-3">
        <ListProducts />
      </div>
    </FirebaseContext>
  );
}

export default App;
