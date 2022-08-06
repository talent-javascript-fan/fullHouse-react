import React from "react";
import { NavLink } from "react-router-dom";
import {Pricerange} from "../pricerange/pricerange";

export const Sidebar = () => {
    return (
        <div className="aside aside-left aside-fixed d-flex flex-column flex-row-auto" id="kt_aside">

            <div className="aside-menu-wrapper flex-column-fluid" id="kt_aside_menu_wrapper">
                <div
                    id="kt_aside_menu"
                    className="aside-menu my-4 scroll ps ps--active-y h-100-vh"
                    data-menu-vertical="1"
                    data-menu-scroll="1"
                    data-menu-dropdown-timeout="500"
                    style={{ overflow: "hidden" }}
                >
                    <Pricerange />
                    
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
