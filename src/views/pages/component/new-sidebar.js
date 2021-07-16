import {
  CSidebar,
  CSidebarNav,
  CNavItem,
  CNavLink,
} from "@coreui/react";
import "src/scss/style.scss"
import CIcon from "@coreui/icons-react";
import { useSelector, useDispatch } from 'react-redux'


const NewSideBar = () => {
    const dispatch = useDispatch()
    const show = useSelector(state => state.sidebarShow)
    return (
      <>
        <CSidebar className="test abu border-right test"  show={show}
        onShowChange={(val) => dispatch({type: 'set', sidebarShow: val })}>
            <CSidebarNav className="test">
                <CNavItem>
                    <CNavLink className="p-3 pl-4 text-body" href="#"><CIcon name="cil-home" className="mx-2 text-body" />
                        <btn className="align-middle text-body`">Home</btn>
                    </CNavLink>
                </CNavItem>
                <CNavItem>
                    <CNavLink className="p-3 pl-4"  href="#"><CIcon name="cil-user" className="mx-2 text-body" />
                        <btn className="align-middle text-body">Employee</btn>
                    </CNavLink>
                </CNavItem>
                <CNavItem>
                    <CNavLink className="p-3 pl-4"  href="#"><CIcon name="cil-people" className="mx-2 text-body" />
                        <btn className="align-middle text-body">Customer</btn>
                    </CNavLink>
                </CNavItem>
                <CNavItem>
                    <CNavLink className="p-3 pl-4"  href="#"><CIcon name="cil-home" className="mx-2 text-body" />
                        <btn className="align-middle text-body">Service</btn>
                    </CNavLink>
                </CNavItem>
            </CSidebarNav>
        </CSidebar>
      </>
    );
  }
  export default NewSideBar
