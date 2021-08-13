import {
    CRow,
    CCol,
    CFooter,
} from "@coreui/react";
// import "src/scss/style.scss"



const NewFooter = () => {
    return (
      <>
        <CFooter className="d-flex justify-content-center text-align coklat text-light">
          <CRow>
            <CCol > Copyright © 2021. All rights reserved.</CCol>
          </CRow>
        </CFooter>
      </>
    );
  }
  export default NewFooter
