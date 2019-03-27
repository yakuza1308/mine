// SCRIPT FINALE
var acldatabase = "scbbef-uat";
var database = "scbss-uat";
var group_productivity_url = "http://group_productivity.eaciitapp.com";

// GRANT ACCESS TO NEW CONTAINER
var arr = ["Corporate and Institutional Banking","Private Banking","Risk","Technology & Innovation","Operations","Group Internal Audit","Group CFO"];
// Granting GP ADMIN USER
var userlist_admin = [
    {firstname:"Punarvi",lastname:"Karanam",loginid:"1584546"}, 
    {firstname:"Kathiravan",lastname:"Nagalingam",loginid:"1584547"}, 
    {firstname:"Nagarajan",lastname:"Vasu Rao",loginid:"1504680"}, 
    {firstname:"Oliver",lastname:"Cheung",loginid:"1426484"}, 
    {firstname:"Kalaivani",lastname:"Thiruppathi",loginid:"1548237"}
];

db.getSiblingDB(database).ss_application.find({"name":{$in:arr}}).forEach(function(a){
    var app_id = a._id.str;
    var group = {
        "_id" : "SS_APP_"+app_id+"_ADMIN",
        "id" : "SS_APP_"+app_id+"_ADMIN",
        "title" : "Group Productivity Admin",
        "enable" : true,
        "grants" : [ 
            {
                "accessid" : "SS_APP_"+app_id+"_GROUPPRODUCTIVITY",
                "accessvalue" : 15
            },
            {
                "accessid" : "SS_APP_"+app_id+"_GPSCORECARD",
                "accessvalue" : 15
            },
            {
                "accessid" : "SS_APP_"+app_id+"_GPINITIATIVE",
                "accessvalue" : 15
            },
            {
                "accessid" : "SS_APP_"+app_id+"_GPSHAPEOFCHANGE",
                "accessvalue" : 15
            },
            {
                "accessid" : "SS_APP_"+app_id+"_CONFIGURATION",
                "accessvalue" : 15
            },
            {
                "accessid" : "SS_APP_"+app_id+"_APPLICATIONAUDITTRAIL",
                "accessvalue" : 15
            },
            {
                "accessid" : "SS_APP_"+app_id+"_ROLEMANAGEMENT",
                "accessvalue" : 15
            },
            {
                "accessid" : "SS_APP_"+app_id+"_USERAUDITTRAIL",
                "accessvalue" : 15
            },
            {
                "accessid" : "SS_APP_"+app_id+"_APPLICATIONUSAGEDETAIL",
                "accessvalue" : 15
            },
            {
                "accessid" : "SS_APP_"+app_id+"_USERMANAGEMENT",
                "accessvalue" : 15
            }

        ],
        "owner" : "",
        "grouptype" : 0,
        "groupconf" : {},
        "memberconf" : {},
        "applications" : [ 
            "web-ss#"+app_id
        ],
        "isimportant" : false,
        "ispartofadmin" : false,
        "ispartofinitiativeowner" : false,
        "isdisplayriskissues" : false
    };

    db.getSiblingDB(acldatabase).acl_groups.save(group);
    db.getSiblingDB(acldatabase).acl_accessibility.remove({"roleid" : group._id});
    db.getSiblingDB(acldatabase).acl_access.find({application:"web-ss#"+app_id}).forEach(function(acc){
        var accs = {
            "roleid" : group._id,
            "accessid" : acc._id,
            "title" : acc.title,
            "url" : acc.url,
            "parentid" : "",
            "allowstatus" : true,
            "islandingpage" : false,
            "global" : {
                "create" : true,
                "read" : true,
                "update" : true,
                "delete" : true,
                "owned" : false,
                "curtain" : false,
                "upload" : false
            },
            "region" : {
                "create" : false,
                "read" : false,
                "update" : false,
                "delete" : false,
                "owned" : false,
                "curtain" : false,
                "upload" : false
            },
            "country" : {
                "create" : false,
                "read" : false,
                "update" : false,
                "delete" : false,
                "owned" : false,
                "curtain" : false,
                "upload" : false
            },
            "segment" : {
                "create" : false,
                "read" : false,
                "update" : false,
                "delete" : false,
                "owned" : false,
                "curtain" : false,
                "upload" : false
            },
            "productassignment" : {
                "create" : false,
                "read" : false,
                "update" : false,
                "delete" : false,
                "owned" : false,
                "curtain" : false,
                "upload" : false
            }
        };
        db.getSiblingDB(acldatabase).acl_accessibility.save(accs);
    });
    
    userlist_admin.forEach(function(x){
      var existing = db.getSiblingDB(acldatabase).acl_users.find({loginid:x.loginid,groups:group._id}).toArray();
      if(existing.length==0){
      	var userid = ObjectId().str;
      	var userdata = {
		    "_id" : userid,
		    "id" : userid,
		    "loginid" : x.loginid,
		    "fullname" : [x.firstname,x.lastname].join(" "),
		    "firstname" : x.firstname,
		    "lastname" : x.lastname,
		    "email" : "",
		    "password" : "",
		    "enable" : true,
		    "groups" : [ 
		        group._id
		    ],
		    "grants" : [],
		    "logintype" : 1,
		    "loginconf" : {},
		    "countrycode" : "",
		    "country" : "",
		    "region" : "",
		    "segment" : "",
		    "productassignment" : [],
		    "isimportant" : false
		};
      	db.getSiblingDB(acldatabase).acl_users.save(userdata);
      }
    });
})

