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
  CSelect,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { useState, useEffect } from "react";
import axios from "axios";

//* Column Name
const fields = [
  "ID",
  "NAMA_JASA",
  "DESKRIPSI",
  "BAGIAN_STAFF",
  "HARGA",
  { key: "_", _style: { width: "2%" } },
];

const TableServices = () => {
  const [modal, setModal] = useState(false);
  const [large, setLarge] = useState(false);
  const [visible, setVisible] = React.useState(false);
  const [vData, setVData] = useState(null);
  const toggle = () => {
    setModal(!modal);
  };

  //TODO Consume API using get method
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
      <main className="c-main pt-0">
        <div class="table-new pt-5 px-lg-5 bg-white">
          <CContainer>
            <CRow>
              <CCol xs="6" lg="6" xl="6">
                <h2 class="text">Services</h2>
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
              {/* //! Button Add Services */}
              <CCol xs="6" lg="6" xl="6">
                <CButton
                  className="button-add"
                  onClick={() => setLarge(!large)}
                >
                  <CIcon name="cil-user-follow" className="icon" />
                  <b className="">ADD SERVICES</b>
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
                  </CAlert>
                </CCardBody>
              </CCol>
            </CRow>
            {/* //! Table */}
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
                    {/* //! Modal Add New Employee */}
                    <CModal
                      show={large}
                      onClose={() => setLarge(!large)}
                      centered
                    >
                      <CModalBody>
                        <h3 className="modal-title">
                          <strong>Add New Services</strong>
                        </h3>
                        <CRow>
                          <CCol xs sm="15">
                            <CCardBody>
                              <CForm
                                action=""
                                method="post"
                                className="form-add"
                              >
                                <CFormGroup>
                                  <CInputGroup>
                                    <CInput
                                      type="text"
                                      id="namaJasa"
                                      name="namaJasa"
                                      placeholder="Nama Jasa"
                                      autoComplete="name"
                                      required
                                    />
                                  </CInputGroup>
                                </CFormGroup>
                                <CFormGroup>
                                  <CInputGroup>
                                    <CInput
                                      type="text"
                                      id="deskripsi"
                                      name="deskripsi"
                                      placeholder="Deskripsi"
                                      autoComplete="deskripsi"
                                      required
                                    />
                                  </CInputGroup>
                                </CFormGroup>
                                <CFormGroup>
                                  <CSelect aria-label="Default select example">
                                    <option>Bagian Staff</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                  </CSelect>
                                </CFormGroup>
                                <CFormGroup>
                                  <CInputGroup>
                                    <CInput
                                      type="text"
                                      id="harga"
                                      name="harga"
                                      placeholder="Harga"
                                      autoComplete="harga"
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
                    {/* //! Modal Update Services */}
                    <CModal show={modal} onClose={toggle} centered>
                      <CModalBody className="pt-5">
                        <h4>
                          <b>Update Services</b>
                        </h4>
                        <CForm action="" method="post" className="px-3 py-4">
                          <CFormGroup>
                            <CInputGroup>
                              <CInput
                                type="text"
                                id="namaJasa"
                                name="namaJasa"
                                placeholder="Nama Jasa"
                                autoComplete="name"
                                required
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
                                id="deskripsi"
                                name="deskripsi"
                                placeholder="Deskripsi"
                                autoComplete="deskripsi"
                                required
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
                            <CSelect aria-label="Default select example">
                              <option>Bagian Staff</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </CSelect>
                          </CFormGroup>
                          <CFormGroup>
                            <CInputGroup>
                              <CInput
                                type="text"
                                id="harga"
                                name="deskriphargasi"
                                placeholder="Harga"
                                autoComplete="harga"
                                required
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
      </main>
    </>
  );
};

export default TableServices;
