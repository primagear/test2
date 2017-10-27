var fs = require('fs');

//正确读取1.txt, 路径"../1.txt", ../代表data1或data2或1.txt或control.js
fs.readFile('../1.txt','UTF-8',function(err,data){
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
});

//正确读取3.txt,路径"../data2/3.txt", ../代表data1或data2或1.txt或control.js
fs.readFile('../data2/3.txt','UTF-8',function(err,data){
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
});
