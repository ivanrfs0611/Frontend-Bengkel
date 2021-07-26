import React from "react";

import NewNavbar from "../component/new-navbar";
import NewFooter from "../component/new-footer";

import NewSideBar from "../component/new-sidebar";
import Content from "../component/new-content";
import "src/scss/style.scss";
import { CRow, CCol } from "@coreui/react";

const Homepage = () => {
  // const [large, setLarge] = useState(false)
  // const [visible, setVisible] = React.useState(5)
  return (
    <>
      <div className="c-wrapper">
        <NewNavbar />
        <CRow className="">
          <NewSideBar />
          <CCol className="">
            <Content />
          </CCol>
        </CRow>

        <NewFooter />
      </div>
    </>
  );
};

export default Homepage;
