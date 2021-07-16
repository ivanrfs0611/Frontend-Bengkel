import {
  CNavbar,
  CToggler,
  CNavbarNav,
  CNavLink,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CNavItem,

} from "@coreui/react";
import { useSelector, useDispatch } from 'react-redux'
import "src/scss/style.scss"



const NewNavbar = () => {
   const dispatch = useDispatch()
  const sidebarShow = useSelector(state => state.sidebarShow)

  // const toggleSidebar = () => {
  //   const val = [true, 'responsive'].includes(sidebarShow) ? false : 'responsive'
  //   dispatch({type: 'set', sidebarShow: val})
  // }

  const toggleSidebarMobile = () => {
    const val = [false, 'responsive'].includes(sidebarShow) ? true : 'responsive'
    dispatch({type: 'set', sidebarShow: val})
  }
    return (
      <>
        <CNavbar colorScheme="black" className="coklat p-0">
          <CToggler
            inNavbar
            className="d-lg-none mx-3"
            onClick={toggleSidebarMobile}
          />
          {/* <CToggler
            inNavbar
            className="d-md-down-none"
            onClick={toggleSidebar}
          /> */}
            <CNavbarNav className="ml-auto pr-4 px-3 my-1 flex-row">
              <CNavItem className="">
                <CNavLink className="" active><btn className="align-middle"><b>Richard Parker</b><br /> Admin</btn></CNavLink>
              </CNavItem>
               <CDropdown inNav className="pl-2">
                  <CDropdownToggle  className="mt-2" active></CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem>Account</CDropdownItem>
                    <CDropdownItem>Settings</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown> 
            </CNavbarNav>
        </CNavbar>
      </>
    );
  }
  export default NewNavbar
