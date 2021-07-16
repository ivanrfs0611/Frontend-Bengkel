import React from 'react'
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
  CRow
} from '@coreui/react'

const Login = () => {
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
                      <CInput type="text" placeholder="Username" autoComplete="username" />
                    </CInputGroup>
                    <CInputGroup className="mb-5">
                      <CInput type="password" placeholder="Password" autoComplete="current-password" />
                    </CInputGroup>
                    <CRow>
                      <CCol>
                        <CButton className="px-5 w-100 btn-singin">SIGN IN</CButton>
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
  )
}

export default Login
