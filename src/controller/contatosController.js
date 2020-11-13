const { response } = require("express")
const { request } = require("../app")
const contatoCollections = require("../models/contatoSchema")
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

const getByName = (req, res)=>{
    const name = req.params.name
    contatoCollections.find(name, (error, contatos)=>{
        if(error){
            return res.status(500).send(error)
        }else{
            return res.status(200).send(contatos)
        }

    })

}

const getById = (req, res)=>{
        const idParam = req.params.id
        contatoCollections.find(idParam, (error, contatos)=>{
            if(error){
                return res.status(500).send(error)
            }else{
                return res.status(200).send(contatos)
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
    getByName,
    getById,
    addContato
}