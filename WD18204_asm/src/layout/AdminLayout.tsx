import { Outlet } from "react-router-dom"
import HeaderAdmin from "../components/HomePage/HeaderAdmin"
import FooterAdmin from "../components/HomePage/FooterAdmin"


const AdminLayout = () => {
  return (
    <div>
    <HeaderAdmin/>
    <Outlet/>
    <FooterAdmin/>
    </div>
  )
}

export default AdminLayout
