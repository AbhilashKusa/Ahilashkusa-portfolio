import React from "react"
import { IoMdMail } from "react-icons/io"
import { FaTelegramPlane, FaLinkedin } from "react-icons/fa"

export default function Contact() {
  
  return (
    <div>
      <div className="section">
        <h1 className="text-center  " id="title-contact">
          <b>CONTACT</b>
        </h1>
        <div className="container">
          <div className="row">
            <div className="text-center col-xl-4">
              <b className="">
                E-Mail <IoMdMail />
              </b>
              <br />
              <a
                href="mailto:kusa.abhilash@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <b className="">kusa.abhilash@gmail.com</b>
              </a>
            </div>
            <div className="text-center col-xl-4">
              <b className="">
                Telgram <FaTelegramPlane />
              </b>
              <br />
              <a
                href="https://t.me/Abhilashkusa"
                target="_blank"
                rel="noopener noreferrer"
              >
                <b>
                  {" "}
                  @AbhilashKusa <FaTelegramPlane />
                </b>
              </a>
            </div>
            <div className="text-center col-xl-4">
              <b className="">
                Linked in <FaLinkedin />
              </b>
              <br />
              <a
                href="https://www.linkedin.com/in/kusa-abhilash/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <b>
                  {" "}
                  AbhilashKusa <FaLinkedin />
                </b>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