arr = ["Business Efficiency"];
userlist_admin = [
	{firstname:"Ambreen",lastname:"Hamza",loginid:"1394022"}, 
    {firstname:"Luca",lastname:"Borroni",loginid:"1521647"}, 
    {firstname:"Storm",lastname:"Dalati",loginid:"1502498"}, 
    {firstname:"Punarvi",lastname:"Karanam",loginid:"1584546"}, 
    {firstname:"Kathiravan",lastname:"Nagalingam",loginid:"1584547"}, 
    {firstname:"Nagarajan",lastname:"Vasu Rao",loginid:"1504680"}, 
    {firstname:"Oliver",lastname:"Cheung",loginid:"1426484"}, 
    {firstname:"Kalaivani",lastname:"Thiruppathi",loginid:"1548237"}
];
db.getSiblingDB(database).ss_application.find({"name":{$in:arr}}).forEach(function(a){
    var app_id = a._id.str;
    var group = {
        "_id" : "SS_APP_"+app_id+"_ADMIN",
        "id" : "SS_APP_"+app_id+"_ADMIN",
        "title" : "Group Productivity Admin",
        "enable" : true,
        "grants" : [ 
            {
                "accessid" : "SS_APP_"+app_id+"_GROUPPRODUCTIVITY",
                "accessvalue" : 15
            },
            {
                "accessid" : "SS_APP_"+app_id+"_GPSCORECARD",
                "accessvalue" : 15
            },
            {
                "accessid" : "SS_APP_"+app_id+"_GPINITIATIVE",
                "accessvalue" : 15
            },
            {
                "accessid" : "SS_APP_"+app_id+"_GPSHAPEOFCHANGE",
                "accessvalue" : 15
            },
            {
                "accessid" : "SS_APP_"+app_id+"_CONFIGURATION",
                "accessvalue" : 15
            },
            {
                "accessid" : "SS_APP_"+app_id+"_APPLICATIONAUDITTRAIL",
                "accessvalue" : 15
            },
            {
                "accessid" : "SS_APP_"+app_id+"_ROLEMANAGEMENT",
                "accessvalue" : 15
            },
            {
                "accessid" : "SS_APP_"+app_id+"_USERAUDITTRAIL",
                "accessvalue" : 15
            },
            {
                "accessid" : "SS_APP_"+app_id+"_APPLICATIONUSAGEDETAIL",
                "accessvalue" : 15
            },
            {
                "accessid" : "SS_APP_"+app_id+"_USERMANAGEMENT",
                "accessvalue" : 15
            }

        ],
        "owner" : "",
        "grouptype" : 0,
        "groupconf" : {},
        "memberconf" : {},
        "applications" : [ 
            "web-ss#"+app_id
        ],
        "isimportant" : false,
        "ispartofadmin" : false,
        "ispartofinitiativeowner" : false,
        "isdisplayriskissues" : false
    };
    db.getSiblingDB(acldatabase).acl_groups.save(group);
    db.getSiblingDB(acldatabase).acl_accessibility.remove({"roleid" : group._id});
    db.getSiblingDB(acldatabase).acl_access.find({application:"web-ss#"+app_id}).forEach(function(acc){
        var accs = {
            "roleid" : group._id,
            "accessid" : acc._id,
            "title" : acc.title,
            "url" : acc.url,
            "parentid" : "",
            "allowstatus" : true,
            "islandingpage" : false,
            "global" : {
                "create" : true,
                "read" : true,
                "update" : true,
                "delete" : true,
                "owned" : false,
                "curtain" : false,
                "upload" : false
            },
            "region" : {
                "create" : false,
                "read" : false,
                "update" : false,
                "delete" : false,
                "owned" : false,
                "curtain" : false,
                "upload" : false
            },
            "country" : {
                "create" : false,
                "read" : false,
                "update" : false,
                "delete" : false,
                "owned" : false,
                "curtain" : false,
                "upload" : false
            },
            "segment" : {
                "create" : false,
                "read" : false,
                "update" : false,
                "delete" : false,
                "owned" : false,
                "curtain" : false,
                "upload" : false
            },
            "productassignment" : {
                "create" : false,
                "read" : false,
                "update" : false,
                "delete" : false,
                "owned" : false,
                "curtain" : false,
                "upload" : false
            }
        };
        db.getSiblingDB(acldatabase).acl_accessibility.save(accs);
    });
    
    userlist_admin.forEach(function(x){
      var existing = db.getSiblingDB(acldatabase).acl_users.find({loginid:x.loginid,groups:group._id}).toArray();
      if(existing.length==0){
      	var userid = ObjectId().str;
      	var userdata = {
		    "_id" : userid,
		    "id" : userid,
		    "loginid" : x.loginid,
		    "fullname" : [x.firstname,x.lastname].join(" "),
		    "firstname" : x.firstname,
		    "lastname" : x.lastname,
		    "email" : "",
		    "password" : "",
		    "enable" : true,
		    "groups" : [ 
		        group._id
		    ],
		    "grants" : [],
		    "logintype" : 1,
		    "loginconf" : {},
		    "countrycode" : "",
		    "country" : "",
		    "region" : "",
		    "segment" : "",
		    "productassignment" : [],
		    "isimportant" : false
		};
      	db.getSiblingDB(acldatabase).acl_users.save(userdata);
      }
    })
})

