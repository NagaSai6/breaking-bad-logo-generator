import styles from "../styles/Home.module.css";
import InputForm from "../components/InputForm";
import fetchDataFromUserInput from "./api/fetchDataFromUserInput";
import Poster from "../components/Poster";
import html2canvas from "html2canvas";
import { useState } from "react";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";

import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  let [posterData, setPostData] = useState({
    firstNameData: "",
    lastNameData: "",
    isMatch: false,
  });
  let [formSubmit, setFormSubmit] = useState(false);
  function processTheInputAndFetchData(name) {
    let data = fetchDataFromUserInput(name);
      setFormSubmit(true);
    if (data.isMatch) {
      setPostData({
        ...posterData,
        firstNameData: data.firstNameData,
        lastNameData: data.lastNameData,
        isMatch: true,
      });
    } else {
      setPostData({ firstNameData: "", lastNameData: "", isMatch: false });
    }
  }

  function triggerDownload() {}

  if (!posterData.isMatch && formSubmit) {
    Swal.fire({
      title: "N-methylamphetamine",
      text: "Hey Biyotch... No periodic symbol associated with your first two chars",
      icon: "error",
      confirmButtonText: "Okay My bad",
    });
  }




  return (
    <div>
      <div className={styles.container}>
        <h1 className="text-align-center">
          Breaking Bad logo generator Naga Sai
        </h1>
      </div>
      <InputForm fun={processTheInputAndFetchData} />
      {posterData.isMatch && (
        <>
          {" "}

          <Poster pData={posterData} triggerDownload={triggerDownload} />{" "}
        </>
      )}
    </div>
  );
}
