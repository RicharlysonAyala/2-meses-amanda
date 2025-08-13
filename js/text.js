const textElement = document.getElementById('text');
    const message = "(eii, consegue responder um quiz aqui? É da escola, meio q uma pesquisa da monitoria de info) (ooi, respondo sim) e foi assim que eu encontrei o amor da minha vida, desde o começo meu olho brilhou por você e você sabe disso, criei um site para te conquistar e olha eu aqui denovo maracujazinha, nem parece que faz tanto tempo assim que nois se conheceu ne? Mas isso mudou minha vida, sinceramente muito para melhor, ter alguém para compartilhar a vida e esse alguem ser voce so me deixa muito mais feliz pprt, nem parece que sou eu falando tao formal assim ne? KKKKKKKKKKKK, mas serio mesmo, todas noites conversando com você, madrugadas, dias, tardes, todas elas foram especiais, e quando falam: ah os primeiros meses são assim mesmo, isso não funciona pra mim, por que sao 5 meses vivendo totalmente coisas diferentes e cada dia, pelo mais cansado que eu teja, minha luz, paz, carinho e conforto é voce, todos os apelidos que eu te chamo, do tung tung sahur ate o da amandita, todos eles tem amor por você mesmo que alguns sejam zoando (são esses os mais dahora KKKKKK) mas ao ter escolhido você ao meu lado foi meu maior acerto. Eu te amo demais amor, eu não sei como foi, so sei que foi assim.";
    let index = 0;

    function typeText() {
      if (index < message.length) {
        textElement.textContent += message.charAt(index);
        index++;
        setTimeout(typeText, 40); // tempo entre letras (em ms)
      }
    }

    typeText(); // inicia a digitação