// Granting GP USER
arr = ["Corporate and Institutional Banking"];
var userlist = [
	{firstname:"Liam",lastname:"Atmarow",loginid:"1554610"}, 
    {firstname:"Dhruv Raj",lastname:"Singh",loginid:"1290271"}, 
    {firstname:"Geetha",lastname:"Amalraj",loginid:"1262517"}, 
    {firstname:"Himanshu",lastname:"Sodhani",loginid:"1454653"}, 
    {firstname:"Elyas",lastname:"Wahedi",loginid:"1579547"}
];
db.getSiblingDB(database).ss_application.find({"name":{$in:arr}}).forEach(function(a){
    var app_id = a._id.str;
    var group = {
        "_id" : "SS_APP_"+app_id+"_USER",
        "id" : "SS_APP_"+app_id+"_USER",
        "title" : "Group Productivity User",
        "enable" : true,
        "grants" : [ 
            {
                "accessid" : "SS_APP_"+app_id+"_GROUPPRODUCTIVITY",
                "accessvalue" : 15
            },
            {
                "accessid" : "SS_APP_"+app_id+"_GPSCORECARD",
                "accessvalue" : 15
            },
            {
                "accessid" : "SS_APP_"+app_id+"_GPINITIATIVE",
                "accessvalue" : 15
            },
            {
                "accessid" : "SS_APP_"+app_id+"_GPSHAPEOFCHANGE",
                "accessvalue" : 15
            },

        ],
        "owner" : "",
        "grouptype" : 0,
        "groupconf" : {},
        "memberconf" : {},
        "applications" : [ 
            "web-ss#"+app_id
        ],
        "isimportant" : false,
        "ispartofadmin" : false,
        "ispartofinitiativeowner" : false,
        "isdisplayriskissues" : false
    };
    db.getSiblingDB(acldatabase).acl_groups.save(group);
    db.getSiblingDB(acldatabase).acl_accessibility.remove({"roleid" : group._id});
    var prohibited = [
	    "SS_APP_"+app_id+"_CONFIGURATION",
	    "SS_APP_"+app_id+"_APPLICATIONAUDITTRAIL",
	    "SS_APP_"+app_id+"_ROLEMANAGEMENT",
	    "SS_APP_"+app_id+"_USERAUDITTRAIL",
	    "SS_APP_"+app_id+"_APPLICATIONUSAGEDETAIL",
	    "SS_APP_"+app_id+"_USERMANAGEMENT"
    ];
    db.getSiblingDB(acldatabase).acl_access.find({application:"web-ss#"+app_id}).forEach(function(acc){
        var accs = {
            "roleid" : group._id,
            "accessid" : acc._id,
            "title" : acc.title,
            "url" : acc.url,
            "parentid" : "",
            "allowstatus" : true,
            "islandingpage" : false,
            "global" : {
                "create" : true,
                "read" : true,
                "update" : true,
                "delete" : true,
                "owned" : false,
                "curtain" : false,
                "upload" : false
            },
            "region" : {
                "create" : false,
                "read" : false,
                "update" : false,
                "delete" : false,
                "owned" : false,
                "curtain" : false,
                "upload" : false
            },
            "country" : {
                "create" : false,
                "read" : false,
                "update" : false,
                "delete" : false,
                "owned" : false,
                "curtain" : false,
                "upload" : false
            },
            "segment" : {
                "create" : false,
                "read" : false,
                "update" : false,
                "delete" : false,
                "owned" : false,
                "curtain" : false,
                "upload" : false
            },
            "productassignment" : {
                "create" : false,
                "read" : false,
                "update" : false,
                "delete" : false,
                "owned" : false,
                "curtain" : false,
                "upload" : false
            }
        };

	    if(prohibited.indexOf(accs.accessid)>=0){
	    	accs["allowstatus"] =  false;
	    	accs["global"] =  {
                "create" : false,
                "read" : false,
                "update" : false,
                "delete" : false,
                "owned" : false,
                "curtain" : false,
                "upload" : false
            };
	    }
        db.getSiblingDB(acldatabase).acl_accessibility.save(accs);
    });
    
    userlist.forEach(function(x){
      var existing = db.getSiblingDB(acldatabase).acl_users.find({loginid:x.loginid,groups:group._id}).toArray();
      if(existing.length==0){
      	var userid = ObjectId().str;
      	var userdata = {
		    "_id" : userid,
		    "id" : userid,
		    "loginid" : x.loginid,
		    "fullname" : [x.firstname,x.lastname].join(" "),
		    "firstname" : x.firstname,
		    "lastname" : x.lastname,
		    "email" : "",
		    "password" : "",
		    "enable" : true,
		    "groups" : [ 
		        group._id
		    ],
		    "grants" : [],
		    "logintype" : 1,
		    "loginconf" : {},
		    "countrycode" : "",
		    "country" : "",
		    "region" : "",
		    "segment" : "",
		    "productassignment" : [],
		    "isimportant" : false
		};

      	db.getSiblingDB(acldatabase).acl_users.save(userdata);
      }
    })
})

arr = ["Private Banking"];
userlist = [
    {firstname:"Karthik",lastname:"Swaminathan",loginid:"1172497"}, 
    {firstname:"Kanika",lastname:"Jyotsna",loginid:"1407973"}, 
    {firstname:"June",lastname:"Yap",loginid:"1148889"}, 
    {firstname:"Jonathan",lastname:"da Silva",loginid:"1548295"}
];
db.getSiblingDB(database).ss_application.find({"name":{$in:arr}}).forEach(function(a){
    var app_id = a._id.str;
    var group = {
        "_id" : "SS_APP_"+app_id+"_USER",
        "id" : "SS_APP_"+app_id+"_USER",
        "title" : "Group Productivity User",
        "enable" : true,
        "grants" : [ 
            {
                "accessid" : "SS_APP_"+app_id+"_GROUPPRODUCTIVITY",
                "accessvalue" : 15
            },
            {
                "accessid" : "SS_APP_"+app_id+"_GPSCORECARD",
                "accessvalue" : 15
            },
            {
                "accessid" : "SS_APP_"+app_id+"_GPINITIATIVE",
                "accessvalue" : 15
            },
            {
                "accessid" : "SS_APP_"+app_id+"_GPSHAPEOFCHANGE",
                "accessvalue" : 15
            },

        ],
        "owner" : "",
        "grouptype" : 0,
        "groupconf" : {},
        "memberconf" : {},
        "applications" : [ 
            "web-ss#"+app_id
        ],
        "isimportant" : false,
        "ispartofadmin" : false,
        "ispartofinitiativeowner" : false,
        "isdisplayriskissues" : false
    };
    db.getSiblingDB(acldatabase).acl_groups.save(group);
    db.getSiblingDB(acldatabase).acl_accessibility.remove({"roleid" : group._id});
    var prohibited = [
	    "SS_APP_"+app_id+"_CONFIGURATION",
	    "SS_APP_"+app_id+"_APPLICATIONAUDITTRAIL",
	    "SS_APP_"+app_id+"_ROLEMANAGEMENT",
	    "SS_APP_"+app_id+"_USERAUDITTRAIL",
	    "SS_APP_"+app_id+"_APPLICATIONUSAGEDETAIL",
	    "SS_APP_"+app_id+"_USERMANAGEMENT"
    ];
    db.getSiblingDB(acldatabase).acl_access.find({application:"web-ss#"+app_id}).forEach(function(acc){
        var accs = {
            "roleid" : group._id,
            "accessid" : acc._id,
            "title" : acc.title,
            "url" : acc.url,
            "parentid" : "",
            "allowstatus" : true,
            "islandingpage" : false,
            "global" : {
                "create" : true,
                "read" : true,
                "update" : true,
                "delete" : true,
                "owned" : false,
                "curtain" : false,
                "upload" : false
            },
            "region" : {
                "create" : false,
                "read" : false,
                "update" : false,
                "delete" : false,
                "owned" : false,
                "curtain" : false,
                "upload" : false
            },
            "country" : {
                "create" : false,
                "read" : false,
                "update" : false,
                "delete" : false,
                "owned" : false,
                "curtain" : false,
                "upload" : false
            },
            "segment" : {
                "create" : false,
                "read" : false,
                "update" : false,
                "delete" : false,
                "owned" : false,
                "curtain" : false,
                "upload" : false
            },
            "productassignment" : {
                "create" : false,
                "read" : false,
                "update" : false,
                "delete" : false,
                "owned" : false,
                "curtain" : false,
                "upload" : false
            }
        };

	    if(prohibited.indexOf(accs.accessid)>=0){
	    	accs["allowstatus"] =  false;
	    	accs["global"] =  {
                "create" : false,
                "read" : false,
                "update" : false,
                "delete" : false,
                "owned" : false,
                "curtain" : false,
                "upload" : false
            };
	    }
        db.getSiblingDB(acldatabase).acl_accessibility.save(accs);
    });
    
    userlist.forEach(function(x){
      var existing = db.getSiblingDB(acldatabase).acl_users.find({loginid:x.loginid,groups:group._id}).toArray();
      if(existing.length==0){
      	var userid = ObjectId().str;
      	var userdata = {
		    "_id" : userid,
		    "id" : userid,
		    "loginid" : x.loginid,
		    "fullname" : [x.firstname,x.lastname].join(" "),
		    "firstname" : x.firstname,
		    "lastname" : x.lastname,
		    "email" : "",
		    "password" : "",
		    "enable" : true,
		    "groups" : [ 
		        group._id
		    ],
		    "grants" : [],
		    "logintype" : 1,
		    "loginconf" : {},
		    "countrycode" : "",
		    "country" : "",
		    "region" : "",
		    "segment" : "",
		    "productassignment" : [],
		    "isimportant" : false
		};

      	db.getSiblingDB(acldatabase).acl_users.save(userdata);
      }
    });
})

