var user_loginid = "1307515" //Geraldine loginid
var user_group = db.acl_users.findOne({loginid:user_loginid,groups:/.*5a6ec6d877b8a9f91600003a.*/}).groups[0]
var is_grantedsd = false;
db.acl_groups.find({_id:user_group}).forEach(function(x){
  x.grants.forEach(function(g){
    if(g.accessid.toLowerCase().indexOf("stake")>=0){
        is_grantedsd = true;
    }
  })  
})
var landing_page = ""
db.acl_accessibility.find({roleid:user_group}).forEach(function(x){
    if(x.islandingpage){
        landing_page = x.title
    }
})
print("Granted Access to Stakeholder Dashboard : "+(is_grantedsd ? "YES" : "NO"))
print("Landing Page : "+landing_page)
