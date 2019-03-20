import ProductData from '../../data/product_data.json';

const PDB = (function() {
  const product_data = ProductData;
  const db = new PouchDB('eStore');
  // console.log('db:', db);
  // db.bulkDocs(product_data).then(function(doc){
  //   //console.log('success:', doc);
  // }).catch(function(err){
  //   console.log(err);
  // });
  return db;
}());

export default PDB;