arr = ["Risk"];
userlist = [
    {firstname:"Zane",lastname:"Du Toit",loginid:"1461288"}, 
    {firstname:"Adeline Wye Chun",lastname:"Chia",loginid:"1360370"}, 
    {firstname:"Piotr",lastname:"Zajac",loginid:"1006449"}
];

db.getSiblingDB(database).ss_application.find({"name":{$in:arr}}).forEach(function(a){
    var app_id = a._id.str;
    var group = {
        "_id" : "SS_APP_"+app_id+"_USER",
        "id" : "SS_APP_"+app_id+"_USER",
        "title" : "Group Productivity User",
        "enable" : true,
        "grants" : [ 
            {
                "accessid" : "SS_APP_"+app_id+"_GROUPPRODUCTIVITY",
                "accessvalue" : 15
            },
            {
                "accessid" : "SS_APP_"+app_id+"_GPSCORECARD",
                "accessvalue" : 15
            },
            {
                "accessid" : "SS_APP_"+app_id+"_GPINITIATIVE",
                "accessvalue" : 15
            },
            {
                "accessid" : "SS_APP_"+app_id+"_GPSHAPEOFCHANGE",
                "accessvalue" : 15
            },

        ],
        "owner" : "",
        "grouptype" : 0,
        "groupconf" : {},
        "memberconf" : {},
        "applications" : [ 
            "web-ss#"+app_id
        ],
        "isimportant" : false,
        "ispartofadmin" : false,
        "ispartofinitiativeowner" : false,
        "isdisplayriskissues" : false
    };
    db.getSiblingDB(acldatabase).acl_groups.save(group);
    db.getSiblingDB(acldatabase).acl_accessibility.remove({"roleid" : group._id});
    var prohibited = [
        "SS_APP_"+app_id+"_CONFIGURATION",
        "SS_APP_"+app_id+"_APPLICATIONAUDITTRAIL",
        "SS_APP_"+app_id+"_ROLEMANAGEMENT",
        "SS_APP_"+app_id+"_USERAUDITTRAIL",
        "SS_APP_"+app_id+"_APPLICATIONUSAGEDETAIL",
        "SS_APP_"+app_id+"_USERMANAGEMENT"
    ];
    db.getSiblingDB(acldatabase).acl_access.find({application:"web-ss#"+app_id}).forEach(function(acc){
        var accs = {
            "roleid" : group._id,
            "accessid" : acc._id,
            "title" : acc.title,
            "url" : acc.url,
            "parentid" : "",
            "allowstatus" : true,
            "islandingpage" : false,
            "global" : {
                "create" : true,
                "read" : true,
                "update" : true,
                "delete" : true,
                "owned" : false,
                "curtain" : false,
                "upload" : false
            },
            "region" : {
                "create" : false,
                "read" : false,
                "update" : false,
                "delete" : false,
                "owned" : false,
                "curtain" : false,
                "upload" : false
            },
            "country" : {
                "create" : false,
                "read" : false,
                "update" : false,
                "delete" : false,
                "owned" : false,
                "curtain" : false,
                "upload" : false
            },
            "segment" : {
                "create" : false,
                "read" : false,
                "update" : false,
                "delete" : false,
                "owned" : false,
                "curtain" : false,
                "upload" : false
            },
            "productassignment" : {
                "create" : false,
                "read" : false,
                "update" : false,
                "delete" : false,
                "owned" : false,
                "curtain" : false,
                "upload" : false
            }
        }

        if(prohibited.indexOf(accs.accessid)>=0){
            accs["allowstatus"] =  false;
            accs["global"] =  {
                "create" : false,
                "read" : false,
                "update" : false,
                "delete" : false,
                "owned" : false,
                "curtain" : false,
                "upload" : false
            };
        }
        db.getSiblingDB(acldatabase).acl_accessibility.save(accs)
    });
    
    userlist.forEach(function(x){
      var existing = db.getSiblingDB(acldatabase).acl_users.find({loginid:x.loginid,groups:group._id}).toArray();
      if(existing.length==0){
        var userid = ObjectId().str;
        var userdata = {
            "_id" : userid,
            "id" : userid,
            "loginid" : x.loginid,
            "fullname" : [x.firstname,x.lastname].join(" "),
            "firstname" : x.firstname,
            "lastname" : x.lastname,
            "email" : "",
            "password" : "",
            "enable" : true,
            "groups" : [ 
                group._id
            ],
            "grants" : [],
            "logintype" : 1,
            "loginconf" : {},
            "countrycode" : "",
            "country" : "",
            "region" : "",
            "segment" : "",
            "productassignment" : [],
            "isimportant" : false
        };

        db.getSiblingDB(acldatabase).acl_users.save(userdata);
      }
    });
});

