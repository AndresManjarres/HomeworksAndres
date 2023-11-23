const listarTasks = (req, res = express = request) => {
    res.json({
        ok: true,
        msg: 'Listar Task'
    })
}
module.exports = {
    listarTasks
    