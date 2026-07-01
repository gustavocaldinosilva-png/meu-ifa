const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
});

const tema = document.getElementById("tema");

tema.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

const curiosidades = [

"A Organização Mundial da Saúde estima que mais de 2 bilhões de pessoas convivem com algum tipo de deficiência visual.",

"O piso tátil ajuda pessoas cegas a se locomoverem com mais segurança em locais públicos.",

"O sistema Braille utiliza combinações de seis pontos em relevo para representar letras e números.",

"Leitores de tela transformam textos em áudio, permitindo o uso de computadores e celulares por pessoas cegas.",

"A acessibilidade beneficia toda a sociedade, não apenas pessoas com deficiência."

];

const texto = document.getElementById("texto");

document.getElementById("curiosidade").addEventListener("click", ()=>{

const numero = Math.floor(Math.random()*curiosidades.length);

texto.innerHTML = curiosidades[numero];

});