arr = ["Technology & Innovation"];
userlist = [
    {firstname:"Jaslyn",lastname:"Loh",loginid:"1575893"}, 
    {firstname:"Kuo Shu",lastname:"Tien",loginid:"1501118"}
];
db.getSiblingDB(database).ss_application.find({"name":{$in:arr}}).forEach(function(a){
    var app_id = a._id.str;
    var group = {
        "_id" : "SS_APP_"+app_id+"_USER",
        "id" : "SS_APP_"+app_id+"_USER",
        "title" : "Group Productivity User",
        "enable" : true,
        "grants" : [ 
            {
                "accessid" : "SS_APP_"+app_id+"_GROUPPRODUCTIVITY",
                "accessvalue" : 15
            },
            {
                "accessid" : "SS_APP_"+app_id+"_GPSCORECARD",
                "accessvalue" : 15
            },
            {
                "accessid" : "SS_APP_"+app_id+"_GPINITIATIVE",
                "accessvalue" : 15
            },
            {
                "accessid" : "SS_APP_"+app_id+"_GPSHAPEOFCHANGE",
                "accessvalue" : 15
            },

        ],
        "owner" : "",
        "grouptype" : 0,
        "groupconf" : {},
        "memberconf" : {},
        "applications" : [ 
            "web-ss#"+app_id
        ],
        "isimportant" : false,
        "ispartofadmin" : false,
        "ispartofinitiativeowner" : false,
        "isdisplayriskissues" : false
    };
    db.getSiblingDB(acldatabase).acl_groups.save(group);
    db.getSiblingDB(acldatabase).acl_accessibility.remove({"roleid" : group._id});
    var prohibited = [
	    "SS_APP_"+app_id+"_CONFIGURATION",
	    "SS_APP_"+app_id+"_APPLICATIONAUDITTRAIL",
	    "SS_APP_"+app_id+"_ROLEMANAGEMENT",
	    "SS_APP_"+app_id+"_USERAUDITTRAIL",
	    "SS_APP_"+app_id+"_APPLICATIONUSAGEDETAIL",
	    "SS_APP_"+app_id+"_USERMANAGEMENT"
    ];
    db.getSiblingDB(acldatabase).acl_access.find({application:"web-ss#"+app_id}).forEach(function(acc){
        var accs = {
            "roleid" : group._id,
            "accessid" : acc._id,
            "title" : acc.title,
            "url" : acc.url,
            "parentid" : "",
            "allowstatus" : true,
            "islandingpage" : false,
            "global" : {
                "create" : true,
                "read" : true,
                "update" : true,
                "delete" : true,
                "owned" : false,
                "curtain" : false,
                "upload" : false
            },
            "region" : {
                "create" : false,
                "read" : false,
                "update" : false,
                "delete" : false,
                "owned" : false,
                "curtain" : false,
                "upload" : false
            },
            "country" : {
                "create" : false,
                "read" : false,
                "update" : false,
                "delete" : false,
                "owned" : false,
                "curtain" : false,
                "upload" : false
            },
            "segment" : {
                "create" : false,
                "read" : false,
                "update" : false,
                "delete" : false,
                "owned" : false,
                "curtain" : false,
                "upload" : false
            },
            "productassignment" : {
                "create" : false,
                "read" : false,
                "update" : false,
                "delete" : false,
                "owned" : false,
                "curtain" : false,
                "upload" : false
            }
        };

	    if(prohibited.indexOf(accs.accessid)>=0){
	    	accs["allowstatus"] =  false;
	    	accs["global"] =  {
                "create" : false,
                "read" : false,
                "update" : false,
                "delete" : false,
                "owned" : false,
                "curtain" : false,
                "upload" : false
            };
	    }
        db.getSiblingDB(acldatabase).acl_accessibility.save(accs);
    });
    
    userlist.forEach(function(x){
      var existing = db.getSiblingDB(acldatabase).acl_users.find({loginid:x.loginid,groups:group._id}).toArray();
      if(existing.length==0){
      	var userid = ObjectId().str;
      	var userdata = {
		    "_id" : userid,
		    "id" : userid,
		    "loginid" : x.loginid,
		    "fullname" : [x.firstname,x.lastname].join(" "),
		    "firstname" : x.firstname,
		    "lastname" : x.lastname,
		    "email" : "",
		    "password" : "",
		    "enable" : true,
		    "groups" : [ 
		        group._id
		    ],
		    "grants" : [],
		    "logintype" : 1,
		    "loginconf" : {},
		    "countrycode" : "",
		    "country" : "",
		    "region" : "",
		    "segment" : "",
		    "productassignment" : [],
		    "isimportant" : false
		};

      	db.getSiblingDB(acldatabase).acl_users.save(userdata);
      }
    });
})

