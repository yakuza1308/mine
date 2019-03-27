var acldatabase = "scbbef-uat";
var database = "scbss-uat";
var group_productivity_url = "http://group_productivity.eaciitapp.com";
var arr_users = [
    "RB|1582419|Kee Leon Jason|Lee|RB Finance",
    "RB|1576659|Siew Fun|Lee|RB Finance",
    "RB|1550072|Patricia|Macchi|RB Finance",
    "CB|1550903|Kay|Tan|CB Finance (Group)",
    "CB|1235813|Shravan Kumar|Gobburi|CB Finance (Group)",
    "CB|1353692|Frederic Gilles|Serpoul|CB Finance (Group)",
    "CB|1188026|Sudrajat|Kartawidjaja|CB Finance (Group)",
    "RB|1188026|Sudrajat|Kartawidjaja|RB Finance",
    "CB|1182868|Asim|Junaidi|CB Finance (Group)",
    "RB|1182868|Asim|Junaidi|RB Finance",
    "CB|1233288|Gunjan|Agarwal|CB Finance (Group)",
    "RB|1233288|Gunjan|Agarwal|RB Finance",
    "CB|1536519|Parvathy|Lakshmy|CB Finance (Group)",
    "RB|1536519|Parvathy|Lakshmy|RB Finance",
    "CB|1469953|Aditya|Murarka|CB Finance (Group)",
    "RB|1469953|Aditya|Murarka|RB Finance",
    "CB|1382102|Myung Jong|Kim|CB Finance (Group)",
    "RB|1382102|Myung Jong|Kim|RB Finance",
    "Compliance|1006449|Piotr|Zajac|Compliance & FCC Scorecard Owner",
    "Compliance|1559738|Kasia|Kostyk|Compliance & FCC Scorecard Owner",
    "Compliance|1329664|Andy Hui Jie|Tan|Compliance & FCC Scorecard Owner",
    "Compliance|1447442|Saurabh|Chadha|Compliance & FCC Scorecard Owner"
];
var get_groupid = {};
var get_group = {};
db.getSiblingDB(acldatabase).acl_groups.find({}).forEach(function(x){
    if(x._id.indexOf("PR_APP")<0){
        get_groupid[x.title] = x._id;
        get_group[x._id] = x;
    }
});
var grouptoproceed = {};
for(var i in arr_users){
    var x = arr_users[i].split("|");
    var group_id = get_groupid[x[4]];
    grouptoproceed[group_id] = true;
}
var othersgroup = ["BEF CB Admin","RB Transforms (RBT) Admin","Compliance & FCC BEF Admin"];
for(var i in othersgroup){
    var group_id = get_groupid[othersgroup[i]];
    if(typeof(group_id) !== "undefined"){
        grouptoproceed[group_id] = true;
    }
}
for(var i in grouptoproceed){
    var g = get_group[i];
    var execute = false;
    var accid = "";
    if(g.applications.indexOf("web-rb")>=0){
        if(g.grants.indexOf({"accessid" : "RBGROUPPRODUCTIVITY","accessvalue" : 15})<0){
            g.grants.push({"accessid" : "RBGROUPPRODUCTIVITY","accessvalue" : 15});
            accid = "RBGROUPPRODUCTIVITY";
            execute = true;
        }
    }else if(g.applications.indexOf("web-ss#5a6ec6d877b8a9f91600003a")>=0){
        if(g.grants.indexOf({"accessid" : "SS_APP_5a6ec6d877b8a9f91600003a_GROUPPRODUCTIVITY","accessvalue" : 15})<0){
            g.grants.push({"accessid" : "SS_APP_5a6ec6d877b8a9f91600003a_GROUPPRODUCTIVITY","accessvalue" : 15});
            accid = "SS_APP_5a6ec6d877b8a9f91600003a_GROUPPRODUCTIVITY";
            execute = true;
        }
    }else if(g.applications.indexOf("web-ss#5b2b20a35308afe5ab60f2e5")>=0){
        if(g.grants.indexOf({"accessid" : "SS_APP_5b2b20a35308afe5ab60f2e5_GROUPPRODUCTIVITY","accessvalue" : 15})<0){
            g.grants.push({"accessid" : "SS_APP_5b2b20a35308afe5ab60f2e5_GROUPPRODUCTIVITY","accessvalue" : 15});
            accid = "SS_APP_5b2b20a35308afe5ab60f2e5_GROUPPRODUCTIVITY";
            execute = true;
        }
    }
    if(execute){
        db.getSiblingDB(acldatabase).acl_groups.save(g);
        db.getSiblingDB(acldatabase).acl_accessibility.remove({"roleid" : g._id,"accessid" : accid});
        var accs = {
            "roleid" : g._id,
            "accessid" : accid,
            "title" : "Group Productivity",
            "url" : "#",
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
    }
}
for(var i in arr_users){
    var x = arr_users[i].split("|");
    var userid = ObjectId().str;
    var obj = {
        "_id" : userid,
        "id" : userid,
        "loginid" : x[1],
        "fullname" : [x[2],x[3]].join(" "),
        "firstname" : x[2],
        "lastname" : x[3],
        "email" : "",
        "password" : "",
        "enable" : true,
        "groups" : [ 
            get_groupid[x[4]]
        ],
        "grants" : [],
        "logintype" : 1,
        "loginconf" : {},
        "countrycode" : "",
        "country" : "",
        "region" : "",
        "segment" : "",
        "productassignment" : [],
        "functions" : [],
        "isimportant" : false
    };
    if(x[0]=="CB"){
        db.getSiblingDB(acldatabase).acl_users.remove({"loginid":obj.loginid,"groups":/.*5a6ec6d877b8a9f91600003a.*/});
    }else if(x[0]=="RB"){
        db.getSiblingDB(acldatabase).acl_users.remove({"loginid":obj.loginid,"groups":/.*RB_.*/});
    }else if(x[0]=="Compliance"){
        db.getSiblingDB(acldatabase).acl_users.remove({"loginid":obj.loginid,"groups":/.*5b2b20a35308afe5ab60f2e5.*/});  
    }
    db.getSiblingDB(acldatabase).acl_users.remove({"loginid":obj.loginid,"groups":obj.groups[0]});
    db.getSiblingDB(acldatabase).acl_users.save(obj);
}