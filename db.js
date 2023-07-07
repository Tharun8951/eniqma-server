const mongoose = require('mongoose')
const url = process.env.URL; 
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const mongodb = async()=> {
    try {
        mongoose.connect(url, options)
        .then(()=>{
            console.log('Db connection succesful')
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports = mongodb
