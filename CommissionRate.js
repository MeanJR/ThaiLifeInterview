//1.1 CommissionRate (อัตราค่านายหน้าเบี้ยประกันปีแรก)

let age = +prompt("กรุณากรอก อายุของคูณ");
let year = +prompt("กรุณากรอก อายุกรรม์")

let percent = percentCommission(age,year);


console.log("อายุผู้เอาประกัน "+age+" ปี\n"
            +"อายุกรมธรรม์ "+year+" ปี\n"
            +"อัตราค่านายหน้าต่อเบี้ยประกันภัยคือ "+percent);

document.write("อายุผู้เอาประกัน "+age +" ปี<br>"
            +"อายุกรมธรรม์ "+year+" ปี<br>"
            +"อัตราค่านายหน้าต่อเบี้ยประกันภัยคือ "+percent);
            


function percentCommission(age,year){

    if(age >= 0 && age <= 50){

        if(year == 1){return "2%";}
        else if(year ==  2){return "1%";}
        else if(year == 3){return "1%"}
        else{return "";}


    }else if(age >= 51 && age <= 60){

        if(year == 1){return "2%";}
        else if(year ==  2){return "2%";}
        else if(year == 3){return "1%"}
        else{return "";}

    }


}