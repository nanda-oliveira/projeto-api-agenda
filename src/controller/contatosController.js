const { response } = require("express")
const { request } = require("../app")
const contatoCollections = require("../models/contatoSchema")
const contatoCollection = require("../models/contatoSchema")


const getAll = (req, res) => {
    console.log(req.url)
    contatoCollection.find((error, contatos) => {
        if (error) {
            return res.status(500).send(error)
        } else {
            return res.status(200).send({
                mensagem: "Get deu certo",
                contatos
            })
        }
    }
    )
}

const getByName = (req, res) => {
    const name = req.params.name
    contatoCollection.find(name, (error, contatos) => {
        if (error) {
            return res.status(500).send(error)
        } else {
            return res.status(200).send(contatos)
        }

    })

}

const getById = (req, res) => {
    const idParam = req.params.id
    contatoCollection.find(idParam, (error, contatos) => {
        if (error) {
            return res.status(500).send(error)
        } else {
            return res.status(200).send(contatos)
        }
    }
    )


}

const addContato = (req, res) => {
    const contatoDoBody = req.body // pegando o body que o usuario digitou
    const contato = new contatoCollection(contatoDoBody) //criando um novo dado com o body

    contato.save((error) => {
        if (error) {
            return res.status(400).send(error)
        } else {
            return res.status(200).send({
                mensagem: "Post deu certo",
                contato
            })
        }

    }

    )
}

const deleteContato = (req, res) => {
    const removeContato = req.params.id
    contatoCollection.findByIdAndDelete(removeContato, (error, contato) => {
        if (error) {
            return res.status(500).send(error)
        } else {
            return res.status(200).send("contato apagado com sucesso")
        }
    })
}

const updateContato = (req, res)=>{
    const idParam = req.query.id
    const contatoBody = req.body
    const contatoAtualizado = {new:true}

    contatoCollection.findByIdAndUpdate(
        idParam,
        contatoBody,
        contatoAtualizado,
         (error,contato )=> {
            if(error){
                return res.status(500).send({
                    mensagem : "Falha!",
                    error
                })
            }else{
                return res.status(200).send({
                    mensagem : "contato atualizado com sucesso",
                    contato
                })
            }
         })
}

const updateCelular = (req, res)=>{
    const idParam = req.query.id
    const celularBody = req.body
    const celularAtualizado = {new:true}

    contatoCollection.findByIdAndUpdate(
        idParam,
        celularBody,
        celularAtualizado,
         (error,contato )=> {
            if(error){
                return res.status(500).send({
                    mensagem : "Falha!",
                    error
                })
            }else{
                return res.status(200).send({
                    mensagem : "celular atualizado com sucesso",
                    contato
                })
            }
         })
}


module.exports = {
    getAll,
    getByName,
    getById,
    addContato,
    deleteContato,
    updateContato,
    updateCelular
    
}