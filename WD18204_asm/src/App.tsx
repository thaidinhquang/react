import { Route, Routes } from "react-router-dom";


import ProductList from "./components/admin/ProductList";
import ProductAdd from "./components/admin/ProductAdd";
import ProductEdit from "./components/admin/ProductEdit";
import AdminLayout from "./layout/AdminLayout";
import WebsiteLayout from "./layout/WebsiteLayout";
import HomePages from "./pages/HomePages";
import Articles from "./pages/Articles";


// import HomePages from './pages/HomePages'
 function App() {
  return (
    <>
     <Routes>
      
     <Route path="/" element={<WebsiteLayout />}>
          <Route index element={<HomePages />} />
          <Route path="articles" element={<Articles/>} />
        </Route>
        <Route path="admin" element={< AdminLayout/>}>
          <Route index element={<ProductList />} />
          <Route path="product/add" element={<ProductAdd />} />
          <Route path="product/edit/:id" element={<ProductEdit />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
