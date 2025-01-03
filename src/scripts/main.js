AOS.init();

const dataDoEvento = new Date ("Feb 22, 2025 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval (function()  {
    const agora = new Date();
    const timeStampDoAtual = agora.getTime();

    const distaciaAteOEvento = timeStampDoEvento - timeStampDoAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutosEmMs = 1000 * 60 ;


    const diasAteOEvento = Math.floor(distaciaAteOEvento / diaEmMs);
    const horasAteOEvento =  Math.floor(distaciaAteOEvento % diaEmMs / horaEmMs);
    const minuteosAteOEvento =  Math.floor(distaciaAteOEvento % horaEmMs / minutosEmMs);
    const segundosAteOEvento = Math.floor((distaciaAteOEvento % minutosEmMs) / 1000);

    console.log(diasAteOEvento);
    console.log(horasAteOEvento);
    console.log(minuteosAteOEvento);

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minuteosAteOEvento}m ${segundosAteOEvento}s `;

    if (distaciaAteOEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'Evento Expirado';

    }
        

}, 1000);