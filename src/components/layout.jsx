import { Outlet } from "react-router-dom";
import Header from "./header";
import { CartProvider } from "../provider";

export default function Layout(){
    return(
        <>
        
        <CartProvider>
            <Header/>
            <Outlet />
        </CartProvider>
        </>
    )
}