const Dev = require('../models/Dev');

module.exports = {
    async store(req, res) {
        const devId = req.params.devId;
        const user = req.headers.user;

        console.log(req.headers.user);

        const loggedDev = await Dev.findById(user);
        const targetDev = await Dev.findById(devId);

        if(!targetDev){
            return res.status(400).json({ error: "Dev not exist" });
        }

        

        loggedDev.dislikes.push(targetDev._id);
    

        await loggedDev.save();
        

        return res.json(loggedDev)
    }
}