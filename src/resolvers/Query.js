const Query ={
    usuarios(parent,args,ctx,info){
        return ctx.db.usuarios
    },
    topicos(parent,args,ctx,info){
        return ctx.db.topicos
    },
    mensagens(parent,args,ctx,info){
        return ctx.db.mensagens
    },
}

export default Query