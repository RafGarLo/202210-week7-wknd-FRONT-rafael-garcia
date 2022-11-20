import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../../features/components/home.page/home.page";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="home" element={<HomePage></HomePage>} />
            {/* <Route path="/onSale" element={<OnSalePage></OnSalePage>}></Route> */}
            <Route path="" element={<HomePage></HomePage>}></Route>
            <Route path="*" element={<Navigate replace to="" />}></Route>
        </Routes>
    );
}
