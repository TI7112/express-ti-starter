const { User } = require("../model/User.model")

exports.addUser = async (req, res) => {

    const data = {
        status: "",
        msg: "",
        user: "",
    }
    const duplicate = await User.find({ $or: [{ phone: req.body.phone }, { email: req.body.email }] })

    if (duplicate.length == 0) {
        const user = new User()

        user.name = req.body.name
        user.phone = req.body.phone
        user.email = req.body.email
        user.password = req.body.password

        user.save()

        data.status = "success"
        data.msg = "user added successfully"
        data.user = user
    }
    else {
        data.status ="fail"
        data.msg ="User already exist"
    }
    return res.send(data)
}

exports.getUsers = async (req, res) => {
    const user = await User.find()
    return res.send(user)
}

exports.getUserById = async (req, res) => {
    const user = await User.findById(req.body._id)
    return res.send(user)
}

exports.deleteUser = async (req, res) => {
    const user = User.deleteOne({_id:req.body._id})
    return res.send({status:"success"})
}

