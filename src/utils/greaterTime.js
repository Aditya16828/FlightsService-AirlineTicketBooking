function greaterTime(stringdatetime1, stringdatetime2){
    let datetime1 = Date.parse(stringdatetime1)
    let datetime2 = Date.parse(stringdatetime2);
    
    if(datetime1 > datetime2) {return true;}
    else {return false;}   
}

module.exports = {greaterTime};