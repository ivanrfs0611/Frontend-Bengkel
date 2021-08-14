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
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { useState, useEffect } from "react";
import axios from "axios";

//* Column Name
const fields = [
  "NO",
  "TANGGAL",
  "NO_PKB",
  "NAMA_PEKERJAAN",
  "TOTAL_PENDAPATAN",
  { key: "_", _style: { width: "2%" } },
];

const TableDetails = () => {
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  // const [large, setLarge] = useState(false);
  const [visible, setVisible] = React.useState(false);
  const [visible2, setVisible2] = React.useState(false);
  const [vData, setVData] = useState(null);
  const toggle = () => {
    setModal(!modal);
  };
  const toggle2 = () => {
    setModal2(!modal2);
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
      <main className="c-main pt-0 hv-100">
        <div class="table-new pt-5 px-lg-5 bg-white hv-100">
          <CContainer>
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
            <CRow>
              <CCol>
                <CCardBody className="p-0 align-center d-flex flex-center justify-content-center">
                  <CAlert
                    color="dark"
                    show={visible2}
                    // closeButton
                    onShowChange={setVisible2}
                    centered
                    className="w-25 d-flex flex-center justify-content-center button-alert"
                  >
                    Added
                  </CAlert>
                </CCardBody>
              </CCol>
            </CRow>
            {/* //! Table */}
            <CRow className="pt-5">
              <CCol className="">
                <CCard className="mx-5-sm" xs="12" lg="12" xl="12">
                  <CCardBody className="datatable card-body-new">
                    <CDataTable
                      items={vData}
                      fields={fields}
                      itemsPerPage={5}
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
                      show={modal2}
                      onClose={() => setModal2(!modal2)}
                      centered
                    >
                      <CModalBody>
                        <h3 className="modal-title">
                          <strong>Add Job</strong>
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
                                      type="date"
                                      id="date"
                                      name="date"
                                      autoComplete="date"
                                      placeholder="Tanggal Masuk"
                                      required
                                    />
                                  </CInputGroup>
                                </CFormGroup>
                                <CFormGroup>
                                  <CInputGroup>
                                    <CInput
                                      type="number"
                                      id="number"
                                      name="number"
                                      placeholder="No PKB"
                                      autoComplete="number"
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
                                      placeholder="Nama Pekerjaan"
                                      autoComplete="namapekerjaan"
                                      required
                                    />
                                  </CInputGroup>
                                </CFormGroup>
                                <CFormGroup>
                                  <CInputGroup>
                                    <CInput
                                      type="number"
                                      id="number"
                                      name="number"
                                      placeholder="Total Pendapatan"
                                      autoComplete="number"
                                      required
                                    />
                                  </CInputGroup>
                                </CFormGroup>
                                <CFormGroup className="form-actions">
                                  <CButton
                                    type="submit"
                                    className="button2 w-100"
                                    onClick={() => {
                                      setVisible2(5);
                                      toggle2();
                                    }}
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
                    {/* //! Modal Update Employee */}
                    <CModal show={modal} onClose={toggle} centered>
                      <CModalBody className="pt-5">
                        <h4>
                          <b>Update Job</b>
                        </h4>
                        <CForm action="" method="post" className="px-3 py-4">
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
                                <CFormGroup>
                                  <CInputGroup>
                                    <CInput
                                      type="number"
                                      id="number"
                                      name="number"
                                      placeholder="No PKB"
                                      autoComplete="number"
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
                                      placeholder="Nama Pekerjaan"
                                      autoComplete="namapekerjaan"
                                      required
                                    />
                                  </CInputGroup>
                                </CFormGroup>
                                <CFormGroup>
                                  <CInputGroup>
                                    <CInput
                                      type="number"
                                      id="number"
                                      name="number"
                                      placeholder="Total Pendapatan"
                                      autoComplete="number"
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
            <CRow>
              {/* //! Button Add Job */}
              <CCol>
                <CButton
                  className="button-add"
                  onClick={toggle2}
                >
                  <CIcon name="cil-user-follow" className="icon" />
                  <b className="">ADD JOB</b>
                </CButton>
              </CCol>
            </CRow>
          </CContainer>
        </div>
      </main>
    </>
  );
};

export default TableDetails;
