import React from "react";
import { CRow, CCol } from "@coreui/react";

import NewNavbar from "../component/new-navbar";
import NewFooter from "../component/new-footer";
import NewSideBar from "../component/new-sidebar";
import TableServices from "./TableServices";

import "src/scss/style.scss";

const Services = () => {
  return (
    <>
      <div className="c-wrapper">
        <NewNavbar />
        <CRow className="">
          <NewSideBar />
          <CCol className="">
            <TableServices />
          </CCol>
        </CRow>
      </div>
      <NewFooter />
    </>
  );
};

export default Services;
