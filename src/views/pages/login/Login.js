import React from "react";
// import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CRow,
} from "@coreui/react";
import { useState } from "react";
// import { useEffect } from "react";
import axios from "axios";

const Login = () => {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { username, password } = values;
    const user = { username, password };

    await axios.post(
      "https://mocki.io/v1/67f1ad17-dd38-4bdb-8950-b0042da64c9f",
      user
    );
  };
  console.log(handleSubmit);
  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };

  return (
    <div className="c-app c-default-layout flex-row align-items-center bg-white">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8" lg="5" sm="12" xl="4">
            <CCardGroup>
              <CCard className="p-5 shadow-sm bg-white rounded">
                <CCardBody>
                  <CForm>
                    <h2 className="text-center">Sign In</h2>
                    <CInputGroup className="mb-3 mt-5">
                      <CInput
                        type="text"
                        placeholder="Username"
                        autoComplete="username"
                        value={values.username}
                        onChange={handleChange("username")}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-5">
                      <CInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        value={values.password}
                        onChange={handleChange("password")}
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol>
                        <CButton
                          className="px-5 w-100 btn-singin"
                          onClick={handleSubmit}
                        >
                          SIGN IN
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Login;
