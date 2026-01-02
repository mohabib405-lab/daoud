"use client"
import React, { useContext } from 'react';
import CustomCursor from '../elements/CustomCursor';
import ChatProp from '../elements/ChatProp';
import MobileNav from '../elements/MobileNav';
import FreshFlowContext from '../context/FreshFlowContext';
import ScrollToTop from '../elements/ScrollToTop';
import SideBar from '../elements/SideBar';
import { usePathname } from 'next/navigation';

const CustomLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const context = useContext(FreshFlowContext);
    if (!context) throw new Error('context is null!')
    const { isMobileOpen, isSearch } = context;
    const pathName = usePathname();
    return (
        <div className={`custom-cursor ${isMobileOpen ? "locked" : ""} ${isSearch ? "search-active" : ""}`}>
            <CustomCursor />
            <ChatProp />
            {children}
            <MobileNav />
            <ScrollToTop />
            <SideBar />
        </div >
    );
};

export default CustomLayout;