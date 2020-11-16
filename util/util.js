module.exports.getCurrentDateTime = () => {
    const currentdate = new Date();   
    var datetime = {};
    datetime["date"]=currentdate.getFullYear() + "-" + (currentdate.getMonth() + 1) + "-" + currentdate.getDate();
    datetime["time"]=currentdate.getHours() + ":" + currentdate.getMinutes() + ":" + currentdate.getSeconds();
    return datetime;
}
