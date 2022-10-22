import styles from "../styles/Home.module.css";
import InputForm from "../components/InputForm";
import fetchDataFromUserInput from "./api/fetchDataFromUserInput";
import Poster from "../components/Poster";
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

  return (
    <div className={styles.container}>
      <InputForm fun={processTheInputAndFetchData} />
      {posterData.isMatch ? <Poster pData={posterData}/>: ''}
    </div>
  );
}
