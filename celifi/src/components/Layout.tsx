import { FC, ReactNode } from "react";

import Header from "./Header";
import { Footer } from "./Footer";

interface Props {
    children: ReactNode;
}
const Layout: FC<Props> = ({ children }) => {
    return (
        <>
            <div className="  overflow-hidden  h-screen relative  ">
                <div className="hidden md:block"> <Header/></div>
               
                <div className="py-16  max-w-7xl mx-auto  sm:px-6 lg:px-8">
                
                    {children}
                   
                   
                </div>
                <div className="absolute  bottom-0">
                <Footer />
                </div>
                 
               
                
            </div>
        </>
    );
};

export default Layout;
