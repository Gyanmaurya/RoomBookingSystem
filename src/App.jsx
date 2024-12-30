import { Routes, Route } from "react-router-dom";
import { Home, Payment, Rooms } from "./pages";
import { Footer, Navbar } from "./components";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
