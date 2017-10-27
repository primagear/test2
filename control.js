var fs = require('fs');


// ./代表当前所在目录
// ../代表上一层目录
//正确读取1.txt, 路径"1.txt"或"./1.txt"
/*fs.readFile('1.txt','UTF-8',function(err,data){
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
});*/

//正确读取2.txt，路径"./data1/2.txt"， ./可代表1.txt或data1或data2
fs.readFile('./data1/2.txt','UTF-8',function(err,data){
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
});