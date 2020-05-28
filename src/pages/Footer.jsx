import React from "react"
import { GiSelfLove } from "react-icons/gi"
import { BsCodeSlash } from "react-icons/bs"

export default function Footer() {
  return (
    <div className="Footer">
      <div className="container text-center p-5 text-white">
        <h4>
          {" "}
          <BsCodeSlash /> With <GiSelfLove /> by Abhilash kusa
        </h4>
      </div>
    </div>
  )
}
