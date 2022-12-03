const Subscription = {
    mensagem: {
        subscribe(parent, {idTopico, idUsuario}, {pubSub, db}, info){
            /*
            const log={
                operacao: "Subscription - Subscription",
                autor: "11",
                date: new Date(),
            }
            ctx.db.log.push(log);
            */
        const topico = db.topicos.find(t => t.id === idTopico)
        if (!topico)
            throw new Error ("Topico não existe")
        return pubSub.subscribe('mensagem', idTopico)
        }
    },  
}
export default Subscription;