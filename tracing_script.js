var acldatabase = "scbbef-sit";
var database = "scbsssit";
var userlist = ["1584546"] // userlist that available in both apps
var group_productivity_url = "url"


// Set Applications Data
for(var i in userlist){
	db.getSiblingDB(acldatabase).acl_users.save({
	    "_id" : "testuser-gp"+i,
	    "id" : "testuser-gp"+i,
	    "loginid" : userlist[i],
	    "fullname" : "Test User "+userlist[i],
	    "firstname" : "Test",
	    "lastname" : "User "+userlist[i],
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
	})
}

db.getSiblingDB(acldatabase).applications.save({
    "_id" : "web-groupproductivity",
    "Name" : "GROUP PRODUCTIVITY",
    "LandingURL" : "/login/docombine",
    "Description" : "",
    "Type" : "internal",
    "Host" : group_productivity_url,
    "LogoutURL" : "/logout/logout",
    "Category" : "BEF"
})

db.getSiblingDB(acldatabase).acl_groups.save({
    "_id" : "GROUP_PRODUCTIVITY",
    "id" : "GROUP_PRODUCTIVITY",
    "title" : "Group Productivity",
    "enable" : true,
    "grants" : [],
    "owner" : "",
    "grouptype" : 0.0,
    "groupconf" : {},
    "memberconf" : {},
    "applications" : [ 
        "web-groupproductivity"
    ],
    "isimportant" : false,
    "ispartofadmin" : false,
    "ispartofinitiativeowner" : false
})


db.getSiblingDB(acldatabase).applications.save({
    "_id" : "web-rb",
    "Name" : "Retail Banking",
    "LandingURL" : "/dashboard/landing",
    "Description" : "Retail Banking",
    "Category" : "BEF"
})

