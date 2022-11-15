import Layout from "./components/Layout/Layout";
import Products from "./pages/Products";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Edit from "./pages/Edit";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Route>
        <Route path="*" element={<h1>404: Not Found</h1>} />
      </Routes>
    </Provider>
  );
}

export default App;
