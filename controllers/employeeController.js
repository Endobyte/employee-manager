const {Employee} = require('../models')
const jobtitles = ['CEO', 'VP']
const states = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY', 'DC', 'GU', 'MH', 'MP', 'PR', 'VI']

module.exports.displayEmployees = async function (req, res) {
    const employees = await Employee.findAll();
    res.render('index', {employees})
}

module.exports.renderAddEmployeeForm = function (req, res) {
    res.render('createUserForm',
        {
            jobtitles,
            stateslist:states
        });
}

module.exports.addEmployee = async function (req, res) {
    await Employee.create(
        {
            firstname:req.body.firstname,
            lastname:req.body.lastname,
            jobtitle:req.body.jobtitle,
            streetline1:req.body.streetline1,
            streetline2:req.body.streetline2,
            city:req.body.city,
            state:req.body.state,
            zip:req.body.zip,
            phonenumber:req.body.phonenumber,
            yearhired:req.body.yearhired
        }
    );
    res.redirect('/');
}