var aclaccess = [
	{
        "_id" : "PR_APP_5b83ff995635b0d2728c148c_GROUPPRODUCTIVITY",
        "id" : "PR_APP_5b83ff995635b0d2728c148c_GROUPPRODUCTIVITY",
        "title" : "Group Productivity",
        "category" : 2.0,
        "icon" : "fa-file-text-o",
        "parentid" : "",
        "url" : "#",
        "index" : -0.5,
        "group1" : "",
        "group2" : "",
        "group3" : "",
        "enable" : true,
        "specialaccess1" : "",
        "specialaccess2" : "",
        "specialaccess3" : "",
        "specialaccess4" : "",
        "application" : [ 
            "web-pr#5b83ff995635b0d2728c148c"
        ]
    },
    {
        "_id" : "PR_APP_5b8408b75635b0d2728c148d_GROUPPRODUCTIVITY",
        "id" : "PR_APP_5b8408b75635b0d2728c148d_GROUPPRODUCTIVITY",
        "title" : "Group Productivity",
        "category" : 2.0,
        "icon" : "fa-file-text-o",
        "parentid" : "",
        "url" : "#",
        "index" : -0.5,
        "group1" : "",
        "group2" : "",
        "group3" : "",
        "enable" : true,
        "specialaccess1" : "",
        "specialaccess2" : "",
        "specialaccess3" : "",
        "specialaccess4" : "",
        "application" : [ 
            "web-pr#5b8408b75635b0d2728c148d"
        ]
    },
    {
        "_id" : "RBGROUPPRODUCTIVITY",
        "id" : "RBGROUPPRODUCTIVITY",
        "title" : "Group Productivity",
        "category" : 2.0,
        "icon" : "fa-file-text-o",
        "parentid" : "",
        "url" : "#",
        "index" : -0.5,
        "group1" : "",
        "group2" : "",
        "group3" : "",
        "enable" : true,
        "specialaccess1" : "",
        "specialaccess2" : "",
        "specialaccess3" : "",
        "specialaccess4" : "",
        "application" : [ 
            "web-rb"
        ],
        "appcategory" : "RB"
    },
    {
        "_id" : "SS_APP_5a6ec6d877b8a9f91600003a_GROUPPRODUCTIVITY",
        "id" : "SS_APP_5a6ec6d877b8a9f91600003a_GROUPPRODUCTIVITY",
        "title" : "Group Productivity",
        "category" : 2,
        "icon" : "fa-file-text-o",
        "parentid" : "",
        "url" : "#",
        "index" : -0.5,
        "group1" : "",
        "group2" : "",
        "group3" : "",
        "enable" : true,
        "specialaccess1" : "",
        "specialaccess2" : "",
        "specialaccess3" : "",
        "specialaccess4" : "",
        "application" : [ 
            "web-ss#5a6ec6d877b8a9f91600003a"
        ]
    },
    {
        "_id" : "SS_APP_5a779f0e77b8a9334e0009c2_GROUPPRODUCTIVITY",
        "id" : "SS_APP_5a779f0e77b8a9334e0009c2_GROUPPRODUCTIVITY",
        "title" : "Group Productivity",
        "category" : 2,
        "icon" : "fa-file-text-o",
        "parentid" : "",
        "url" : "#",
        "index" : -0.5,
        "group1" : "",
        "group2" : "",
        "group3" : "",
        "enable" : true,
        "specialaccess1" : "",
        "specialaccess2" : "",
        "specialaccess3" : "",
        "specialaccess4" : "",
        "application" : [ 
            "web-ss#5a779f0e77b8a9334e0009c2"
        ]
    },
    {
        "_id" : "SS_APP_5aa8aa7a4234ad44683fcab7_GROUPPRODUCTIVITY",
        "id" : "SS_APP_5aa8aa7a4234ad44683fcab7_GROUPPRODUCTIVITY",
        "title" : "Group Productivity",
        "category" : 2,
        "icon" : "fa-file-text-o",
        "parentid" : "",
        "url" : "#",
        "index" : -0.5,
        "group1" : "",
        "group2" : "",
        "group3" : "",
        "enable" : true,
        "specialaccess1" : "",
        "specialaccess2" : "",
        "specialaccess3" : "",
        "specialaccess4" : "",
        "application" : [ 
            "web-ss#5aa8aa7a4234ad44683fcab7"
        ]
    },
    {
        "_id" : "SS_APP_5aa8b1444234ad44683fcaf6_GROUPPRODUCTIVITY",
        "id" : "SS_APP_5aa8b1444234ad44683fcaf6_GROUPPRODUCTIVITY",
        "title" : "Group Productivity",
        "category" : 2,
        "icon" : "fa-file-text-o",
        "parentid" : "",
        "url" : "#",
        "index" : -0.5,
        "group1" : "",
        "group2" : "",
        "group3" : "",
        "enable" : true,
        "specialaccess1" : "",
        "specialaccess2" : "",
        "specialaccess3" : "",
        "specialaccess4" : "",
        "application" : [ 
            "web-ss#5aa8b1444234ad44683fcaf6"
        ]
    },
    {
        "_id" : "SS_APP_5aa8b1604234ad44683fcb01_GROUPPRODUCTIVITY",
        "id" : "SS_APP_5aa8b1604234ad44683fcb01_GROUPPRODUCTIVITY",
        "title" : "Group Productivity",
        "category" : 2,
        "icon" : "fa-file-text-o",
        "parentid" : "",
        "url" : "#",
        "index" : -0.5,
        "group1" : "",
        "group2" : "",
        "group3" : "",
        "enable" : true,
        "specialaccess1" : "",
        "specialaccess2" : "",
        "specialaccess3" : "",
        "specialaccess4" : "",
        "application" : [ 
            "web-ss#5aa8b1604234ad44683fcb01"
        ]
    },
    {
        "_id" : "SS_APP_5b2b20a35308afe5ab60f2e5_GROUPPRODUCTIVITY",
        "id" : "SS_APP_5b2b20a35308afe5ab60f2e5_GROUPPRODUCTIVITY",
        "title" : "Group Productivity",
        "category" : 2,
        "icon" : "fa-file-text-o",
        "parentid" : "",
        "url" : "#",
        "index" : -0.5,
        "group1" : "",
        "group2" : "",
        "group3" : "",
        "enable" : true,
        "specialaccess1" : "",
        "specialaccess2" : "",
        "specialaccess3" : "",
        "specialaccess4" : "",
        "application" : [ 
            "web-ss#5b2b20a35308afe5ab60f2e5"
        ]
    },
    {
        "_id" : "SS_APP_5c3c38dd50aa6a3e55ca0241_GROUPPRODUCTIVITY",
        "id" : "SS_APP_5c3c38dd50aa6a3e55ca0241_GROUPPRODUCTIVITY",
        "title" : "Group Productivity",
        "category" : 2,
        "icon" : "fa-file-text-o",
        "parentid" : "",
        "url" : "#",
        "index" : -0.5,
        "group1" : "",
        "group2" : "",
        "group3" : "",
        "enable" : true,
        "specialaccess1" : "",
        "specialaccess2" : "",
        "specialaccess3" : "",
        "specialaccess4" : "",
        "application" : [ 
            "web-ss#5c3c38dd50aa6a3e55ca0241"
        ]
    },
    {
        "_id" : "SS_APP_5c3c39abe2d2f5bec1be9fbf_GROUPPRODUCTIVITY",
        "id" : "SS_APP_5c3c39abe2d2f5bec1be9fbf_GROUPPRODUCTIVITY",
        "title" : "Group Productivity",
        "category" : 2,
        "icon" : "fa-file-text-o",
        "parentid" : "",
        "url" : "#",
        "index" : -0.5,
        "group1" : "",
        "group2" : "",
        "group3" : "",
        "enable" : true,
        "specialaccess1" : "",
        "specialaccess2" : "",
        "specialaccess3" : "",
        "specialaccess4" : "",
        "application" : [ 
            "web-ss#5c3c39abe2d2f5bec1be9fbf"
        ]
    },
    {
        "_id" : "SS_APP_5c880a131fa32be5015ac11f_GROUPPRODUCTIVITY",
        "id" : "SS_APP_5c880a131fa32be5015ac11f_GROUPPRODUCTIVITY",
        "title" : "Group Productivity",
        "category" : 2.0,
        "icon" : "fa-file-text-o",
        "parentid" : "",
        "url" : "#",
        "index" : -0.5,
        "group1" : "",
        "group2" : "",
        "group3" : "",
        "enable" : true,
        "specialaccess1" : "",
        "specialaccess2" : "",
        "specialaccess3" : "",
        "specialaccess4" : "",
        "application" : [ 
            "web-ss#5c880a131fa32be5015ac11f"
        ]
    },
    {
        "_id" : "SS_APP_5c880a141fa32be5015ac120_GROUPPRODUCTIVITY",
        "id" : "SS_APP_5c880a141fa32be5015ac120_GROUPPRODUCTIVITY",
        "title" : "Group Productivity",
        "category" : 2.0,
        "icon" : "fa-file-text-o",
        "parentid" : "",
        "url" : "#",
        "index" : -0.5,
        "group1" : "",
        "group2" : "",
        "group3" : "",
        "enable" : true,
        "specialaccess1" : "",
        "specialaccess2" : "",
        "specialaccess3" : "",
        "specialaccess4" : "",
        "application" : [ 
            "web-ss#5c880a141fa32be5015ac120"
        ]
    },
    {
        "_id" : "SS_APP_5c880a141fa32be5015ac121_GROUPPRODUCTIVITY",
        "id" : "SS_APP_5c880a141fa32be5015ac121_GROUPPRODUCTIVITY",
        "title" : "Group Productivity",
        "category" : 2.0,
        "icon" : "fa-file-text-o",
        "parentid" : "",
        "url" : "#",
        "index" : -0.5,
        "group1" : "",
        "group2" : "",
        "group3" : "",
        "enable" : true,
        "specialaccess1" : "",
        "specialaccess2" : "",
        "specialaccess3" : "",
        "specialaccess4" : "",
        "application" : [ 
            "web-ss#5c880a141fa32be5015ac121"
        ]
    },
    {
        "_id" : "SS_APP_5c880a141fa32be5015ac122_GROUPPRODUCTIVITY",
        "id" : "SS_APP_5c880a141fa32be5015ac122_GROUPPRODUCTIVITY",
        "title" : "Group Productivity",
        "category" : 2.0,
        "icon" : "fa-file-text-o",
        "parentid" : "",
        "url" : "#",
        "index" : -0.5,
        "group1" : "",
        "group2" : "",
        "group3" : "",
        "enable" : true,
        "specialaccess1" : "",
        "specialaccess2" : "",
        "specialaccess3" : "",
        "specialaccess4" : "",
        "application" : [ 
            "web-ss#5c880a141fa32be5015ac122"
        ]
    },
    {
        "_id" : "SS_APP_5c880a141fa32be5015ac123_GROUPPRODUCTIVITY",
        "id" : "SS_APP_5c880a141fa32be5015ac123_GROUPPRODUCTIVITY",
        "title" : "Group Productivity",
        "category" : 2.0,
        "icon" : "fa-file-text-o",
        "parentid" : "",
        "url" : "#",
        "index" : -0.5,
        "group1" : "",
        "group2" : "",
        "group3" : "",
        "enable" : true,
        "specialaccess1" : "",
        "specialaccess2" : "",
        "specialaccess3" : "",
        "specialaccess4" : "",
        "application" : [ 
            "web-ss#5c880a141fa32be5015ac123"
        ]
    },
    {
        "_id" : "SS_APP_5c880a141fa32be5015ac124_GROUPPRODUCTIVITY",
        "id" : "SS_APP_5c880a141fa32be5015ac124_GROUPPRODUCTIVITY",
        "title" : "Group Productivity",
        "category" : 2.0,
        "icon" : "fa-file-text-o",
        "parentid" : "",
        "url" : "#",
        "index" : -0.5,
        "group1" : "",
        "group2" : "",
        "group3" : "",
        "enable" : true,
        "specialaccess1" : "",
        "specialaccess2" : "",
        "specialaccess3" : "",
        "specialaccess4" : "",
        "application" : [ 
            "web-ss#5c880a141fa32be5015ac124"
        ]
    },
    {
        "_id" : "SS_APP_5c880a131fa32be5015ac11f_GROUPPRODUCTIVITY",
        "id" : "SS_APP_5c880a131fa32be5015ac11f_GROUPPRODUCTIVITY",
        "title" : "Group Productivity",
        "category" : 2,
        "icon" : "fa-file-text-o",
        "parentid" : "",
        "url" : "#",
        "index" : -0.5,
        "group1" : "",
        "group2" : "",
        "group3" : "",
        "enable" : true,
        "specialaccess1" : "",
        "specialaccess2" : "",
        "specialaccess3" : "",
        "specialaccess4" : "",
        "application" : [ 
            "web-ss#5c880a131fa32be5015ac11f"
        ]
    },
    {
        "_id" : "SS_APP_5c880a131fa32be5015ac11f_GPSCORECARD",
        "id" : "SS_APP_5c880a131fa32be5015ac11f_GPSCORECARD",
        "title" : "Scorecard",
        "category" : 2,
        "icon" : "",
        "parentid" : "",
        "url" : "/modules/default?key=88fd3aaca8e5c2094dc7af0d4afaf2b2e70f47a738c2db69643929cb2650f01462af0b15982ac6ac2a3e7c4ea0c883978d7384f2465f0478c44b81f15e887fc2",
        "index" : 0,
        "group1" : "",
        "group2" : "",
        "group3" : "",
        "enable" : true,
        "specialaccess1" : "",
        "specialaccess2" : "",
        "specialaccess3" : "",
        "specialaccess4" : "",
        "application" : [ 
            "web-ss#5c880a131fa32be5015ac11f"
        ]
    },
    {
        "_id" : "SS_APP_5c880a131fa32be5015ac11f_GPINITIATIVE",
        "id" : "SS_APP_5c880a131fa32be5015ac11f_GPINITIATIVE",
        "title" : "Initiatives",
        "category" : 2,
        "icon" : "",
        "parentid" : "",
        "url" : "/modules/default?key=5ab43f07d1b74b295d0068dbd231fc9bab151e76707af86e31ba4a9fb55f286b1b7a3bc04c2207e42daef74cc5bb1d21c78d44732ee30abb693409afdd31163570",
        "index" : 0,
        "group1" : "",
        "group2" : "",
        "group3" : "",
        "enable" : true,
        "specialaccess1" : "",
        "specialaccess2" : "",
        "specialaccess3" : "",
        "specialaccess4" : "",
        "application" : [ 
            "web-ss#5c880a131fa32be5015ac11f"
        ]
    },
    {
        "_id" : "SS_APP_5c880a131fa32be5015ac11f_GPSHAPEOFCHANGE",
        "id" : "SS_APP_5c880a131fa32be5015ac11f_GPSHAPEOFCHANGE",
        "title" : "Scorecard & Initiatives",
        "category" : 2,
        "icon" : "",
        "parentid" : "",
        "url" : "/modules/default?key=8d41956da4933e91dd53f773740f770c5190fd1b106063b3848281be8d50d9937cb3cfb8535482fecb2ce6bf062ea9f7a742af8ae053bef1f10314088bd70d23ffe53f59",
        "index" : 0,
        "group1" : "",
        "group2" : "",
        "group3" : "",
        "enable" : true,
        "specialaccess1" : "",
        "specialaccess2" : "",
        "specialaccess3" : "",
        "specialaccess4" : "",
        "application" : [ 
            "web-ss#5c880a131fa32be5015ac11f"
        ]
    },
    {
        "_id" : "SS_APP_5c880a131fa32be5015ac11f_GPSTAKEHOLDERDASHBOAORD",
        "id" : "SS_APP_5c880a131fa32be5015ac11f_GPSTAKEHOLDERDASHBOAORD",
        "title" : "Scorecard & Initiatives",
        "category" : 2,
        "icon" : "",
        "parentid" : "",
        "url" : "/modules/default?key=7d3dfca3b7ad9455931956fcfe73f2e5ba857c75ebafc422a8884b3d8418a887734acf1afa43bd73785d7aae399628a47d7527eeebab9c34332598dcdb625da696aef5635fa0674923",
        "index" : 0,
        "group1" : "",
        "group2" : "",
        "group3" : "",
        "enable" : true,
        "specialaccess1" : "",
        "specialaccess2" : "",
        "specialaccess3" : "",
        "specialaccess4" : "",
        "application" : [ 
            "web-ss#5c880a131fa32be5015ac11f"
        ]
    },
    {
        "_id" : "SS_APP_5c880a141fa32be5015ac120_GROUPPRODUCTIVITY",
        "id" : "SS_APP_5c880a141fa32be5015ac120_GROUPPRODUCTIVITY",
        "title" : "Group Productivity",
        "category" : 2,
        "icon" : "fa-file-text-o",
        "parentid" : "",
        "url" : "#",
        "index" : -0.5,
        "group1" : "",
        "group2" : "",
        "group3" : "",
        "enable" : true,
        "specialaccess1" : "",
        "specialaccess2" : "",
        "specialaccess3" : "",
        "specialaccess4" : "",
        "application" : [ 
            "web-ss#5c880a141fa32be5015ac120"
        ]
    },
    {
        "_id" : "SS_APP_5c880a141fa32be5015ac120_GPSCORECARD",
        "id" : "SS_APP_5c880a141fa32be5015ac120_GPSCORECARD",
        "title" : "Scorecard",
        "category" : 2,
        "icon" : "",
        "parentid" : "",
        "url" : "/modules/default?key=fbacc53352380009c34ab83a5993df4fc97a5cdff1d916bd71da5b0739737c89c8cc70493b1be3350a1dffa4a4e81cecb395398107f07cd5e5d30d5ce66eae6c",
        "index" : 0,
        "group1" : "",
        "group2" : "",
        "group3" : "",
        "enable" : true,
        "specialaccess1" : "",
        "specialaccess2" : "",
        "specialaccess3" : "",
        "specialaccess4" : "",
        "application" : [ 
            "web-ss#5c880a141fa32be5015ac120"
        ]
    },
    {
        "_id" : "SS_APP_5c880a141fa32be5015ac120_GPINITIATIVE",
        "id" : "SS_APP_5c880a141fa32be5015ac120_GPINITIATIVE",
        "title" : "Initiatives",
        "category" : 2,
        "icon" : "",
        "parentid" : "",
        "url" : "/modules/default?key=f0b0aeaf929310f96eb3c59abf95d478723f1494f19ec9330982767428c2a0bde17ad5612c27f98ad6ef0c4269d81cad12c097867b0a999aba49131bcdda8be1d0",
        "index" : 0,
        "group1" : "",
        "group2" : "",
        "group3" : "",
        "enable" : true,
        "specialaccess1" : "",
        "specialaccess2" : "",
        "specialaccess3" : "",
        "specialaccess4" : "",
        "application" : [ 
            "web-ss#5c880a141fa32be5015ac120"
        ]
    },
    {
        "_id" : "SS_APP_5c880a141fa32be5015ac120_GPSHAPEOFCHANGE",
        "id" : "SS_APP_5c880a141fa32be5015ac120_GPSHAPEOFCHANGE",
        "title" : "Scorecard & Initiatives",
        "category" : 2,
        "icon" : "",
        "parentid" : "",
        "url" : "/modules/default?key=fac58f146d42048730e525fb964a5d5ca8d0cd674db769636f5f4837d97647305dd0c1e5cba4e0e63f289db42df95bf14c27b44cc2c67040d0d6e9dd70d7ad9884e29b97",
        "index" : 0,
        "group1" : "",
        "group2" : "",
        "group3" : "",
        "enable" : true,
        "specialaccess1" : "",
        "specialaccess2" : "",
        "specialaccess3" : "",
        "specialaccess4" : "",
        "application" : [ 
            "web-ss#5c880a141fa32be5015ac120"
        ]
    },
    {
        "_id" : "SS_APP_5c880a141fa32be5015ac120_GPSTAKEHOLDERDASHBOAORD",
        "id" : "SS_APP_5c880a141fa32be5015ac120_GPSTAKEHOLDERDASHBOAORD",
        "title" : "Scorecard & Initiatives",
        "category" : 2,
        "icon" : "",
        "parentid" : "",
        "url" : "/modules/default?key=79233a7b9ea0dd86c2413e73cad88b10e0be842ab8dca334429b92c5731b1bf655241a24dd7f3020b41d4c06d621da717515b513f2ef791a36982f0089799debf786492514e5065b95",
        "index" : 0,
        "group1" : "",
        "group2" : "",
        "group3" : "",
        "enable" : true,
        "specialaccess1" : "",
        "specialaccess2" : "",
        "specialaccess3" : "",
        "specialaccess4" : "",
        "application" : [ 
            "web-ss#5c880a141fa32be5015ac120"
        ]
    },
    {
        "_id" : "SS_APP_5c880a141fa32be5015ac121_GROUPPRODUCTIVITY",
        "id" : "SS_APP_5c880a141fa32be5015ac121_GROUPPRODUCTIVITY",
        "title" : "Group Productivity",
        "category" : 2,
        "icon" : "fa-file-text-o",
        "parentid" : "",
        "url" : "#",
        "index" : -0.5,
        "group1" : "",
        "group2" : "",
        "group3" : "",
        "enable" : true,
        "specialaccess1" : "",
        "specialaccess2" : "",
        "specialaccess3" : "",
        "specialaccess4" : "",
        "application" : [ 
            "web-ss#5c880a141fa32be5015ac121"
        ]
    },
    {
        "_id" : "SS_APP_5c880a141fa32be5015ac121_GPSCORECARD",
        "id" : "SS_APP_5c880a141fa32be5015ac121_GPSCORECARD",
        "title" : "Scorecard",
        "category" : 2,
        "icon" : "",
        "parentid" : "",
        "url" : "/modules/default?key=af80317ef5bf96112ab5ebd805a910d3c756a4da4ddc56ed52a46552dfc7ce26e618ba2aef8cedfd9a934da7c5075046e551cf035c2ed7117b60f7fa749cf8a8",
        "index" : 0,
        "group1" : "",
        "group2" : "",
        "group3" : "",
        "enable" : true,
        "specialaccess1" : "",
        "specialaccess2" : "",
        "specialaccess3" : "",
        "specialaccess4" : "",
        "application" : [ 
            "web-ss#5c880a141fa32be5015ac121"
        ]
    },
    {
        "_id" : "SS_APP_5c880a141fa32be5015ac121_GPINITIATIVE",
        "id" : "SS_APP_5c880a141fa32be5015ac121_GPINITIATIVE",
        "title" : "Initiatives",
        "category" : 2,
        "icon" : "",
        "parentid" : "",
        "url" : "/modules/default?key=c8c272af78bf098bc38e5034b6dce01cdd2f02e8363c968a9cdb2280734e0acf62070593e17aa806c074100594aa3a5cc4f7bad7ba7e5fafe917ad4eb5bdf8f559",
        "index" : 0,
        "group1" : "",
        "group2" : "",
        "group3" : "",
        "enable" : true,
        "specialaccess1" : "",
        "specialaccess2" : "",
        "specialaccess3" : "",
        "specialaccess4" : "",
        "application" : [ 
            "web-ss#5c880a141fa32be5015ac121"
        ]
    },
    {
        "_id" : "SS_APP_5c880a141fa32be5015ac121_GPSHAPEOFCHANGE",
        "id" : "SS_APP_5c880a141fa32be5015ac121_GPSHAPEOFCHANGE",
        "title" : "Scorecard & Initiatives",
        "category" : 2,
        "icon" : "",
        "parentid" : "",
        "url" : "/modules/default?key=133f30ae6964adbac88b45d0ff4d894a87ffc6f60bfa54270f50a9b4ee39a988a8b9e06b632b3469342be0d719a9aef07d316c2668aa810873137a464cadcb83534f4fbe",
        "index" : 0,
        "group1" : "",
        "group2" : "",
        "group3" : "",
        "enable" : true,
        "specialaccess1" : "",
        "specialaccess2" : "",
        "specialaccess3" : "",
        "specialaccess4" : "",
        "application" : [ 
            "web-ss#5c880a141fa32be5015ac121"
        ]
    },
    {
        "_id" : "SS_APP_5c880a141fa32be5015ac121_GPSTAKEHOLDERDASHBOAORD",
        "id" : "SS_APP_5c880a141fa32be5015ac121_GPSTAKEHOLDERDASHBOAORD",
        "title" : "Scorecard & Initiatives",
        "category" : 2,
        "icon" : "",
        "parentid" : "",
        "url" : "/modules/default?key=0807885417f73fd3af279e93f3bb1b53744433f2e70ad2528413fb36a1b93e29df4b74b3d828c5911fcee46d1798f9b9758218cea19c8354f56081eb8742a49423deb15553836910bc",
        "index" : 0,
        "group1" : "",
        "group2" : "",
        "group3" : "",
        "enable" : true,
        "specialaccess1" : "",
        "specialaccess2" : "",
        "specialaccess3" : "",
        "specialaccess4" : "",
        "application" : [ 
            "web-ss#5c880a141fa32be5015ac121"
        ]
    },
    {
        "_id" : "SS_APP_5c880a141fa32be5015ac122_GROUPPRODUCTIVITY",
        "id" : "SS_APP_5c880a141fa32be5015ac122_GROUPPRODUCTIVITY",
        "title" : "Group Productivity",
        "category" : 2,
        "icon" : "fa-file-text-o",
        "parentid" : "",
        "url" : "#",
        "index" : -0.5,
        "group1" : "",
        "group2" : "",
        "group3" : "",
        "enable" : true,
        "specialaccess1" : "",
        "specialaccess2" : "",
        "specialaccess3" : "",
        "specialaccess4" : "",
        "application" : [ 
            "web-ss#5c880a141fa32be5015ac122"
        ]
    },
    {
        "_id" : "SS_APP_5c880a141fa32be5015ac122_GPSCORECARD",
        "id" : "SS_APP_5c880a141fa32be5015ac122_GPSCORECARD",
        "title" : "Scorecard",
        "category" : 2,
        "icon" : "",
        "parentid" : "",
        "url" : "/modules/default?key=ceb488afe6938b179cca67778848d099c520fec66b31a0cbdb4e6bcaed711871105a05b3cb10b048cfc092fe49e3ab42a511dd1f6cf3a851e4786b19947e3447",
        "index" : 0,
        "group1" : "",
        "group2" : "",
        "group3" : "",
        "enable" : true,
        "specialaccess1" : "",
        "specialaccess2" : "",
        "specialaccess3" : "",
        "specialaccess4" : "",
        "application" : [ 
            "web-ss#5c880a141fa32be5015ac122"
        ]
    },
    {
        "_id" : "SS_APP_5c880a141fa32be5015ac122_GPINITIATIVE",
        "id" : "SS_APP_5c880a141fa32be5015ac122_GPINITIATIVE",
        "title" : "Initiatives",
        "category" : 2,
        "icon" : "",
        "parentid" : "",
        "url" : "/modules/default?key=cc36f892d3c439a7c4873fe4e307ca0fa5addecabba1cac562c2922637dba683e886547b03d6efa7f0b08e73551f9eb90a602f4becd529e233cf4264c77586604c",
        "index" : 0,
        "group1" : "",
        "group2" : "",
        "group3" : "",
        "enable" : true,
        "specialaccess1" : "",
        "specialaccess2" : "",
        "specialaccess3" : "",
        "specialaccess4" : "",
        "application" : [ 
            "web-ss#5c880a141fa32be5015ac122"
        ]
    },
    {
        "_id" : "SS_APP_5c880a141fa32be5015ac122_GPSHAPEOFCHANGE",
        "id" : "SS_APP_5c880a141fa32be5015ac122_GPSHAPEOFCHANGE",
        "title" : "Scorecard & Initiatives",
        "category" : 2,
        "icon" : "",
        "parentid" : "",
        "url" : "/modules/default?key=71cdf11539865a921a1fc76abe913cc27cee5f742b0b5de9f6ed656cbef34c204ddb38b266dea5d840f1fbae3aaded8618203c181d49a3fbb81e2b2520c1f0952abb6bbc",
        "index" : 0,
        "group1" : "",
        "group2" : "",
        "group3" : "",
        "enable" : true,
        "specialaccess1" : "",
        "specialaccess2" : "",
        "specialaccess3" : "",
        "specialaccess4" : "",
        "application" : [ 
            "web-ss#5c880a141fa32be5015ac122"
        ]
    },
    {
        "_id" : "SS_APP_5c880a141fa32be5015ac122_GPSTAKEHOLDERDASHBOAORD",
        "id" : "SS_APP_5c880a141fa32be5015ac122_GPSTAKEHOLDERDASHBOAORD",
        "title" : "Scorecard & Initiatives",
        "category" : 2,
        "icon" : "",
        "parentid" : "",
        "url" : "/modules/default?key=95d5b42aa0231287dec876a9cfbf0285b3e38feaa3f1b4af456b76cf7986ee79abf90685da9178515994b166f38f33a390402c1ffccee97850041769d9600ca8262855e6e37d2aeb50",
        "index" : 0,
        "group1" : "",
        "group2" : "",
        "group3" : "",
        "enable" : true,
        "specialaccess1" : "",
        "specialaccess2" : "",
        "specialaccess3" : "",
        "specialaccess4" : "",
        "application" : [ 
            "web-ss#5c880a141fa32be5015ac122"
        ]
    },
    {
        "_id" : "SS_APP_5c880a141fa32be5015ac123_GROUPPRODUCTIVITY",
        "id" : "SS_APP_5c880a141fa32be5015ac123_GROUPPRODUCTIVITY",
        "title" : "Group Productivity",
        "category" : 2,
        "icon" : "fa-file-text-o",
        "parentid" : "",
        "url" : "#",
        "index" : -0.5,
        "group1" : "",
        "group2" : "",
        "group3" : "",
        "enable" : true,
        "specialaccess1" : "",
        "specialaccess2" : "",
        "specialaccess3" : "",
        "specialaccess4" : "",
        "application" : [ 
            "web-ss#5c880a141fa32be5015ac123"
        ]
    },
    {
        "_id" : "SS_APP_5c880a141fa32be5015ac123_GPSCORECARD",
        "id" : "SS_APP_5c880a141fa32be5015ac123_GPSCORECARD",
        "title" : "Scorecard",
        "category" : 2,
        "icon" : "",
        "parentid" : "",
        "url" : "/modules/default?key=bf6f44bd7422f7e1e1e22b4f2f0f01924a6d2061c9df1278a29115caf6738f7d8274da2b564e412048828610393c4726c586ad6b4b54dd9731c6e3a0be4445a3",
        "index" : 0,
        "group1" : "",
        "group2" : "",
        "group3" : "",
        "enable" : true,
        "specialaccess1" : "",
        "specialaccess2" : "",
        "specialaccess3" : "",
        "specialaccess4" : "",
        "application" : [ 
            "web-ss#5c880a141fa32be5015ac123"
        ]
    },
    {
        "_id" : "SS_APP_5c880a141fa32be5015ac123_GPINITIATIVE",
        "id" : "SS_APP_5c880a141fa32be5015ac123_GPINITIATIVE",
        "title" : "Initiatives",
        "category" : 2,
        "icon" : "",
        "parentid" : "",
        "url" : "/modules/default?key=70e18ef96f2edd03d3a6f9f6ef6d4d0efd9939aa6c34eb62f3562a81589517227496960a3e4ebce1173316e0eb6a136bb604da0e3d84f54df90dc9da49c511799a",
        "index" : 0,
        "group1" : "",
        "group2" : "",
        "group3" : "",
        "enable" : true,
        "specialaccess1" : "",
        "specialaccess2" : "",
        "specialaccess3" : "",
        "specialaccess4" : "",
        "application" : [ 
            "web-ss#5c880a141fa32be5015ac123"
        ]
    },
    {
        "_id" : "SS_APP_5c880a141fa32be5015ac123_GPSHAPEOFCHANGE",
        "id" : "SS_APP_5c880a141fa32be5015ac123_GPSHAPEOFCHANGE",
        "title" : "Scorecard & Initiatives",
        "category" : 2,
        "icon" : "",
        "parentid" : "",
        "url" : "/modules/default?key=d9cd832828dd2616f36771e7581d1e67c5dd6f567379a76a4f0a9ae0cf717528b59d03dc0d95b322c7dbe68d75816b0fbb500639c7f49a51f9f923c197ec43063f82047c",
        "index" : 0,
        "group1" : "",
        "group2" : "",
        "group3" : "",
        "enable" : true,
        "specialaccess1" : "",
        "specialaccess2" : "",
        "specialaccess3" : "",
        "specialaccess4" : "",
        "application" : [ 
            "web-ss#5c880a141fa32be5015ac123"
        ]
    },
    {
        "_id" : "SS_APP_5c880a141fa32be5015ac123_GPSTAKEHOLDERDASHBOAORD",
        "id" : "SS_APP_5c880a141fa32be5015ac123_GPSTAKEHOLDERDASHBOAORD",
        "title" : "Scorecard & Initiatives",
        "category" : 2,
        "icon" : "",
        "parentid" : "",
        "url" : "/modules/default?key=aa1a8ac05205db0565b16a34be2cf766ec3bf8441123a2b7038633066199bfcf2e3b1ae9ab8d50006801de05fbf8197f4abcf018c5a34c9fc20b6c02be9b95d3ace5f2faf97a73302b",
        "index" : 0,
        "group1" : "",
        "group2" : "",
        "group3" : "",
        "enable" : true,
        "specialaccess1" : "",
        "specialaccess2" : "",
        "specialaccess3" : "",
        "specialaccess4" : "",
        "application" : [ 
            "web-ss#5c880a141fa32be5015ac123"
        ]
    },
    {
        "_id" : "SS_APP_5c880a141fa32be5015ac124_GROUPPRODUCTIVITY",
        "id" : "SS_APP_5c880a141fa32be5015ac124_GROUPPRODUCTIVITY",
        "title" : "Group Productivity",
        "category" : 2,
        "icon" : "fa-file-text-o",
        "parentid" : "",
        "url" : "#",
        "index" : -0.5,
        "group1" : "",
        "group2" : "",
        "group3" : "",
        "enable" : true,
        "specialaccess1" : "",
        "specialaccess2" : "",
        "specialaccess3" : "",
        "specialaccess4" : "",
        "application" : [ 
            "web-ss#5c880a141fa32be5015ac124"
        ]
    },
    {
        "_id" : "SS_APP_5c880a141fa32be5015ac124_GPSCORECARD",
        "id" : "SS_APP_5c880a141fa32be5015ac124_GPSCORECARD",
        "title" : "Scorecard",
        "category" : 2,
        "icon" : "",
        "parentid" : "",
        "url" : "/modules/default?key=c5c723570a3952934dc8a631ce38305c4a63e69c10c6326d39574e494488100676493009eec40f14d836df06c84ba4cbc6029d583b99beb99ba3d4ae97f73333",
        "index" : 0,
        "group1" : "",
        "group2" : "",
        "group3" : "",
        "enable" : true,
        "specialaccess1" : "",
        "specialaccess2" : "",
        "specialaccess3" : "",
        "specialaccess4" : "",
        "application" : [ 
            "web-ss#5c880a141fa32be5015ac124"
        ]
    },
    {
        "_id" : "SS_APP_5c880a141fa32be5015ac124_GPINITIATIVE",
        "id" : "SS_APP_5c880a141fa32be5015ac124_GPINITIATIVE",
        "title" : "Initiatives",
        "category" : 2,
        "icon" : "",
        "parentid" : "",
        "url" : "/modules/default?key=13b736cd7073081d5c7c5067d28b2ce4d9a8ec76ca25bb02e374b0d12dbbf87e693770361a875b2a166118c726bd1d6d0a341cd6d2d1c672ae496f5eaa611debb1",
        "index" : 0,
        "group1" : "",
        "group2" : "",
        "group3" : "",
        "enable" : true,
        "specialaccess1" : "",
        "specialaccess2" : "",
        "specialaccess3" : "",
        "specialaccess4" : "",
        "application" : [ 
            "web-ss#5c880a141fa32be5015ac124"
        ]
    },
    {
        "_id" : "SS_APP_5c880a141fa32be5015ac124_GPSHAPEOFCHANGE",
        "id" : "SS_APP_5c880a141fa32be5015ac124_GPSHAPEOFCHANGE",
        "title" : "Scorecard & Initiatives",
        "category" : 2,
        "icon" : "",
        "parentid" : "",
        "url" : "/modules/default?key=330ec80054665178a5e9727945c04ff0831ddb188c91c00c978be829bcdbbd4a68840d5d5abc274adc27339ccdad5bdb94f3b3a41f8623adf51bf043cd366e9f26fce91e",
        "index" : 0,
        "group1" : "",
        "group2" : "",
        "group3" : "",
        "enable" : true,
        "specialaccess1" : "",
        "specialaccess2" : "",
        "specialaccess3" : "",
        "specialaccess4" : "",
        "application" : [ 
            "web-ss#5c880a141fa32be5015ac124"
        ]
    },
    {
        "_id" : "SS_APP_5c880a141fa32be5015ac124_GPSTAKEHOLDERDASHBOAORD",
        "id" : "SS_APP_5c880a141fa32be5015ac124_GPSTAKEHOLDERDASHBOAORD",
        "title" : "Scorecard & Initiatives",
        "category" : 2,
        "icon" : "",
        "parentid" : "",
        "url" : "/modules/default?key=84ccc02c5e00bf4d1a372b151e3d95cfc07e6f2db62e694d1f1916a1645891a31391ee24edfda2ab603e7aeb01fc98fd759ed44ed78a7338e44a76beebd7ddc46efe30ff831e998147",
        "index" : 0,
        "group1" : "",
        "group2" : "",
        "group3" : "",
        "enable" : true,
        "specialaccess1" : "",
        "specialaccess2" : "",
        "specialaccess3" : "",
        "specialaccess4" : "",
        "application" : [ 
            "web-ss#5c880a141fa32be5015ac124"
        ]
    }
]
for(var i in aclaccess){
    db.getSiblingDB(acldatabase).acl_access.save(aclaccess[i])
}

