function chargeCal(){
    var intime=new Date(document.getElementById('start-date').value);
    var outtime=new Date(document.getElementById('end-date').value);
    if(intime>=outtime){
        document.getElementById('result1').innerHTML='Enter out time Correctly' ;
        return;
    }
    const hourlyCharge = 5.00;
    var min = outtime-intime;
    var hours= Math.ceil(min/(1000*60*60));
    var totalCharge = hours*hourlyCharge ;
    if(hours>12 && hours<=24){
        totalCharge=(12*5)+((hours-12)*4);
    }else if(hours>24){
        totalCharge=(12*5)+(12*4)+((hours-24)*3);
    }
    document.getElementById('hours').textContent = hours;
    document.getElementById('fee').textContent = totalCharge.toFixed(2);
}
function setCurrent(){
    var intime = new Date(document.getElementById('start-date').value);
    var outtime = new Date();

    document.getElementById('end-date').value = outtime.toISOString().slice(0, 16);

    if(intime>=outtime){
        document.getElementById('result1').innerHTML='Enter out time Correctly' ;
        return;
    }
    const hourlyCharge = 5.00;
    var min = outtime-intime;
    var hours= Math.ceil(min/(1000*60*60));
    var totalCharge = hours*hourlyCharge ;
    if(hours>12 && hours<=24){
        totalCharge=(12*5)+((hours-12)*4);
    }else if(hours>24){
        totalCharge=(24*5)+((hours-24)*3);
    }
    document.getElementById('hours').textContent = hours;
    document.getElementById('fee').textContent = totalCharge.toFixed(2);
}