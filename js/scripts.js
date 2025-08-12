const dataInicial = new Date("2025-06-12T15:00:00"); // Altere essa data conforme necessário

    function calcularDiferenca(dataInicial, dataAtual) {
      let anos = dataAtual.getFullYear() - dataInicial.getFullYear();
      let meses = dataAtual.getMonth() - dataInicial.getMonth();
      let dias = dataAtual.getDate() - dataInicial.getDate();
      let horas = dataAtual.getHours() - dataInicial.getHours();
      let minutos = dataAtual.getMinutes() - dataInicial.getMinutes();
      let segundos = dataAtual.getSeconds() - dataInicial.getSeconds();

      if (segundos < 0) {
        segundos += 60;
        minutos--;
      }

      if (minutos < 0) {
        minutos += 60;
        horas--;
      }

      if (horas < 0) {
        horas += 24;
        dias--;
      }

      if (dias < 0) {
        // Descobre quantos dias tem o mês anterior
        const mesAnterior = new Date(dataAtual.getFullYear(), dataAtual.getMonth(), 0);
        dias += mesAnterior.getDate();
        meses--;
      }

      if (meses < 0) {
        meses += 12;
        anos--;
      }

      return { anos, meses, dias, horas, minutos, segundos };
    }

    function atualizarContador() {
      const agora = new Date();
      const tempo = calcularDiferenca(dataInicial, agora);

      document.getElementById("contador").innerText =
        `${tempo.anos} years - ${tempo.meses} months - ${tempo.dias} days - ` +
        `${tempo.horas} hours - ${tempo.minutos} minutes and ${tempo.segundos} seconds`;
    }

    setInterval(atualizarContador, 1000);
    atualizarContador();

const canvas = document.getElementById("meuCanvas");
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "red";

    ctx.beginPath();

    // Começa do ponto inferior
    ctx.moveTo(300, 400);

    // Lado esquerdo do coração
    ctx.bezierCurveTo(100, 300, 100, 100, 300, 200);

    // Lado direito do coração
    ctx.bezierCurveTo(500, 100, 500, 300, 300, 400);

    ctx.closePath();
    ctx.fill();