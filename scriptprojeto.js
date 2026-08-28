document.addEventListener( "DOMContentLoaded", function () {
    const BtnTestar = document.getElementById("BtnTestar");
    const ValorUmidade = document.getElementById("ValorUmidade");
    const ImagemCircuito = document.getElementById("ImagemCircuito");
    const UmiStatus = document.getElementById("UmiStatus")
    
    BtnTestar.addEventListener("click", function () {
        const valor = Number(ValorUmidade.value);

        if (ValorUmidade.value === "") {UmiStatus.textContent = "Por favor, digite um valor numérico!"; ValorUmidade.style.color = "#d9534f";
            return;
        }

        if (valor <= 300) {ImagemCircuito.src = "Imagens Projeto/CircuitoLedVerde.png";
            UmiStatus.textContent = "Umidade dectada! Está chovendo, cuidado!"
            UmiStatus.style.color = "#ec3535"
        }

        else if (valor > 300 && valor < 700) {
            ImagemCircuito.src = "Imagens Projeto/CircuitoLedAmerela.png"
            UmiStatus.textContent = "A umidade solo é de nível médio. Sinal de possível chuva, atenção!"
            UmiStatus.style.color = "#b8860b";
        }

        else {
            ImagemCircuito.src = "Imagens Projeto/CircuitoLedVermelha.png";
            UmiStatus.textContent = "Nenhuma sinal de umidade foi dectado, sem sinals de chuvas.";
            UmiStatus.style.color = "#10921b";
        }
    });
});