const schedule = function (rtm, text, channel) {

  const regex = /([1-9]|1[012])\/([1-9]|[123][0-9])/;
  var arr = ["8/4", "8/22", "9/1", "9/2", "9/3", "9/4", "9/6", "9/7", "10/15", "10/19", "10/20", "10/21", "10/27", "11/3", "11/24", "12/21", "12/23"]
  var arrIndex = [[0], [1], [2,3], [3], [3], [3,4], [3], [3], [3], [5], [6] ,[6], [6], [7], [8], [9], [10], [11]]

  const fs = require('fs')


  console.log('학사일정');
 
  //형식에 맞는 경우
  if (regex.test(text)){

    const data = fs.readFileSync("haksa.txt");
    const haksa = data.toString().split("\n");

    var index = arr.indexOf(text)

    if (index == -1){
      rtm.sendMessage('해당 날짜에 대한 일정이 없습니다', channel);
    }else{
      for (var i in arrIndex[index]){
        var contents = haksa[i].toString().split(' : ')
        rtm.sendMessage(contents[1], channel)
      }
    }
      
  }else{    //형식에 안맞는 경우
  rtm.sendMessage('날짜 양식에 맞게 입력해주세요. (ex.9/1)', channel);
  }



};



module.exports = schedule;
