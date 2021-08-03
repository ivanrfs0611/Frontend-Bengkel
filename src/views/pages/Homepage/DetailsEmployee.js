import React from "react";
import {
  CContainer,
  CRow,
  CCol,
  CLabel,
  CInput,
} from "@coreui/react";
// import '@coreui/coreui/dist/css/coreui.min.css';
import "src/scss/style.scss";
const DetailsEmployee = () => {
  return (
    <>
      <main className="c-main pt-0 hv-100">
        <div class="bg-white hv-100 pt-5 px-lg-5">
            <CContainer>
                <CRow>
                    <CCol className="">
                        <h2 class="text">Richard Parker</h2>
                    </CCol>
                    <CCol>
                        <CCol className="align-self-end"  md={8}> 
                            <CLabel class="text">Tanggal Masuk</CLabel>
                        </CCol>
                        <CCol  md={4}>
                            <CLabel class="text">04 Mei 2021</CLabel>
                        </CCol>
                    </CCol>
                </CRow>
                <CRow>
                    <CCol className="align-center">
                        <CLabel class="text m-0 align-center">ID</CLabel> <br />
                        <CLabel class="text m-0 align-center">04</CLabel>
                    </CCol>
                    <CCol className="align-center">
                        
                    </CCol>
                </CRow>
            </CContainer>
        </div>
      </main>
    </>
  );
};

export default DetailsEmployee;
