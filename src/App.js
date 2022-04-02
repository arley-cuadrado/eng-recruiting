import './App.css';
import Bank from './Bank';
import Navbar from './Navbar';
import Menu from './Menu'

function App() {
  return (
    <>

      <main>
        <div>
          <Menu />
        </div>

        <div className="full-width">
          <header className="">
            <Navbar />
          </header>
          <section className='container'>
            <Bank />
          </section>
        </div>
      </main>

    </>
  );
}

export default App;
