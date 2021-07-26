import React from "react";
import {
  CDataTable,
  CButton,
  CCard,
  CCardBody,
  CCol,
  CRow,
  CContainer,
  CModal,
  CModalBody,
  CForm,
  CFormGroup,
  CInputGroup,
  CInput,
  CInputGroupAppend,
  CInputGroupText,
  CAlert,
  CProgress,
  //   CProgress
} from "@coreui/react";
// import usersData from "../../users/UsersData";
import CIcon from "@coreui/icons-react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const fields = [
  "ID",
  "NAMA_LENGKAP",
  "NO_TELFON",
  "EMAIL",
  "ALAMAT",
  "TANGGAL_MASUK",
  { key: "_", _style: { width: "2%" } },
];

const NewTable = () => {
  const [modal, setModal] = useState(false);
  const [large, setLarge] = useState(false);
  const [visible, setVisible] = React.useState(false);
  const [vData, setVData] = useState(null);
  const toggle = () => {
    setModal(!modal);
  };

  const getAllData = () => {
    axios
      .get("https://mocki.io/v1/156800b8-a955-400b-a5e4-3f2ae12ffba0")
      .then((response) => {
        // const data = response.data;
        setVData(response.data.Data);
        console.log(response);
      });
  };

  useEffect(() => {
    getAllData();
    console.log(vData);
  }, []);

  return (
    <>
      <div class="table-new pt-5 px-lg-5 bg-white">
        <CContainer>
          <CRow>
            <CCol xs="6" lg="6" xl="6">
              <h2 class="text">Employees</h2>
              <CCol md="1">
                <CAlert
                  className="alert-add"
                  color="dark"
                  show={visible}
                  onShowChange={setVisible}
                >
                  <strong>ADDED</strong>
                  <CProgress value={Number(visible) * 5} />
                </CAlert>
              </CCol>
            </CCol>
            <CCol xs="6" lg="6" xl="6">
              <CButton className="button-add" onClick={() => setLarge(!large)}>
                <CIcon name="cil-user-follow" className="icon" />
                <b className="">ADD EMPLOYEE</b>
              </CButton>
            </CCol>
          </CRow>
          <CRow>
            <CCol>
              <CCardBody className="p-0 align-center d-flex flex-center justify-content-center">
                <CAlert
                  color="dark"
                  show={visible}
                  // closeButton
                  onShowChange={setVisible}
                  centered
                  className="w-25 d-flex flex-center justify-content-center"
                >
                  Saved
                  {/* <CProgress
                                striped
                                color="warning"
                                value={Number(visible) * 10}
                                size="xs"
                                className="mb-3"
                                /> */}
                </CAlert>
              </CCardBody>
            </CCol>
          </CRow>
          <CRow className="pt-lg-5">
            <CCol className="">
              <CCard className="mx-5-sm" xs="12" lg="12" xl="12">
                <CCardBody className="datatable card-body-new">
                  <CDataTable
                    items={vData}
                    fields={fields}
                    itemsPerPage={10}
                    pagination
                    responsive
                    scopedSlots={{
                      _: (item, index) => {
                        return (
                          <td className="py-2">
                            <CButton
                              color=""
                              variant=""
                              shape="square"
                              size="sm"
                              onClick={toggle}
                            >
                              <CIcon name="cil-options"></CIcon>
                            </CButton>
                          </td>
                        );
                      },
                    }}
                  />
                  <CModal
                    show={large}
                    onClose={() => setLarge(!large)}
                    centered
                  >
                    <CModalBody>
                      <h3 className="modal-title">
                        <strong>Add New Employee</strong>
                      </h3>
                      <CRow>
                        <CCol xs sm="15">
                          <CCardBody>
                            <CForm action="" method="post" className="form-add">
                              <CFormGroup>
                                <CInputGroup>
                                  <CInput
                                    id="username"
                                    name="username"
                                    placeholder="Nama Lengkap"
                                    autoComplete="name"
                                    required
                                  />
                                </CInputGroup>
                              </CFormGroup>
                              <CFormGroup>
                                <CInputGroup>
                                  <CInput
                                    type="tel"
                                    id="telfon"
                                    name="telfon"
                                    placeholder="No Telfon"
                                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                    autoComplete="username"
                                    required
                                  />
                                </CInputGroup>
                              </CFormGroup>
                              <CFormGroup>
                                <CInputGroup>
                                  <CInput
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Email"
                                    autoComplete="username"
                                    required
                                  />
                                </CInputGroup>
                              </CFormGroup>
                              <CFormGroup>
                                <CInputGroup>
                                  <CInput
                                    type="text"
                                    id="text"
                                    name="text"
                                    placeholder="Alamat"
                                    autoComplete="username"
                                    required
                                  />
                                </CInputGroup>
                              </CFormGroup>
                              <CFormGroup>
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
                              </CFormGroup>
                              <CFormGroup className="form-actions">
                                <CButton
                                  type="submit"
                                  className="button2 w-100"
                                >
                                  Submit
                                </CButton>
                              </CFormGroup>
                            </CForm>
                          </CCardBody>
                        </CCol>
                      </CRow>
                    </CModalBody>
                  </CModal>
                  <CModal show={modal} onClose={toggle} centered>
                    <CModalBody className="pt-5">
                      <h4>
                        <b>Update Employee</b>
                      </h4>
                      <CForm action="" method="post" className="px-3 py-4">
                        <CFormGroup>
                          <CInputGroup>
                            <CInput
                              id="username"
                              name="username"
                              placeholder="Nama Lengkap"
                              autoComplete="name"
                              required
                              className="br-none"
                            />
                            <CInputGroupAppend>
                              <CInputGroupText className="bg-transparent h-100 p-0">
                                <CButton className="p-0 px-3">
                                  <CIcon name="cil-x"></CIcon>
                                </CButton>
                              </CInputGroupText>
                            </CInputGroupAppend>
                          </CInputGroup>
                        </CFormGroup>
                        <CFormGroup>
                          <CInputGroup>
                            <CInput
                              type="tel"
                              id="telfon"
                              name="telfon"
                              placeholder="No Telfon"
                              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                              autoComplete="username"
                              required
                              className="br-none"
                            />
                            <CInputGroupAppend>
                              <CInputGroupText className="bg-transparent h-100 p-0">
                                <CButton className="p-0 px-3">
                                  <CIcon name="cil-x"></CIcon>
                                </CButton>
                              </CInputGroupText>
                            </CInputGroupAppend>
                          </CInputGroup>
                        </CFormGroup>
                        <CFormGroup>
                          <CInputGroup>
                            <CInput
                              type="email"
                              id="email"
                              name="email"
                              placeholder="Email"
                              autoComplete="username"
                              required
                              className="br-none"
                            />
                            <CInputGroupAppend>
                              <CInputGroupText className="bg-transparent h-100 p-0">
                                <CButton className="p-0 px-3">
                                  <CIcon name="cil-x"></CIcon>
                                </CButton>
                              </CInputGroupText>
                            </CInputGroupAppend>
                          </CInputGroup>
                        </CFormGroup>
                        <CFormGroup>
                          <CInputGroup>
                            <CInput
                              type="text"
                              id="text"
                              name="text"
                              placeholder="Alamat"
                              autoComplete="username"
                              required
                              className="br-none"
                            />
                            <CInputGroupAppend>
                              <CInputGroupText className="bg-transparent h-100 p-0">
                                <CButton className="p-0 px-3">
                                  <CIcon name="cil-x"></CIcon>
                                </CButton>
                              </CInputGroupText>
                            </CInputGroupAppend>
                          </CInputGroup>
                        </CFormGroup>
                        <CFormGroup>
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
                        </CFormGroup>
                        <CFormGroup className="form-actions pt-4">
                          <CButton
                            className="w-100 btn-singin"
                            onClick={() => {
                              setVisible(5);
                              toggle();
                            }}
                          >
                            Save
                          </CButton>
                        </CFormGroup>
                      </CForm>
                    </CModalBody>
                  </CModal>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        </CContainer>
      </div>
    </>
  );
};
export default NewTable;
