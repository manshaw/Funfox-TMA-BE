// "d/MM/YYYY h:MM:SS" 24H format
function formattedDate(){
    var date = new Date();
    var time = date.toTimeString().split(' ')[0];
    var year = date.toISOString().split('-')[0];
    var month = date.toISOString().split('-')[1];
    var day = date.getDate().toString();
    return day + '/' + month + '/' + year + ' ' + time;
  }

  module.exports = formattedDate;