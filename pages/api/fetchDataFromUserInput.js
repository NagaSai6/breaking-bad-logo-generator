import { periodicData } from "./periodicTableData";
export default function fetchDataFromUserInput(name){
    let firstName = name.firstName.toLowerCase();
    let lastName = name.lastName.toLowerCase();
    // first letter has to be upper-case - rest in lower-case
    firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
    lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1); 
    //  extract the first two chars from firstName and check whether extracted two chars are symbol to any element
    let extractedFirstTwoChars = firstName.substring(0,2);
    let extractedFirstChar = firstName[0];
    let restOfFirstName = firstName.substring(2);

    let extractedFirstTwoCharsLastName = lastName.substring(0,2);
    let extractedFirstCharLastName = lastName[0];
    let restOfLastName = lastName.substring(2);

    let firstNamedata = {};
    let lastNamedata = {};
    let length = periodicData.length;

   if(extractedFirstTwoChars[1]){
    for(let i=0;i<length;i++){
        if(periodicData[i].symbol === extractedFirstTwoChars){
            firstNamedata.atomicNumber = periodicData[i].atomicNumber;
            firstNamedata.atomicMass = periodicData[i].atomicMass;
            firstNamedata.oxidationStates = periodicData[i].oxidationStates;
            firstNamedata.electronicConfiguration = periodicData[i].electronicConfiguration;
            firstNamedata.symbol = periodicData[i].symbol;
            firstNamedata.isTwoChar = true;
            firstNamedata.restOfFirstName = restOfFirstName ;
        }
    }
   }

    if(Object.keys(firstNamedata).length === 0){
        // use first char to check
        for(let i=0;i<length;i++){
            if(periodicData[i].symbol === extractedFirstChar){
                firstNamedata.atomicNumber = periodicData[i].atomicNumber;
                firstNamedata.atomicMass = periodicData[i].atomicMass;
                firstNamedata.oxidationStates = periodicData[i].oxidationStates;
                firstNamedata.electronicConfiguration = periodicData[i].electronicConfiguration;
                firstNamedata.symbol = periodicData[i].symbol;
                firstNamedata.isTwoChar = false;
                firstNamedata.restOfFirstName =  firstName.substring(1) ;
            }
        }
    }
    if(Object.keys(firstNamedata).length === 0){
        // No Match bruh 
        return {isMatch : false}
    }

    for(let i=0;i<length;i++){
        if(periodicData[i].symbol === extractedFirstTwoCharsLastName){
            lastNamedata.atomicNumber = periodicData[i].atomicNumber;
            lastNamedata.atomicMass = periodicData[i].atomicMass;
            lastNamedata.oxidationStates = periodicData[i].oxidationStates;
            lastNamedata.electronicConfiguration = periodicData[i].electronicConfiguration;
            lastNamedata.symbol = periodicData[i].symbol;
            lastNamedata.isTwoChar = true;
            lastNamedata.restOfLastName = restOfLastName;
        }
    }
    if(Object.keys(lastNamedata).length === 0){
        // use first char to check
        for(let i=0;i<length;i++){
            if(periodicData[i].symbol === extractedFirstCharLastName){
                lastNamedata.atomicNumber = periodicData[i].atomicNumber;
                lastNamedata.atomicMass = periodicData[i].atomicMass;
                lastNamedata.oxidationStates = periodicData[i].oxidationStates;
                lastNamedata.electronicConfiguration = periodicData[i].electronicConfiguration;
                lastNamedata.symbol = periodicData[i].symbol;
                lastNamedata.isTwoChar = false;
                lastNamedata.restOfLastName = lastName.substring(1);
            }
        }
    }

    if(Object.keys(lastNamedata).length === 0){
        // No Match bruh 
        return {isMatch : false}
    }

   return  {firstNameData : firstNamedata,lastNameData : lastNamedata,isMatch : true}

}