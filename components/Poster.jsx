import HomeStyles from "../styles/Home.module.css";
import fetchElectronConfig from "../pages/api/fetchElectronicConfig";
import FormatOxidationState from "../pages/api/formatOxidationState";

export default function Poster(props) {
  let atomicNumber = props.pData.firstNameData.atomicNumber;
  let lastAtomicNumber = props.pData.lastNameData.atomicNumber;
  let firstNameElectronicConfig = fetchElectronConfig(atomicNumber);
 let lastNameElectronicConfig = fetchElectronConfig(lastAtomicNumber);
 let temp = undefined ;
 if(props.pData.firstNameData.isTwoChar){
  temp = 'posterFirstAtomicSymbol'
 }else{
  temp = 'posterFirstAtomicSymbolOneChar'
 }
  return (
    <div className={HomeStyles.posterMainContainer} id="logo">
      <div className={HomeStyles.posterFirstAtomicMass}>
        {props.pData.firstNameData.atomicMass}
      </div>
      <div className={HomeStyles[temp]}>
        {props.pData.firstNameData.symbol}
      </div>
      <div className={HomeStyles.posterRestOfFirstName}>
        {props.pData.firstNameData.restOfFirstName}
      </div>
      <div className={HomeStyles.posterFirstAtomicNumber}>
        {props.pData.firstNameData.atomicNumber}
      </div>
      <div className={HomeStyles.posterFirstElectronicConfig}>
        {firstNameElectronicConfig}
      </div>
      <div className={HomeStyles.posterLastAtomicMass}> 
      {props.pData.lastNameData.atomicMass}
      </div>
      <div className={HomeStyles.posterLastAtomicSymbol}>
        {props.pData.lastNameData.symbol}
      </div>
      <div className={HomeStyles.posterRestOfLastName}>
        {props.pData.lastNameData.restOfLastName}
      </div>
      <div className={HomeStyles.posterLastAtomicNumber}>
        {props.pData.lastNameData.atomicNumber}
      </div>
      <div className={HomeStyles.posterLastElectronicConfig}>
        {lastNameElectronicConfig}
      </div>
      <div style={{color : '#fff'}}>
        #breakingbad
      </div>
      <FormatOxidationState oData={props.pData.firstNameData.oxidationStates} class="posterFirstOxidationStates"/>
      <FormatOxidationState oData={props.pData.lastNameData.oxidationStates} class="posterLastOxidationStates"/>
    </div>
  );
}
