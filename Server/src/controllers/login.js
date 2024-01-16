const { User } = require('../DB_connection');

module.exports = async (req, res)=> {
    try {
        console.log('Entró en el controlador de login');
        const {email, password} = req.query;
        console.log('Email:', email);
        console.log('Password:', password);

        if(!email || !password) return res.status(400).send('Faltan datos')

        const user = await User.findOne({where: { email }})
        console.log(user);

        if(!user) return res.status(404).send('Usuario no encontrado')

        return user.password === password 
        ? res.json({access: true}) 
        : res.status(403).send('Contraseña incorrecta')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}