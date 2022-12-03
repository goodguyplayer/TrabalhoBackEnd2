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
    historico(parent,args,ctx,info){
        const historico = ctx.db.mensagens
        historico.sort((a,b)=>{
            const nameA = a.date.toUpperCase()
            const nameB = b.date.toUpperCase()
            if(nameA < nameB){
                return -1
            }
            if(nameA > nameB){
                return 1
            }
            return 0;
        });
        console.log(historico)
        return historico
    },
    totaisPorCategoria(parent,args,ctx,info){
        let totais = ctx.db.topicos.map(topico=>{
            return{
                id: topico.id,
                nome: topico.nome,
                total: topico.usuarios.length
            }
        })
        //let totais = ctx.db.topicos.map(topico=>{
        //    return {
        //        nome: topico.nome,
        //        total: parent.usuarios.length
        //    }
       // })
        console.log (totais);
        return totais
    },
    consultarLog(parent, args, ctx, info){
        if (args.idAdmin !== "admin" || args.senhaAdmin !== "admin"){
            throw new GraphQLError ("Acesso negado");
        }
        return ctx.db.log
    }
}

export default Query