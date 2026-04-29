// Data alvo
const alvo = new Date('January 15, 2027 00:00:00').getTime();

// Função para atualizar o contador
function atualizarContador() {
    const agora = new Date().getTime();
    const distancia = alvo - agora;

    if (distancia < 0) {
        document.querySelector('.countdown').innerHTML = "<h2>Chegou a data!</h2>";
        clearInterval(intervalo);
        return;
    }

    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    document.getElementById('dias').textContent = dias;
    document.getElementById('horas').textContent = horas;
    document.getElementById('minutos').textContent = minutos;
    document.getElementById('segundos').textContent = segundos;
}

// Atualiza a cada 1 segundo
const intervalo = setInterval(atualizarContador, 1000);
atualizarContador(); // Atualiza imediatamente ao carregar
