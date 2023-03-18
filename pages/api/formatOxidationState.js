import HomeStyles from "../../styles/Home.module.css";
export default function FormatOxidationState(props) {
  //    let convertedString = initialString.split(", ").map((str)=>{
  //     return parseInt(str);
  //    })
  let stringToArray = [];
  console.log(props)
  if(typeof props.oData === 'number'){
    if(props.oData > 0){
       let temp = '+' + props.oData
        stringToArray.push(temp)
    }else{
        stringToArray.push(props.oData) 
    }
  }else{
    if(props.oData.length !=0 && props.oData.length === 2){
        stringToArray.push(props.oData)
      }else if(props.oData.length !=0 && props.oData.length > 2){
           stringToArray = props.oData.split(", ").map((str)=>{
                return parseInt(str);
               })
           stringToArray = stringToArray.sort(()=>Math.random() - 0.5)
                   for (let i = 0; i < stringToArray.length; i++) {
            if (stringToArray[i] > 0) {
              let temp = "+" + stringToArray[i];
              stringToArray[i] = temp;
            }
          }
    
      }else if(props.oData.length !=0 && props.oData.length === 1){
        let temp = "+" + props.oData;
        stringToArray.push(temp) 
      }
  }
 
  

  return (
    <div className={HomeStyles[props.class]}>
      { stringToArray.length >3 ? stringToArray.slice(0,4).reverse().map((e) => {
        return <p className={HomeStyles.posterFirstOS} key={e}>{e}</p>;
      }) : (stringToArray.length > 0 ? stringToArray.map((e)=>{return <p key={e}>{e}</p>;}) : '') }
    </div>
  );
}
