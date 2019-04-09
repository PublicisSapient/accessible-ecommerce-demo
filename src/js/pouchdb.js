import PouchDB from 'pouchdb';
import PouchFind from 'pouchdb-find';
import ProductData from '../data/product_data.json';
// import pouchDebugPlugin from 'pouchdb-debug';

PouchDB.plugin(PouchFind);

/*
// POUCH DB DEBUGGING
PouchDB.plugin(pouchDebugPlugin);
PouchDB.debug.enable('*');
 */

const db = new PouchDB('eStore');

function getOrCreateProductDB(){
  return db.info().then(function(dbInfo){
    if(dbInfo.doc_count > 0){
      console.info('DATABASE EXISTS');
      return {success: true};
    }else{
      console.info('CREATE NEW DATABASE');
      return db.bulkDocs(ProductData).then(function(){
        return {success: true};
      }).catch(function(error){
        return {success: false, error};
      });
    }
  }).catch(function(error){
    return {success: false, error};
  });
}

function init(){
  return getOrCreateProductDB();
}

function query(fields, query){
  return db.createIndex({
    index: { fields }
  }).then(function(){
    return db.find(query)
  });
}

function getSingleRow(product_id){
  return db.find({
    selector: { product_id }
  });
}

export { init, query, getSingleRow };