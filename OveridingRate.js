//1.2 OveridingRate (อัตราค่าจัดงานต่อเบี้ยประกันภัย)

let age = +prompt("กรุณากรอก อายุของคูณ");



let text = "";

let percent = percentOveriding(age);


console.log("อายุผู้เอาประกัน "+age+" ปี\n" +text+"\n"
            +"อัตราค่าจัดเลี้ยงต่อเบี้ยประกัน "+percent);

document.write("อายุผู้เอาประกัน "+age +" ปี<br>"
            +text+"<br>"
            +"อัตราค่าจัดเลี้ยงต่อเบี้ยประกัน "+percent);
            


function percentOveriding(age){

    if(age >= 0 && age <= 50){
        let checkAnnual = confirm("กรมธรรม์รายปีหรือไม่ ? Annual  ");

      if(checkAnnual == true){
        text = "เป็นกรมธรรม์รายปี (Annual)";
        
          return "20%";
      }else{
        text = "ไม่เป็นกรมธรรม์รายปี (Non Annual)";
        return "16%"
      }


    }else if(age >= 51 && age <= 60){

            return "13%";

    }else{
        return"";
    }


}