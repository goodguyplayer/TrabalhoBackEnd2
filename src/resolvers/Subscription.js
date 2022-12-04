import { v4 as uuidv4 } from 'uuid';
import { subscribe } from "graphql";

const Subscription = {
    mensagem: {
        subscribe(parent, {idTopico, idUsuario}, {pubSub, db}, info){
            console.log(info.operation.operation + " - " + info.fieldName)
            const log={
                id: uuidv4(),
                operacao: (info.operation.operation + " - " + info.fieldName),
                date: new Date(),
            }
            db.log.push(log);
        const topico = db.topicos.find(t => t.id === idTopico)
        if (!topico)
            throw new Error ("Topico não existe")
        return pubSub.subscribe('mensagem', idTopico)
        }
    },
    log:{
        subscribe(parent, {idAdmin, senhaAdmin}, {pubSub, db}, info){
            if (idAdmin !== "admin" || senhaAdmin !== "admin"){
                throw new GraphQLError ("Acesso negado");
            }
            return pubSub.subscribe('log'); 
        }
    },
}
export default Subscription;