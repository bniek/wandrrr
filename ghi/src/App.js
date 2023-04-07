// import Nav from './Nav';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GetOne from './get_one';
import GetTwo from "./get_two";


  function App(props) {
    return (
      <BrowserRouter>
        {/* <Nav /> */}
        <div className="container">
        <Routes>
          {/* <Route path="new" element={<WandrrrForm />} /> */}
          <Route path="gettwo" element={<GetTwo posts={props.posts} />} />
          <Route path="getone" element={<GetOne />} />
        </Routes>
        </div>
      </BrowserRouter>
    );
  }

export default App;
