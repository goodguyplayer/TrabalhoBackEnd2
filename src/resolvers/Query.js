import { v4 as uuidv4 } from 'uuid';
import { useErrorHandler } from "@graphql-yoga/node";

const Query ={
    usuarios(parent,args,ctx,info){
        console.log(info.operation.operation + " - " + info.fieldName)
        const log={
            id: uuidv4(),
            operacao: (info.operation.operation + " - " + info.fieldName),
            date: new Date(),
        }
        ctx.db.log.push(log);
        
        return ctx.db.usuarios
    },
    topicos(parent,args,ctx,info){
        const log={
            id: uuidv4(),
            operacao: (info.operation.operation + " - " + info.fieldName),
            date: new Date(),
        }
        ctx.db.log.push(log);
        return ctx.db.topicos
    },
    mensagens(parent,args,ctx,info){
        const log={
            id: uuidv4(),
            operacao: (info.operation.operation + " - " + info.fieldName),
            date: new Date(),
        }
        ctx.db.log.push(log);
        return ctx.db.mensagens
    },
    historico(parent,args,ctx,info){
        const historico = ctx.db.mensagens
        historico.sort((a,b)=>{
            return new Date(b.date) - new Date(a.date);
        });
        const log={
            id: uuidv4(),
            operacao: (info.operation.operation + " - " + info.fieldName),
            date: new Date(),
        }
        ctx.db.log.push(log);
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
       const log={
        id: uuidv4(),
        operacao: (info.operation.operation + " - " + info.fieldName),
        date: new Date(),
        }
        ctx.db.log.push(log);
        return totais
    },
}

export default Query