import React, { useState } from 'react'
import {
  CDataTable,
  CButton,
  CCard,
  CCardBody,
  CCol,
  CRow,
  CForm,
  CFormGroup,
  CInput,
  CInputGroup,
  CModal,
  CModalBody,
  CAlert,
  CContainer,
  CProgress,
} from "@coreui/react";
import { DocsLink } from "src/reusable";
import usersData from "../../users/UsersData";
import CIcon from "@coreui/icons-react";

const fields = [
  "ID",
  "NAMA_LENGKAP",
  "NO_TELFON",
  "EMAIL",
  "ALAMAT",
  "TANGGAL_MASUK",
];

const Homepage = () => {
  const [large, setLarge] = useState(false)
  const [visible, setVisible] = React.useState(5)
  return (
    <>
      <div class="table"> 
          <CCol className="header">
            <CButton className="button" onClick={() => setLarge(!large)}>
              <CIcon name="cil-user-follow"/>
              <strong>
                <span className="mfs-2">ADD EMPLOYEE</span>
              </strong>
            </CButton>
            <h2 class="text">Employees</h2>
            <CCol md="1">
            <CAlert className="alert-add"
                color="dark"
                show={visible}
                onShowChange={setVisible}
              >
                <strong>ADDED</strong>
                <CProgress
                  value={Number(visible) * 5}
                />
              </CAlert>
          </CCol>
          </CCol>
          <CContainer>

          </CContainer>
        <CRow>
          <CCol>
            <CCard className="card-table">
              <CCardBody className="datatable">
                <CDataTable
                  items={usersData}
                  fields={fields}
                  itemsPerPage={10}
                  pagination
                  striped
                />
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
        <CModal 
          show={large} 
          onClose={() => setLarge(!large)}
          centered
        >
          <CModalBody>
            <h3 className="modal-title"><strong>Add New Employee</strong></h3>
             <CRow>
                <CCol xs sm="15">
                  <CCardBody>
                    <CForm action="" method="post" className="form-add">
                      <CFormGroup>
                        <CInputGroup>
                          <CInput id="username" name="username" placeholder="Nama Lengkap" autoComplete="name" required/>
                        </CInputGroup>
                      </CFormGroup>
                      <CFormGroup>
                        <CInputGroup>
                          <CInput type="tel" id="telfon" name="telfon" placeholder="No Telfon" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" autoComplete="username" required/>
                        </CInputGroup>
                      </CFormGroup>
                      <CFormGroup>
                        <CInputGroup>
                          <CInput type="email" id="email" name="email" placeholder="Email" autoComplete="username" required/>
                        </CInputGroup>
                      </CFormGroup>
                      <CFormGroup>
                        <CInputGroup>
                          <CInput type="text" id="text" name="text" placeholder="Alamat" autoComplete="username" required/>
                        </CInputGroup>
                      </CFormGroup>
                      <CFormGroup>
                        <CInputGroup>
                          <CInput type="date" id="date" name="date" autoComplete="date" placeholder="Tanggal Masuk" required/>
                        </CInputGroup>
                      </CFormGroup>
                      <CFormGroup className="form-actions">
                        <CButton type="submit" className="button2 w-100">Submit</CButton>
                      </CFormGroup>
                    </CForm>
                  </CCardBody>
              </CCol>
            </CRow>
          </CModalBody>
        </CModal>
      </div>
    </>
  );
};

export default Homepage;
