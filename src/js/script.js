const h1Nome = document.getElementById('nome')
const h4DadosPessoais = document.getElementById('dadosPessoais')
const pDescricao = document.getElementById('descricao')

const sobre = {
    nome:'UILIAM D S SANTOS',
    endereco:'Rua Andrade Neves, 3141- Rosário do Sul - RS -',
    email:'udanter@gmail.com -',
    celular:'(55) 99639-9400',
    descricao:'Formação:<br> Técnico em Agropecuária ( Fundação Bradesco );<br>Técnico em Manutenção e Suporte em Informática( IFF );<br>Técnico em Informática( IFF );<br>Graduação em Tecnologia de Redes de Computadores( Uninter );',
    
    footer:'Todos os Direitos Reservados ©',
    
    
    redesSociais:[{
        iconClass:'<i class="fab fa-linkedin-in" id="icon"></i>',
        link:'https://www.linkedin.com/in/uiliam-danter-3923b11b3/',
    },
    {
        iconClass:'<i class="fab fab fa-github" id="icon"></i>',
        link:'https://github.com/udanter',
    },
    {
        iconClass:'<i class="fab fa-twitter" id="icon"></i>',
        link:'https://twitter.com',
    },
    {
        iconClass:'<i class="fab fa-facebook-f" id="icon"></i>',
        link:'https://www.facebook.com/uiliam.santos.735944',
    }],
}


function clicarSobre(){
    descricao.innerHTML = sobre.descricao;
    descricao.style.display = "block";
    objetivo.style.display = "none";
    know.style.display = "none";
    icones.style.display = "inline";
    ativarSobre.classList.add('active')
    ativarConhecimento.classList.remove('active')
    ativarObjetivo.classList.remove('active')
}

function clicarConhecimento(){
    
   conhecimento = ['Técnico em Agropecuária: Preparado para atuar em programas de assistência técnica, extensão rural e pesquisa; fiscalizar produtos de origem vegetal, animal, e agroindustrial; administrar propriedades rurais. <br><br> ','Técnico em Manutenção e Suporte em informática: Executa montagem, instalação e configuração de equipamentos de informática. Instala e configura sistemas operacionais, desktop e aplicativos. Realiza manutenção preventiva e corretiva de equipamentos de informática, fontes chaveadas e periféricos.. <br><br> ','Técnico em Informática: O Técnico em informática é responsável pela montagem e manutenção de computadores, detecção e correção de problemas nos sistemas, instalação e configuração de redes, aplicativos, programas e softwares.<br><br> ','HTML: textos, listas e tabelas.<br><br>','CSS: Container, Position, Float, DOM, Flexbox, Bootstrap.<br><br>','JavaScript: Variáveis, Funções, Repetições, Objetos.<br>'];
   know.innerHTML = conhecimento.join(' ')
   know.style.display = "block";
   objetivo.style.display = "none";
   descricao.style.display = "none";
   icones.style.display = "none";
   ativarConhecimento.classList.add('active')
   ativarSobre.classList.remove('active')
   ativarObjetivo.classList.remove('active')
}


function clicarObjetivo(){

    objetivo.innerHTML = "Me tornar um profissional completo Full-Stack para desenvolver meu trabalho da melhor maneira possível e continuar adquirindo conhecimento e me dedicando a aprender cada vez mais!"
    objetivo.style.display = "block";
    descricao.style.display = "none";
    know.style.display = "none";
    icones.style.display = "none";
    ativarObjetivo.classList.add('active');
    ativarSobre.classList.remove('active');
    ativarConhecimento.classList.remove('active');

}

nome.innerHTML = sobre.nome;
endereco.innerHTML = `${sobre.endereco}`;
email.innerHTML = `${sobre.email}`;
numero.innerHTML = `${sobre.celular}`;
pDescricao.innerHTML = sobre.descricao;
document.getElementById('linkedin').innerHTML = sobre.redesSociais[0].iconClass;
document.getElementById('linkedin').href = sobre.redesSociais[0].link;
document.getElementById('github').innerHTML = sobre.redesSociais[1].iconClass;
document.getElementById('github').href = sobre.redesSociais[1].link;
document.getElementById('twitter').innerHTML = sobre.redesSociais[2].iconClass;
document.getElementById('twitter').href = sobre.redesSociais[2].link;
document.getElementById('facebook').innerHTML = sobre.redesSociais[3].iconClass;
document.getElementById('facebook').href = sobre.redesSociais[3].link;
footer.innerHTML = `${sobre.footer}`