db.getSiblingDB(acldatabase).applications.save({
    "_id" : "web-ss#5c880a131fa32be5015ac11f",
    "Name" : "Risk",
    "LandingURL" : "/dashboard/default"
})

db.getSiblingDB(acldatabase).applications.save({
    "_id" : "web-ss#5c880a141fa32be5015ac120",
    "Name" : "T&I",
    "LandingURL" : "/dashboard/default"
})

db.getSiblingDB(acldatabase).applications.save({
    "_id" : "web-ss#5c880a141fa32be5015ac121",
    "Name" : "Operation",
    "LandingURL" : "/dashboard/default"
})

db.getSiblingDB(acldatabase).applications.save({
    "_id" : "web-ss#5c880a141fa32be5015ac122",
    "Name" : "GIA",
    "LandingURL" : "/dashboard/default"
})

db.getSiblingDB(acldatabase).applications.save({
    "_id" : "web-ss#5c880a141fa32be5015ac123",
    "Name" : "GCFO",
    "LandingURL" : "/dashboard/default"
})

db.getSiblingDB(acldatabase).applications.save({
    "_id" : "web-ss#5c880a141fa32be5015ac124",
    "Name" : "BE",
    "LandingURL" : "/dashboard/default"
})


var arr = ["Risk","T&I","Operation","GIA","GCFO","BE"]
db.getSiblingDB(database).ss_application.find({"name":{$in:arr}}).forEach(function(a){
    var app_id = a._id.str
    var obj = {
        "_id" : "web-ss#"+app_id,
        "Name" : a.name,
        "LandingURL" : "/dashboard/default"
    }
    var group = {
        "_id" : "SS_APP_"+app_id+"_ADMIN",
        "id" : "SS_APP_"+app_id+"_ADMIN",
        "title" : "Group Productivity View",
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
    }
    db.getSiblingDB(acldatabase).acl_groups.save(group)
    db.getSiblingDB(acldatabase).acl_accessibility.remove({"roleid" : group._id})
    db.getSiblingDB(acldatabase).acl_access.find({application:obj._id}).forEach(function(acc){
        var accs = {
            "roleid" : group._id,
            "accessid" : acc._id,
            "title" : acc.title,
            "url" : acc.url,
            "parentid" : "",
            "allowstatus" : true,
            "islandingpage" : false,
            "global" : {
                "create" : false,
                "read" : true,
                "update" : false,
                "delete" : false,
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
        db.getSiblingDB(acldatabase).acl_accessibility.save(accs)
    })
    userlist.forEach(function(x){
      var existing = db.getSiblingDB(acldatabase).acl_users.find({loginid:x,groups:group._id}).toArray()
      print(existing[0])
      if(existing.length==0){
      	var userid = ObjectId().str;
      	var userdata = {
		    "_id" : userid,
		    "id" : userid,
		    "loginid" : x,
		    "fullname" : "Test User "+x,
		    "firstname" : "Test",
		    "lastname" : "User "+x,
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
		}
      	db.getSiblingDB(acldatabase).acl_users.save(userdata)
      }
    })
})
