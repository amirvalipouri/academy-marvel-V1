import React , {useState  , createContext } from 'react'
import LoginModal from '../../../components/NewVersion/loginModal'
import SignIn from '../SignIn'
import {Container} from "react-bootstrap"
import './index.scss'
import SignUp from '../SignUp'
import Context from '../_context'

const Newlogin = ({
    show ,
    onHide
}) => {
  const [ activePage , setActivePage ] = useState("signIn")
  return (
        <LoginModal
         show={show}
         onHide={onHide}
         variant="white"
         title=""
         closeBtn
         className=""
         titleClassName="border-0"
      >
        <Container className="loginModal d-flex justify-content-center align-items-center py-4 px-4">
             
            {/* {number == 1 && <SignUp/>  } */}
            <Context.Provider value={[ activePage , setActivePage ]}>
              {activePage == "signIn" && <SignIn/>  }
              {activePage == "signUp" && <SignUp/>  }
                
            </Context.Provider>
            
        </Container>
        

      </LoginModal>
  )
}

export default Newlogin