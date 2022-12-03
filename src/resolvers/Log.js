const Log = {
    operacao(parent, args, ctx, info){
        return ctx.db.log.find(operacao => operacao.operacao)
    },
    date(parent, args, ctx, info){
      return ctx.db.log.find(date => date.date)
    }    
  }

export default Log