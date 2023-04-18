// import Nav from './Nav';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WandrrrDetail from './get_one';




  function App() {
    return (
      <BrowserRouter>
        {/* <Nav /> */}
        <div className="container">
        <Routes>
          {/* <Route path="new" element={<WandrrrForm />} /> */}
          <Route path="/wandrrrs/:wandrrrs_id" element={<WandrrrDetail />} />

        </Routes>
        </div>
      </BrowserRouter>
    );


  // return (
  //   <AuthProvider>
  //     {/* All of your other components, here */}
  //   </AuthProvider>
  // );
}

export default App;
