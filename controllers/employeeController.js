const {Employee} = require('../models')

module.exports.displayEmployees = async function(req, res) {
    const employees = await Employee.findAll();
    res.render('index', {employees})
}