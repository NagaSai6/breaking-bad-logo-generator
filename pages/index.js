import styles from "../styles/Home.module.css";
import InputForm from "../components/InputForm";
import fetchDataFromUserInput from "./api/fetchDataFromUserInput";
import Poster from "../components/Poster";
import html2canvas from "html2canvas";
import { useState } from "react";

export default function Home() {
  let [posterData,setPostData] = useState({firstNameData:'',lastNameData:'',isMatch:false});
  function processTheInputAndFetchData(name) {
    let data = fetchDataFromUserInput(name);
    console.log(data)
    if (data.isMatch) {
      setPostData({...posterData,firstNameData : data.firstNameData,lastNameData : data.lastNameData,isMatch : true});
    }else{
      setPostData({firstNameData : '',lastNameData : '',isMatch : false});

    }
  }


  function triggerDownload(){
    html2canvas(document.querySelector("#logo")).then(canvas => {
      // document.body.appendChild(canvas)
      var link = document.createElement('a');
      link.download = 'breaking-bad.png';
      link.href = canvas.toDataURL()
      link.click();
  });
  }

  return (
    <div className={styles.container}>
      <InputForm fun={processTheInputAndFetchData} />
      {posterData.isMatch ? 
      <>
      <button onClick={triggerDownload}>Download</button>
      <Poster pData={posterData}/> </>: ''}
    </div>
  );
}
