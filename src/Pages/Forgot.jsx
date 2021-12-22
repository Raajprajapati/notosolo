import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth } from '../firebase';
import {sendPasswordResetEmail} from "firebase/auth";

function Forgot() {
    function sendLink(e) {
        e.preventDefault()
        const email = document.getElementById("email")
        if (email){
            sendPasswordResetEmail(auth, email)
                .then(() => {
                    toast.success("Email link sent!!")
                }).catch((error) => {
                    let text = error.message
                    toast.error(`${text.slice(9)}`)
                })}
        else{
            toast.error(`Please Enter a email`)
        }
    }

return (

    <>
        <div className="forgot">
            <form>
                <input type="text" name="email" id="email" />
                <button onClick={sendLink}>Send Reset Link</button>
            </form>
        </div>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover
        />
    </>
)
}

export default Forgot
