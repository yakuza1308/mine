var user_loginid = "1307515" //Geraldine loginid
var user_group = db.acl_users.findOne({loginid:user_loginid,groups:/.*5a6ec6d877b8a9f91600003a.*/}).groups[0]
db.acl_groups.find({_id:user_group})
