window.addEventListener('load', calculateTime)

function calculateTime(){
    let dia = new Date();
    let dayNumber = dia.getDay();
    let hora = dia.getHours();
    let minuto = dia.getMinutes();
    let ampm =  hora>= 12 ? 'PM' : 'AM';
    let dayNames = ["SEG", "TER", "QUA", "QUI", "SEX", "SAB", "DOM"];

    hora = hora % 12;
    hora = hora ? hora : '12';
    hora = hora < 10 ? '0' + hora : hora;
    minuto = minuto <10 ? '0' + minuto : minuto;

    document.getElementById("dia").innerHTML = dayNames[dayNumber];
    document.getElementById("hora").innerHTML = hora;
    document.getElementById("minuto").innerHTML = minuto;
    document.getElementById("ampm").innerHTML = ampm;

    setTimeout(calculateTime, 200);
}