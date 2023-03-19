import React from 'react'
import { Button } from 'react-bootstrap'
export default function image(props) {
    function triggerDownload(){
             var link = document.createElement("a");

     
      link.href = props.data.url;
      link.download = `breaking-bad-logo.png`;
      link.click();
    }
  return (
    <div style={{textAlign: 'center',marginTop : '0',marginBottom:'10px'}}>
      <Button className='my-3' onClick={triggerDownload}>Download</Button>
      <a href={props.data.url}>see</a>
      <div style={{textAlign:'center',width:'100vw'}}>
      <img src={props.data.url} alt="" style={{objectFit: 'contain',width:'400px',height:'400px'}} />
      </div>
    </div>
  )
}
