const form = document.getElementById('periodForm');
const resultBox = document.getElementById('result');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const startDate = document.getElementById('startDate').value;
    const interval = document.getElementById('interval').value;
    const diasSelecionados = Array.from(document.querySelectorAll('input[name="dias"]:checked')).map(cb => cb.value);

    if (!startDate || !interval) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }

    // Exibe o resultado na tela (ou pode enviar ao backend)
    resultBox.style.display = 'block';
    resultBox.innerHTML = `
        <strong>Data inicial:</strong> ${startDate}<br>
        <strong>Intervalo:</strong> ${interval}<br>
        <strong>Dias selecionados:</strong> ${diasSelecionados.length > 0 ? diasSelecionados.join(', ') : 'Nenhum'}
      `;

    // Também mostra no console (útil para debug)
    console.log({
        startDate,
        interval,
        diasSelecionados
    });
});