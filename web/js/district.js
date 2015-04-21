
function answers(){
    var andman_nicobar = ["North and Middle Andaman", "South Andaman", "Nicobar"];
    var andhra = ["Nellore","Cuddapah","Karim Nagar","Kurnool","West Godavari","Srikakulam","Anantpur","Adilabad","Chittor","east Godavari","Guntur","Hyderabad Urban","Khammam","Krishna","Mehboobnagar","Medak","Nalgonda","Nizamabad","Prakasam","Ranga Reddy","Vishakapatnam","Vizianagaram","Warangal"];
    var arunachal_prades = ["Diban Valley( Anini Valley)","East Kameng Seppa","Itanagar","East Siang(Passighat)","Lohit(Tezu)","Lower Subansiri(Ziro)", "Khonsa","Roin","Tawang","Changalang","Dibang Valley","Daporijo","Bomdila Alog( West Siang )"];
    var rajasthan = ["sirohi","jawai bandh","sheoganj"];
    console.log("HELLO");
    select = document.getElementById('district');
    select.options.length = 0;

var answer=document.getElementById("state");;
 if(answer[answer.selectedIndex].value=="andhra"){
     for (var i = 0; i<=12; i++){
   
    select.options[select.options.length] = new Option(andhra[i], andhra[i]);
}
  
 }
   else if(answer[answer.selectedIndex].value=="rajasthan"){
     for (var i = 0; i<=2; i++){
  select.options[select.options.length] = new Option(rajasthan[i], rajasthan[i]);
}
  
 }
    else if(answer[answer.selectedIndex].value=="andman"){
     for (var i = 0; i<=2; i++){
  select.options[select.options.length] = new Option(andman_nicobar[i], andman_nicobar[i]);
}
  
 }
    else if(answer[answer.selectedIndex].value=="arunachal"){
     for (var i = 0; i<=16; i++){
  select.options[select.options.length] = new Option(arunachal_prades[i], arunachal_prades[i]);
}
  
 }
}
        
       