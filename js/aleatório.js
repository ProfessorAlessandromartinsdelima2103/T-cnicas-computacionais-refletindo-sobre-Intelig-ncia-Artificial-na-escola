const nomes = ["Alessandro", "Matheus", "Alexsandro", "Andreia", "Heloise", "Nicole", "Maria", "Harry", "Rony", "Hermione", "Luna"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)