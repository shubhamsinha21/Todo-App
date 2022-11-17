const models = require('../models/models')

module.exports.getTodo = async (req, res) => {
    const todo = await models.find()
    res.send(todo)
}

module.exports.saveTodo = async (req, res) => {

    const { text } = req.body
    models.create({ text })
        .then((data) => {
            console.log('added successfully !');
            console.log(data);
            res.send(data)
        })

}

module.exports.updateTodo = async (req, res) => {
    const { _id, text } = req.body
    models.findByIdAndUpdate(_id, { text })
        .then(() => res.send("updated successfully ! "))
        .catch((err) => console.log(err))
}

module.exports.deleteTodo = async (req, res) => {
    const { _id, text } = req.body;
    console.log(_id)
    models.findByIdAndDelete(_id)
        .then(() => res.send("deleted successfully ! "))
        .catch((err) => console.log(err))
}
