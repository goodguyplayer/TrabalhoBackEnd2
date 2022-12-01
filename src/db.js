const topicos = [
    {
        id:'1',
        nome:'Cinema',
        usuarios: ['10','11']
    },
    {
        id:'2',
        nome:'Esportes', 
        usuarios: ['10','12']
    },
    {
        id:'3',
        nome:'Geral',
        usuarios: ['10','11','12']
    },
]

const mensagens =[
    {
        id:'1000',
        conteudo: 'Adoro Esportes',
        topico: '2',
        autor:'11',
        date: new Date(2022, 11, 3)
    },
    {
        id:'1001',
        conteudo: 'Cinema é bem legal',
        topico: '1',
        autor:'11',
        date: new Date(2022, 11, 4)
    },
    {
        id:'1002',
        conteudo: 'Falar de coisas aleatorias aqui',
        topico: '3',
        autor:'10',
        date: new Date(2022, 11, 5)
    },
    {
        id:'1003',
        conteudo: 'Adoro filmes do tarantino',
        topico: '1',
        autor:'12',
        date: new Date(2022, 12, 1)
    },
]

const usuarios = [
    {
        id: '10',
        nome: 'Henrique',
        topicos:['1','2','3']
    },
    {
        id:'11',
        nome: 'João',
        topicos:['1','3']
    },
    {
        id:'12',
        nome: 'Gabigol',
        topicos:['2','3']
    },
]

export default {
    topicos,usuarios,mensagens
}