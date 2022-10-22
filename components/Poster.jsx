import HomeStyles from "../styles/Home.module.css";
import fetchElectronConfig from "../pages/api/fetchElectronicConfig";
import FormatOxidationState from "../pages/api/formatOxidationState";

export default function Poster(props) {
  let atomicNumber = props.pData.firstNameData.atomicNumber;
  let firstNameElectronicConfig = fetchElectronConfig(atomicNumber);

  return (
    <div className={HomeStyles.posterMainContainer}>
      <div className={HomeStyles.posterFirstAtomicMass}>
        {props.pData.firstNameData.atomicMass}
      </div>
      <div className={HomeStyles.posterFirstAtomicSymbol}>
        {props.pData.firstNameData.symbol}
      </div>
      <div className={HomeStyles.posterFirstAtomicNumber}>
        {props.pData.firstNameData.atomicNumber}
      </div>
      <div className={HomeStyles.posterFirstElectronicConfig}>
        {firstNameElectronicConfig}
      </div>
      <FormatOxidationState oData={props.pData.firstNameData.oxidationStates}/>
    </div>
  );
}
