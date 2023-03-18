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
      var tempcanvas = document.createElement('canvas');
      tempcanvas.width=1080;
      tempcanvas.height=1080;
      // var context=tempcanvas.getContext('2d');
      // context.drawImage(canvas,465,40,465,524,0,0,465,524);
      var link=document.createElement("a");
      link.href=canvas.toDataURL('image/jpg');
      link.download = `${posterData.firstNameData.symbol}${posterData.firstNameData.restOfFirstName}-breaking-bad-logo.png`;
      link.click();
  });
  }

  return (
    <div className={styles.container}>
      <InputForm fun={processTheInputAndFetchData} />
      {posterData.isMatch ? 
      <>
      
      <Poster pData={posterData}/> 
      <button style={{textAlign:'center'}} onClick={triggerDownload}>Download</button></>: ''}
    </div>
  );
}
