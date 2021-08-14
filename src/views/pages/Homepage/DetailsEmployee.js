import React from "react";
import {
  CContainer,
  CRow,
  CCol,
  CLabel,
  CImg,
  CButton,
  CCardBody,
  CModal,
  CModalBody,
  CForm,
  CFormGroup,
  CInputGroup,
  CInput,
  CAlert,
} from "@coreui/react";
// import '@coreui/coreui/dist/css/coreui.min.css';
// import "src/scss/style.scss";
import { useState } from "react";
const DetailsEmployee = () => {
  const [modal, setModal] = useState(false);
  const [visible, setVisible] = React.useState(false);
  const toggle = () => {
    setModal(!modal);
  };
  return (
    <>
      <main className="c-main pt-0 hv-100">
        <div class="bg-white hv-100 pt-5 px-lg-5">
          <CContainer>
            <CCardBody className="p-0 align-center d-flex flex-center justify-content-center">
              <CAlert
                color="dark"
                show={visible}
                onShowChange={setVisible}
                centered
                className="w-25 d-flex flex-center justify-content-center"
              >
                Saved
              </CAlert>
            </CCardBody>
            <CRow>
              <CCol className="">
                <h2 class="text">Richard Parker</h2>
              </CCol>
              <CCol className="text-right">
                <CCol className="px-0">
                  <CLabel class="text">Tanggal Masuk</CLabel>
                </CCol>
                <CCol className="px-0">
                  <CLabel class="text">04 Mei 2021</CLabel>
                </CCol>
              </CCol>
            </CRow>
            <CRow className="align-items-end">
              <CCol className="align-center">
                <div>
                  <CRow>
                    <CCol>
                      <CLabel class="text m-0 align-center text-secondary">ID</CLabel>
                    </CCol>
                  </CRow>
                  <CRow>
                    <CCol>
                      <CLabel class="text m-0 align-center">04</CLabel>
                    </CCol>
                  </CRow>
                </div>
                <div className="pt-2">
                  <CRow>
                    <CCol>
                      <CLabel class="text m-0 align-center text-secondary">No telfon</CLabel>
                    </CCol>
                  </CRow>
                  <CRow>
                    <CCol>
                      <CLabel class="text m-0 align-center ">0415646461</CLabel>
                    </CCol>
                  </CRow>
                </div>
                <div className="pt-2">
                  <CRow>
                    <CCol>
                      <CLabel class="text m-0 align-center text-secondary">Email</CLabel>
                    </CCol>
                  </CRow>
                  <CRow>
                    <CCol>
                      <CLabel class="text m-0 align-center">Bambang @gmail</CLabel>
                    </CCol>
                  </CRow>
                </div>
                <div className="pt-2">
                  <CRow>
                    <CCol>
                      <CLabel class="text m-0 align-center text-secondary">Alamat</CLabel>
                    </CCol>
                  </CRow>
                  <CRow>
                    <CCol>
                      <CLabel class="text m-0 align-center">Jalan Rambutan no 10</CLabel>
                    </CCol>
                  </CRow>
                </div>
              </CCol>
              <CCol className="text-right">
                <CButton onClick={toggle} className="p-0">
                  <CImg src="https://image.flaticon.com/icons/png/512/747/747376.png" width="100px" height="100px" />
                </CButton>
              </CCol>
            </CRow>
            <CModal show={modal} onClose={toggle} centered>
              <CModalBody className="pt-5">
                <h4 className="text text-center">
                  Add Job
                </h4>
                <CForm action="" method="post" className="px-3 py-4">
                  <CFormGroup>
                    <CInputGroup>
                      <CInputGroup>
                        <CInput
                          type="date"
                          id="date"
                          name="date"
                          autoComplete="date"
                          placeholder="Tanggal Masuk"
                          required
                        />
                      </CInputGroup>
                    </CInputGroup>
                  </CFormGroup>
                  <CFormGroup>
                    <CInputGroup>
                      <CInput
                        type="number"
                        id="no_pkb"
                        name="no_pkb"
                        placeholder="No PKB"
                        required
                      />
                    </CInputGroup>
                  </CFormGroup>
                  <CFormGroup>
                    <CInputGroup>
                      <CInput
                        type="text"
                        id="nama_pekerjaan"
                        name="nama_pekerjaan"
                        placeholder="Nama Pekerjaan"
                        required
                      />
                    </CInputGroup>
                  </CFormGroup>
                  <CFormGroup>
                    <CInputGroup>
                      <CInput
                        type="number"
                        id="total_pendapatan"
                        name="total_pendapatan"
                        placeholder="Total Pendapatan"
                        required
                      />
                    </CInputGroup>
                  </CFormGroup>
                  <CFormGroup className="form-actions pt-4">
                    <CButton
                      className="w-100 btn-singin"
                      onClick={() => {
                        setVisible(5);
                        toggle();
                      }}
                    >
                      ADD
                    </CButton>
                  </CFormGroup>
                </CForm>
              </CModalBody>
            </CModal>
          </CContainer>
        </div>
      </main>
    </>
  );
};

export default DetailsEmployee;
