db.getCollectionNames().forEach(function(x){
  if(x.indexOf("tb_5b2b20a35308afe5ab60f2e5") >= 0){
    print("mongodump --db scbssuat --collection "+x+" --out /hey/its/your_dump_directory")
  }  
})
