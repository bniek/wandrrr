import Nav from './Nav';
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "@galvanize-inc/jwtdown-for-react";



function App() {
  // other stuff, here

  return (
    <AuthProvider>
      {/* All of your other components, here */}
    </AuthProvider>
  );
}



//   function App() {
//     return (
//       <BrowserRouter>
//         <Nav />
//       </BrowserRouter>
//     );
//   }

// export default App;
