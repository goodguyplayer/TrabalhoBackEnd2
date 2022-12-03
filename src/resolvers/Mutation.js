//Mutation to insert new message, with the paramethers of Mensagem, but the lenght of the field conteudo cannot be higher than 500 characters
import { v4 as uuidv4 } from 'uuid';
import { GraphQLError } from 'graphql';
import db from '../db';

const Mutation= {
    inserirUsuario (parent, args, ctx, info){
        const usuario={
            id: uuidv4(),
            nome: args.usuario.nome,
        }
        ctx.db.usuarios.push(usuario);
        return usuario;
    },
    atualizarUsuario (parent, args, ctx, info){
        const usuario = ctx.db.usuarios.find(u => u.id === args.id);
        if (!usuario)
            throw new Error ("Usuario não existe");
        Object.assign(usuario, {nome: args.usuario.nome||usuario.nome,topico: args.usuario.topico||usuario.topico});
        return usuario;
    },
    inserirMensagem (parent,args,ctx,info){
    // if Clause checking if the idAdmin and senhaAdmin are not equal to admin and admin, respectively
    const mensagem = {
        id: uuidv4(),
        conteudo: args.mensagem.conteudo,
        autor: args.mensagem.autor,
        topico: args.mensagem.topico,
        date: new Date()
    }
    console.log(mensagem.conteudo.length);
    //if(mensagem.conteudo.length>10){
    //    throw new Error('Mensagem muito grande');
    //}
    ctx.db.mensagens.push(mensagem)
    ctx.pubSub.publish('mensagem', args.mensagem.topico,{mensagem})
    console.log(db.topicos.nome)
    return mensagem
    },
}

export default Mutation