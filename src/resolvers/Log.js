const Log = {
    operacao(parent, args, ctx, info){
        return ctx.db.log.find(operacao => operacao.operacao)
    },
    autor(parent, args, ctx, info){
      return ctx.db.usuarios.find(autor => autor.id === parent.autor)
    },
    date(parent, args, ctx, info){
      return ctx.db.log.find(date => date.date)
    },
    
  }

export default Log