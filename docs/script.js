

function trocarCor() {
    let corSelecionada;
    let corTexto;
    let elementos = document.getElementsByName('genero');
    let radio=document.querySelectorAll('input[type=radio]:checked')

    let n1=document.getElementById("n1").value;
    let n2=document.getElementById("n2").value;

    let resultado= parseInt(n1) - parseInt(n2);

    for (let i = 0; i < elementos.length; i++) {
        if (elementos[i].checked) {
            if (elementos[i].value === 'F' && resultado<0 ) {
                corSelecionada ='#ffcbcb' ;
                 corTexto='#132743';
            } else if (elementos[i].value === 'M' && resultado>1) {
                corSelecionada = '#d5def5';
                 corTexto='#430f58';
            }  else if (elementos[i].value === 'N' && resultado === 0) {
                corSelecionada = '#fffe9a';
                corTexto = '#cd4545';
            
            }

                else{
                    corSelecionada='black';
                    corTexto='white';
                }
        }
    }

    document.getElementById('body').style.backgroundColor = corSelecionada;
     document.getElementById('resultado').textContent = `${n1} - ${n2} = ${resultado}`;

    document.getElementById('body').style.color = corTexto;
}


    



function indicacao(){
    let musica = document.getElementById('musica')
    let elementos=document.getElementsByName('artista');
    musica.innerHTML="";

    let nome = document.getElementById("nome").value;
    let sobrenome = document.getElementById("sobrenome").value;
    let nomeCompleto = nome + " " + sobrenome;


    document.getElementById("nomeCompleto").textContent = "Seje bem vindo(a) " + nomeCompleto +", aqui agumas indicações de artistas:";
    

    for (let i = 0; i < elementos.length; i++) {
        if (elementos[i].checked) {
            if (elementos[i].value === 'TW' ) {
                document.getElementById('musica').textContent = ` Se você gosta de The Weeknd você deveria ouvir: 
                Chase Atlantic e The Neighbourhood.`;
               
            } else if (elementos[i].value === 'TS') {
               
                document.getElementById('musica').textContent += ` Se você gosta de Taylor Swift você deveria ouvir: 
              Lana Del Rey, Gracie Abrams e Olivia Rodrigo. `;

              
                
            } else if (elementos[i].value === 'AE') {
                document.getElementById('musica').textContent += ` Se você gosta de aespa você deveria ouvir: 
              (G)I-IDLE e Red Velvet e BLACKPINK.`;
            }
             if (elementos[i].value === 'TOP') {
                document.getElementById('musica').textContent += ` Se você gosta de Twenty One Pilots você deveria ouvir: 
              YUNGBLUD e Panic At The Disco. `;
                
            }

              else if (elementos[i].value === 'SY') {
                document.getElementById('musica').textContent += ` Se você gosta de SYML você deveria ouvir: 
              Amber Run, Novo Amor e Bon Iver. `;
             
            }
        }
    }

}


function mostrarNome() {

    let nome = document.getElementById("nome").value;
    let sobrenome = document.getElementById("sobrenome").value;

    
    if (nome !== "" && sobrenome !== "") {
        let nomeCompleto = nome + " " + sobrenome;
        document.getElementById("nomeCompleto").textContent = "Nome completo: " + nomeCompleto;
    } else {
        document.getElementById("nomeCompleto").textContent = "Por favor, preencha ambos os campos de nome e sobrenome.";
    }
}
