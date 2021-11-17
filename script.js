// users greeting
function myFunction(){
        // var users=document.getElementById("user");
        // alert("Hello  " + user.value);
    
    //date description
    
    var myDate=document.getElementById("date");
    if (myDate.value<1 || myDate.value>31){
        alert("Please input values between 1 and 31 ");
        myDate.value="";
    } 
    
    //month selection
    
    var myMonth=document.getElementById("month");
    if (myMonth.value<1 || myMonth.value>12){
        alert("Please input values between 1 and 12 ");
    } 
    
    //days of the week
    
    var myDate=document.getElementById("date");
    var myMonth=document.getElementById("month");
    var myYear=document.getElementById("year");
    
    
    var CC=parseInt(myYear.value.slice(0,2));
    var YY=parseInt(myYear.value.slice(2,4));
    var MM=parseInt(myMonth.value);
    var DD=parseInt(myDate.value);
    
    var myDay=Math.floor(( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7)
    var results="";
    if(myDay==0){
        results=6
    }
    else {
        results=myDay-1
    }
    var gender1=document.getElementById("male")
    let gender2=document.getElementById("female")
    
    
    
    //  where;
    
    //  CC - is the century digits. For example 1989 has CC = 19
    //  YY - is the Year digits (1989 has YY = 89)
    //  MM -  is the Month
    //  DD - is the Day of the month
    //  mod - is the modulus function ( % )
    
    
    //days of week & akan name
    var users=document.getElementById("user");
    var days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    
    var male=["Kwame","Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi"];
    
    var female=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
    
    if(gender1.checked){
        alert("Hello " + user.value + " Your akan name is "+ male[results] + " and was born on " + days[results])
    }
    else if(gender2.checked){
        alert("Hello " + user.value + " Your akan name is "+ female[results] + " and was born on " + days[results])
    
    
    
    
    }
    
}