  // SCRIPTS CIENTISTA

  function cientista_1() {
    while (question != 1 || question != 2) { //Aqui são os numeros que devem ser digitados como resposta no prompt
      var question = prompt(
        '1. Você entra em um fórum comunitario na internet onde outros cientististas estão colaborando relatando todas os possíveis desdobramentos da doença. \n 2. Você decide trabalhar sozinho em uum soro para cura usando conhecimentos que você adquiriu durante estudos.' //Aqui escrever as duas opçoes do personagem
      );
  
      if (question == 1) {
        window.location.href = "../stories/cientista_2.html"; // Se DIGITAR 1, vai para página 2 do personagem
        break;
      } else if (question == 2) {
        window.location.href = "../stories/semsucesso.html"; // Se DIGITAR 2, vai para página game over do personagem
        break;
      } else {
        alert("Digite 1 ou 2");
      }
    }
  }

  function cientista_2() {
    while (question != 1 || question != 2) { //Aqui são os numeros que devem ser digitados como resposta no prompt
      var question = prompt(
        '1. Vai pra internet expor todos os líderes que estão atrasando a cura mesmo possuindo dinheiro para investir na produção a fim de colocá-los contra a parede para que tudo se resolva rapidamente! \n 2. Você acha injusto pagar por quem não tem condições e tenta colaborar para que outras curas mais baratas sejam econtradas' //Aqui escrever as duas opçoes do personagem
      );
  
      if (question == 1) {
        window.location.href = "../stories/cientista_3.html"; // Se DIGITAR 1, vai para página 2 do personagem
        break;
      } else if (question == 2) {
        window.location.href = "../stories/semsucesso.html"; // Se DIGITAR 2, vai para página game over do personagem
        break;
      } else {
        alert("Digite 1 ou 2");
      }
    }
  }

  function cientista_3() {
    while (question != 1 || question != 2) { //Aqui são os numeros que devem ser digitados como resposta no prompt
      var question = prompt(
        '1. Inicia a divulgação dos relatos das pessoas que já tomaram o soro e se curaram para convercer pessoas com base em fatos reais!. \n 2. Você acha que as pessoas uma hora vão cair na real e que não vale a pena convencer pessoas de algo tão oóbvio.' //Aqui escrever as duas opçoes do personagem
      );
  
      if (question == 1) {
        window.location.href = "../stories/sucesso.html"; // Se DIGITAR 1, vai para página final de sucesso.
        break;
      } else if (question == 2) {
        window.location.href = "../stories/semsucesso.html"; // Se DIGITAR 2, vai para página game over do personagem
        break;
      } else {
        alert("Digite 1 ou 2");
      }
    }
  }

  // SCRIPTS MÉDICO

  function medico_1() {
    while (question != 1 || question != 2) { //Aqui são os numeros que devem ser digitados como resposta no prompt
      var question = prompt(
        '1. Começa a divulgar seu número nas redes sociais informando as pessoas que vierem a se contaminar que elas podem entrar em contato com voc, que você forncerá ajuda para primeiros cuidados tudo por telefone e sem custos. \n 2. Insistir receber as pessoas presencialmente, tomar precauções como usar óculos de sol e evitar olhar diretamente nas pessoas, pois boatos na internet dizem que isso impacta nas chances de infecção' //Aqui escrever as duas opçoes do personagem
      );
  
      if (question == 1) {
        window.location.href = "../stories/medico_2.html"; // Se DIGITAR 1, vai para página 2 do personagem
        break;
      } else if (question == 2) {
        window.location.href = "../stories/semsucesso.html"; // Se DIGITAR 2, vai para página game over do personagem
        break;
      } else {
        alert("Digite 1 ou 2");
      }
    }
  }

  function medico_2() {
    while (question != 1 || question != 2) { //Aqui são os numeros que devem ser digitados como resposta no prompt
      var question = prompt(
        '1. Começa a organizar lives na internet divulgando todas as informações confiáveis que você possuem que auxiliam nos primeiros cuidados para os que estão ficando cegos! \n 2. Começa a limitar e atender menos pessoas e confia que as pessoas já sabem os cuidados básicos necessários.' //Aqui escrever as duas opçoes do personagem
      );
  
      if (question == 1) {
        window.location.href = "../stories/medico_3.html"; // Se DIGITAR 1, vai para página 2 do personagem
        break;
      } else if (question == 2) {
        window.location.href = "../stories/semsucesso.html"; // Se DIGITAR 2, vai para página game over do personagem
        break;
      } else {
        alert("Digite 1 ou 2");
      }
    }
  }

  function medico_3() {
    while (question != 1 || question != 2) { //Aqui são os numeros que devem ser digitados como resposta no prompt
      var question = prompt(
        '1. Você começa a combater essas infromações divulgando inúmeros relatos de quem já comprou o óculos e se contaminou mesmo assim \n 2. Você decide não perder tempo pois apesar do óculos não impedir a transmissão, você acredita o óculos não atrapalha as prevenções reais de cura.' //Aqui escrever as duas opçoes do personagem
      );
  
      if (question == 1) {
        window.location.href = "../stories/sucesso.html"; // Se DIGITAR 1, vai para página final de sucesso.
        break;
      } else if (question == 2) {
        window.location.href = "../stories/semsucesso.html"; // Se DIGITAR 2, vai para página game over do personagem
        break;
      } else {
        alert("Digite 1 ou 2");
      }
    }
  }

