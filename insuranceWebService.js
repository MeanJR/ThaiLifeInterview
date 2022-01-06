//2. เขียน Web Service ในการดึงข้อมูลกรมธรรม์โดยมี Request และ Response

let express = require('express');
let server = express();
server.listen(9500);
server.get('/InsurAll', showAll);
server.get('/InsurOne', showOne);



function showAll(request,response){

        response.send(insurData);
}

function showOne(request,response){

        let input = request.query.name; 
        for(let i in insurData){


           if(insurData[i].insureName == input){
               response.send(insurData[i]);
               break;
           }

           
        }
              

}


let insurData = [

            {insureName : 'นายA1', policyNo :'P0031', policyType : 'CL', status:'A', agenID:'00000005'}
            

]