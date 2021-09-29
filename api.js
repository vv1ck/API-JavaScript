var email = 'joker@yahoo.com'; //enter email
//download this library >> npm install xhr2
var XMLHttpRequest = require('xhr2');
var send = new XMLHttpRequest();
send.onreadystatechange = function() {
    if (send.readyState == 4 ){
        msg = send.responseText;
        if ("MSAccount" == msg){
            console.log('{"by telegram:@vv1ck" , status: True}');}
        else{
            console.log('{"by telegram:@vv1ck" , status: False}');}}}
send.open("GET", "https://odc.officeapps.live.com/odc/emailhrd/getidp?hm=0&emailAddress="+email);
send.send();