
    function calcular() {
      const horas = parseFloat(document.getElementById('horas').value);
      const inicio = new Date(document.getElementById('inicio').value);
      const fim = new Date(document.getElementById('fim').value);
      const diasUteis = Array.from(document.querySelectorAll('#dias option:checked')).map(el => parseInt(el.value));

      let dias = 0;
      let dataAtual = inicio;
      while (dataAtual <= fim) {
        if (diasUteis.includes(dataAtual.getDay())) {
          dias++;
        }
        dataAtual.setDate(dataAtual.getDate() + 1);
      }

      const horasPorDia = dias === 0 ? 0 : horas / dias;
      document.getElementById('resultado').textContent = `Vc deverá pagar ${horasPorDia.toFixed(2)} horas por dia, a partir da data selecionada.`;
    }