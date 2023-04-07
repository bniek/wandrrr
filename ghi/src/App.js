import Nav from './Nav';
import NewWandrrrForm from './NewWandrrrForm';
import {
   BrowserRouter,
   Routes,
   Route,
  } from "react-router-dom";




  function App() {
    return (
      <BrowserRouter>
        <Nav />
        <div className="container">
          <Routes>
            <Route path="new" element={<NewWandrrrForm />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }

export default App;
