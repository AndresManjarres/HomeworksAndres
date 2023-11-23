const {Schema,model} = require('mongoose');

const TaskSchema = Schema({
    title:{
        type: String,
        required: [true, 'Titulo campo obligatiorio']
    },
    description:{
        type: String,
        required: [true, 'La descripcion es obligatoria']
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    }
});

module.exports = model('Task', TaskSchema);