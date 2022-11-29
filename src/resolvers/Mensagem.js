const Mensagem = {
    autor(parent, args, ctx, info){
      return ctx.db.usuarios.find(autor => autor.id === parent.autor)
    },
    topico(parent, args, ctx, info){
      return ctx.db.topicos.find(topico => topico.id === parent.topico)
    }
  }

export default Mensagem