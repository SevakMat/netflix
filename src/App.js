import HomePage from "./pages/homePage/homePage";
import { Provider } from "react-redux";
import store from "./redux/store"

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <HomePage />
      </Provider>
    </div>
  );
}

export default App;
