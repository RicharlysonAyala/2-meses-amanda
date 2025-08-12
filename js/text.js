const textElement = document.getElementById('text');
    const message = "Olá, este é um texto que aparece aos poucos...Olá, este é um texto que aparece aos poucos...Olá, este é um texto que aparece aos poucos...";
    let index = 0;

    function typeText() {
      if (index < message.length) {
        textElement.textContent += message.charAt(index);
        index++;
        setTimeout(typeText, 50); // tempo entre letras (em ms)
      }
    }

    typeText(); // inicia a digitação