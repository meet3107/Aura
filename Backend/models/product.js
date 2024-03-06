const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema(
    {
     id:{
         type: String,
        required : true,
    },
    name:{
        type: String,
        required : true,
    },
    price:{
        type: String,
        required : true,
    },
    size:{
        type: String,
        required : true,
    },
    image:{
        type: String,
        required : true,
    },
    brand:{
        type: String,
        required : true,
    }
}
)