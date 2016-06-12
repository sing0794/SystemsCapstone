// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;
console.log("System schema")

var systemSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    parent: {
        type: String,
        required: false,
	default: ''
    },
    lsibling: {
        type: String,
        required: false,
	default: ''
    },
    rsibling: {
        type: String,
	required: false,
	default: ''
    }
//,
//    children: [systemSchema]
}, {
    timestamps: true
});

// the schema is useless so far
// we need to create a model using it
var Systems = mongoose.model('System', systemSchema);

// make this available to our Node applications
module.exports = Systems;

