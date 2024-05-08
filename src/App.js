import logo from './logo.svg';
import './App.css';
// import CertificatePage from './components/certificatePage/CertificatePage';
import User from './components/user/User';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import PdfConvert from './components/pdf_convert/PdfConvert';

function App() {

  // const router = createBrowserRouter([
  //   {
  //     path : "/",
  //     element : <User/>
  //   },
  //   {
  //     path : "/certi",
  //     element : <CertificatePage/>
  //   }
  // ])

  return (
    <div className="App">
      {/* <CertificatePage/> */}
      {/* <User/> */}
      {/* <RouterProvider router = {router}/> */}
      <PdfConvert/>
    </div>
  );
}

export default App;
