
import NavBar from "../components/layout/NavBar";
import Footer from "../components/layout/Footer";

import Carrossel from "../components/carrossel/carrossel.jsx";



function HomePage() {


    return (
    <div className="Container"> 
      <NavBar />
      <main className="mainContent">
           <Carrossel />
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;