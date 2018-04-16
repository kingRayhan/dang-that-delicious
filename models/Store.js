const mongoose = require('mongoose');
const slug = require('slugs');

// 
mongoose.Promise = global.Promise;


// Create Store model Schama
const storeSchema  = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: 'Please enter a store name!'
    },
    slug: String,
    description: {
        type: String,
        trim: true
    },
    tags: [String],
    created: {
        type: Date,
        default: Date.now
    },
    location: {
        type:{
            type: String,
            default: 'Point'
        },
        coordinates: [{
            type:Number,
            required: 'You must supply coordinates!'
        }],
        address: {
            type: String,
            required: 'You must provide a address'
        }
    }
});

storeSchema.pre( 'save' , function(next) {

    if(!this.isModified('name'))
    {
        next();
        return;
    }
    this.slug = slug(this.name).toLocaleLowerCase();
    next();
} );

// Export Store model
module.exports = mongoose.model('Store' , storeSchema);