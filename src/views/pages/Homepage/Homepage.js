import React from "react";
import {
  CDataTable,
  CButton,
  CCard,
  CCardBody,
  CCol,
  CRow,
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
  return (
    <>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div class="table">
        <div>
          <CCol className="header">
            <CButton className="button">
              <CIcon name="cil-user-follow" className="icon" />
              <strong>
                <span className="mfs-2">ADD EMPLOYEE</span>
              </strong>
            </CButton>
            <h2 class="text">Employees</h2>
          </CCol>
        </div>
        <CRow>
          <CCol>
            <CCard className="card">
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
      </div>
    </>
  );
};

export default Homepage;
