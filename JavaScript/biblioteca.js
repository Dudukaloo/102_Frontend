let livro1 = {
    titulo:"O amuleto",
    autor:"Kazu Kibuishi",
    ano:"2013",
    genero:"HQ"
};

let livro2 = {
    titulo:"O diário de Anne Frank em quadrinhos",
    autor: "Ari Folman e David Polonsky",
    ano: "2017",
    genero:"HQ"
};

let livro3 = {
    titulo:"Harry Potter e a Pedra Filosofal",
    autor:"J. K. Rowling",
    ano:"26 de junho de 1997",
    genero:"Fantasia e aventura"
};

let livro4 = {
    titulo:"Malala, a menina que queria ir para a escola",
    autor:"Adriana Carranca",
    ano:"27 de abril de 2015",
    genero:"Biografia"
};

let livro5 = {
    titulo:"O amuleto 4",
    autor:"Kazu Kibuishi",
    ano:"2015",
    genero:"HQ"
};

let livro6 = {
    titulo:"O joelho Juvenal",
    autor:"Ziraldo Alves Pinto",
    ano:"1989",
    genero:"Ficção"
};

let livros = [livro1, livro2, livro3, livro4, livro5, livro6];

console.log(livros);

let livro7 = {
    titulo:"Haikyu!!",
    autor:"Haruichi Furudate",
    ano:"2020",
    genero:"Mangá"
};

livros.push(livro7);

console.log(livros);

for (let livro of livros){
    if("HQ" == livro.genero){
        console.log(`----------- \nGênero encontrado: \n${livro.genero}\nTítulo: \n${livro.titulo}`);
    };
};

//Falta --> Encontra o livro mais antigo: Mostre o livro com o menor valor no campo ano.