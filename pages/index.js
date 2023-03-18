import styles from "../styles/Home.module.css";
import InputForm from "../components/InputForm";
import fetchDataFromUserInput from "./api/fetchDataFromUserInput";
import Poster from "../components/Poster";
import html2canvas from "html2canvas";
import { useState } from "react";
import Button from '@mui/material/Button';
import Swal from 'sweetalert2'
export default function Home() {
  let [posterData,setPostData] = useState({firstNameData:'',lastNameData:'',isMatch:false});
  let [formSubmit,setFormSubmit] = useState(false);
  function processTheInputAndFetchData(name) {
    let data = fetchDataFromUserInput(name);
    console.log(data);
    setFormSubmit(true)
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
      tempcanvas.width=500;
      tempcanvas.height=500;
      // var context=tempcanvas.getContext('2d');
      // context.drawImage(canvas,465,40,465,524,0,0,465,524);
      var link=document.createElement("a");
      link.href=canvas.toDataURL('image/jpg');
      link.download = `${posterData.firstNameData.symbol}${posterData.firstNameData.restOfFirstName}-breaking-bad-logo.png`;
      link.click();
  });
  }

  if(!posterData.isMatch && formSubmit){
    Swal.fire({
      title: 'N-methylamphetamine',
      text: 'Hey Biyotch... No periodic symbol associated with your first two chars',
      icon: 'error',
      confirmButtonText: 'Okay My bad'
    })
  }

  return (
    <div className={styles.container}>
      <InputForm fun={processTheInputAndFetchData} />
      {posterData.isMatch ? 
      <>
      <div style={{textAlign:'center',marginBottom:'30px'}}> <Button variant="contained" style={{textAlign:'center'}} onClick={triggerDownload}>Download</Button></div>
      <Poster pData={posterData}/> 
     </> : ''}
    </div>
  );
}
