const Usuario = {
    mensagens(parent,args,ctx,info){
        return ctx.db.mensagens.filter(mensagem=> mensagem.autor === parent.id)
    },
    topicos(parent,args,ctx,info){
        return ctx.db.topicos.filter(topico=> topico.usuarios.includes(parent.id))
    }
}

export default Usuario