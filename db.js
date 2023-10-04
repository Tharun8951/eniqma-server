const mongoose = require('mongoose')
// const url = process.env.URL; 
const url = `mongodb+srv://tharunappu2004:SgE65y3q96uOuGJ3@cluster0.t1jhfhr.mongodb.net/Eniqma?retryWrites=true&w=majority`; 
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
