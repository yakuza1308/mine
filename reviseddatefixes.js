db.getCollectionNames().forEach(function(d){
  if(d.indexOf("Initiative")>0 && d.indexOf("Tags") < 0 && d.indexOf("Category") < 0 ){
      db.getCollection(d).find({}).forEach(function(x){
      var needtofix = false;
      if(x.RevisedEndDate == ISODate("1901-01-01T00:00:00.000Z")){
         x.RevisedEndDate = Date(-62135596800000);
         needtofix = true;
      } 
      for(var i in x.Milestones){
          if(x.Milestones[i].RevisedEndDate == ISODate("1901-01-01T00:00:00.000Z")){
              x.Milestones[i].RevisedEndDate = Date(-62135596800000);
              needtofix = true;
          }
      }
      if(needtofix){
          db.getCollection(d).save(x)
      }
    })
  }
})
