const users = require('../utils/users');


const login = (req, res)=> {
    const {email, password} = req.query;

    const usersFinded = users.find((user)=> user.email === email && user.password === password)

    // usersFinded
    // ? res.status(200).json({access: true})
    // : res.status(404).json({access: false})

    if(usersFinded) return res.status(200).json({access: true})
    return res.status(404).json({access: false})
}

module.exports = {
    login
};