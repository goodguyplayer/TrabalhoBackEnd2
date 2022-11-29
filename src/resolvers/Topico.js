const Topico = {
    mensagens(parent,args,ctx,info){
        return ctx.db.mensagens.filter(mensagem=> mensagem.topico === parent.id)
    },
    usuarios(parent,args,ctx,info){
        return ctx.db.usuarios.filter(usuario=> usuario.topicos.includes(parent.id))
    },
    inscritos(parent,args,ctx,info){
        return parent.usuarios.length
    }
}

export default Topico