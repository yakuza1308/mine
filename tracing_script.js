var apps = db.getCollection('ss_application').find({}).toArray();
apps.forEach(function(app){
    appID = app._id.str;
    var collName = "tb_"+appID+"_Initiative";
    var initiatives = db.getCollection(collName ).find({}).toArray();
    initiatives.forEach(function(init){
        segmentType = typeof init.Segment;
        if(segmentType == "undefined"){
            init.Segment = [];
        }else if(segmentType == "string"){
            if( init.Segment != ""){
                init.Segment = [init.Segment];            
            }else{
                init.Segment = [];            
            }
        }else if(init.Segment.length >0 && init.Segment[0] == ""){
            init.Segment=[];
        }
        
        if(typeof init.Segment == "object"){
            db.getCollection(collName ).save(init);
        }
        
    });    
});
