const { response } = require("express")
const { request } = require("../app")
const contatoCollection = require("../models/contatoSchema")


const getAll = (req, res)=>{
    console.log(req.url)
    contatoCollection.find((error, contatos)=>{
        if(error){
            return res.status(500).send(error)
     }else{
         return res.status(200).send({
             mensagem:"Get deu certo",
             contatos
         })
     }
    }
    )
}


const addContato = (req, res)=>{
    const contatoDoBody = req.body // pegando o body que o usuario digitou
    const contato = new contatoCollection(contatoDoBody) //criando um novo dado com o body

    contato.save((error)=> {
        if(error){
            return res.status(400).send(error)
        }else{
            return res.status(200).send({ 
                mensagem: "Post deu certo",
                contato
            })
        }

    }

    )}



module.exports = {
    getAll,
    addContato
}