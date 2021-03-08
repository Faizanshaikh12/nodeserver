const mongoose = require('mongoose');

//http://localhost:3000/employees/
mongoose.connect("mongodb://localhost:27017/CrudDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
}).then(() => {
    console.log('connected')
}).catch(() => {
    console.log('connection failed')
});


module.exports = mongoose;