arr = ["Operations"];
userlist = [
    {firstname:"Janson ST",lastname:"Sim",loginid:"1458594"}, 
    {firstname:"Gwendoline",lastname:"Poh",loginid:"1123949"}, 
    {firstname:"Sanjay",lastname:"Rao",loginid:"1559060"}, 
    {firstname:"Mark",lastname:"Dymock",loginid:"1391692"}
];
db.getSiblingDB(database).ss_application.find({"name":{$in:arr}}).forEach(function(a){
    var app_id = a._id.str;
    var group = {
        "_id" : "SS_APP_"+app_id+"_USER",
        "id" : "SS_APP_"+app_id+"_USER",
        "title" : "Group Productivity User",
        "enable" : true,
        "grants" : [ 
            {
                "accessid" : "SS_APP_"+app_id+"_GROUPPRODUCTIVITY",
                "accessvalue" : 15
            },
            {
                "accessid" : "SS_APP_"+app_id+"_GPSCORECARD",
                "accessvalue" : 15
            },
            {
                "accessid" : "SS_APP_"+app_id+"_GPINITIATIVE",
                "accessvalue" : 15
            },
            {
                "accessid" : "SS_APP_"+app_id+"_GPSHAPEOFCHANGE",
                "accessvalue" : 15
            },

        ],
        "owner" : "",
        "grouptype" : 0,
        "groupconf" : {},
        "memberconf" : {},
        "applications" : [ 
            "web-ss#"+app_id
        ],
        "isimportant" : false,
        "ispartofadmin" : false,
        "ispartofinitiativeowner" : false,
        "isdisplayriskissues" : false
    };
    db.getSiblingDB(acldatabase).acl_groups.save(group);
    db.getSiblingDB(acldatabase).acl_accessibility.remove({"roleid" : group._id});
    var prohibited = [
	    "SS_APP_"+app_id+"_CONFIGURATION",
	    "SS_APP_"+app_id+"_APPLICATIONAUDITTRAIL",
	    "SS_APP_"+app_id+"_ROLEMANAGEMENT",
	    "SS_APP_"+app_id+"_USERAUDITTRAIL",
	    "SS_APP_"+app_id+"_APPLICATIONUSAGEDETAIL",
	    "SS_APP_"+app_id+"_USERMANAGEMENT"
    ];
    db.getSiblingDB(acldatabase).acl_access.find({application:"web-ss#"+app_id}).forEach(function(acc){
        var accs = {
            "roleid" : group._id,
            "accessid" : acc._id,
            "title" : acc.title,
            "url" : acc.url,
            "parentid" : "",
            "allowstatus" : true,
            "islandingpage" : false,
            "global" : {
                "create" : true,
                "read" : true,
                "update" : true,
                "delete" : true,
                "owned" : false,
                "curtain" : false,
                "upload" : false
            },
            "region" : {
                "create" : false,
                "read" : false,
                "update" : false,
                "delete" : false,
                "owned" : false,
                "curtain" : false,
                "upload" : false
            },
            "country" : {
                "create" : false,
                "read" : false,
                "update" : false,
                "delete" : false,
                "owned" : false,
                "curtain" : false,
                "upload" : false
            },
            "segment" : {
                "create" : false,
                "read" : false,
                "update" : false,
                "delete" : false,
                "owned" : false,
                "curtain" : false,
                "upload" : false
            },
            "productassignment" : {
                "create" : false,
                "read" : false,
                "update" : false,
                "delete" : false,
                "owned" : false,
                "curtain" : false,
                "upload" : false
            }
        };

	    if(prohibited.indexOf(accs.accessid)>=0){
	    	accs["allowstatus"] =  false;
	    	accs["global"] =  {
                "create" : false,
                "read" : false,
                "update" : false,
                "delete" : false,
                "owned" : false,
                "curtain" : false,
                "upload" : false
            };
	    }
        db.getSiblingDB(acldatabase).acl_accessibility.save(accs);
    })
    
    userlist.forEach(function(x){
      var existing = db.getSiblingDB(acldatabase).acl_users.find({loginid:x.loginid,groups:group._id}).toArray();
      if(existing.length==0){
      	var userid = ObjectId().str;
      	var userdata = {
		    "_id" : userid,
		    "id" : userid,
		    "loginid" : x.loginid,
		    "fullname" : [x.firstname,x.lastname].join(" "),
		    "firstname" : x.firstname,
		    "lastname" : x.lastname,
		    "email" : "",
		    "password" : "",
		    "enable" : true,
		    "groups" : [ 
		        group._id
		    ],
		    "grants" : [],
		    "logintype" : 1,
		    "loginconf" : {},
		    "countrycode" : "",
		    "country" : "",
		    "region" : "",
		    "segment" : "",
		    "productassignment" : [],
		    "isimportant" : false
		};

      	db.getSiblingDB(acldatabase).acl_users.save(userdata);
      }
    });
});

