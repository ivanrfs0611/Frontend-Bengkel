import {
  CNavbar,
  CToggler,
  CCollapse,
  CNavbarNav,
  CNavLink,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CNavItem,
} from "@coreui/react";
import React, { useState } from "react";
import CIcon from '@coreui/icons-react'
import "src/scss/style.scss"



const Employee = () => {
   const [isOpen, setIsOpen] = useState(false);
    return (
      <div>
        <CNavbar expandable="sm" colorScheme="light" className="black p-0">
          <CToggler inNavbar onClick={() => setIsOpen(!isOpen)}  className="p-3"/>
          <CCollapse navbar show={isOpen}>
            <CNavbarNav>
              <CNavItem className="border-right">
                <CNavLink className="px-3 my-2" active href="#"><CIcon name="cil-home" className="mx-2" /><btn className="align-middle">Home</btn></CNavLink>
              </CNavItem>
               <CNavItem className="border-right">
                 <CNavLink className="px-3 my-2" active><CIcon name="cil-user" className="mx-2" /><btn className="align-middle">Employee</btn></CNavLink>
              </CNavItem>
              <CNavItem className="border-right">
               <CNavLink className="px-3 my-2" active><CIcon name="cil-people" className="mx-2" /><btn className="align-middle">Customer</btn></CNavLink>
              </CNavItem>
               <CNavItem className="border-right">
                <CNavLink className="px-3  my-2" active><btn className="align-middle">Menu 1</btn></CNavLink>
              </CNavItem>
               <CNavItem className="border-right">
                <CNavLink className="px-3  my-2" active><btn className="align-middle">Menu 2</btn></CNavLink>
              </CNavItem>
            </CNavbarNav>
            <CNavbarNav className="ml-auto pr-5 px-3 my-2-sm">
              <CNavItem className="">
                <CNavLink className="" active><btn className="align-middle"><b>Richard Parker</b><br /> Admin</btn></CNavLink>
              </CNavItem>
               <CDropdown inNav className="">
                  <CDropdownToggle  className="mt-2" active></CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem>Account</CDropdownItem>
                    <CDropdownItem>Settings</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown> 
            </CNavbarNav>
          </CCollapse>
        </CNavbar>
      </div>
    );
  }
  export default Employee
