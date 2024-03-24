exports.home = async (req, res) => {
    return res.send('Hello world')    
}

exports.protect = async (req, res) => {
    return res.send('Hello world')    
}

exports.postRes = async (req, res) => {
    const data = {
        status:"",
        msg:"",
        user:"",
    }
    return res.send(data)
}

