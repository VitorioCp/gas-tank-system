import { Route, Routes } from "react-router-dom";
import { CashStart } from "../pages/CashStart";
import { Login } from "../pages/Login";
import { Main } from "../pages/Main";

export function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Login/>} />     
            <Route path="/login" element={<Login/>} />
        </Routes>
    )
}

export function AuthenticatedRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="/cashStart" element={<CashStart/>}/>
        </Routes>
    )
}