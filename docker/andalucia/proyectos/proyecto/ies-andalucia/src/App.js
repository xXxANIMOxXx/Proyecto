import React from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import MainSection from './components/MainSection';
import AsidePanel from './components/AsidePanel';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />

      <main className="container my-5">
        <div className="row">
          <section className="col-md-8">
            <MainSection />
          </section>
          <aside className="col-md-4">
            <AsidePanel />
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;

