
const calculateAvg = (arr) => {

    let result =arr.reduce((acc,current) => {return acc+current} ,0 );
    return result/arr.length;

}

const compareScoreAvg = (arr1, arr2) =>{
    if(calculateAvg(arr1) > calculateAvg(arr2)){
        console.log("John's teams has the higher avg");
    } else if(calculateAvg(arr1) < calculateAvg(arr2)){
        console.log("Mike's teams has the higher avg");

    } else {
        console.log("It's a draw");
    }

}
let johnScore = [89,120,103];
let mikeScore = [116,94,123];


compareScoreAvg(johnScore,mikeScore);


mikeScore.push(0);
console.log("after adding 0 score to mikes avg the result is:");
compareScoreAvg(johnScore,mikeScore);

////////////////////////////////////////////////////////////////////////////////////////
//extra 
console.log('****************extra**********************');
 johnScore = [89,120,103];
 mikeScore = [116,94,123];
const maryScore = [120,135,42];

const compareScoreAvgExtra = (arr1,arr2,arr3,name1,name2,name3) => {
    let avg1 = calculateAvg(arr1);
    let avg2 = calculateAvg(arr2);
    let avg3 = calculateAvg(arr3);

    if(avg1 > avg2 && avg1> avg3){
        console.log(name1+"'s team has the higher avg");
    } else if(avg2> avg1 && avg2>avg3) {
        console.log(name2+"'s team has the higher avg");
    } else if(avg3> avg1 && avg3>avg2) {
        console.log(name3+"'s team has the higher avg");

    } else {
        console.log('draw');
    }

}

compareScoreAvgExtra(johnScore,mikeScore,maryScore,"John","Mike","Mary");
maryScore.push(500);

compareScoreAvgExtra(johnScore,mikeScore,maryScore,"John","Mike","Mary");
