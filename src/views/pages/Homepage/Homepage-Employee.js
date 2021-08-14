import React from "react";
import { CRow, CCol } from "@coreui/react";

import NewNavbar from "../component/new-navbar";
import NewFooter from "../component/new-footer";
import NewSideBar from "../component/new-sidebar";
import DetailsEmployee from "./DetailsEmployee";
import TableDetails from "./TableDetails";
import "src/scss/style.scss";

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
            <DetailsEmployee />
            <TableDetails />
          </CCol>
        </CRow>
      </div>
      <NewFooter />
    </>
  );
};

export default Homepage;
