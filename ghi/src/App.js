import Nav from './Nav';
import NewWandrrrForm from './NewWandrrrForm';
import UpdateWandrrr from './UpdateWandrrr';
import {
   BrowserRouter,
   Routes,
   Route,
  } from "react-router-dom";




  function App(props) {
    return (
      <BrowserRouter>
        <Nav />
        <div className="container">
          <Routes>
            <Route path="new" element={<NewWandrrrForm user={props.user} />} />
            <Route path="edit/" element={<UpdateWandrrr />} />

          </Routes>
        </div>
      </BrowserRouter>
    );
  }


export default App;
