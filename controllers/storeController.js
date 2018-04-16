const mongoose = require('mongoose');
const Store = mongoose.model('Store');

mongoose.Promise = global.Promise;

exports.HomePage = (req,res) =>{
    res.render('index' , { title: 'Welcome' });
}

exports.AddteStore = (req,res) =>{
    res.render('editstore', { title: 'Add store' });
}

exports.CreateStore = async (req,res) =>{
    const store  = await (new Store(req.body)).save();
    req.flash('success' , `Sccessfully created <b>${store.name}</b>. Care to leave a review?`);
    res.redirect(`/store/${store.slug}`);
}


exports.getStores = async (req,res) => {
    const stores = await Store.find();   
    res.render('stores' , { title: 'Stores' , stores });
}


exports.EditStore = async (req,res) => {
  // 1. Find the store given the ID
  const store = await Store.findOne({ _id: req.params.id });
  // 2. confirm they are the owner of the store
  // 3. Render out the edit form so the user can update their store
  res.render('editstore' , { title: 'Edit Store: ' + store.name , store });
};


exports.UpdateStore = async (req,res) => {
    const store = await Store.findByIdAndUpdate({ _id: req.params.id } , req.body , {
        new: true,
        runValidator: true
    }).exec();

    req.flash('success' , `Successfully updated <b>${store.name}</b>. <a href="/store/${store.slug}">View Store</a>  `);
    res.redirect(`/stores/${store._id}/edit`);
}