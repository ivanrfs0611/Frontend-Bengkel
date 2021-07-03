import {
  CNavbar,
  CToggler,
  CNavbarBrand,
  CCollapse,
  CNavbarNav,
  CNavLink,
  CForm,
  CInput,
  CButton,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
} from "@coreui/react";
import React, { Component } from "react";

export default class Homepage extends Component {
  render() {
    return (
      <div>
        <CNavbar expandable="sm" color="#000000">
          <CToggler inNavbar />
          <CNavbarBrand>NavbarBrand</CNavbarBrand>
          <CCollapse navbar>
            <CNavbarNav>
              <CNavLink>Home</CNavLink>
              <CNavLink>Link</CNavLink>
            </CNavbarNav>
            <CNavbarNav className="ml-auto">
              <CForm inline>
                <CInput className="mr-sm-2" placeholder="Search" size="sm" />
                <CButton color="light" className="my-2 my-sm-0" type="submit">
                  Search
                </CButton>
              </CForm>
              <CDropdown inNav>
                <CDropdownToggle color="primary">Lang</CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem>EN</CDropdownItem>
                  <CDropdownItem>ES</CDropdownItem>
                  <CDropdownItem>RU</CDropdownItem>
                  <CDropdownItem>FA</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
              <CDropdown inNav>
                <CDropdownToggle color="primary">User</CDropdownToggle>
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
}