arr = ["Group Internal Audit"];
userlist = [
    {firstname:"Arun",lastname:"Pone",loginid:"1548453"}, 
    {firstname:"Dominic",lastname:"Clarke",loginid:"1552528"}, 
    {firstname:"John",lastname:"Mitchell",loginid:"1526514"}, 
    {firstname:"Rebecca",lastname:"Fay",loginid:"1412136"}
];
db.getSiblingDB(database).ss_application.find({"name":{$in:arr}}).forEach(function(a){
    var app_id = a._id.str;
    var group = {
        "_id" : "SS_APP_"+app_id+"_USER",
        "id" : "SS_APP_"+app_id+"_USER",
        "title" : "Group Productivity User",
        "enable" : true,
        "grants" : [ 
            {
                "accessid" : "SS_APP_"+app_id+"_GROUPPRODUCTIVITY",
                "accessvalue" : 15
            },
            {
                "accessid" : "SS_APP_"+app_id+"_GPSCORECARD",
                "accessvalue" : 15
            },
            {
                "accessid" : "SS_APP_"+app_id+"_GPINITIATIVE",
                "accessvalue" : 15
            },
            {
                "accessid" : "SS_APP_"+app_id+"_GPSHAPEOFCHANGE",
                "accessvalue" : 15
            },

        ],
        "owner" : "",
        "grouptype" : 0,
        "groupconf" : {},
        "memberconf" : {},
        "applications" : [ 
            "web-ss#"+app_id
        ],
        "isimportant" : false,
        "ispartofadmin" : false,
        "ispartofinitiativeowner" : false,
        "isdisplayriskissues" : false
    };
    db.getSiblingDB(acldatabase).acl_groups.save(group);
    db.getSiblingDB(acldatabase).acl_accessibility.remove({"roleid" : group._id});
    var prohibited = [
	    "SS_APP_"+app_id+"_CONFIGURATION",
	    "SS_APP_"+app_id+"_APPLICATIONAUDITTRAIL",
	    "SS_APP_"+app_id+"_ROLEMANAGEMENT",
	    "SS_APP_"+app_id+"_USERAUDITTRAIL",
	    "SS_APP_"+app_id+"_APPLICATIONUSAGEDETAIL",
	    "SS_APP_"+app_id+"_USERMANAGEMENT"
    ];
    db.getSiblingDB(acldatabase).acl_access.find({application:"web-ss#"+app_id}).forEach(function(acc){
        var accs = {
            "roleid" : group._id,
            "accessid" : acc._id,
            "title" : acc.title,
            "url" : acc.url,
            "parentid" : "",
            "allowstatus" : true,
            "islandingpage" : false,
            "global" : {
                "create" : true,
                "read" : true,
                "update" : true,
                "delete" : true,
                "owned" : false,
                "curtain" : false,
                "upload" : false
            },
            "region" : {
                "create" : false,
                "read" : false,
                "update" : false,
                "delete" : false,
                "owned" : false,
                "curtain" : false,
                "upload" : false
            },
            "country" : {
                "create" : false,
                "read" : false,
                "update" : false,
                "delete" : false,
                "owned" : false,
                "curtain" : false,
                "upload" : false
            },
            "segment" : {
                "create" : false,
                "read" : false,
                "update" : false,
                "delete" : false,
                "owned" : false,
                "curtain" : false,
                "upload" : false
            },
            "productassignment" : {
                "create" : false,
                "read" : false,
                "update" : false,
                "delete" : false,
                "owned" : false,
                "curtain" : false,
                "upload" : false
            }
        };

	    if(prohibited.indexOf(accs.accessid)>=0){
	    	accs["allowstatus"] =  false;
	    	accs["global"] =  {
                "create" : false,
                "read" : false,
                "update" : false,
                "delete" : false,
                "owned" : false,
                "curtain" : false,
                "upload" : false
            };
	    }
        db.getSiblingDB(acldatabase).acl_accessibility.save(accs);
    })
    
    userlist.forEach(function(x){
      var existing = db.getSiblingDB(acldatabase).acl_users.find({loginid:x.loginid,groups:group._id}).toArray();
      if(existing.length==0){
      	var userid = ObjectId().str;
      	var userdata = {
		    "_id" : userid,
		    "id" : userid,
		    "loginid" : x.loginid,
		    "fullname" : [x.firstname,x.lastname].join(" "),
		    "firstname" : x.firstname,
		    "lastname" : x.lastname,
		    "email" : "",
		    "password" : "",
		    "enable" : true,
		    "groups" : [ 
		        group._id
		    ],
		    "grants" : [],
		    "logintype" : 1,
		    "loginconf" : {},
		    "countrycode" : "",
		    "country" : "",
		    "region" : "",
		    "segment" : "",
		    "productassignment" : [],
		    "isimportant" : false
		};

      	db.getSiblingDB(acldatabase).acl_users.save(userdata);
      }
    });
});


arr = ["Group CFO"];
userlist = [
    {firstname:"Nadia",lastname:"Ali",loginid:"1587712"}, 
    {firstname:"Bobby",lastname:"Islam",loginid:"1537666"}
];
db.getSiblingDB(database).ss_application.find({"name":{$in:arr}}).forEach(function(a){
    var app_id = a._id.str;
    var group = {
        "_id" : "SS_APP_"+app_id+"_USER",
        "id" : "SS_APP_"+app_id+"_USER",
        "title" : "Group Productivity User",
        "enable" : true,
        "grants" : [ 
            {
                "accessid" : "SS_APP_"+app_id+"_GROUPPRODUCTIVITY",
                "accessvalue" : 15
            },
            {
                "accessid" : "SS_APP_"+app_id+"_GPSCORECARD",
                "accessvalue" : 15
            },
            {
                "accessid" : "SS_APP_"+app_id+"_GPINITIATIVE",
                "accessvalue" : 15
            },
            {
                "accessid" : "SS_APP_"+app_id+"_GPSHAPEOFCHANGE",
                "accessvalue" : 15
            },

        ],
        "owner" : "",
        "grouptype" : 0,
        "groupconf" : {},
        "memberconf" : {},
        "applications" : [ 
            "web-ss#"+app_id
        ],
        "isimportant" : false,
        "ispartofadmin" : false,
        "ispartofinitiativeowner" : false,
        "isdisplayriskissues" : false
    }
    db.getSiblingDB(acldatabase).acl_groups.save(group);
    db.getSiblingDB(acldatabase).acl_accessibility.remove({"roleid" : group._id});
    var prohibited = [
	    "SS_APP_"+app_id+"_CONFIGURATION",
	    "SS_APP_"+app_id+"_APPLICATIONAUDITTRAIL",
	    "SS_APP_"+app_id+"_ROLEMANAGEMENT",
	    "SS_APP_"+app_id+"_USERAUDITTRAIL",
	    "SS_APP_"+app_id+"_APPLICATIONUSAGEDETAIL",
	    "SS_APP_"+app_id+"_USERMANAGEMENT"
    ];
    db.getSiblingDB(acldatabase).acl_access.find({application:"web-ss#"+app_id}).forEach(function(acc){
        var accs = {
            "roleid" : group._id,
            "accessid" : acc._id,
            "title" : acc.title,
            "url" : acc.url,
            "parentid" : "",
            "allowstatus" : true,
            "islandingpage" : false,
            "global" : {
                "create" : true,
                "read" : true,
                "update" : true,
                "delete" : true,
                "owned" : false,
                "curtain" : false,
                "upload" : false
            },
            "region" : {
                "create" : false,
                "read" : false,
                "update" : false,
                "delete" : false,
                "owned" : false,
                "curtain" : false,
                "upload" : false
            },
            "country" : {
                "create" : false,
                "read" : false,
                "update" : false,
                "delete" : false,
                "owned" : false,
                "curtain" : false,
                "upload" : false
            },
            "segment" : {
                "create" : false,
                "read" : false,
                "update" : false,
                "delete" : false,
                "owned" : false,
                "curtain" : false,
                "upload" : false
            },
            "productassignment" : {
                "create" : false,
                "read" : false,
                "update" : false,
                "delete" : false,
                "owned" : false,
                "curtain" : false,
                "upload" : false
            }
        };

	    if(prohibited.indexOf(accs.accessid)>=0){
	    	accs["allowstatus"] =  false;
	    	accs["global"] =  {
                "create" : false,
                "read" : false,
                "update" : false,
                "delete" : false,
                "owned" : false,
                "curtain" : false,
                "upload" : false
            };
	    }
        db.getSiblingDB(acldatabase).acl_accessibility.save(accs);
    });
    
    userlist.forEach(function(x){
      var existing = db.getSiblingDB(acldatabase).acl_users.find({loginid:x.loginid,groups:group._id}).toArray();
      if(existing.length==0){
      	var userid = ObjectId().str;
      	var userdata = {
		    "_id" : userid,
		    "id" : userid,
		    "loginid" : x.loginid,
		    "fullname" : [x.firstname,x.lastname].join(" "),
		    "firstname" : x.firstname,
		    "lastname" : x.lastname,
		    "email" : "",
		    "password" : "",
		    "enable" : true,
		    "groups" : [ 
		        group._id
		    ],
		    "grants" : [],
		    "logintype" : 1,
		    "loginconf" : {},
		    "countrycode" : "",
		    "country" : "",
		    "region" : "",
		    "segment" : "",
		    "productassignment" : [],
		    "isimportant" : false
		};

      	db.getSiblingDB(acldatabase).acl_users.save(userdata);
      }
    });
});


