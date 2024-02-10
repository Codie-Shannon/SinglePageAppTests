import { Route, Routes } from "@solidjs/router";

import { Header } from "./components/headerComponent";
import { Footer } from "./components/footerComponent";

import { Home } from './components/homeComponent';
import { Trucks } from './components/trucksComponent';
import { NotFound } from './components/notfoundComponent';

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/*" element={NotFound}/>
        <Route path="/" element={Home} />
        <Route path="/home" element={Home} />
        <Route path="/trucks" element={Trucks} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;