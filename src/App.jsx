import "./styles/App.scss";
import Create from "./components/Create/Create";
import Home from "./components/Layout/Home";
import Layout from "./components/Layout/Layout";
import { Routes, Route, useLocation } from "react-router-dom";
import Listen from "./components/Listen/Listen";
import Share from "./components/Share/Share";

function App() {
  let location = useLocation();
  return (
    <div className={`app view-${location.pathname.substring(1)}`}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="create" element={<Create />} />
          <Route path="listen" element={<Listen />} />
          <Route path="share" element={<Share />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
