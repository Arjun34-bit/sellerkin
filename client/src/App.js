import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import IndexPage from "./pages/IndexPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
