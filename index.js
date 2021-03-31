const request = require('request');
const xml = require('xml-js');
const url = "http://asp1.krx.co.kr/servlet/krx.asp.XMLSise?code=098120";
request(url, (err, res, body)=>{
    if(res.statusCode == 200){
        var result = body;
        var json = xml.xml2json(result, {compact:true, spaces:4});
        console.log(json);
    }
})

// http://data.krx.co.kr/contents/MDC/MDI/mdiLoader/index.cmd?menuId=MDC0201020201