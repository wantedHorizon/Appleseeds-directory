
const tellFortune = (childrenNumber, partnerName, geoLocation, job ) =>{
    return `“You will be a ${job} in ${geoLocation},and married to ${partnerName} with ${childrenNumber} kids”`;
}


console.log(tellFortune(3,'null',' amsterdam', 'fullstack'));