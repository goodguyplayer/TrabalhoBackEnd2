const Subscription = {
    mensagem: {
        subscribe(parent, {idTopico, idUsuario}, {pubSub, db}, info){
        const topico = db.topicos.find(t => t.id === idTopico)
        if (!topico)
            throw new Error ("Topico não existe")
        return pubSub.subscribe('mensagem', idTopico)
        }
    },  
}
export default Subscription;