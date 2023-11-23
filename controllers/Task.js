const crearTask =async (req, res = express.request) => {
    const {nombre,descripcion,estado,fecha} = req.body;
    const task = new Task({nombre,descripcion,estado,fecha});
    await task.save();
    res.json({
        task
    })
}
const listarTasks = (req, res = express = request) => {
    res.json({
        ok: true,
        msg: 'Listar Task'
    })
}

const getTask = async (req, res = express.request) => {
    const tasks = await Task.find();
    res.json({
        tasks
    })
}
const getTaskById = async (req, res = express.request) => {
    const {id} = req.params;
    const task = await Task.findById(id);
    res.json({
        task
    })
}
const updateTask = async (req, res = express.request) => {
    const {id} = req.params;
    const {nombre,descripcion,estado,fecha} = req.body;
    const task = await Task.findByIdAndUpdate(id,{nombre,descripcion,estado,fecha});
    res.json({
        task
    })
}
const deleteTask = async (req, res = express.request) => {
    const {id} = req.params;
    const task = await Task.findByIdAndDelete(id);
    res.json({
        task
    })
}
module.exports = {
    crearTask,
    listarTasks,
    getTask,
    getTaskById,
    updateTask,
    deleteTask

}