// SCRIPTS PROFESSOR

function professor_1() {
    while (question != 1 || question != 2) { //Aqui são os numeros que devem ser digitados como resposta no prompt
      var question = prompt(
        '1. Transmitir aulas via podcast programadas para leitura com acessibilidade para aqueles que já estão ficando acometidos pela tal cegueira. \n 2. Insistir em dar aulas presenciais, tomar precauções como usar óculos de sol e evitar olhar diretamente nas pessoas, pois boatos na internet dizem que isso impacta nas chances de infecção' //Aqui escrever as duas opçoes do personagem
      );
  
      if (question == 1) {
        window.location.href = "../stories/professor_2.html"; // Se DIGITAR 1, vai para página 2 do personagem
        break;
      } else if (question == 2) {
        window.location.href = "../stories/semsucesso.html"; // Se DIGITAR 2, vai para página game over do personagem
        break;
      } else {
        alert("Digite apenas 1 ou 2");
      }
    }
  }

  function professor_2() {
    while (question != 1 || question != 2) { //Aqui são os numeros que devem ser digitados como resposta no prompt
      var question = prompt(
        '1. Você começa a produzir conteúdo e começa a divulgar princiaplamente entre seus alunos para que eles espalhem informações confiáveis à respeiros das prevenções e possíveis curas. \n 2. Você pensa em estratégias para vender informações verdadeiras na internet e conseguir uma grana extra com o que você produziu.' //Aqui escrever as duas opçoes do personagem
      );
  
      if (question == 1) {
        window.location.href = "../stories/professor_3.html"; // Se DIGITAR 1, vai para página 3 do personagem
        break;
      } else if (question == 2) {
        window.location.href = "../stories/semsucesso.html"; // Se DIGITAR 2, vai para página game over do personagem
        break;
      } else {
        alert("Digite 1 ou 2");
      }
    }
  }

  function professor_3() {
    while (question != 1 || question != 2) { //Aqui são os numeros que devem ser digitados como resposta no prompt
      var question = prompt(
        '1. Vocè começa a montar uma plataforma convidando voluntários ainda não afetados pela cegueira para que eles comecem a legendar contéudo visuais em textos descritivos que podem ser lidos com auxílio de leitores digitais para aqueles que já estão cegos. \n 2. Você confia que estes conteúdos e informações não são importantes nesse momento e que em breve surgirão novas maneiras de transmitir conhecimento.' //Aqui escrever as duas opçoes do personagem
      );
  
      if (question == 1) {
        window.location.href = "../stories/sucesso.html"; // Se DIGITAR 1, vai para página final de sucesso.
        break;
      } else if (question == 2) {
        window.location.href = "../stories/semsucesso.html"; // Se DIGITAR 2, vai para página de game over.
        break;
      } else {
        alert("Digite 1 ou 2");
      }
    }
  }