// INIT GP USER FOR LOGIN
var gpuserlist = [
	{loginid:"1582419",firstname:"Kee Leon Jason",lastname:"Lee"},
	{loginid:"1576659",firstname:"Siew Fun",lastname:"Lee"},
	{loginid:"1550072",firstname:"Patricia",lastname:"Macchi"},
	{loginid:"1550903",firstname:"Kay",lastname:"Tan"},
	{loginid:"1235813",firstname:"Shravan Kumar",lastname:"Gobburi"},
	{loginid:"1353692",firstname:"Frederic Gilles",lastname:"Serpoul"},
	{loginid:"1188026",firstname:"Sudrajat",lastname:"Kartawidjaja"},
	{loginid:"1182868",firstname:"Asim",lastname:"Junaidi"},
	{loginid:"1233288",firstname:"Gunjan",lastname:"Agarwal"},
	{loginid:"1536519",firstname:"Parvathy",lastname:"Lakshmy"},
	{loginid:"1469953",firstname:"Aditya",lastname:"Murarka"},
	{loginid:"1382102",firstname:"Myung Jong",lastname:"Kim"},
	{loginid:"1554610",firstname:"Liam",lastname:"Atmarow"},
	{loginid:"1290271",firstname:"Dhruv Raj",lastname:"Singh"},
	{loginid:"1262517",firstname:"Geetha",lastname:"Amalraj"},
	{loginid:"1454653",firstname:"Himanshu",lastname:"Sodhani"},
	{loginid:"1579547",firstname:"Elyas",lastname:"Wahedi"},
	{loginid:"1172497",firstname:"Karthik",lastname:"Swaminathan"},
	{loginid:"1407973",firstname:"Kanika",lastname:"Jyotsna"},
	{loginid:"1148889",firstname:"June",lastname:"Yap"},
	{loginid:"1548295",firstname:"Jonathan",lastname:"da Silva"},
	{loginid:"1587712",firstname:"Nadia",lastname:"Ali"},
	{loginid:"1537666",firstname:"Bobby",lastname:"Islam"},
	{loginid:"1461288",firstname:"Zane",lastname:"Du Toit"},
	{loginid:"1360370",firstname:"Adeline Wye Chun",lastname:"Chia"},
	{loginid:"1006449",firstname:"Piotr",lastname:"Zajac"},
	{loginid:"1559738",firstname:"Kasia",lastname:"Kostyk"},
	{loginid:"1329664",firstname:"Andy Hui Jie",lastname:"Tan"},
	{loginid:"1447442",firstname:"Saurabh",lastname:"Chadha"},
	{loginid:"1575893",firstname:"Jaslyn",lastname:"Loh"},
	{loginid:"1501118",firstname:"Kuo Shu",lastname:"Tien"},
	{loginid:"1548453",firstname:"Arun",lastname:"Pone"},
	{loginid:"1552528",firstname:"Dominic",lastname:"Clarke"},
	{loginid:"1526514",firstname:"John",lastname:"Mitchell"},
	{loginid:"1412136",firstname:"Rebecca",lastname:"Fay"},
	{loginid:"1458594",firstname:"Janson ST",lastname:"Sim"},
	{loginid:"1123949",firstname:"Gwendoline",lastname:"Poh"},
	{loginid:"1559060",firstname:"Sanjay",lastname:"Rao"},
	{loginid:"1391692",firstname:"Mark",lastname:"Dymock"},
	{loginid:"1584546",firstname:"Punarvi ",lastname:"Karanam"},
    {loginid:"1394022",firstname:"Ambreen",lastname:"Hamza"},
	{loginid:"1521647",firstname:"Luca",lastname:"Borroni"},
	{loginid:"1502498",firstname:"Storm",lastname:"Dalati"},
	{loginid:"1584547",firstname:"Kathiravan",lastname:"Nagalingam"},
	{loginid:"1504680",firstname:"Nagarajan",lastname:"Vasu Rao "},
	{loginid:"1426484",firstname:"Oliver",lastname:"Cheung"},
	{loginid:"1548237",firstname:"Kalaivani",lastname:"Thiruppathi"}
];

for(var i in gpuserlist){
    var userid = ObjectId().str;
    db.getSiblingDB(acldatabase).acl_users.remove({"loginid":gpuserlist[i].loginid,"groups":"GROUP_PRODUCTIVITY"});
	db.getSiblingDB(acldatabase).acl_users.save({"_id" : userid,
	    "id" : userid,
	    "loginid" : gpuserlist[i].loginid,
	    "fullname" : [gpuserlist[i].firstname,gpuserlist[i].lastname].join(" "),
	    "firstname" : gpuserlist[i].firstname,
	    "lastname" : gpuserlist[i].lastname,
	    "email" : "",
	    "password" : "",
	    "enable" : true,
	    "groups" : [ 
	        "GROUP_PRODUCTIVITY"
	    ],
	    "grants" : [],
	    "logintype" : 1,
	    "loginconf" : {},
	    "countrycode" : "",
	    "country" : "",
	    "region" : "",
	    "segment" : "",
	    "productassignment" : [],
	    "isimportant" : false
	});
}