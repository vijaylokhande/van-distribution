module.exports.getCurrentDateTime = () => {
    const currentdate = new Date();
    var date = currentdate.getFullYear() + "-" + (currentdate.getMonth()+1)+ "-" + currentdate.getDate()+'T' 
    + currentdate.getHours() + ":" + currentdate.getMinutes() + ":" + currentdate.getSeconds();
    return date;
}
