const express = require('express');
const router = express.Router();
const { catchErrors } = require('../handlers/errorHandlers');
const { 
    HomePage , 
    AddteStore , 
    CreateStore ,
    EditStore ,
    UpdateStore ,
    getStores
} = require('../controllers/storeController');

// router.get('/' , catchErrors(getStores) );
// router.get('/stores' , catchErrors(getStores));
// router.get('/add' , catchErrors(AddteStore));
// router.post('/add' , catchErrors(CreateStore));
// router.post('/add/:id' , catchErrors(UpdateStore));
// router.get('/stores/:id/edit' , catchErrors(EditStore));
// router.get('/' , catchErrors(getStores) );

router.get('/' , getStores);
router.get('/stores' , getStores);
router.get('/add' , AddteStore);
router.post('/add' , CreateStore);
router.post('/add/:id' , UpdateStore);
router.get('/stores/:id/edit' , EditStore);



module.exports = router;