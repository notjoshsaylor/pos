import Liqour from "./btnComponents/Liqour"
import Beer from "./btnComponents/Beer"
import Cocktails from "./btnComponents/Cocktails"
import Display from "./Display"
import Starters from "./btnComponents/Starters"
import Entree from "./btnComponents/Entree"
import Dessert from "./btnComponents/Dessert"

function App() {
  return (
    <div className="App">
      <div className="hero">
        <Liqour />
        <Cocktails />
        <Beer />
        <Display />
        <Starters />
        <Entree />
        <Dessert />
      </div>
    </div>
  );
}

export default App;
