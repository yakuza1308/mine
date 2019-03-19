var acldatabase = "scbbef-sit";
var database = "scbsssit";
var userlist = [
    {firstname:"Ambreen",lastname:"Hamza",loginid:"1394022"}, 
    {firstname:"Luca",lastname:"Borroni",loginid:"1521647"}, 
    {firstname:"Kalaivani",lastname:"Thiruppathi",loginid:"1548237"}, 
    {firstname:"Storm",lastname:"Dalati",loginid:"1502498"}, 
    {firstname:"Kathiravan",lastname:"Nagalingam",loginid:"1584547"}, 
    {firstname:"Punarvi",lastname:"Karanam",loginid:"1584546"}, 
    {firstname:"Oliver",lastname:"Cheung",loginid:"1426484"}, 
    {firstname:"Mike",lastname:"Humphrey",loginid:"1228317"}, 
    {firstname:"Ryan",lastname:"Angga",loginid:"15722991"}, 
] 
// userlist that available in both apps


// Set Applications Data
for(var i in userlist){
	db.getSiblingDB(acldatabase).acl_users.save({
	    "_id" : "testuser-gp"+i,
	    "id" : "testuser-gp"+i,
	    "loginid" : userlist[i].loginid,
	    "fullname" : [userlist[i].firstname,userlist[i].lastname].join(" "),
	    "firstname" : userlist[i].firstname,
	    "lastname" : userlist[i].lastname,
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
    },
        {
        "_id" : "SS_APP_5c880a131fa32be5015ac11f_CONFIGURATION",
        "id" : "SS_APP_5c880a131fa32be5015ac11f_CONFIGURATION",
        "title" : "Configuration",
        "category" : 2,
        "icon" : "",
        "parentid" : "",
        "url" : "/modules/default?key=284e4ec849c51e91b5e8444f7808e92864336e1df2021d320ae85224085edde43d2d00fd256930b294120d803d7d22a6b6527e31f20bd85f8702f53e8139f73abc83",
        "index" : 4,
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
        "_id" : "SS_APP_5c880a131fa32be5015ac11f_APPLICATIONAUDITTRAIL",
        "id" : "SS_APP_5c880a131fa32be5015ac11f_APPLICATIONAUDITTRAIL",
        "title" : "Application Audit Trail",
        "category" : 5,
        "icon" : "",
        "parentid" : "SS_APP_5c880a131fa32be5015ac11f_CONFIGURATION",
        "url" : "#",
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
        "_id" : "SS_APP_5c880a131fa32be5015ac11f_ROLEMANAGEMENT",
        "id" : "SS_APP_5c880a131fa32be5015ac11f_ROLEMANAGEMENT",
        "title" : "Role Management",
        "category" : 5,
        "icon" : "",
        "parentid" : "SS_APP_5c880a131fa32be5015ac11f_CONFIGURATION",
        "url" : "#",
        "index" : 1,
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
        "_id" : "SS_APP_5c880a131fa32be5015ac11f_USERAUDITTRAIL",
        "id" : "SS_APP_5c880a131fa32be5015ac11f_USERAUDITTRAIL",
        "title" : "User Audit Trail",
        "category" : 5,
        "icon" : "",
        "parentid" : "SS_APP_5c880a131fa32be5015ac11f_CONFIGURATION",
        "url" : "#",
        "index" : 2,
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
        "_id" : "SS_APP_5c880a131fa32be5015ac11f_APPLICATIONUSAGEDETAIL",
        "id" : "SS_APP_5c880a131fa32be5015ac11f_APPLICATIONUSAGEDETAIL",
        "title" : "Application Usage Detail",
        "category" : 5,
        "icon" : "",
        "parentid" : "SS_APP_5c880a131fa32be5015ac11f_CONFIGURATION",
        "url" : "#",
        "index" : 3,
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
        "_id" : "SS_APP_5c880a131fa32be5015ac11f_USERMANAGEMENT",
        "id" : "SS_APP_5c880a131fa32be5015ac11f_USERMANAGEMENT",
        "title" : "User Management",
        "category" : 5,
        "icon" : "",
        "parentid" : "SS_APP_5c880a131fa32be5015ac11f_CONFIGURATION",
        "url" : "#",
        "index" : 4,
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
        "_id" : "SS_APP_5c880a141fa32be5015ac120_CONFIGURATION",
        "id" : "SS_APP_5c880a141fa32be5015ac120_CONFIGURATION",
        "title" : "Configuration",
        "category" : 2,
        "icon" : "",
        "parentid" : "",
        "url" : "/modules/default?key=3b63b440afc1b2a1fd7fe6d13a91a64a5fac1fbc990be48f4b1cbf5c352039df9aecdf105cb12fc8ba0d9bb2fa205ddcd08466aa64e03009ebfd5d69841621e57fa8",
        "index" : 4,
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
        "_id" : "SS_APP_5c880a141fa32be5015ac120_APPLICATIONAUDITTRAIL",
        "id" : "SS_APP_5c880a141fa32be5015ac120_APPLICATIONAUDITTRAIL",
        "title" : "Application Audit Trail",
        "category" : 5,
        "icon" : "",
        "parentid" : "SS_APP_5c880a141fa32be5015ac120_CONFIGURATION",
        "url" : "#",
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
        "_id" : "SS_APP_5c880a141fa32be5015ac120_ROLEMANAGEMENT",
        "id" : "SS_APP_5c880a141fa32be5015ac120_ROLEMANAGEMENT",
        "title" : "Role Management",
        "category" : 5,
        "icon" : "",
        "parentid" : "SS_APP_5c880a141fa32be5015ac120_CONFIGURATION",
        "url" : "#",
        "index" : 1,
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
        "_id" : "SS_APP_5c880a141fa32be5015ac120_USERAUDITTRAIL",
        "id" : "SS_APP_5c880a141fa32be5015ac120_USERAUDITTRAIL",
        "title" : "User Audit Trail",
        "category" : 5,
        "icon" : "",
        "parentid" : "SS_APP_5c880a141fa32be5015ac120_CONFIGURATION",
        "url" : "#",
        "index" : 2,
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
        "_id" : "SS_APP_5c880a141fa32be5015ac120_APPLICATIONUSAGEDETAIL",
        "id" : "SS_APP_5c880a141fa32be5015ac120_APPLICATIONUSAGEDETAIL",
        "title" : "Application Usage Detail",
        "category" : 5,
        "icon" : "",
        "parentid" : "SS_APP_5c880a141fa32be5015ac120_CONFIGURATION",
        "url" : "#",
        "index" : 3,
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
        "_id" : "SS_APP_5c880a141fa32be5015ac120_USERMANAGEMENT",
        "id" : "SS_APP_5c880a141fa32be5015ac120_USERMANAGEMENT",
        "title" : "User Management",
        "category" : 5,
        "icon" : "",
        "parentid" : "SS_APP_5c880a141fa32be5015ac120_CONFIGURATION",
        "url" : "#",
        "index" : 4,
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
        "_id" : "SS_APP_5c880a141fa32be5015ac121_CONFIGURATION",
        "id" : "SS_APP_5c880a141fa32be5015ac121_CONFIGURATION",
        "title" : "Configuration",
        "category" : 2,
        "icon" : "",
        "parentid" : "",
        "url" : "/modules/default?key=c7c8d38be80530738ad84f41f2dc8d51513fa7fd2d2faa569a80310f1deb9460b8de6d29133d889f66a0742e5df51f3e0c245e8fe33f6ae3e71e6e157342d6c3016d",
        "index" : 4,
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
        "_id" : "SS_APP_5c880a141fa32be5015ac121_APPLICATIONAUDITTRAIL",
        "id" : "SS_APP_5c880a141fa32be5015ac121_APPLICATIONAUDITTRAIL",
        "title" : "Application Audit Trail",
        "category" : 5,
        "icon" : "",
        "parentid" : "SS_APP_5c880a141fa32be5015ac121_CONFIGURATION",
        "url" : "#",
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
        "_id" : "SS_APP_5c880a141fa32be5015ac121_ROLEMANAGEMENT",
        "id" : "SS_APP_5c880a141fa32be5015ac121_ROLEMANAGEMENT",
        "title" : "Role Management",
        "category" : 5,
        "icon" : "",
        "parentid" : "SS_APP_5c880a141fa32be5015ac121_CONFIGURATION",
        "url" : "#",
        "index" : 1,
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
        "_id" : "SS_APP_5c880a141fa32be5015ac121_USERAUDITTRAIL",
        "id" : "SS_APP_5c880a141fa32be5015ac121_USERAUDITTRAIL",
        "title" : "User Audit Trail",
        "category" : 5,
        "icon" : "",
        "parentid" : "SS_APP_5c880a141fa32be5015ac121_CONFIGURATION",
        "url" : "#",
        "index" : 2,
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
        "_id" : "SS_APP_5c880a141fa32be5015ac121_APPLICATIONUSAGEDETAIL",
        "id" : "SS_APP_5c880a141fa32be5015ac121_APPLICATIONUSAGEDETAIL",
        "title" : "Application Usage Detail",
        "category" : 5,
        "icon" : "",
        "parentid" : "SS_APP_5c880a141fa32be5015ac121_CONFIGURATION",
        "url" : "#",
        "index" : 3,
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
        "_id" : "SS_APP_5c880a141fa32be5015ac121_USERMANAGEMENT",
        "id" : "SS_APP_5c880a141fa32be5015ac121_USERMANAGEMENT",
        "title" : "User Management",
        "category" : 5,
        "icon" : "",
        "parentid" : "SS_APP_5c880a141fa32be5015ac121_CONFIGURATION",
        "url" : "#",
        "index" : 4,
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
        "_id" : "SS_APP_5c880a141fa32be5015ac122_CONFIGURATION",
        "id" : "SS_APP_5c880a141fa32be5015ac122_CONFIGURATION",
        "title" : "Configuration",
        "category" : 2,
        "icon" : "",
        "parentid" : "",
        "url" : "/modules/default?key=bed7e0262d7f60ba783a48530973f420e1b9ddc8e2f6389b9dc898c9f824c7dfa4fb531f0a5bf24eaf95116bb0fa9c3513863ec2b5a37477bea58ad3ce24484bfecd",
        "index" : 4,
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
        "_id" : "SS_APP_5c880a141fa32be5015ac122_APPLICATIONAUDITTRAIL",
        "id" : "SS_APP_5c880a141fa32be5015ac122_APPLICATIONAUDITTRAIL",
        "title" : "Application Audit Trail",
        "category" : 5,
        "icon" : "",
        "parentid" : "SS_APP_5c880a141fa32be5015ac122_CONFIGURATION",
        "url" : "#",
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
        "_id" : "SS_APP_5c880a141fa32be5015ac122_ROLEMANAGEMENT",
        "id" : "SS_APP_5c880a141fa32be5015ac122_ROLEMANAGEMENT",
        "title" : "Role Management",
        "category" : 5,
        "icon" : "",
        "parentid" : "SS_APP_5c880a141fa32be5015ac122_CONFIGURATION",
        "url" : "#",
        "index" : 1,
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
        "_id" : "SS_APP_5c880a141fa32be5015ac122_USERAUDITTRAIL",
        "id" : "SS_APP_5c880a141fa32be5015ac122_USERAUDITTRAIL",
        "title" : "User Audit Trail",
        "category" : 5,
        "icon" : "",
        "parentid" : "SS_APP_5c880a141fa32be5015ac122_CONFIGURATION",
        "url" : "#",
        "index" : 2,
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
        "_id" : "SS_APP_5c880a141fa32be5015ac122_APPLICATIONUSAGEDETAIL",
        "id" : "SS_APP_5c880a141fa32be5015ac122_APPLICATIONUSAGEDETAIL",
        "title" : "Application Usage Detail",
        "category" : 5,
        "icon" : "",
        "parentid" : "SS_APP_5c880a141fa32be5015ac122_CONFIGURATION",
        "url" : "#",
        "index" : 3,
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
        "_id" : "SS_APP_5c880a141fa32be5015ac122_USERMANAGEMENT",
        "id" : "SS_APP_5c880a141fa32be5015ac122_USERMANAGEMENT",
        "title" : "User Management",
        "category" : 5,
        "icon" : "",
        "parentid" : "SS_APP_5c880a141fa32be5015ac122_CONFIGURATION",
        "url" : "#",
        "index" : 4,
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
        "_id" : "SS_APP_5c880a141fa32be5015ac123_CONFIGURATION",
        "id" : "SS_APP_5c880a141fa32be5015ac123_CONFIGURATION",
        "title" : "Configuration",
        "category" : 2,
        "icon" : "",
        "parentid" : "",
        "url" : "/modules/default?key=acbe8cb01c5551cb1e3ee4812d06c00383f591233ecf6fd25ccf7015861642dd7f66c9c7c2b92cb035a662721857ac9ca1ad52934c25a6fadcb368754e43a193701c",
        "index" : 4,
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
        "_id" : "SS_APP_5c880a141fa32be5015ac123_APPLICATIONAUDITTRAIL",
        "id" : "SS_APP_5c880a141fa32be5015ac123_APPLICATIONAUDITTRAIL",
        "title" : "Application Audit Trail",
        "category" : 5,
        "icon" : "",
        "parentid" : "SS_APP_5c880a141fa32be5015ac123_CONFIGURATION",
        "url" : "#",
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
        "_id" : "SS_APP_5c880a141fa32be5015ac123_ROLEMANAGEMENT",
        "id" : "SS_APP_5c880a141fa32be5015ac123_ROLEMANAGEMENT",
        "title" : "Role Management",
        "category" : 5,
        "icon" : "",
        "parentid" : "SS_APP_5c880a141fa32be5015ac123_CONFIGURATION",
        "url" : "#",
        "index" : 1,
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
        "_id" : "SS_APP_5c880a141fa32be5015ac123_USERAUDITTRAIL",
        "id" : "SS_APP_5c880a141fa32be5015ac123_USERAUDITTRAIL",
        "title" : "User Audit Trail",
        "category" : 5,
        "icon" : "",
        "parentid" : "SS_APP_5c880a141fa32be5015ac123_CONFIGURATION",
        "url" : "#",
        "index" : 2,
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
        "_id" : "SS_APP_5c880a141fa32be5015ac123_APPLICATIONUSAGEDETAIL",
        "id" : "SS_APP_5c880a141fa32be5015ac123_APPLICATIONUSAGEDETAIL",
        "title" : "Application Usage Detail",
        "category" : 5,
        "icon" : "",
        "parentid" : "SS_APP_5c880a141fa32be5015ac123_CONFIGURATION",
        "url" : "#",
        "index" : 3,
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
        "_id" : "SS_APP_5c880a141fa32be5015ac123_USERMANAGEMENT",
        "id" : "SS_APP_5c880a141fa32be5015ac123_USERMANAGEMENT",
        "title" : "User Management",
        "category" : 5,
        "icon" : "",
        "parentid" : "SS_APP_5c880a141fa32be5015ac123_CONFIGURATION",
        "url" : "#",
        "index" : 4,
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
        "_id" : "SS_APP_5c880a141fa32be5015ac124_CONFIGURATION",
        "id" : "SS_APP_5c880a141fa32be5015ac124_CONFIGURATION",
        "title" : "Configuration",
        "category" : 2,
        "icon" : "",
        "parentid" : "",
        "url" : "/modules/default?key=50597c42d49ce48b73348cdf20b2b4ba6f9a2d121cf95643cc2a6cfc0e8b375062462b2592af3d0c450cb6fb95ffd74a10f1aade1d90ccc72229b66d49462a02dc2f",
        "index" : 4,
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
        "_id" : "SS_APP_5c880a141fa32be5015ac124_APPLICATIONAUDITTRAIL",
        "id" : "SS_APP_5c880a141fa32be5015ac124_APPLICATIONAUDITTRAIL",
        "title" : "Application Audit Trail",
        "category" : 5,
        "icon" : "",
        "parentid" : "SS_APP_5c880a141fa32be5015ac124_CONFIGURATION",
        "url" : "#",
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
        "_id" : "SS_APP_5c880a141fa32be5015ac124_ROLEMANAGEMENT",
        "id" : "SS_APP_5c880a141fa32be5015ac124_ROLEMANAGEMENT",
        "title" : "Role Management",
        "category" : 5,
        "icon" : "",
        "parentid" : "SS_APP_5c880a141fa32be5015ac124_CONFIGURATION",
        "url" : "#",
        "index" : 1,
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
        "_id" : "SS_APP_5c880a141fa32be5015ac124_USERAUDITTRAIL",
        "id" : "SS_APP_5c880a141fa32be5015ac124_USERAUDITTRAIL",
        "title" : "User Audit Trail",
        "category" : 5,
        "icon" : "",
        "parentid" : "SS_APP_5c880a141fa32be5015ac124_CONFIGURATION",
        "url" : "#",
        "index" : 2,
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
        "_id" : "SS_APP_5c880a141fa32be5015ac124_APPLICATIONUSAGEDETAIL",
        "id" : "SS_APP_5c880a141fa32be5015ac124_APPLICATIONUSAGEDETAIL",
        "title" : "Application Usage Detail",
        "category" : 5,
        "icon" : "",
        "parentid" : "SS_APP_5c880a141fa32be5015ac124_CONFIGURATION",
        "url" : "#",
        "index" : 3,
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
        "_id" : "SS_APP_5c880a141fa32be5015ac124_USERMANAGEMENT",
        "id" : "SS_APP_5c880a141fa32be5015ac124_USERMANAGEMENT",
        "title" : "User Management",
        "category" : 5,
        "icon" : "",
        "parentid" : "SS_APP_5c880a141fa32be5015ac124_CONFIGURATION",
        "url" : "#",
        "index" : 4,
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
db.getSiblingDB(database).ss_application.save({
    "_id" : ObjectId("5c880a131fa32be5015ac11f"),
    "name" : "Risk",
    "logo" : "",
    "modules" : [ 
        {
            "_id" : "M001",
            "name" : "Scorecard",
            "param_name" : "Scorecard",
            "type" : "core",
            "parent_id" : [],
            "image_src" : "Scorecard.PNG",
            "path" : "scorecardinitiative",
            "seq" : 1
        }, 
        {
            "_id" : "M002",
            "name" : "Initiative",
            "param_name" : "Initiative",
            "type" : "core",
            "parent_id" : [],
            "image_src" : "Initiative.PNG",
            "path" : "scorecardinitiative",
            "seq" : 0
        }, 
        {
            "_id" : "M003",
            "name" : "Country Analysis",
            "param_name" : "CountryAnalysis",
            "type" : "additional",
            "parent_id" : [ 
                "M001"
            ],
            "image_src" : "CountryAnalysis.PNG",
            "path" : "scorecardinitiative",
            "seq" : 0
        }, 
        {
            "_id" : "M004",
            "name" : "Metric Drivers",
            "param_name" : "MetricDrivers",
            "type" : "additional",
            "parent_id" : [ 
                "M001", 
                "M002"
            ],
            "image_src" : "MetricDrivers.PNG",
            "path" : "scorecardinitiative",
            "seq" : 0
        }, 
        {
            "_id" : "M005",
            "name" : "Metric Analysis",
            "param_name" : "MetricAnalysis",
            "type" : "additional",
            "parent_id" : [ 
                "M001"
            ],
            "image_src" : "MetricAnalysis.PNG",
            "path" : "scorecardinitiative",
            "seq" : 0
        }, 
        {
            "_id" : "M006",
            "name" : "Adoption Module",
            "param_name" : "AdoptionModule",
            "type" : "additional",
            "parent_id" : [ 
                "M002"
            ],
            "image_src" : "Adoption.PNG",
            "path" : "adoptionmodule",
            "seq" : 8
        }, 
        {
            "_id" : "M007",
            "name" : "Metric Validation",
            "param_name" : "StagingArea",
            "type" : "dependency",
            "parent_id" : [ 
                "M001"
            ],
            "image_src" : "",
            "path" : "metricvalidation",
            "seq" : 5
        }, 
        {
            "_id" : "M008",
            "name" : "Initiative",
            "param_name" : "Initiative",
            "type" : "tabular_dependency",
            "parent_id" : [ 
                "M001"
            ],
            "image_src" : "",
            "path" : "scorecardinitiative",
            "seq" : 0
        }, 
        {
            "_id" : "M009",
            "name" : "Scorecard",
            "param_name" : "Scorecard",
            "type" : "tabular_dependency",
            "parent_id" : [ 
                "M001"
            ],
            "image_src" : "",
            "path" : "scorecardinitiative",
            "seq" : 0
        }, 
        {
            "_id" : "M010",
            "name" : "Shared Agenda",
            "param_name" : "SharedAgenda",
            "type" : "tabular_dependency",
            "parent_id" : [ 
                "M001"
            ],
            "image_src" : "",
            "path" : "scorecardinitiative",
            "seq" : 0
        }, 
        {
            "_id" : "M011",
            "name" : "Metric Country Analysis",
            "param_name" : "CountryAnalysis",
            "type" : "tabular_dependency",
            "parent_id" : [ 
                "M001"
            ],
            "image_src" : "",
            "path" : "scorecardinitiative",
            "seq" : 0
        }, 
        {
            "_id" : "M015",
            "name" : "Metric Upload",
            "param_name" : "MetricUpload",
            "type" : "dependency",
            "parent_id" : [ 
                "M001"
            ],
            "image_src" : "",
            "path" : "metricupload",
            "seq" : 7
        }, 
        {
            "_id" : "M017",
            "name" : "Overview",
            "param_name" : "Overview",
            "type" : "dependency",
            "parent_id" : [ 
                "M001", 
                "M002"
            ],
            "image_src" : "",
            "path" : "overview",
            "seq" : 6
        }, 
        {
            "_id" : "M023",
            "name" : "Clarity Staging",
            "param_name" : "InitiativeStaging",
            "type" : "dependency",
            "parent_id" : [ 
                "M001", 
                "M002"
            ],
            "image_src" : "",
            "path" : "initiativestaging",
            "seq" : 9
        }, 
        {
            "_id" : "M012",
            "name" : "Bef Sponsor",
            "param_name" : "BefSponsor",
            "type" : "dependency",
            "parent_id" : [ 
                "M002"
            ],
            "image_src" : "",
            "path" : "befsponsor",
            "seq" : 3
        }, 
        {
            "_id" : "M013",
            "name" : "Initiative Master",
            "param_name" : "InitiativeMaster",
            "type" : "dependency",
            "parent_id" : [ 
                "M002"
            ],
            "image_src" : "",
            "path" : "initiativemaster",
            "seq" : 2
        }, 
        {
            "_id" : "M016",
            "name" : "Configuration",
            "param_name" : "Configuration",
            "type" : "primary",
            "parent_id" : [],
            "image_src" : "",
            "path" : "configuration",
            "seq" : 6
        }, 
        {
            "_id" : "M018",
            "name" : "Application Audit Trail",
            "param_name" : "ApplicationAuditTrail",
            "type" : "tabular_primary",
            "parent_id" : [ 
                "M016"
            ],
            "image_src" : "",
            "path" : "configuration",
            "seq" : 0
        }, 
        {
            "_id" : "M019",
            "name" : "Role Management",
            "param_name" : "RoleManagement",
            "type" : "tabular_primary",
            "parent_id" : [ 
                "M016"
            ],
            "image_src" : "",
            "path" : "configuration",
            "seq" : 0
        }, 
        {
            "_id" : "M020",
            "name" : "User Audit Trail",
            "param_name" : "UserAuditTrail",
            "type" : "tabular_primary",
            "parent_id" : [ 
                "M016"
            ],
            "image_src" : "",
            "path" : "configuration",
            "seq" : 0
        }, 
        {
            "_id" : "M021",
            "name" : "Application Usage Detail",
            "param_name" : "ApplicationUsageDetail",
            "type" : "tabular_primary",
            "parent_id" : [ 
                "M016"
            ],
            "image_src" : "",
            "path" : "configuration",
            "seq" : 0
        }, 
        {
            "_id" : "M022",
            "name" : "User Management",
            "param_name" : "UserManagement",
            "type" : "tabular_primary",
            "parent_id" : [ 
                "M016"
            ],
            "image_src" : "",
            "path" : "configuration",
            "seq" : 0
        }
    ],
    "geography" : [ 
        {
            "_id" : ObjectId("5b7bb3ac48a002582424e97f"),
            "country" : "ANGOLA",
            "country_abbreviation" : "AO",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ac48a002582424e980"),
            "country" : "ARGENTINA",
            "country_abbreviation" : "AR",
            "region" : "Europe & Americas",
            "region_abbreviation" : "",
            "region_cluster" : "Europe & Americas",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ac48a002582424e981"),
            "country" : "AUSTRALIA",
            "country_abbreviation" : "AU",
            "region" : "ASA",
            "region_abbreviation" : "",
            "region_cluster" : "ASA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ac48a002582424e982"),
            "country" : "BAHRAIN",
            "country_abbreviation" : "BH",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ac48a002582424e983"),
            "country" : "BAHAMAS",
            "country_abbreviation" : "BS",
            "region" : "Europe & Americas",
            "region_abbreviation" : "",
            "region_cluster" : "Europe & Americas",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ac48a002582424e984"),
            "country" : "BANGLADESH",
            "country_abbreviation" : "BD",
            "region" : "ASA",
            "region_abbreviation" : "",
            "region_cluster" : "ASA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ac48a002582424e985"),
            "country" : "BOTSWANA",
            "country_abbreviation" : "BW",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ac48a002582424e986"),
            "country" : "BRAZIL",
            "country_abbreviation" : "BR",
            "region" : "Europe & Americas",
            "region_abbreviation" : "",
            "region_cluster" : "Europe & Americas",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ac48a002582424e987"),
            "country" : "BRUNEI",
            "country_abbreviation" : "BN",
            "region" : "ASA",
            "region_abbreviation" : "",
            "region_cluster" : "ASA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ac48a002582424e988"),
            "country" : "CAMBODIA",
            "country_abbreviation" : "KH",
            "region" : "ASA",
            "region_abbreviation" : "",
            "region_cluster" : "ASA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ac48a002582424e989"),
            "country" : "CAMEROON",
            "country_abbreviation" : "CM",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ac48a002582424e98a"),
            "country" : "CHINA",
            "country_abbreviation" : "CN",
            "region" : "GCNA",
            "region_abbreviation" : "",
            "region_cluster" : "GCNA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ac48a002582424e98b"),
            "country" : "COLOMBIA",
            "country_abbreviation" : "CO",
            "region" : "Europe & Americas",
            "region_abbreviation" : "",
            "region_cluster" : "Europe & Americas",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ac48a002582424e98c"),
            "country" : "COTE D'IVOIRE",
            "country_abbreviation" : "CI",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ac48a002582424e98d"),
            "country" : "EGYPT",
            "country_abbreviation" : "EG",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ac48a002582424e98e"),
            "country" : "FALKLAND ISLANDS",
            "country_abbreviation" : "FK",
            "region" : "Europe & Americas",
            "region_abbreviation" : "",
            "region_cluster" : "Europe & Americas",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ac48a002582424e98f"),
            "country" : "FRANCE",
            "country_abbreviation" : "FR",
            "region" : "Europe & Americas",
            "region_abbreviation" : "",
            "region_cluster" : "Europe & Americas",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e990"),
            "country" : "GAMBIA",
            "country_abbreviation" : "GM",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e991"),
            "country" : "GERMANY",
            "country_abbreviation" : "DE",
            "region" : "Europe & Americas",
            "region_abbreviation" : "",
            "region_cluster" : "Europe & Americas",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e992"),
            "country" : "GHANA",
            "country_abbreviation" : "GH",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e993"),
            "country" : "GUERNSEY",
            "country_abbreviation" : "GG",
            "region" : "Europe & Americas",
            "region_abbreviation" : "",
            "region_cluster" : "Europe & Americas",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e994"),
            "country" : "HONG KONG",
            "country_abbreviation" : "HK",
            "region" : "GCNA",
            "region_abbreviation" : "",
            "region_cluster" : "GCNA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e995"),
            "country" : "INDIA",
            "country_abbreviation" : "IN",
            "region" : "ASA",
            "region_abbreviation" : "",
            "region_cluster" : "ASA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e996"),
            "country" : "INDONESIA",
            "country_abbreviation" : "ID",
            "region" : "ASA",
            "region_abbreviation" : "",
            "region_cluster" : "ASA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e997"),
            "country" : "IRAQ",
            "country_abbreviation" : "IQ",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e998"),
            "country" : "IRELAND",
            "country_abbreviation" : "IE",
            "region" : "Europe & Americas",
            "region_abbreviation" : "",
            "region_cluster" : "Europe & Americas",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e999"),
            "country" : "JAPAN",
            "country_abbreviation" : "JP",
            "region" : "GCNA",
            "region_abbreviation" : "",
            "region_cluster" : "GCNA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e99a"),
            "country" : "JERSEY",
            "country_abbreviation" : "JE",
            "region" : "Europe & Americas",
            "region_abbreviation" : "",
            "region_cluster" : "Europe & Americas",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e99b"),
            "country" : "JORDAN",
            "country_abbreviation" : "JO",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e99c"),
            "country" : "KENYA",
            "country_abbreviation" : "KE",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e99d"),
            "country" : "SOUTH KOREA",
            "country_abbreviation" : "KR",
            "region" : "GCNA",
            "region_abbreviation" : "",
            "region_cluster" : "GCNA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e99e"),
            "country" : "LAOS",
            "country_abbreviation" : "LA",
            "region" : "ASA",
            "region_abbreviation" : "",
            "region_cluster" : "ASA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e99f"),
            "country" : "LEBANON",
            "country_abbreviation" : "LB",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9a0"),
            "country" : "LUXEMBOURG",
            "country_abbreviation" : "LU",
            "region" : "Europe & Americas",
            "region_abbreviation" : "",
            "region_cluster" : "Europe & Americas",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9a1"),
            "country" : "MACAU",
            "country_abbreviation" : "MO",
            "region" : "GCNA",
            "region_abbreviation" : "",
            "region_cluster" : "GCNA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9a2"),
            "country" : "MALAYSIA",
            "country_abbreviation" : "MY",
            "region" : "ASA",
            "region_abbreviation" : "",
            "region_cluster" : "ASA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9a3"),
            "country" : "MAURITIUS",
            "country_abbreviation" : "MU",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9a4"),
            "country" : "MYANMAR",
            "country_abbreviation" : "MM",
            "region" : "ASA",
            "region_abbreviation" : "",
            "region_cluster" : "ASA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9a5"),
            "country" : "NEPAL",
            "country_abbreviation" : "NP",
            "region" : "ASA",
            "region_abbreviation" : "",
            "region_cluster" : "ASA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9a6"),
            "country" : "NIGERIA",
            "country_abbreviation" : "NG",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9a7"),
            "country" : "OMAN",
            "country_abbreviation" : "OM",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9a8"),
            "country" : "PAKISTAN",
            "country_abbreviation" : "PK",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9a9"),
            "country" : "PHILIPPINES",
            "country_abbreviation" : "PH",
            "region" : "ASA",
            "region_abbreviation" : "",
            "region_cluster" : "ASA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9aa"),
            "country" : "QATAR",
            "country_abbreviation" : "QA",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9ab"),
            "country" : "SAUDI ARABIA",
            "country_abbreviation" : "SA",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9ac"),
            "country" : "SIERRA LEONE",
            "country_abbreviation" : "SL",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9ad"),
            "country" : "SINGAPORE",
            "country_abbreviation" : "SG",
            "region" : "ASA",
            "region_abbreviation" : "",
            "region_cluster" : "ASA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9ae"),
            "country" : "SOUTH AFRICA",
            "country_abbreviation" : "ZA",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9af"),
            "country" : "SRI LANKA",
            "country_abbreviation" : "LK",
            "region" : "ASA",
            "region_abbreviation" : "",
            "region_cluster" : "ASA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9b0"),
            "country" : "SWEDEN",
            "country_abbreviation" : "SE",
            "region" : "Europe & Americas",
            "region_abbreviation" : "",
            "region_cluster" : "Europe & Americas",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9b1"),
            "country" : "SWITZERLAND",
            "country_abbreviation" : "CH",
            "region" : "Europe & Americas",
            "region_abbreviation" : "",
            "region_cluster" : "Europe & Americas",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9b2"),
            "country" : "TAIPEI BRANCH",
            "country_abbreviation" : "TPB",
            "region" : "GCNA",
            "region_abbreviation" : "",
            "region_cluster" : "GCNA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9b3"),
            "country" : "TAIWAN",
            "country_abbreviation" : "TW",
            "region" : "GCNA",
            "region_abbreviation" : "",
            "region_cluster" : "GCNA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9b4"),
            "country" : "TANZANIA",
            "country_abbreviation" : "TZ",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9b5"),
            "country" : "THAILAND",
            "country_abbreviation" : "TH",
            "region" : "ASA",
            "region_abbreviation" : "",
            "region_cluster" : "ASA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9b6"),
            "country" : "TURKEY",
            "country_abbreviation" : "TR",
            "region" : "Europe & Americas",
            "region_abbreviation" : "",
            "region_cluster" : "Europe & Americas",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9b7"),
            "country" : "UNITED ARAB EMIRATES",
            "country_abbreviation" : "AE",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9b8"),
            "country" : "UGANDA",
            "country_abbreviation" : "UG",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9b9"),
            "country" : "UNITED KINGDOM",
            "country_abbreviation" : "GB",
            "region" : "Europe & Americas",
            "region_abbreviation" : "",
            "region_cluster" : "Europe & Americas",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9ba"),
            "country" : "UNITED STATES",
            "country_abbreviation" : "US",
            "region" : "Europe & Americas",
            "region_abbreviation" : "",
            "region_cluster" : "Europe & Americas",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9bb"),
            "country" : "VIETNAM",
            "country_abbreviation" : "VN",
            "region" : "ASA",
            "region_abbreviation" : "",
            "region_cluster" : "ASA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9bc"),
            "country" : "ZAMBIA",
            "country_abbreviation" : "ZM",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9bd"),
            "country" : "ZIMBABWE",
            "country_abbreviation" : "ZW",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9be"),
            "country" : "GROUP",
            "country_abbreviation" : "GRPCOUNTRY",
            "region" : "GROUP",
            "region_abbreviation" : "",
            "region_cluster" : "GROUP",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9bf"),
            "country" : "AME REGIONAL TEAM",
            "country_abbreviation" : "AM",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9c0"),
            "country" : "EUROPE & AMERICAS REGIONAL TEAM",
            "country_abbreviation" : "EA",
            "region" : "Europe & Americas",
            "region_abbreviation" : "",
            "region_cluster" : "Europe & Americas",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9c1"),
            "country" : "ASA REGIONAL TEAM",
            "country_abbreviation" : "AS",
            "region" : "ASA",
            "region_abbreviation" : "",
            "region_cluster" : "ASA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9c2"),
            "country" : "GCNA REGIONAL TEAM",
            "country_abbreviation" : "GC",
            "region" : "GCNA",
            "region_abbreviation" : "",
            "region_cluster" : "GCNA",
            "enable" : true
        }
    ],
    "lifecycle" : [ 
        {
            "id" : "LC1",
            "name" : "Regulatory",
            "seq" : 0.0
        }, 
        {
            "id" : "LC2",
            "name" : "Risk Assessment and Controls",
            "seq" : 1.0
        }, 
        {
            "id" : "LC3",
            "name" : "Frameworks, Policy & Standards",
            "seq" : 2.0
        }, 
        {
            "id" : "LC4",
            "name" : "Oversight & Assurance",
            "seq" : 3.0
        }, 
        {
            "id" : "LC5",
            "name" : "Governance, Resources & Organisation",
            "seq" : 4.0
        }, 
        {
            "id" : "LC6",
            "name" : "Technology & Data",
            "seq" : 5.0
        }, 
        {
            "id" : "LC7",
            "name" : "Business Enablement",
            "seq" : 6.0
        }
    ],
    "scorecard" : [ 
        {
            "id" : "TBD3",
            "name" : "Transform and disrupt with digital",
            "seq" : 0,
            "businessdriver" : [ 
                {
                    "id" : "BD1",
                    "name" : "Other Financial Framework",
                    "seq" : 0
                }
            ]
        }, 
        {
            "id" : "TBD1",
            "name" : "Deliver the financial framework and optimize low returning markets",
            "seq" : 1,
            "businessdriver" : [ 
                {
                    "id" : "BD2",
                    "name" : "Network",
                    "seq" : 0
                }, 
                {
                    "id" : "BD3",
                    "name" : "Industries",
                    "seq" : 0
                }, 
                {
                    "id" : "BD4",
                    "name" : "Client Other",
                    "seq" : 0
                }, 
                {
                    "id" : "BD5",
                    "name" : "International Products",
                    "seq" : 0
                }, 
                {
                    "id" : "BD6",
                    "name" : "Segmentation",
                    "seq" : 0
                }, 
                {
                    "id" : "BD7",
                    "name" : "Liabilities",
                    "seq" : 0
                }, 
                {
                    "id" : "BD8",
                    "name" : "ME Model",
                    "seq" : 0
                }, 
                {
                    "id" : "BD9",
                    "name" : "PvB Referrals",
                    "seq" : 0
                }, 
                {
                    "id" : "BD10",
                    "name" : "Ecosystem",
                    "seq" : 0
                }
            ]
        }, 
        {
            "id" : "TBD4",
            "name" : " Purpose and People",
            "seq" : 3,
            "businessdriver" : [ 
                {
                    "id" : "BD16",
                    "name" : "Costs",
                    "seq" : 0
                }, 
                {
                    "id" : "BD17",
                    "name" : "Process Efficiency",
                    "seq" : 0
                }, 
                {
                    "id" : "BD18",
                    "name" : "Change Protocol",
                    "seq" : 0
                }, 
                {
                    "id" : "BD19",
                    "name" : "Organisational Model",
                    "seq" : 0
                }, 
                {
                    "id" : "BD20",
                    "name" : "Tail & Sub-optimal",
                    "seq" : 0
                }, 
                {
                    "id" : "BD21",
                    "name" : "Efficiency Other",
                    "seq" : 0
                }
            ]
        }, 
        {
            "id" : "TBD2",
            "name" : "Deliver our network and grow our affluent business",
            "seq" : 4,
            "businessdriver" : [ 
                {
                    "id" : "BD22",
                    "name" : "Digitization",
                    "seq" : 0
                }, 
                {
                    "id" : "BD23",
                    "name" : "Analytics, MIS and Frontline Tools",
                    "seq" : 0
                }
            ]
        }
    ],
    "initiativepopup" : "Summary View",
    "additionaltabs" : [],
    "initiativetags" : [ 
        {
            "id" : "",
            "icon" : "Nq8PXGD_ZlZvkx-Fnvt5WzQt0QGPQtj0--wBY2Tj8XwOCQQWWi-V8JuFvEHZe6wF3e--OE.png",
            "name" : "Operational Excellence",
            "position" : "BOTTOM_RIGHT",
            "enableadditionaldetail" : true,
            "enable" : true
        }, 
        {
            "id" : "",
            "icon" : "KaAziK859HAvUIF77AG0fyAXygdjN7eu--77pxaSeaV4Dmw3G1A_VBVPHMewEg-1bU--p84.png",
            "name" : "Process 84",
            "position" : "BOTTOM_RIGHT",
            "enableadditionaldetail" : true,
            "enable" : true
        }, 
        {
            "id" : "",
            "icon" : "l7wgjjHA_ZFcWZHH5Tsgdqy_qgtNOski--compilance.png",
            "name" : "Compliance Conduct Plan Activities",
            "position" : "BOTTOM_RIGHT",
            "enableadditionaldetail" : false,
            "enable" : true
        }, 
        {
            "id" : "",
            "icon" : "pB8IrhL9XaNX6HNa4mSxDECnAnG0XXf0--internal_remediation.png",
            "name" : "Internal Remediation",
            "position" : "BOTTOM_RIGHT",
            "enableadditionaldetail" : false,
            "enable" : true
        }, 
        {
            "id" : "",
            "icon" : "V5N79y40XvUnGSiDYZqlKZWEUfgZcRaF--external.png",
            "name" : "External Remediation",
            "position" : "BOTTOM_RIGHT",
            "enableadditionaldetail" : false,
            "enable" : true
        }, 
        {
            "id" : "",
            "icon" : "7T7suQJDbQiADPTeMuzA_uWhOvIPqWZd--bottomup.png",
            "name" : "Bottom-up Initiative (Country-led)",
            "position" : "BOTTOM_RIGHT",
            "enableadditionaldetail" : false,
            "enable" : true
        }, 
        {
            "id" : "",
            "icon" : "yQxMB2er0JaadhtnvBvKxLfa1xhHAzkO--bottom-down.png",
            "name" : "Top-down initiative (Group-led)",
            "position" : "BOTTOM_RIGHT",
            "enableadditionaldetail" : false,
            "enable" : true
        }, 
        {
            "id" : "",
            "icon" : "Regulatory_Mandatory.png",
            "name" : "Scorecard Deliverable",
            "position" : "BOTTOM_RIGHT",
            "enableadditionaldetail" : false,
            "enable" : true
        }
    ],
    "usermetric" : {
        "users" : {
            "region" : true,
            "segment" : true,
            "productassignment" : true,
            "functions" : false
        },
        "roles" : {
            "ispartofinitiativeowner" : true,
            "segment" : false,
            "productassignment" : false,
            "functions" : false
        }
    },
    "configfilters" : [ 
        {
            "_id" : "CF13",
            "name" : "Project Classification",
            "parent_id" : [],
            "listoptions" : [ 
                "value", 
                "text", 
                "color", 
                "icon"
            ],
            "list" : [ 
                {
                    "text" : "Small",
                    "value" : "Small",
                    "alias" : "",
                    "color" : "#ff7f27",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Medium",
                    "value" : "Medium",
                    "alias" : "",
                    "color" : "#00a2e8",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Large",
                    "value" : "Large",
                    "alias" : "",
                    "color" : "#22b14c",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : false,
            "isrequired" : false
        }, 
        {
            "_id" : "CF15",
            "name" : "Search",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "Free Text",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "filter"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF16",
            "name" : "Date Range",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "Monthly Period",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "filter"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF17",
            "name" : "Initiative Type",
            "parent_id" : [],
            "listoptions" : [ 
                "value", 
                "text", 
                "displayoption", 
                "icon"
            ],
            "list" : [ 
                {
                    "text" : "FCC-led Initiative",
                    "value" : "FCCLED",
                    "alias" : "FCC-led Initiative",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "fcc",
                    "description" : ""
                }, 
                {
                    "text" : "Compliance-led Initiative",
                    "value" : "COMPLIANCELED",
                    "alias" : "Compliance-led Initiative",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "compliance",
                    "description" : ""
                }, 
                {
                    "text" : "CFCC initiatives",
                    "value" : "FCCCOMPLIANCE",
                    "alias" : "CFCC initiatives",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "joint",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [ 
                {
                    "text" : "Dog Ear",
                    "value" : "dogear"
                }, 
                {
                    "text" : "None",
                    "value" : "none"
                }
            ],
            "type" : "list",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF19",
            "name" : "Display Progress",
            "parent_id" : [],
            "listoptions" : [ 
                "value", 
                "text", 
                "color"
            ],
            "list" : [ 
                {
                    "text" : "On Track",
                    "value" : "green",
                    "alias" : "",
                    "color" : "#00a800",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "At Risk",
                    "value" : "amber",
                    "alias" : "",
                    "color" : "#ff9900",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Mgmt Support Required",
                    "value" : "red",
                    "alias" : "",
                    "color" : "#a80000",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Delayed or Re-Baselined",
                    "value" : "grey",
                    "alias" : "",
                    "color" : "#808080",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF21",
            "name" : "Task Legend",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "Toggle Button",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "filter"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF22",
            "name" : "Business Driver",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : false,
            "isrequired" : true
        }, 
        {
            "_id" : "CF26",
            "name" : "Product",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF27",
            "name" : "Segment",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF27_1",
            "name" : "Sub Segment",
            "parent_id" : [ 
                "CF27"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : false,
            "isrequired" : false
        }, 
        {
            "_id" : "CF28",
            "name" : "Function",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF29",
            "name" : "Risk Subtype",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : false,
            "isrequired" : false
        }, 
        {
            "_id" : "CF29_1",
            "name" : "Risk Subtype",
            "parent_id" : [ 
                "CF29"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : false,
            "isrequired" : false
        }, 
        {
            "_id" : "CF30",
            "name" : "Conduct Theme",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : false,
            "isrequired" : false
        }, 
        {
            "_id" : "CF30_1",
            "name" : "Conduct Sub Type",
            "parent_id" : [ 
                "CF30"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF31",
            "name" : "Initiative Category",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF31_1",
            "name" : "Initiative Sub Category",
            "parent_id" : [ 
                "CF31"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : false,
            "isrequired" : false
        }, 
        {
            "_id" : "CF4",
            "name" : "Business Impact",
            "parent_id" : [],
            "listoptions" : [ 
                "value", 
                "text"
            ],
            "list" : [ 
                {
                    "text" : "Low",
                    "value" : "Low",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Medium",
                    "value" : "Medium",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "High",
                    "value" : "High",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF41",
            "name" : "AE/PM",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "filter"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF43",
            "name" : "Five Shifts",
            "parent_id" : [],
            "listoptions" : [ 
                "value", 
                "text"
            ],
            "list" : [ 
                {
                    "text" : "Build Scale",
                    "value" : "Build Scale",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Reshape the Balance Sheet",
                    "value" : "Business Mix",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Enforce Capital Allocation discipline",
                    "value" : "Capital allocation & Costs",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Innovate and Digitise",
                    "value" : "Leverage technology via digitisation",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Exit tail and reduce low returning RWA",
                    "value" : "Other enablers",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : false,
            "isrequired" : false
        }, 
        {
            "_id" : "CF52",
            "name" : "Clarity Staging Filter",
            "parent_id" : [],
            "value" : "",
            "listoptions" : [ 
                "value", 
                "text"
            ],
            "list" : [ 
                {
                    "value" : "Clarity ID",
                    "text" : "Clarity ID"
                }, 
                {
                    "value" : "Project Name",
                    "text" : "Project Name"
                }
            ],
            "displayoptions" : null,
            "description" : "",
            "enable" : true,
            "type" : "list",
            "category" : [ 
                "filter"
            ],
            "isrequired" : false,
            "speciallist" : []
        }
    ],
    "configsummaryfields" : [ 
        {
            "_id" : "CF0",
            "name" : "Accountable Executive",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [ 
                {
                    "text" : "Multi Select",
                    "value" : "multiselect",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Drop Down List",
                    "value" : "dropdownlist",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "multiselect",
            "description" : "",
            "displayoptions" : [],
            "type" : "single-choice",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF1",
            "name" : "Project Manager",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF10",
            "name" : "Planned Cost",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF11",
            "name" : "Region",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [ 
                "ALL"
            ],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF12",
            "name" : "Country",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [ 
                "ALL"
            ],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF13",
            "name" : "Project Classification",
            "parent_id" : [],
            "listoptions" : [ 
                "value", 
                "text", 
                "color", 
                "icon"
            ],
            "list" : [ 
                {
                    "text" : "Small",
                    "value" : "Small",
                    "alias" : "",
                    "color" : "#ff7f27",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Medium",
                    "value" : "Medium",
                    "alias" : "",
                    "color" : "#00a2e8",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Large",
                    "value" : "Large",
                    "alias" : "",
                    "color" : "#22b14c",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF14",
            "name" : "Initiative Tracking",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF17",
            "name" : "Initiative Group",
            "parent_id" : [],
            "listoptions" : [ 
                "value", 
                "text", 
                "displayoption", 
                "icon"
            ],
            "list" : [ 
                {
                    "text" : "FCC-led Initiative",
                    "value" : "FCCLED",
                    "alias" : "FCC-led Initiative",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "fcc",
                    "description" : ""
                }, 
                {
                    "text" : "Compliance-led Initiative",
                    "value" : "COMPLIANCELED",
                    "alias" : "Compliance-led Initiative",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "compliance",
                    "description" : ""
                }, 
                {
                    "text" : "CFCC initiatives",
                    "value" : "FCCCOMPLIANCE",
                    "alias" : "CFCC initiatives",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "joint",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [ 
                {
                    "text" : "Dog Ear",
                    "value" : "dogear"
                }, 
                {
                    "text" : "None",
                    "value" : "none"
                }
            ],
            "type" : "list",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF18",
            "name" : "Revised End Date",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF19",
            "name" : "Project Status",
            "parent_id" : [],
            "listoptions" : [ 
                "value", 
                "text", 
                "color"
            ],
            "list" : [ 
                {
                    "text" : "On Track",
                    "value" : "green",
                    "alias" : "",
                    "color" : "#00a800",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "At Risk",
                    "value" : "amber",
                    "alias" : "",
                    "color" : "#ff9900",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Mgmt Support Required",
                    "value" : "red",
                    "alias" : "",
                    "color" : "#a80000",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Delayed or Re-Baselined",
                    "value" : "grey",
                    "alias" : "",
                    "color" : "#808080",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF2",
            "name" : "Technology Lead",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF20",
            "name" : "Status",
            "parent_id" : [],
            "listoptions" : [ 
                "value", 
                "text"
            ],
            "list" : [ 
                {
                    "text" : "Live",
                    "value" : "LIVE",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Retired",
                    "value" : "RETIRED",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field"
            ],
            "enable" : false,
            "isrequired" : false
        }, 
        {
            "_id" : "CF22",
            "name" : "Business Driver",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : false,
            "isrequired" : true
        }, 
        {
            "_id" : "CF23",
            "name" : "Useful Resources",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF24",
            "name" : "Metric Benchmark",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF25",
            "name" : "Is Initiative Tracked",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF26",
            "name" : "Product Assignment",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF27",
            "name" : "Segment",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF27_1",
            "name" : "Sub Segment",
            "parent_id" : [ 
                "CF27"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF28",
            "name" : "Function",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF29",
            "name" : "Principle Risk",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [ 
                "ALL"
            ],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF29_1",
            "name" : "Risk Subtype",
            "parent_id" : [ 
                "CF29"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [ 
                "ALL"
            ],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF3",
            "name" : "Strategic Sponsor",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF30",
            "name" : "Conduct Theme",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [ 
                "ALL"
            ],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF30_1",
            "name" : "Conduct Subtype",
            "parent_id" : [ 
                "CF30"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [ 
                "ALL"
            ],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF31",
            "name" : "Initiative Type",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [ 
                "ALL"
            ],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF31_1",
            "name" : "Initiative Sub Type",
            "parent_id" : [ 
                "CF31"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [ 
                "ALL"
            ],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF31_2",
            "name" : "Criticality Rating",
            "parent_id" : [ 
                "CF31"
            ],
            "listoptions" : [ 
                "value", 
                "text"
            ],
            "list" : [ 
                {
                    "text" : "A",
                    "value" : "A",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "B",
                    "value" : "B",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "C",
                    "value" : "C",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "N/A",
                    "value" : "N/A",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF32",
            "name" : "Tracking ID",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF33",
            "name" : "Risk & Issues",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF33_1",
            "name" : "Risk Name",
            "parent_id" : [ 
                "CF33"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF33_10",
            "name" : "Risk Category",
            "parent_id" : [ 
                "CF33"
            ],
            "listoptions" : [ 
                "value", 
                "text"
            ],
            "list" : [ 
                {
                    "text" : "Flexibility",
                    "value" : "Flexibility",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Functionability",
                    "value" : "Functionability",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Human Interface",
                    "value" : "Human Interface",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Implementation",
                    "value" : "Implementation",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Interdependencies",
                    "value" : "Interdependencies",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Objectives",
                    "value" : "Objectives",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Organizational Culture",
                    "value" : "Organizational Culture",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Resource Avaibility",
                    "value" : "Resource Avaibility",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Sponsorship",
                    "value" : "Sponsorship",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Supportability",
                    "value" : "Supportability",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Technical",
                    "value" : "Technical",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF33_11",
            "name" : "Risk Symptoms",
            "parent_id" : [ 
                "CF33"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF33_2",
            "name" : "Risk Description",
            "parent_id" : [ 
                "CF33"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF33_3",
            "name" : "Risk Country",
            "parent_id" : [ 
                "CF33"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF33_4",
            "name" : "Target Resolution",
            "parent_id" : [ 
                "CF33"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF33_5",
            "name" : "Risk Severity",
            "parent_id" : [ 
                "CF33"
            ],
            "listoptions" : [ 
                "value", 
                "text"
            ],
            "list" : [ 
                {
                    "text" : "Low",
                    "value" : "Low",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Medium",
                    "value" : "Medium",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "High",
                    "value" : "High",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF33_6",
            "name" : "Risk Priority",
            "parent_id" : [ 
                "CF33"
            ],
            "listoptions" : [ 
                "value", 
                "text"
            ],
            "list" : [ 
                {
                    "text" : "Low",
                    "value" : "Low",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Medium",
                    "value" : "Medium",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "High",
                    "value" : "High",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF33_7",
            "name" : "Risk Status",
            "parent_id" : [ 
                "CF33"
            ],
            "listoptions" : [ 
                "value", 
                "text"
            ],
            "list" : [ 
                {
                    "text" : "Open",
                    "value" : "Open",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Work in Progress",
                    "value" : "WorkinProgress",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Resolved",
                    "value" : "Resolved",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Closed",
                    "value" : "Closed",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF33_8",
            "name" : "Risk Probability",
            "parent_id" : [ 
                "CF33"
            ],
            "listoptions" : [ 
                "value", 
                "text"
            ],
            "list" : [ 
                {
                    "text" : "Low",
                    "value" : "Low",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Medium",
                    "value" : "Medium",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "High",
                    "value" : "High",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF33_9",
            "name" : "Risk Impact",
            "parent_id" : [ 
                "CF33"
            ],
            "listoptions" : [ 
                "value", 
                "text"
            ],
            "list" : [ 
                {
                    "text" : "Low",
                    "value" : "Low",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Medium",
                    "value" : "Medium",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "High",
                    "value" : "High",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF34",
            "name" : "Stakeholder",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF36",
            "name" : "Global",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF37",
            "name" : "Scorecard",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF38",
            "name" : "Initiative Category",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF4",
            "name" : "Business Impact",
            "parent_id" : [],
            "listoptions" : [ 
                "value", 
                "text"
            ],
            "list" : [ 
                {
                    "text" : "Low",
                    "value" : "Low",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Medium",
                    "value" : "Medium",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "High",
                    "value" : "High",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF42",
            "name" : "Is Global Apply",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : false,
            "isrequired" : false
        }, 
        {
            "_id" : "CF43",
            "name" : "Five Shifts",
            "parent_id" : [],
            "listoptions" : [ 
                "value", 
                "text"
            ],
            "list" : [ 
                {
                    "text" : "Build Scale",
                    "value" : "Build Scale",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Reshape the Balance Sheet",
                    "value" : "Business Mix",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Enforce Capital Allocation discipline",
                    "value" : "Capital allocation & Costs",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Innovate and Digitise",
                    "value" : "Leverage technology via digitisation",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Exit tail and reduce low returning RWA",
                    "value" : "Other enablers",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : false,
            "isrequired" : false
        }, 
        {
            "_id" : "CF5",
            "name" : "Problem Statement",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF6",
            "name" : "Project Description",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF7",
            "name" : "Key Deliverables/Milestones",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF7_0",
            "name" : "Deliverable",
            "parent_id" : [ 
                "CF7"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF7_1",
            "name" : "Start Date",
            "parent_id" : [ 
                "CF7"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF7_10",
            "name" : "Type",
            "parent_id" : [ 
                "CF7"
            ],
            "listoptions" : [ 
                "value", 
                "text"
            ],
            "list" : [ 
                {
                    "text" : "ECG",
                    "value" : "ECG",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Enterprise Change Governance Checklist"
                }, 
                {
                    "text" : "HLBR",
                    "value" : "HLBR",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "High Level Business Requirements"
                }, 
                {
                    "text" : "ORA",
                    "value" : "ORA",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Operational Risk Assessment"
                }, 
                {
                    "text" : "PCA",
                    "value" : "PCA",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Project Complexity Assessment"
                }, 
                {
                    "text" : "Pg Benefits Plan",
                    "value" : "Pg Benefits Plan",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Programme Benefits Management Plan"
                }, 
                {
                    "text" : "Pg Benefits Report",
                    "value" : "Pg Benefits Report",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Programme Benefits Report"
                }, 
                {
                    "text" : "Pg Closure",
                    "value" : "Pg Closure",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Programme Closure Report"
                }, 
                {
                    "text" : "Pg ToR",
                    "value" : "Pg ToR",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Programme Steering Committee Terms of Reference"
                }, 
                {
                    "text" : "PgED",
                    "value" : "PgED",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Programme Execution Document"
                }, 
                {
                    "text" : "PgMP",
                    "value" : "PgMP",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Programme Management Plan"
                }, 
                {
                    "text" : "Pj Benefits Plan",
                    "value" : "Pj Benefits Plan",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Project Management Plan"
                }, 
                {
                    "text" : "Pj Benefits Report",
                    "value" : "Pj Benefits Report",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Project Benefits Management Plan"
                }, 
                {
                    "text" : "Pj Closure",
                    "value" : "Pj Closure",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Project Closure Report"
                }, 
                {
                    "text" : "Pj ToR",
                    "value" : "Pj ToR",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Project Steering Committee Terms of Reference"
                }, 
                {
                    "text" : "PjED",
                    "value" : "PjED",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Project Execution Document"
                }, 
                {
                    "text" : "PjMP",
                    "value" : "PjMP",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Project Management Plan"
                }, 
                {
                    "text" : "SDF",
                    "value" : "SDF",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Systems Delivery Framework "
                }, 
                {
                    "text" : "Pilot Go-Live",
                    "value" : "Pilot Go-Live",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Pilot Go-Live"
                }, 
                {
                    "text" : "Go-Live",
                    "value" : "Go-Live",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Go-Live Confirmation"
                }, 
                {
                    "text" : "Phase Gate",
                    "value" : "Phase Gate",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Phase Gate Sign-off"
                }, 
                {
                    "text" : "Commercialization Plan",
                    "value" : "Commercialization Plan",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Commercialization Plan"
                }, 
                {
                    "text" : "N/A",
                    "value" : "N/A",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Not a Phase Gate milestone"
                }, 
                {
                    "text" : "AED",
                    "value" : "AED",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Agile Execution Document"
                }, 
                {
                    "text" : "ADMP",
                    "value" : "ADMP",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Agile Management Plan"
                }, 
                {
                    "text" : "Sprint 0",
                    "value" : "Sprint 0",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Sprint 0"
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF7_11",
            "name" : "RAG",
            "parent_id" : [ 
                "CF7"
            ],
            "listoptions" : [ 
                "value", 
                "text", 
                "color"
            ],
            "list" : [ 
                {
                    "text" : "Red",
                    "value" : "Red",
                    "alias" : "",
                    "color" : "#C00000",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Amber",
                    "value" : "Amber",
                    "alias" : "",
                    "color" : "#FF9900",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Green",
                    "value" : "Green",
                    "alias" : "",
                    "color" : "#009D44",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF7_12",
            "name" : "Progress Completion",
            "parent_id" : [ 
                "CF7"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF7_13",
            "name" : "Planned Cost",
            "parent_id" : [ 
                "CF7"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : false,
            "isrequired" : false
        }, 
        {
            "_id" : "CF7_14",
            "name" : "Five Shift",
            "parent_id" : [ 
                "CF7"
            ],
            "listoptions" : [ 
                "value", 
                "text"
            ],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field"
            ],
            "enable" : false,
            "isrequired" : false
        }, 
        {
            "_id" : "CF7_2",
            "name" : "End Date",
            "parent_id" : [ 
                "CF7"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF7_3",
            "name" : "Revised End Date",
            "parent_id" : [ 
                "CF7"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF7_4",
            "name" : "Country",
            "parent_id" : [ 
                "CF7"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [ 
                "ALL"
            ],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF7_5",
            "name" : "Complete",
            "parent_id" : [ 
                "CF7"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : false,
            "isrequired" : false
        }, 
        {
            "_id" : "CF7_6",
            "name" : "Status",
            "parent_id" : [ 
                "CF7"
            ],
            "listoptions" : [ 
                "value", 
                "text"
            ],
            "list" : [ 
                {
                    "text" : "Completed",
                    "value" : "Completed",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Not Started",
                    "value" : "Not Started",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Started",
                    "value" : "Started",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF7_7",
            "name" : "Status Comment",
            "parent_id" : [ 
                "CF7"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF7_8",
            "name" : "Owner",
            "parent_id" : [ 
                "CF7"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF7_9",
            "name" : "Region",
            "parent_id" : [ 
                "CF7"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [ 
                "ALL"
            ],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF8",
            "name" : "Progress Completion",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [ 
                {
                    "text" : "Calculated",
                    "value" : "calculated",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Manual Input",
                    "value" : "manual",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "manual",
            "description" : "",
            "displayoptions" : [],
            "type" : "single-choice",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF9",
            "name" : "Project Driver",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }
    ],
    "configscorecard" : [ 
        {
            "_id" : "CF53",
            "name" : "Weightage",
            "parent_id" : [],
            "value" : "",
            "listoptions" : [],
            "list" : null,
            "displayoptions" : null,
            "description" : "",
            "enable" : true,
            "type" : "none",
            "category" : [ 
                "scorecard"
            ],
            "isrequired" : false,
            "speciallist" : []
        }
    ],
    "periodfrom" : 2016,
    "periodto" : 2018,
    "projectnamemaxlength" : 20,
    "initiativetagmaxlimit" : 4,
    "description" : "",
    "segment" : [ 
        {
            "_id" : ObjectId("5b4c070501112617537cc93c"),
            "name" : "N/A",
            "subsegment" : [ 
                {
                    "_id" : ObjectId("5b569070dfd3d52632e94b82"),
                    "name" : "N/A"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b4c070501112617537cc93d"),
            "name" : "Corporate, Commercial & Institutional Banking",
            "subsegment" : [ 
                {
                    "_id" : ObjectId("5b569159dfd3d52632e94b83"),
                    "name" : "CB - High Value Small Business"
                }, 
                {
                    "_id" : ObjectId("5b569159dfd3d52632e94b84"),
                    "name" : "CB - Middle Enterprises"
                }, 
                {
                    "_id" : ObjectId("5b569159dfd3d52632e94b85"),
                    "name" : "CB - Middle Markets"
                }, 
                {
                    "_id" : ObjectId("5b569159dfd3d52632e94b86"),
                    "name" : "CB - Local Corporates"
                }, 
                {
                    "_id" : ObjectId("5b569159dfd3d52632e94b87"),
                    "name" : "GB - Banks & Broker Dealers"
                }, 
                {
                    "_id" : ObjectId("5b569159dfd3d52632e94b88"),
                    "name" : "GB - Commercial Real Estate"
                }, 
                {
                    "_id" : ObjectId("5b569159dfd3d52632e94b89"),
                    "name" : "GB - Financial & Strategic Investors Group"
                }, 
                {
                    "_id" : ObjectId("5b569159dfd3d52632e94b8a"),
                    "name" : "GB - Global Industries Group"
                }, 
                {
                    "_id" : ObjectId("5b569159dfd3d52632e94b8b"),
                    "name" : "GB - Global Subsidiaries"
                }, 
                {
                    "_id" : ObjectId("5b569159dfd3d52632e94b8c"),
                    "name" : "GB - Investors & Insurance"
                }, 
                {
                    "_id" : ObjectId("5b569159dfd3d52632e94b8d"),
                    "name" : "GB - Public Sector & Development Organisation"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b4c070601112617537cc93e"),
            "name" : "Private Banking",
            "subsegment" : [ 
                {
                    "_id" : ObjectId("5b569070dfd3d52632e94b82"),
                    "name" : "N/A"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b4c070601112617537cc940"),
            "name" : "Retail Banking",
            "subsegment" : [ 
                {
                    "_id" : ObjectId("5b569159dfd3d52632e94b8e"),
                    "name" : "Retail Business Banking"
                }, 
                {
                    "_id" : ObjectId("5b569159dfd3d52632e94b8f"),
                    "name" : "Retail Individual Banking"
                }
            ]
        }
    ],
    "productassignment" : [ 
        {
            "_id" : ObjectId("5b39f60ba7da87c5e8da382b"),
            "name" : "N/A"
        }, 
        {
            "_id" : ObjectId("5b39f60ba7da87c5e8da382c"),
            "name" : "Trade"
        }, 
        {
            "_id" : ObjectId("5b39f60ba7da87c5e8da382d"),
            "name" : "Securities Services (SS)"
        }, 
        {
            "_id" : ObjectId("5b39f60ba7da87c5e8da382e"),
            "name" : "Digitization and Client Access (DCA)"
        }, 
        {
            "_id" : ObjectId("5b39f60ba7da87c5e8da382f"),
            "name" : "Financial Markets (FM)"
        }, 
        {
            "_id" : ObjectId("5b39f60ba7da87c5e8da3830"),
            "name" : "Corporate Finance (CF)"
        }, 
        {
            "_id" : ObjectId("5b39f60ba7da87c5e8da3831"),
            "name" : "Corporate Lending (CL)"
        }, 
        {
            "_id" : ObjectId("5b39f60ba7da87c5e8da3832"),
            "name" : "Principal Finance (PF)"
        }, 
        {
            "_id" : ObjectId("5b39f60ba7da87c5e8da3833"),
            "name" : "Cash (CBR)"
        }, 
        {
            "_id" : ObjectId("5b39f60ba7da87c5e8da3834"),
            "name" : "Cash (non-CBR)"
        }, 
        {
            "_id" : ObjectId("5b39f60ba7da87c5e8da3835"),
            "name" : "Retail"
        }, 
        {
            "_id" : ObjectId("5b39f60ba7da87c5e8da3836"),
            "name" : "Wealth management"
        }
    ],
    "conducttheme" : [ 
        {
            "_id" : ObjectId("5b3b0407a7da87c5e8da3929"),
            "name" : "N/A",
            "subtype" : [ 
                {
                    "_id" : ObjectId("5b4d9e9ceaad0e985e76f5aa"),
                    "name" : "N/A"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b39f983a7da87c5e8da3842"),
            "name" : "Our Business",
            "subtype" : [ 
                {
                    "_id" : ObjectId("5b4d9f48eaad0e985e76f5ab"),
                    "name" : "Transparent Business Model"
                }, 
                {
                    "_id" : ObjectId("5b4d9f48eaad0e985e76f5ac"),
                    "name" : "Effective Governance"
                }, 
                {
                    "_id" : ObjectId("5b4d9f48eaad0e985e76f5ad"),
                    "name" : "Robust Infrastructure"
                }, 
                {
                    "_id" : ObjectId("5b4d9f48eaad0e985e76f5ae"),
                    "name" : "Exemplary Business Practices"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b39f984a7da87c5e8da3846"),
            "name" : "Each of Us",
            "subtype" : [ 
                {
                    "_id" : ObjectId("5b4d9f48eaad0e985e76f5af"),
                    "name" : "Ethical Leadership"
                }, 
                {
                    "_id" : ObjectId("5b4d9f48eaad0e985e76f5b0"),
                    "name" : "Aligned Incentives"
                }, 
                {
                    "_id" : ObjectId("5b4d9f48eaad0e985e76f5b1"),
                    "name" : "People Competency & Integrity"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b39f984a7da87c5e8da384c"),
            "name" : "Our External Stakeholders",
            "subtype" : [ 
                {
                    "_id" : ObjectId("5b4d9f48eaad0e985e76f5b2"),
                    "name" : "Fair Outcomes for Clients"
                }, 
                {
                    "_id" : ObjectId("5b4d9f48eaad0e985e76f5b3"),
                    "name" : "Effective Markets"
                }, 
                {
                    "_id" : ObjectId("5b4d9f48eaad0e985e76f5b4"),
                    "name" : "Financial Crime Compliance"
                }, 
                {
                    "_id" : ObjectId("5b4d9f48eaad0e985e76f5b5"),
                    "name" : "Stakeholder Confidence"
                }
            ]
        }
    ],
    "initiativecategory" : [ 
        {
            "_id" : ObjectId("5b4da21beaad0e985e76f5b7"),
            "name" : "FCC Group MAP",
            "subcategory" : [ 
                {
                    "_id" : ObjectId("5b4da21beaad0e985e76f5b8"),
                    "name" : "A. Governance, Oversight & Organisation"
                }, 
                {
                    "_id" : ObjectId("5b4da21beaad0e985e76f5b9"),
                    "name" : "B. Risk Assessment"
                }, 
                {
                    "_id" : ObjectId("5b4da21beaad0e985e76f5ba"),
                    "name" : "C. Policies, Standards and Procedures"
                }, 
                {
                    "_id" : ObjectId("5b4da21beaad0e985e76f5bb"),
                    "name" : "D. People"
                }, 
                {
                    "_id" : ObjectId("5b4da21beaad0e985e76f5bc"),
                    "name" : "E. Learning and Awareness"
                }, 
                {
                    "_id" : ObjectId("5b4da21beaad0e985e76f5bd"),
                    "name" : "F. CDD/EDD"
                }, 
                {
                    "_id" : ObjectId("5b4da21beaad0e985e76f5be"),
                    "name" : "G. Surveillance"
                }, 
                {
                    "_id" : ObjectId("5b4da21beaad0e985e76f5bf"),
                    "name" : "H. Investigations and Disclosures"
                }, 
                {
                    "_id" : ObjectId("5b4da21beaad0e985e76f5c0"),
                    "name" : "I. Assurance and Testing"
                }, 
                {
                    "_id" : ObjectId("5b4da21beaad0e985e76f5c1"),
                    "name" : "J. MI and Data Management"
                }, 
                {
                    "_id" : ObjectId("5b4da21beaad0e985e76f5c2"),
                    "name" : "K. Sanctions"
                }, 
                {
                    "_id" : ObjectId("5b4da21beaad0e985e76f5c3"),
                    "name" : "L. ABC"
                }, 
                {
                    "_id" : ObjectId("5b4da21beaad0e985e76f5c4"),
                    "name" : "M. Tax"
                }, 
                {
                    "_id" : ObjectId("5b4da21beaad0e985e76f5c5"),
                    "name" : "N. Regions and Countries"
                }, 
                {
                    "_id" : ObjectId("5b4da21beaad0e985e76f5c6"),
                    "name" : "O. Business"
                }, 
                {
                    "_id" : ObjectId("5b4da21beaad0e985e76f5c7"),
                    "name" : "P. Americas"
                }, 
                {
                    "_id" : ObjectId("5b4da21beaad0e985e76f5c8"),
                    "name" : "Q. Other Matters"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b4da21beaad0e985e76f5c9"),
            "name" : "FCC Country MAP",
            "subcategory" : []
        }, 
        {
            "_id" : ObjectId("5b4da21beaad0e985e76f5ca"),
            "name" : "FCC TOP Objectives",
            "subcategory" : []
        }, 
        {
            "_id" : ObjectId("5b4da21beaad0e985e76f5cb"),
            "name" : "FCC PRF & Gov",
            "subcategory" : []
        }, 
        {
            "_id" : ObjectId("5b4da21beaad0e985e76f5cc"),
            "name" : "CAP - Mandatory Regulatory Requirements",
            "subcategory" : []
        }, 
        {
            "_id" : ObjectId("5b4da21beaad0e985e76f5cd"),
            "name" : "CAP - Strategic Initiatives",
            "subcategory" : []
        }, 
        {
            "_id" : ObjectId("5b4da21beaad0e985e76f5ce"),
            "name" : "CAP - Other Initiatives",
            "subcategory" : []
        }, 
        {
            "_id" : ObjectId("5b4da21beaad0e985e76f5cf"),
            "name" : "Non-CAP -  Initiatives",
            "subcategory" : []
        }
    ],
    "principlerisk" : [ 
        {
            "_id" : ObjectId("5b4d9dcbeaad0e985e76f5a9"),
            "name" : "N/A",
            "risksubtype" : [ 
                {
                    "_id" : ObjectId("5b4d9baceaad0e985e76f58a"),
                    "name" : "N/A"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b568bc3dfd3d52632e94b3d"),
            "name" : "Compliance",
            "risksubtype" : [ 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b3e"),
                    "name" : "Banking Secrecy"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b3f"),
                    "name" : "Best Execution"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b40"),
                    "name" : "Client Asset and Money Protection"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b41"),
                    "name" : "Client Tax Information Compliance"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b42"),
                    "name" : "Competition and Anti-Trust"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b43"),
                    "name" : "Conduct"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b44"),
                    "name" : "Conflicts of Interest"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b45"),
                    "name" : "Cross Border"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b46"),
                    "name" : "Fair Outcomes for Clients - Account Management and Post Sales Practices"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b47"),
                    "name" : "Fair Outcomes for Clients - Appropriateness and Suitability"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b48"),
                    "name" : "Fair Outcomes for Clients - Client Communication"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b49"),
                    "name" : "Fair Outcomes for Clients - Sales Practices"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b4a"),
                    "name" : "Fiduciary Governance"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b4b"),
                    "name" : "General Legal and Regulatory Compliance"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b4c"),
                    "name" : "Licensing of Entities"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b4d"),
                    "name" : "Licensing of Individuals"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b4e"),
                    "name" : "Market Manipulation"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b4f"),
                    "name" : "Misuse of Information"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b50"),
                    "name" : "Non-Financial Regulatory Reporting"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b51"),
                    "name" : "Privacy"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b52"),
                    "name" : "Records Management"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b53"),
                    "name" : "Regulatory Commitments"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b54"),
                    "name" : "Senior Management Individual Accountability"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b55"),
                    "name" : "Trading Regulations"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b56"),
                    "name" : "Transaction & Trade Reporting"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b568bc3dfd3d52632e94b57"),
            "name" : "Conduct",
            "risksubtype" : [ 
                {
                    "_id" : ObjectId("5b4d9baceaad0e985e76f58a"),
                    "name" : "N/A"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b568bc3dfd3d52632e94b58"),
            "name" : "Finance",
            "risksubtype" : [ 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b59"),
                    "name" : "Accounting and Financial Reporting"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b5a"),
                    "name" : "Financial Regulatory Reporting"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b5b"),
                    "name" : "Prudential - Capital "
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b5c"),
                    "name" : "Prudential - Liquidity"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b5d"),
                    "name" : "Prudential - Recovery & Resolution Planning"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b568bc3dfd3d52632e94b5e"),
            "name" : "Credit risk",
            "risksubtype" : [ 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b5f"),
                    "name" : "Credit Risk Rules"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b60"),
                    "name" : "Customer Insolvency"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b61"),
                    "name" : "Prudential - Credit Risk"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b568bc3dfd3d52632e94b62"),
            "name" : "Enterprise Risk Management",
            "risksubtype" : [ 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b63"),
                    "name" : "Prudential – Risk Governance"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b568bc3dfd3d52632e94b64"),
            "name" : "Financial Crime Compliance",
            "risksubtype" : [ 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b65"),
                    "name" : "Anti-Bribery and Corruption"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b66"),
                    "name" : "Anti-Money Laundering (and Terrorist Financing)"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b67"),
                    "name" : "Sanctions"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b68"),
                    "name" : "Tax Evasion"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b568bc3dfd3d52632e94b69"),
            "name" : "Office of the Chief Information Security Officer",
            "risksubtype" : [ 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b6a"),
                    "name" : "Information and Cyber Security"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b568bc3dfd3d52632e94b6b"),
            "name" : "Market Risk",
            "risksubtype" : [ 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b6c"),
                    "name" : "Market Risk Rules"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b6d"),
                    "name" : "Prudential - Market Risk"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b568bc3dfd3d52632e94b6e"),
            "name" : "Business Efficiency",
            "risksubtype" : [ 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b6f"),
                    "name" : "Outsourcing"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b568bc3dfd3d52632e94b70"),
            "name" : "Group Company Secretary",
            "risksubtype" : [ 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b71"),
                    "name" : "Corporate Governance and Authorities"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b72"),
                    "name" : "Exchange Listing Rules"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b568bc3dfd3d52632e94b73"),
            "name" : "Group Internal Audit",
            "risksubtype" : [ 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b74"),
                    "name" : "Internal Audit"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b568bc3dfd3d52632e94b75"),
            "name" : "Human Resource",
            "risksubtype" : [ 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b76"),
                    "name" : "Employment, remuneration and benefits"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b568bc3dfd3d52632e94b77"),
            "name" : "Legal",
            "risksubtype" : [ 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b78"),
                    "name" : "Legal Enforceability"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b568bc3dfd3d52632e94b79"),
            "name" : "Operational Risk",
            "risksubtype" : [ 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b7a"),
                    "name" : "Fraud Prevention Rules"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b7b"),
                    "name" : "Operational Risk Rules"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b7c"),
                    "name" : "Product Approval and Governance"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b7d"),
                    "name" : "Prudential - Operational Risk"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b568bc3dfd3d52632e94b7e"),
            "name" : "Property",
            "risksubtype" : [ 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b7f"),
                    "name" : "Safety and Security"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b568bc3dfd3d52632e94b80"),
            "name" : "Group Tax",
            "risksubtype" : [ 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b81"),
                    "name" : "Tax"
                }
            ]
        }
    ],
    "created_date" : ISODate("2018-01-29T07:01:44.264Z"),
    "created_by" : "ss",
    "updated_date" : ISODate("2018-12-11T07:28:23.874Z"),
    "updated_by" : "ss_private",
    "type" : "internal"
})
db.getSiblingDB(database).ss_application.save({
    "_id" : ObjectId("5c880a141fa32be5015ac120"),
    "name" : "T&I",
    "logo" : "",
    "modules" : [ 
        {
            "_id" : "M001",
            "name" : "Scorecard",
            "param_name" : "Scorecard",
            "type" : "core",
            "parent_id" : [],
            "image_src" : "Scorecard.PNG",
            "path" : "scorecardinitiative",
            "seq" : 1
        }, 
        {
            "_id" : "M002",
            "name" : "Initiative",
            "param_name" : "Initiative",
            "type" : "core",
            "parent_id" : [],
            "image_src" : "Initiative.PNG",
            "path" : "scorecardinitiative",
            "seq" : 0
        }, 
        {
            "_id" : "M003",
            "name" : "Country Analysis",
            "param_name" : "CountryAnalysis",
            "type" : "additional",
            "parent_id" : [ 
                "M001"
            ],
            "image_src" : "CountryAnalysis.PNG",
            "path" : "scorecardinitiative",
            "seq" : 0
        }, 
        {
            "_id" : "M004",
            "name" : "Metric Drivers",
            "param_name" : "MetricDrivers",
            "type" : "additional",
            "parent_id" : [ 
                "M001", 
                "M002"
            ],
            "image_src" : "MetricDrivers.PNG",
            "path" : "scorecardinitiative",
            "seq" : 0
        }, 
        {
            "_id" : "M005",
            "name" : "Metric Analysis",
            "param_name" : "MetricAnalysis",
            "type" : "additional",
            "parent_id" : [ 
                "M001"
            ],
            "image_src" : "MetricAnalysis.PNG",
            "path" : "scorecardinitiative",
            "seq" : 0
        }, 
        {
            "_id" : "M006",
            "name" : "Adoption Module",
            "param_name" : "AdoptionModule",
            "type" : "additional",
            "parent_id" : [ 
                "M002"
            ],
            "image_src" : "Adoption.PNG",
            "path" : "adoptionmodule",
            "seq" : 8
        }, 
        {
            "_id" : "M007",
            "name" : "Metric Validation",
            "param_name" : "StagingArea",
            "type" : "dependency",
            "parent_id" : [ 
                "M001"
            ],
            "image_src" : "",
            "path" : "metricvalidation",
            "seq" : 5
        }, 
        {
            "_id" : "M008",
            "name" : "Initiative",
            "param_name" : "Initiative",
            "type" : "tabular_dependency",
            "parent_id" : [ 
                "M001"
            ],
            "image_src" : "",
            "path" : "scorecardinitiative",
            "seq" : 0
        }, 
        {
            "_id" : "M009",
            "name" : "Scorecard",
            "param_name" : "Scorecard",
            "type" : "tabular_dependency",
            "parent_id" : [ 
                "M001"
            ],
            "image_src" : "",
            "path" : "scorecardinitiative",
            "seq" : 0
        }, 
        {
            "_id" : "M010",
            "name" : "Shared Agenda",
            "param_name" : "SharedAgenda",
            "type" : "tabular_dependency",
            "parent_id" : [ 
                "M001"
            ],
            "image_src" : "",
            "path" : "scorecardinitiative",
            "seq" : 0
        }, 
        {
            "_id" : "M011",
            "name" : "Metric Country Analysis",
            "param_name" : "CountryAnalysis",
            "type" : "tabular_dependency",
            "parent_id" : [ 
                "M001"
            ],
            "image_src" : "",
            "path" : "scorecardinitiative",
            "seq" : 0
        }, 
        {
            "_id" : "M015",
            "name" : "Metric Upload",
            "param_name" : "MetricUpload",
            "type" : "dependency",
            "parent_id" : [ 
                "M001"
            ],
            "image_src" : "",
            "path" : "metricupload",
            "seq" : 7
        }, 
        {
            "_id" : "M017",
            "name" : "Overview",
            "param_name" : "Overview",
            "type" : "dependency",
            "parent_id" : [ 
                "M001", 
                "M002"
            ],
            "image_src" : "",
            "path" : "overview",
            "seq" : 6
        }, 
        {
            "_id" : "M023",
            "name" : "Clarity Staging",
            "param_name" : "InitiativeStaging",
            "type" : "dependency",
            "parent_id" : [ 
                "M001", 
                "M002"
            ],
            "image_src" : "",
            "path" : "initiativestaging",
            "seq" : 9
        }, 
        {
            "_id" : "M012",
            "name" : "Bef Sponsor",
            "param_name" : "BefSponsor",
            "type" : "dependency",
            "parent_id" : [ 
                "M002"
            ],
            "image_src" : "",
            "path" : "befsponsor",
            "seq" : 3
        }, 
        {
            "_id" : "M013",
            "name" : "Initiative Master",
            "param_name" : "InitiativeMaster",
            "type" : "dependency",
            "parent_id" : [ 
                "M002"
            ],
            "image_src" : "",
            "path" : "initiativemaster",
            "seq" : 2
        }, 
        {
            "_id" : "M016",
            "name" : "Configuration",
            "param_name" : "Configuration",
            "type" : "primary",
            "parent_id" : [],
            "image_src" : "",
            "path" : "configuration",
            "seq" : 6
        }, 
        {
            "_id" : "M018",
            "name" : "Application Audit Trail",
            "param_name" : "ApplicationAuditTrail",
            "type" : "tabular_primary",
            "parent_id" : [ 
                "M016"
            ],
            "image_src" : "",
            "path" : "configuration",
            "seq" : 0
        }, 
        {
            "_id" : "M019",
            "name" : "Role Management",
            "param_name" : "RoleManagement",
            "type" : "tabular_primary",
            "parent_id" : [ 
                "M016"
            ],
            "image_src" : "",
            "path" : "configuration",
            "seq" : 0
        }, 
        {
            "_id" : "M020",
            "name" : "User Audit Trail",
            "param_name" : "UserAuditTrail",
            "type" : "tabular_primary",
            "parent_id" : [ 
                "M016"
            ],
            "image_src" : "",
            "path" : "configuration",
            "seq" : 0
        }, 
        {
            "_id" : "M021",
            "name" : "Application Usage Detail",
            "param_name" : "ApplicationUsageDetail",
            "type" : "tabular_primary",
            "parent_id" : [ 
                "M016"
            ],
            "image_src" : "",
            "path" : "configuration",
            "seq" : 0
        }, 
        {
            "_id" : "M022",
            "name" : "User Management",
            "param_name" : "UserManagement",
            "type" : "tabular_primary",
            "parent_id" : [ 
                "M016"
            ],
            "image_src" : "",
            "path" : "configuration",
            "seq" : 0
        }
    ],
    "geography" : [ 
        {
            "_id" : ObjectId("5b7bb3ac48a002582424e97f"),
            "country" : "ANGOLA",
            "country_abbreviation" : "AO",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ac48a002582424e980"),
            "country" : "ARGENTINA",
            "country_abbreviation" : "AR",
            "region" : "Europe & Americas",
            "region_abbreviation" : "",
            "region_cluster" : "Europe & Americas",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ac48a002582424e981"),
            "country" : "AUSTRALIA",
            "country_abbreviation" : "AU",
            "region" : "ASA",
            "region_abbreviation" : "",
            "region_cluster" : "ASA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ac48a002582424e982"),
            "country" : "BAHRAIN",
            "country_abbreviation" : "BH",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ac48a002582424e983"),
            "country" : "BAHAMAS",
            "country_abbreviation" : "BS",
            "region" : "Europe & Americas",
            "region_abbreviation" : "",
            "region_cluster" : "Europe & Americas",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ac48a002582424e984"),
            "country" : "BANGLADESH",
            "country_abbreviation" : "BD",
            "region" : "ASA",
            "region_abbreviation" : "",
            "region_cluster" : "ASA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ac48a002582424e985"),
            "country" : "BOTSWANA",
            "country_abbreviation" : "BW",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ac48a002582424e986"),
            "country" : "BRAZIL",
            "country_abbreviation" : "BR",
            "region" : "Europe & Americas",
            "region_abbreviation" : "",
            "region_cluster" : "Europe & Americas",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ac48a002582424e987"),
            "country" : "BRUNEI",
            "country_abbreviation" : "BN",
            "region" : "ASA",
            "region_abbreviation" : "",
            "region_cluster" : "ASA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ac48a002582424e988"),
            "country" : "CAMBODIA",
            "country_abbreviation" : "KH",
            "region" : "ASA",
            "region_abbreviation" : "",
            "region_cluster" : "ASA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ac48a002582424e989"),
            "country" : "CAMEROON",
            "country_abbreviation" : "CM",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ac48a002582424e98a"),
            "country" : "CHINA",
            "country_abbreviation" : "CN",
            "region" : "GCNA",
            "region_abbreviation" : "",
            "region_cluster" : "GCNA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ac48a002582424e98b"),
            "country" : "COLOMBIA",
            "country_abbreviation" : "CO",
            "region" : "Europe & Americas",
            "region_abbreviation" : "",
            "region_cluster" : "Europe & Americas",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ac48a002582424e98c"),
            "country" : "COTE D'IVOIRE",
            "country_abbreviation" : "CI",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ac48a002582424e98d"),
            "country" : "EGYPT",
            "country_abbreviation" : "EG",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ac48a002582424e98e"),
            "country" : "FALKLAND ISLANDS",
            "country_abbreviation" : "FK",
            "region" : "Europe & Americas",
            "region_abbreviation" : "",
            "region_cluster" : "Europe & Americas",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ac48a002582424e98f"),
            "country" : "FRANCE",
            "country_abbreviation" : "FR",
            "region" : "Europe & Americas",
            "region_abbreviation" : "",
            "region_cluster" : "Europe & Americas",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e990"),
            "country" : "GAMBIA",
            "country_abbreviation" : "GM",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e991"),
            "country" : "GERMANY",
            "country_abbreviation" : "DE",
            "region" : "Europe & Americas",
            "region_abbreviation" : "",
            "region_cluster" : "Europe & Americas",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e992"),
            "country" : "GHANA",
            "country_abbreviation" : "GH",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e993"),
            "country" : "GUERNSEY",
            "country_abbreviation" : "GG",
            "region" : "Europe & Americas",
            "region_abbreviation" : "",
            "region_cluster" : "Europe & Americas",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e994"),
            "country" : "HONG KONG",
            "country_abbreviation" : "HK",
            "region" : "GCNA",
            "region_abbreviation" : "",
            "region_cluster" : "GCNA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e995"),
            "country" : "INDIA",
            "country_abbreviation" : "IN",
            "region" : "ASA",
            "region_abbreviation" : "",
            "region_cluster" : "ASA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e996"),
            "country" : "INDONESIA",
            "country_abbreviation" : "ID",
            "region" : "ASA",
            "region_abbreviation" : "",
            "region_cluster" : "ASA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e997"),
            "country" : "IRAQ",
            "country_abbreviation" : "IQ",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e998"),
            "country" : "IRELAND",
            "country_abbreviation" : "IE",
            "region" : "Europe & Americas",
            "region_abbreviation" : "",
            "region_cluster" : "Europe & Americas",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e999"),
            "country" : "JAPAN",
            "country_abbreviation" : "JP",
            "region" : "GCNA",
            "region_abbreviation" : "",
            "region_cluster" : "GCNA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e99a"),
            "country" : "JERSEY",
            "country_abbreviation" : "JE",
            "region" : "Europe & Americas",
            "region_abbreviation" : "",
            "region_cluster" : "Europe & Americas",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e99b"),
            "country" : "JORDAN",
            "country_abbreviation" : "JO",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e99c"),
            "country" : "KENYA",
            "country_abbreviation" : "KE",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e99d"),
            "country" : "SOUTH KOREA",
            "country_abbreviation" : "KR",
            "region" : "GCNA",
            "region_abbreviation" : "",
            "region_cluster" : "GCNA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e99e"),
            "country" : "LAOS",
            "country_abbreviation" : "LA",
            "region" : "ASA",
            "region_abbreviation" : "",
            "region_cluster" : "ASA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e99f"),
            "country" : "LEBANON",
            "country_abbreviation" : "LB",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9a0"),
            "country" : "LUXEMBOURG",
            "country_abbreviation" : "LU",
            "region" : "Europe & Americas",
            "region_abbreviation" : "",
            "region_cluster" : "Europe & Americas",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9a1"),
            "country" : "MACAU",
            "country_abbreviation" : "MO",
            "region" : "GCNA",
            "region_abbreviation" : "",
            "region_cluster" : "GCNA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9a2"),
            "country" : "MALAYSIA",
            "country_abbreviation" : "MY",
            "region" : "ASA",
            "region_abbreviation" : "",
            "region_cluster" : "ASA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9a3"),
            "country" : "MAURITIUS",
            "country_abbreviation" : "MU",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9a4"),
            "country" : "MYANMAR",
            "country_abbreviation" : "MM",
            "region" : "ASA",
            "region_abbreviation" : "",
            "region_cluster" : "ASA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9a5"),
            "country" : "NEPAL",
            "country_abbreviation" : "NP",
            "region" : "ASA",
            "region_abbreviation" : "",
            "region_cluster" : "ASA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9a6"),
            "country" : "NIGERIA",
            "country_abbreviation" : "NG",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9a7"),
            "country" : "OMAN",
            "country_abbreviation" : "OM",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9a8"),
            "country" : "PAKISTAN",
            "country_abbreviation" : "PK",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9a9"),
            "country" : "PHILIPPINES",
            "country_abbreviation" : "PH",
            "region" : "ASA",
            "region_abbreviation" : "",
            "region_cluster" : "ASA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9aa"),
            "country" : "QATAR",
            "country_abbreviation" : "QA",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9ab"),
            "country" : "SAUDI ARABIA",
            "country_abbreviation" : "SA",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9ac"),
            "country" : "SIERRA LEONE",
            "country_abbreviation" : "SL",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9ad"),
            "country" : "SINGAPORE",
            "country_abbreviation" : "SG",
            "region" : "ASA",
            "region_abbreviation" : "",
            "region_cluster" : "ASA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9ae"),
            "country" : "SOUTH AFRICA",
            "country_abbreviation" : "ZA",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9af"),
            "country" : "SRI LANKA",
            "country_abbreviation" : "LK",
            "region" : "ASA",
            "region_abbreviation" : "",
            "region_cluster" : "ASA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9b0"),
            "country" : "SWEDEN",
            "country_abbreviation" : "SE",
            "region" : "Europe & Americas",
            "region_abbreviation" : "",
            "region_cluster" : "Europe & Americas",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9b1"),
            "country" : "SWITZERLAND",
            "country_abbreviation" : "CH",
            "region" : "Europe & Americas",
            "region_abbreviation" : "",
            "region_cluster" : "Europe & Americas",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9b2"),
            "country" : "TAIPEI BRANCH",
            "country_abbreviation" : "TPB",
            "region" : "GCNA",
            "region_abbreviation" : "",
            "region_cluster" : "GCNA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9b3"),
            "country" : "TAIWAN",
            "country_abbreviation" : "TW",
            "region" : "GCNA",
            "region_abbreviation" : "",
            "region_cluster" : "GCNA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9b4"),
            "country" : "TANZANIA",
            "country_abbreviation" : "TZ",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9b5"),
            "country" : "THAILAND",
            "country_abbreviation" : "TH",
            "region" : "ASA",
            "region_abbreviation" : "",
            "region_cluster" : "ASA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9b6"),
            "country" : "TURKEY",
            "country_abbreviation" : "TR",
            "region" : "Europe & Americas",
            "region_abbreviation" : "",
            "region_cluster" : "Europe & Americas",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9b7"),
            "country" : "UNITED ARAB EMIRATES",
            "country_abbreviation" : "AE",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9b8"),
            "country" : "UGANDA",
            "country_abbreviation" : "UG",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9b9"),
            "country" : "UNITED KINGDOM",
            "country_abbreviation" : "GB",
            "region" : "Europe & Americas",
            "region_abbreviation" : "",
            "region_cluster" : "Europe & Americas",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9ba"),
            "country" : "UNITED STATES",
            "country_abbreviation" : "US",
            "region" : "Europe & Americas",
            "region_abbreviation" : "",
            "region_cluster" : "Europe & Americas",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9bb"),
            "country" : "VIETNAM",
            "country_abbreviation" : "VN",
            "region" : "ASA",
            "region_abbreviation" : "",
            "region_cluster" : "ASA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9bc"),
            "country" : "ZAMBIA",
            "country_abbreviation" : "ZM",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9bd"),
            "country" : "ZIMBABWE",
            "country_abbreviation" : "ZW",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9be"),
            "country" : "GROUP",
            "country_abbreviation" : "GRPCOUNTRY",
            "region" : "GROUP",
            "region_abbreviation" : "",
            "region_cluster" : "GROUP",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9bf"),
            "country" : "AME REGIONAL TEAM",
            "country_abbreviation" : "AM",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9c0"),
            "country" : "EUROPE & AMERICAS REGIONAL TEAM",
            "country_abbreviation" : "EA",
            "region" : "Europe & Americas",
            "region_abbreviation" : "",
            "region_cluster" : "Europe & Americas",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9c1"),
            "country" : "ASA REGIONAL TEAM",
            "country_abbreviation" : "AS",
            "region" : "ASA",
            "region_abbreviation" : "",
            "region_cluster" : "ASA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9c2"),
            "country" : "GCNA REGIONAL TEAM",
            "country_abbreviation" : "GC",
            "region" : "GCNA",
            "region_abbreviation" : "",
            "region_cluster" : "GCNA",
            "enable" : true
        }
    ],
    "lifecycle" : [ 
        {
            "id" : "LC1",
            "name" : "Regulatory",
            "seq" : 0.0
        }, 
        {
            "id" : "LC2",
            "name" : "Risk Assessment and Controls",
            "seq" : 1.0
        }, 
        {
            "id" : "LC3",
            "name" : "Frameworks, Policy & Standards",
            "seq" : 2.0
        }, 
        {
            "id" : "LC4",
            "name" : "Oversight & Assurance",
            "seq" : 3.0
        }, 
        {
            "id" : "LC5",
            "name" : "Governance, Resources & Organisation",
            "seq" : 4.0
        }, 
        {
            "id" : "LC6",
            "name" : "Technology & Data",
            "seq" : 5.0
        }, 
        {
            "id" : "LC7",
            "name" : "Business Enablement",
            "seq" : 6.0
        }
    ],
    "scorecard" : [ 
        {
            "id" : "TBD3",
            "name" : "Transform and disrupt with digital",
            "seq" : 0,
            "businessdriver" : [ 
                {
                    "id" : "BD1",
                    "name" : "Other Financial Framework",
                    "seq" : 0
                }
            ]
        }, 
        {
            "id" : "TBD1",
            "name" : "Deliver the financial framework and optimize low returning markets",
            "seq" : 1,
            "businessdriver" : [ 
                {
                    "id" : "BD2",
                    "name" : "Network",
                    "seq" : 0
                }, 
                {
                    "id" : "BD3",
                    "name" : "Industries",
                    "seq" : 0
                }, 
                {
                    "id" : "BD4",
                    "name" : "Client Other",
                    "seq" : 0
                }, 
                {
                    "id" : "BD5",
                    "name" : "International Products",
                    "seq" : 0
                }, 
                {
                    "id" : "BD6",
                    "name" : "Segmentation",
                    "seq" : 0
                }, 
                {
                    "id" : "BD7",
                    "name" : "Liabilities",
                    "seq" : 0
                }, 
                {
                    "id" : "BD8",
                    "name" : "ME Model",
                    "seq" : 0
                }, 
                {
                    "id" : "BD9",
                    "name" : "PvB Referrals",
                    "seq" : 0
                }, 
                {
                    "id" : "BD10",
                    "name" : "Ecosystem",
                    "seq" : 0
                }
            ]
        }, 
        {
            "id" : "TBD4",
            "name" : " Purpose and People",
            "seq" : 3,
            "businessdriver" : [ 
                {
                    "id" : "BD16",
                    "name" : "Costs",
                    "seq" : 0
                }, 
                {
                    "id" : "BD17",
                    "name" : "Process Efficiency",
                    "seq" : 0
                }, 
                {
                    "id" : "BD18",
                    "name" : "Change Protocol",
                    "seq" : 0
                }, 
                {
                    "id" : "BD19",
                    "name" : "Organisational Model",
                    "seq" : 0
                }, 
                {
                    "id" : "BD20",
                    "name" : "Tail & Sub-optimal",
                    "seq" : 0
                }, 
                {
                    "id" : "BD21",
                    "name" : "Efficiency Other",
                    "seq" : 0
                }
            ]
        }, 
        {
            "id" : "TBD2",
            "name" : "Deliver our network and grow our affluent business",
            "seq" : 4,
            "businessdriver" : [ 
                {
                    "id" : "BD22",
                    "name" : "Digitization",
                    "seq" : 0
                }, 
                {
                    "id" : "BD23",
                    "name" : "Analytics, MIS and Frontline Tools",
                    "seq" : 0
                }
            ]
        }
    ],
    "initiativepopup" : "Summary View",
    "additionaltabs" : [],
    "initiativetags" : [ 
        {
            "id" : "",
            "icon" : "Nq8PXGD_ZlZvkx-Fnvt5WzQt0QGPQtj0--wBY2Tj8XwOCQQWWi-V8JuFvEHZe6wF3e--OE.png",
            "name" : "Operational Excellence",
            "position" : "BOTTOM_RIGHT",
            "enableadditionaldetail" : true,
            "enable" : true
        }, 
        {
            "id" : "",
            "icon" : "KaAziK859HAvUIF77AG0fyAXygdjN7eu--77pxaSeaV4Dmw3G1A_VBVPHMewEg-1bU--p84.png",
            "name" : "Process 84",
            "position" : "BOTTOM_RIGHT",
            "enableadditionaldetail" : true,
            "enable" : true
        }, 
        {
            "id" : "",
            "icon" : "l7wgjjHA_ZFcWZHH5Tsgdqy_qgtNOski--compilance.png",
            "name" : "Compliance Conduct Plan Activities",
            "position" : "BOTTOM_RIGHT",
            "enableadditionaldetail" : false,
            "enable" : true
        }, 
        {
            "id" : "",
            "icon" : "pB8IrhL9XaNX6HNa4mSxDECnAnG0XXf0--internal_remediation.png",
            "name" : "Internal Remediation",
            "position" : "BOTTOM_RIGHT",
            "enableadditionaldetail" : false,
            "enable" : true
        }, 
        {
            "id" : "",
            "icon" : "V5N79y40XvUnGSiDYZqlKZWEUfgZcRaF--external.png",
            "name" : "External Remediation",
            "position" : "BOTTOM_RIGHT",
            "enableadditionaldetail" : false,
            "enable" : true
        }, 
        {
            "id" : "",
            "icon" : "7T7suQJDbQiADPTeMuzA_uWhOvIPqWZd--bottomup.png",
            "name" : "Bottom-up Initiative (Country-led)",
            "position" : "BOTTOM_RIGHT",
            "enableadditionaldetail" : false,
            "enable" : true
        }, 
        {
            "id" : "",
            "icon" : "yQxMB2er0JaadhtnvBvKxLfa1xhHAzkO--bottom-down.png",
            "name" : "Top-down initiative (Group-led)",
            "position" : "BOTTOM_RIGHT",
            "enableadditionaldetail" : false,
            "enable" : true
        }, 
        {
            "id" : "",
            "icon" : "Regulatory_Mandatory.png",
            "name" : "Scorecard Deliverable",
            "position" : "BOTTOM_RIGHT",
            "enableadditionaldetail" : false,
            "enable" : true
        }
    ],
    "usermetric" : {
        "users" : {
            "region" : true,
            "segment" : true,
            "productassignment" : true,
            "functions" : false
        },
        "roles" : {
            "ispartofinitiativeowner" : true,
            "segment" : false,
            "productassignment" : false,
            "functions" : false
        }
    },
    "configfilters" : [ 
        {
            "_id" : "CF13",
            "name" : "Project Classification",
            "parent_id" : [],
            "listoptions" : [ 
                "value", 
                "text", 
                "color", 
                "icon"
            ],
            "list" : [ 
                {
                    "text" : "Small",
                    "value" : "Small",
                    "alias" : "",
                    "color" : "#ff7f27",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Medium",
                    "value" : "Medium",
                    "alias" : "",
                    "color" : "#00a2e8",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Large",
                    "value" : "Large",
                    "alias" : "",
                    "color" : "#22b14c",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : false,
            "isrequired" : false
        }, 
        {
            "_id" : "CF15",
            "name" : "Search",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "Free Text",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "filter"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF16",
            "name" : "Date Range",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "Monthly Period",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "filter"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF17",
            "name" : "Initiative Type",
            "parent_id" : [],
            "listoptions" : [ 
                "value", 
                "text", 
                "displayoption", 
                "icon"
            ],
            "list" : [ 
                {
                    "text" : "FCC-led Initiative",
                    "value" : "FCCLED",
                    "alias" : "FCC-led Initiative",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "fcc",
                    "description" : ""
                }, 
                {
                    "text" : "Compliance-led Initiative",
                    "value" : "COMPLIANCELED",
                    "alias" : "Compliance-led Initiative",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "compliance",
                    "description" : ""
                }, 
                {
                    "text" : "CFCC initiatives",
                    "value" : "FCCCOMPLIANCE",
                    "alias" : "CFCC initiatives",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "joint",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [ 
                {
                    "text" : "Dog Ear",
                    "value" : "dogear"
                }, 
                {
                    "text" : "None",
                    "value" : "none"
                }
            ],
            "type" : "list",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF19",
            "name" : "Display Progress",
            "parent_id" : [],
            "listoptions" : [ 
                "value", 
                "text", 
                "color"
            ],
            "list" : [ 
                {
                    "text" : "On Track",
                    "value" : "green",
                    "alias" : "",
                    "color" : "#00a800",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "At Risk",
                    "value" : "amber",
                    "alias" : "",
                    "color" : "#ff9900",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Mgmt Support Required",
                    "value" : "red",
                    "alias" : "",
                    "color" : "#a80000",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Delayed or Re-Baselined",
                    "value" : "grey",
                    "alias" : "",
                    "color" : "#808080",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF21",
            "name" : "Task Legend",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "Toggle Button",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "filter"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF22",
            "name" : "Business Driver",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : false,
            "isrequired" : true
        }, 
        {
            "_id" : "CF26",
            "name" : "Product",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF27",
            "name" : "Segment",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF27_1",
            "name" : "Sub Segment",
            "parent_id" : [ 
                "CF27"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : false,
            "isrequired" : false
        }, 
        {
            "_id" : "CF28",
            "name" : "Function",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF29",
            "name" : "Risk Subtype",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : false,
            "isrequired" : false
        }, 
        {
            "_id" : "CF29_1",
            "name" : "Risk Subtype",
            "parent_id" : [ 
                "CF29"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : false,
            "isrequired" : false
        }, 
        {
            "_id" : "CF30",
            "name" : "Conduct Theme",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : false,
            "isrequired" : false
        }, 
        {
            "_id" : "CF30_1",
            "name" : "Conduct Sub Type",
            "parent_id" : [ 
                "CF30"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF31",
            "name" : "Initiative Category",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF31_1",
            "name" : "Initiative Sub Category",
            "parent_id" : [ 
                "CF31"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : false,
            "isrequired" : false
        }, 
        {
            "_id" : "CF4",
            "name" : "Business Impact",
            "parent_id" : [],
            "listoptions" : [ 
                "value", 
                "text"
            ],
            "list" : [ 
                {
                    "text" : "Low",
                    "value" : "Low",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Medium",
                    "value" : "Medium",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "High",
                    "value" : "High",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF41",
            "name" : "AE/PM",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "filter"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF43",
            "name" : "Five Shifts",
            "parent_id" : [],
            "listoptions" : [ 
                "value", 
                "text"
            ],
            "list" : [ 
                {
                    "text" : "Build Scale",
                    "value" : "Build Scale",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Reshape the Balance Sheet",
                    "value" : "Business Mix",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Enforce Capital Allocation discipline",
                    "value" : "Capital allocation & Costs",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Innovate and Digitise",
                    "value" : "Leverage technology via digitisation",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Exit tail and reduce low returning RWA",
                    "value" : "Other enablers",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : false,
            "isrequired" : false
        }, 
        {
            "_id" : "CF52",
            "name" : "Clarity Staging Filter",
            "parent_id" : [],
            "value" : "",
            "listoptions" : [ 
                "value", 
                "text"
            ],
            "list" : [ 
                {
                    "value" : "Clarity ID",
                    "text" : "Clarity ID"
                }, 
                {
                    "value" : "Project Name",
                    "text" : "Project Name"
                }
            ],
            "displayoptions" : null,
            "description" : "",
            "enable" : true,
            "type" : "list",
            "category" : [ 
                "filter"
            ],
            "isrequired" : false,
            "speciallist" : []
        }
    ],
    "configsummaryfields" : [ 
        {
            "_id" : "CF0",
            "name" : "Accountable Executive",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [ 
                {
                    "text" : "Multi Select",
                    "value" : "multiselect",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Drop Down List",
                    "value" : "dropdownlist",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "multiselect",
            "description" : "",
            "displayoptions" : [],
            "type" : "single-choice",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF1",
            "name" : "Project Manager",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF10",
            "name" : "Planned Cost",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF11",
            "name" : "Region",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [ 
                "ALL"
            ],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF12",
            "name" : "Country",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [ 
                "ALL"
            ],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF13",
            "name" : "Project Classification",
            "parent_id" : [],
            "listoptions" : [ 
                "value", 
                "text", 
                "color", 
                "icon"
            ],
            "list" : [ 
                {
                    "text" : "Small",
                    "value" : "Small",
                    "alias" : "",
                    "color" : "#ff7f27",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Medium",
                    "value" : "Medium",
                    "alias" : "",
                    "color" : "#00a2e8",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Large",
                    "value" : "Large",
                    "alias" : "",
                    "color" : "#22b14c",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF14",
            "name" : "Initiative Tracking",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF17",
            "name" : "Initiative Group",
            "parent_id" : [],
            "listoptions" : [ 
                "value", 
                "text", 
                "displayoption", 
                "icon"
            ],
            "list" : [ 
                {
                    "text" : "FCC-led Initiative",
                    "value" : "FCCLED",
                    "alias" : "FCC-led Initiative",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "fcc",
                    "description" : ""
                }, 
                {
                    "text" : "Compliance-led Initiative",
                    "value" : "COMPLIANCELED",
                    "alias" : "Compliance-led Initiative",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "compliance",
                    "description" : ""
                }, 
                {
                    "text" : "CFCC initiatives",
                    "value" : "FCCCOMPLIANCE",
                    "alias" : "CFCC initiatives",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "joint",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [ 
                {
                    "text" : "Dog Ear",
                    "value" : "dogear"
                }, 
                {
                    "text" : "None",
                    "value" : "none"
                }
            ],
            "type" : "list",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF18",
            "name" : "Revised End Date",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF19",
            "name" : "Project Status",
            "parent_id" : [],
            "listoptions" : [ 
                "value", 
                "text", 
                "color"
            ],
            "list" : [ 
                {
                    "text" : "On Track",
                    "value" : "green",
                    "alias" : "",
                    "color" : "#00a800",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "At Risk",
                    "value" : "amber",
                    "alias" : "",
                    "color" : "#ff9900",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Mgmt Support Required",
                    "value" : "red",
                    "alias" : "",
                    "color" : "#a80000",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Delayed or Re-Baselined",
                    "value" : "grey",
                    "alias" : "",
                    "color" : "#808080",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF2",
            "name" : "Technology Lead",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF20",
            "name" : "Status",
            "parent_id" : [],
            "listoptions" : [ 
                "value", 
                "text"
            ],
            "list" : [ 
                {
                    "text" : "Live",
                    "value" : "LIVE",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Retired",
                    "value" : "RETIRED",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field"
            ],
            "enable" : false,
            "isrequired" : false
        }, 
        {
            "_id" : "CF22",
            "name" : "Business Driver",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : false,
            "isrequired" : true
        }, 
        {
            "_id" : "CF23",
            "name" : "Useful Resources",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF24",
            "name" : "Metric Benchmark",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF25",
            "name" : "Is Initiative Tracked",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF26",
            "name" : "Product Assignment",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF27",
            "name" : "Segment",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF27_1",
            "name" : "Sub Segment",
            "parent_id" : [ 
                "CF27"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF28",
            "name" : "Function",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF29",
            "name" : "Principle Risk",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [ 
                "ALL"
            ],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF29_1",
            "name" : "Risk Subtype",
            "parent_id" : [ 
                "CF29"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [ 
                "ALL"
            ],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF3",
            "name" : "Strategic Sponsor",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF30",
            "name" : "Conduct Theme",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [ 
                "ALL"
            ],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF30_1",
            "name" : "Conduct Subtype",
            "parent_id" : [ 
                "CF30"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [ 
                "ALL"
            ],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF31",
            "name" : "Initiative Type",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [ 
                "ALL"
            ],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF31_1",
            "name" : "Initiative Sub Type",
            "parent_id" : [ 
                "CF31"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [ 
                "ALL"
            ],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF31_2",
            "name" : "Criticality Rating",
            "parent_id" : [ 
                "CF31"
            ],
            "listoptions" : [ 
                "value", 
                "text"
            ],
            "list" : [ 
                {
                    "text" : "A",
                    "value" : "A",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "B",
                    "value" : "B",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "C",
                    "value" : "C",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "N/A",
                    "value" : "N/A",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF32",
            "name" : "Tracking ID",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF33",
            "name" : "Risk & Issues",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF33_1",
            "name" : "Risk Name",
            "parent_id" : [ 
                "CF33"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF33_10",
            "name" : "Risk Category",
            "parent_id" : [ 
                "CF33"
            ],
            "listoptions" : [ 
                "value", 
                "text"
            ],
            "list" : [ 
                {
                    "text" : "Flexibility",
                    "value" : "Flexibility",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Functionability",
                    "value" : "Functionability",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Human Interface",
                    "value" : "Human Interface",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Implementation",
                    "value" : "Implementation",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Interdependencies",
                    "value" : "Interdependencies",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Objectives",
                    "value" : "Objectives",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Organizational Culture",
                    "value" : "Organizational Culture",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Resource Avaibility",
                    "value" : "Resource Avaibility",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Sponsorship",
                    "value" : "Sponsorship",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Supportability",
                    "value" : "Supportability",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Technical",
                    "value" : "Technical",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF33_11",
            "name" : "Risk Symptoms",
            "parent_id" : [ 
                "CF33"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF33_2",
            "name" : "Risk Description",
            "parent_id" : [ 
                "CF33"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF33_3",
            "name" : "Risk Country",
            "parent_id" : [ 
                "CF33"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF33_4",
            "name" : "Target Resolution",
            "parent_id" : [ 
                "CF33"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF33_5",
            "name" : "Risk Severity",
            "parent_id" : [ 
                "CF33"
            ],
            "listoptions" : [ 
                "value", 
                "text"
            ],
            "list" : [ 
                {
                    "text" : "Low",
                    "value" : "Low",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Medium",
                    "value" : "Medium",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "High",
                    "value" : "High",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF33_6",
            "name" : "Risk Priority",
            "parent_id" : [ 
                "CF33"
            ],
            "listoptions" : [ 
                "value", 
                "text"
            ],
            "list" : [ 
                {
                    "text" : "Low",
                    "value" : "Low",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Medium",
                    "value" : "Medium",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "High",
                    "value" : "High",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF33_7",
            "name" : "Risk Status",
            "parent_id" : [ 
                "CF33"
            ],
            "listoptions" : [ 
                "value", 
                "text"
            ],
            "list" : [ 
                {
                    "text" : "Open",
                    "value" : "Open",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Work in Progress",
                    "value" : "WorkinProgress",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Resolved",
                    "value" : "Resolved",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Closed",
                    "value" : "Closed",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF33_8",
            "name" : "Risk Probability",
            "parent_id" : [ 
                "CF33"
            ],
            "listoptions" : [ 
                "value", 
                "text"
            ],
            "list" : [ 
                {
                    "text" : "Low",
                    "value" : "Low",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Medium",
                    "value" : "Medium",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "High",
                    "value" : "High",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF33_9",
            "name" : "Risk Impact",
            "parent_id" : [ 
                "CF33"
            ],
            "listoptions" : [ 
                "value", 
                "text"
            ],
            "list" : [ 
                {
                    "text" : "Low",
                    "value" : "Low",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Medium",
                    "value" : "Medium",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "High",
                    "value" : "High",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF34",
            "name" : "Stakeholder",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF36",
            "name" : "Global",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF37",
            "name" : "Scorecard",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF38",
            "name" : "Initiative Category",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF4",
            "name" : "Business Impact",
            "parent_id" : [],
            "listoptions" : [ 
                "value", 
                "text"
            ],
            "list" : [ 
                {
                    "text" : "Low",
                    "value" : "Low",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Medium",
                    "value" : "Medium",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "High",
                    "value" : "High",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF42",
            "name" : "Is Global Apply",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : false,
            "isrequired" : false
        }, 
        {
            "_id" : "CF43",
            "name" : "Five Shifts",
            "parent_id" : [],
            "listoptions" : [ 
                "value", 
                "text"
            ],
            "list" : [ 
                {
                    "text" : "Build Scale",
                    "value" : "Build Scale",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Reshape the Balance Sheet",
                    "value" : "Business Mix",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Enforce Capital Allocation discipline",
                    "value" : "Capital allocation & Costs",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Innovate and Digitise",
                    "value" : "Leverage technology via digitisation",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Exit tail and reduce low returning RWA",
                    "value" : "Other enablers",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : false,
            "isrequired" : false
        }, 
        {
            "_id" : "CF5",
            "name" : "Problem Statement",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF6",
            "name" : "Project Description",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF7",
            "name" : "Key Deliverables/Milestones",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF7_0",
            "name" : "Deliverable",
            "parent_id" : [ 
                "CF7"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF7_1",
            "name" : "Start Date",
            "parent_id" : [ 
                "CF7"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF7_10",
            "name" : "Type",
            "parent_id" : [ 
                "CF7"
            ],
            "listoptions" : [ 
                "value", 
                "text"
            ],
            "list" : [ 
                {
                    "text" : "ECG",
                    "value" : "ECG",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Enterprise Change Governance Checklist"
                }, 
                {
                    "text" : "HLBR",
                    "value" : "HLBR",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "High Level Business Requirements"
                }, 
                {
                    "text" : "ORA",
                    "value" : "ORA",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Operational Risk Assessment"
                }, 
                {
                    "text" : "PCA",
                    "value" : "PCA",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Project Complexity Assessment"
                }, 
                {
                    "text" : "Pg Benefits Plan",
                    "value" : "Pg Benefits Plan",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Programme Benefits Management Plan"
                }, 
                {
                    "text" : "Pg Benefits Report",
                    "value" : "Pg Benefits Report",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Programme Benefits Report"
                }, 
                {
                    "text" : "Pg Closure",
                    "value" : "Pg Closure",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Programme Closure Report"
                }, 
                {
                    "text" : "Pg ToR",
                    "value" : "Pg ToR",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Programme Steering Committee Terms of Reference"
                }, 
                {
                    "text" : "PgED",
                    "value" : "PgED",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Programme Execution Document"
                }, 
                {
                    "text" : "PgMP",
                    "value" : "PgMP",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Programme Management Plan"
                }, 
                {
                    "text" : "Pj Benefits Plan",
                    "value" : "Pj Benefits Plan",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Project Management Plan"
                }, 
                {
                    "text" : "Pj Benefits Report",
                    "value" : "Pj Benefits Report",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Project Benefits Management Plan"
                }, 
                {
                    "text" : "Pj Closure",
                    "value" : "Pj Closure",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Project Closure Report"
                }, 
                {
                    "text" : "Pj ToR",
                    "value" : "Pj ToR",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Project Steering Committee Terms of Reference"
                }, 
                {
                    "text" : "PjED",
                    "value" : "PjED",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Project Execution Document"
                }, 
                {
                    "text" : "PjMP",
                    "value" : "PjMP",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Project Management Plan"
                }, 
                {
                    "text" : "SDF",
                    "value" : "SDF",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Systems Delivery Framework "
                }, 
                {
                    "text" : "Pilot Go-Live",
                    "value" : "Pilot Go-Live",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Pilot Go-Live"
                }, 
                {
                    "text" : "Go-Live",
                    "value" : "Go-Live",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Go-Live Confirmation"
                }, 
                {
                    "text" : "Phase Gate",
                    "value" : "Phase Gate",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Phase Gate Sign-off"
                }, 
                {
                    "text" : "Commercialization Plan",
                    "value" : "Commercialization Plan",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Commercialization Plan"
                }, 
                {
                    "text" : "N/A",
                    "value" : "N/A",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Not a Phase Gate milestone"
                }, 
                {
                    "text" : "AED",
                    "value" : "AED",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Agile Execution Document"
                }, 
                {
                    "text" : "ADMP",
                    "value" : "ADMP",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Agile Management Plan"
                }, 
                {
                    "text" : "Sprint 0",
                    "value" : "Sprint 0",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Sprint 0"
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF7_11",
            "name" : "RAG",
            "parent_id" : [ 
                "CF7"
            ],
            "listoptions" : [ 
                "value", 
                "text", 
                "color"
            ],
            "list" : [ 
                {
                    "text" : "Red",
                    "value" : "Red",
                    "alias" : "",
                    "color" : "#C00000",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Amber",
                    "value" : "Amber",
                    "alias" : "",
                    "color" : "#FF9900",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Green",
                    "value" : "Green",
                    "alias" : "",
                    "color" : "#009D44",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF7_12",
            "name" : "Progress Completion",
            "parent_id" : [ 
                "CF7"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF7_13",
            "name" : "Planned Cost",
            "parent_id" : [ 
                "CF7"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : false,
            "isrequired" : false
        }, 
        {
            "_id" : "CF7_14",
            "name" : "Five Shift",
            "parent_id" : [ 
                "CF7"
            ],
            "listoptions" : [ 
                "value", 
                "text"
            ],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field"
            ],
            "enable" : false,
            "isrequired" : false
        }, 
        {
            "_id" : "CF7_2",
            "name" : "End Date",
            "parent_id" : [ 
                "CF7"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF7_3",
            "name" : "Revised End Date",
            "parent_id" : [ 
                "CF7"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF7_4",
            "name" : "Country",
            "parent_id" : [ 
                "CF7"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [ 
                "ALL"
            ],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF7_5",
            "name" : "Complete",
            "parent_id" : [ 
                "CF7"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : false,
            "isrequired" : false
        }, 
        {
            "_id" : "CF7_6",
            "name" : "Status",
            "parent_id" : [ 
                "CF7"
            ],
            "listoptions" : [ 
                "value", 
                "text"
            ],
            "list" : [ 
                {
                    "text" : "Completed",
                    "value" : "Completed",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Not Started",
                    "value" : "Not Started",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Started",
                    "value" : "Started",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF7_7",
            "name" : "Status Comment",
            "parent_id" : [ 
                "CF7"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF7_8",
            "name" : "Owner",
            "parent_id" : [ 
                "CF7"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF7_9",
            "name" : "Region",
            "parent_id" : [ 
                "CF7"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [ 
                "ALL"
            ],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF8",
            "name" : "Progress Completion",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [ 
                {
                    "text" : "Calculated",
                    "value" : "calculated",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Manual Input",
                    "value" : "manual",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "manual",
            "description" : "",
            "displayoptions" : [],
            "type" : "single-choice",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF9",
            "name" : "Project Driver",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }
    ],
    "configscorecard" : [ 
        {
            "_id" : "CF53",
            "name" : "Weightage",
            "parent_id" : [],
            "value" : "",
            "listoptions" : [],
            "list" : null,
            "displayoptions" : null,
            "description" : "",
            "enable" : true,
            "type" : "none",
            "category" : [ 
                "scorecard"
            ],
            "isrequired" : false,
            "speciallist" : []
        }
    ],
    "periodfrom" : 2016,
    "periodto" : 2018,
    "projectnamemaxlength" : 20,
    "initiativetagmaxlimit" : 4,
    "description" : "",
    "segment" : [ 
        {
            "_id" : ObjectId("5b4c070501112617537cc93c"),
            "name" : "N/A",
            "subsegment" : [ 
                {
                    "_id" : ObjectId("5b569070dfd3d52632e94b82"),
                    "name" : "N/A"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b4c070501112617537cc93d"),
            "name" : "Corporate, Commercial & Institutional Banking",
            "subsegment" : [ 
                {
                    "_id" : ObjectId("5b569159dfd3d52632e94b83"),
                    "name" : "CB - High Value Small Business"
                }, 
                {
                    "_id" : ObjectId("5b569159dfd3d52632e94b84"),
                    "name" : "CB - Middle Enterprises"
                }, 
                {
                    "_id" : ObjectId("5b569159dfd3d52632e94b85"),
                    "name" : "CB - Middle Markets"
                }, 
                {
                    "_id" : ObjectId("5b569159dfd3d52632e94b86"),
                    "name" : "CB - Local Corporates"
                }, 
                {
                    "_id" : ObjectId("5b569159dfd3d52632e94b87"),
                    "name" : "GB - Banks & Broker Dealers"
                }, 
                {
                    "_id" : ObjectId("5b569159dfd3d52632e94b88"),
                    "name" : "GB - Commercial Real Estate"
                }, 
                {
                    "_id" : ObjectId("5b569159dfd3d52632e94b89"),
                    "name" : "GB - Financial & Strategic Investors Group"
                }, 
                {
                    "_id" : ObjectId("5b569159dfd3d52632e94b8a"),
                    "name" : "GB - Global Industries Group"
                }, 
                {
                    "_id" : ObjectId("5b569159dfd3d52632e94b8b"),
                    "name" : "GB - Global Subsidiaries"
                }, 
                {
                    "_id" : ObjectId("5b569159dfd3d52632e94b8c"),
                    "name" : "GB - Investors & Insurance"
                }, 
                {
                    "_id" : ObjectId("5b569159dfd3d52632e94b8d"),
                    "name" : "GB - Public Sector & Development Organisation"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b4c070601112617537cc93e"),
            "name" : "Private Banking",
            "subsegment" : [ 
                {
                    "_id" : ObjectId("5b569070dfd3d52632e94b82"),
                    "name" : "N/A"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b4c070601112617537cc940"),
            "name" : "Retail Banking",
            "subsegment" : [ 
                {
                    "_id" : ObjectId("5b569159dfd3d52632e94b8e"),
                    "name" : "Retail Business Banking"
                }, 
                {
                    "_id" : ObjectId("5b569159dfd3d52632e94b8f"),
                    "name" : "Retail Individual Banking"
                }
            ]
        }
    ],
    "productassignment" : [ 
        {
            "_id" : ObjectId("5b39f60ba7da87c5e8da382b"),
            "name" : "N/A"
        }, 
        {
            "_id" : ObjectId("5b39f60ba7da87c5e8da382c"),
            "name" : "Trade"
        }, 
        {
            "_id" : ObjectId("5b39f60ba7da87c5e8da382d"),
            "name" : "Securities Services (SS)"
        }, 
        {
            "_id" : ObjectId("5b39f60ba7da87c5e8da382e"),
            "name" : "Digitization and Client Access (DCA)"
        }, 
        {
            "_id" : ObjectId("5b39f60ba7da87c5e8da382f"),
            "name" : "Financial Markets (FM)"
        }, 
        {
            "_id" : ObjectId("5b39f60ba7da87c5e8da3830"),
            "name" : "Corporate Finance (CF)"
        }, 
        {
            "_id" : ObjectId("5b39f60ba7da87c5e8da3831"),
            "name" : "Corporate Lending (CL)"
        }, 
        {
            "_id" : ObjectId("5b39f60ba7da87c5e8da3832"),
            "name" : "Principal Finance (PF)"
        }, 
        {
            "_id" : ObjectId("5b39f60ba7da87c5e8da3833"),
            "name" : "Cash (CBR)"
        }, 
        {
            "_id" : ObjectId("5b39f60ba7da87c5e8da3834"),
            "name" : "Cash (non-CBR)"
        }, 
        {
            "_id" : ObjectId("5b39f60ba7da87c5e8da3835"),
            "name" : "Retail"
        }, 
        {
            "_id" : ObjectId("5b39f60ba7da87c5e8da3836"),
            "name" : "Wealth management"
        }
    ],
    "conducttheme" : [ 
        {
            "_id" : ObjectId("5b3b0407a7da87c5e8da3929"),
            "name" : "N/A",
            "subtype" : [ 
                {
                    "_id" : ObjectId("5b4d9e9ceaad0e985e76f5aa"),
                    "name" : "N/A"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b39f983a7da87c5e8da3842"),
            "name" : "Our Business",
            "subtype" : [ 
                {
                    "_id" : ObjectId("5b4d9f48eaad0e985e76f5ab"),
                    "name" : "Transparent Business Model"
                }, 
                {
                    "_id" : ObjectId("5b4d9f48eaad0e985e76f5ac"),
                    "name" : "Effective Governance"
                }, 
                {
                    "_id" : ObjectId("5b4d9f48eaad0e985e76f5ad"),
                    "name" : "Robust Infrastructure"
                }, 
                {
                    "_id" : ObjectId("5b4d9f48eaad0e985e76f5ae"),
                    "name" : "Exemplary Business Practices"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b39f984a7da87c5e8da3846"),
            "name" : "Each of Us",
            "subtype" : [ 
                {
                    "_id" : ObjectId("5b4d9f48eaad0e985e76f5af"),
                    "name" : "Ethical Leadership"
                }, 
                {
                    "_id" : ObjectId("5b4d9f48eaad0e985e76f5b0"),
                    "name" : "Aligned Incentives"
                }, 
                {
                    "_id" : ObjectId("5b4d9f48eaad0e985e76f5b1"),
                    "name" : "People Competency & Integrity"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b39f984a7da87c5e8da384c"),
            "name" : "Our External Stakeholders",
            "subtype" : [ 
                {
                    "_id" : ObjectId("5b4d9f48eaad0e985e76f5b2"),
                    "name" : "Fair Outcomes for Clients"
                }, 
                {
                    "_id" : ObjectId("5b4d9f48eaad0e985e76f5b3"),
                    "name" : "Effective Markets"
                }, 
                {
                    "_id" : ObjectId("5b4d9f48eaad0e985e76f5b4"),
                    "name" : "Financial Crime Compliance"
                }, 
                {
                    "_id" : ObjectId("5b4d9f48eaad0e985e76f5b5"),
                    "name" : "Stakeholder Confidence"
                }
            ]
        }
    ],
    "initiativecategory" : [ 
        {
            "_id" : ObjectId("5b4da21beaad0e985e76f5b7"),
            "name" : "FCC Group MAP",
            "subcategory" : [ 
                {
                    "_id" : ObjectId("5b4da21beaad0e985e76f5b8"),
                    "name" : "A. Governance, Oversight & Organisation"
                }, 
                {
                    "_id" : ObjectId("5b4da21beaad0e985e76f5b9"),
                    "name" : "B. Risk Assessment"
                }, 
                {
                    "_id" : ObjectId("5b4da21beaad0e985e76f5ba"),
                    "name" : "C. Policies, Standards and Procedures"
                }, 
                {
                    "_id" : ObjectId("5b4da21beaad0e985e76f5bb"),
                    "name" : "D. People"
                }, 
                {
                    "_id" : ObjectId("5b4da21beaad0e985e76f5bc"),
                    "name" : "E. Learning and Awareness"
                }, 
                {
                    "_id" : ObjectId("5b4da21beaad0e985e76f5bd"),
                    "name" : "F. CDD/EDD"
                }, 
                {
                    "_id" : ObjectId("5b4da21beaad0e985e76f5be"),
                    "name" : "G. Surveillance"
                }, 
                {
                    "_id" : ObjectId("5b4da21beaad0e985e76f5bf"),
                    "name" : "H. Investigations and Disclosures"
                }, 
                {
                    "_id" : ObjectId("5b4da21beaad0e985e76f5c0"),
                    "name" : "I. Assurance and Testing"
                }, 
                {
                    "_id" : ObjectId("5b4da21beaad0e985e76f5c1"),
                    "name" : "J. MI and Data Management"
                }, 
                {
                    "_id" : ObjectId("5b4da21beaad0e985e76f5c2"),
                    "name" : "K. Sanctions"
                }, 
                {
                    "_id" : ObjectId("5b4da21beaad0e985e76f5c3"),
                    "name" : "L. ABC"
                }, 
                {
                    "_id" : ObjectId("5b4da21beaad0e985e76f5c4"),
                    "name" : "M. Tax"
                }, 
                {
                    "_id" : ObjectId("5b4da21beaad0e985e76f5c5"),
                    "name" : "N. Regions and Countries"
                }, 
                {
                    "_id" : ObjectId("5b4da21beaad0e985e76f5c6"),
                    "name" : "O. Business"
                }, 
                {
                    "_id" : ObjectId("5b4da21beaad0e985e76f5c7"),
                    "name" : "P. Americas"
                }, 
                {
                    "_id" : ObjectId("5b4da21beaad0e985e76f5c8"),
                    "name" : "Q. Other Matters"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b4da21beaad0e985e76f5c9"),
            "name" : "FCC Country MAP",
            "subcategory" : []
        }, 
        {
            "_id" : ObjectId("5b4da21beaad0e985e76f5ca"),
            "name" : "FCC TOP Objectives",
            "subcategory" : []
        }, 
        {
            "_id" : ObjectId("5b4da21beaad0e985e76f5cb"),
            "name" : "FCC PRF & Gov",
            "subcategory" : []
        }, 
        {
            "_id" : ObjectId("5b4da21beaad0e985e76f5cc"),
            "name" : "CAP - Mandatory Regulatory Requirements",
            "subcategory" : []
        }, 
        {
            "_id" : ObjectId("5b4da21beaad0e985e76f5cd"),
            "name" : "CAP - Strategic Initiatives",
            "subcategory" : []
        }, 
        {
            "_id" : ObjectId("5b4da21beaad0e985e76f5ce"),
            "name" : "CAP - Other Initiatives",
            "subcategory" : []
        }, 
        {
            "_id" : ObjectId("5b4da21beaad0e985e76f5cf"),
            "name" : "Non-CAP -  Initiatives",
            "subcategory" : []
        }
    ],
    "principlerisk" : [ 
        {
            "_id" : ObjectId("5b4d9dcbeaad0e985e76f5a9"),
            "name" : "N/A",
            "risksubtype" : [ 
                {
                    "_id" : ObjectId("5b4d9baceaad0e985e76f58a"),
                    "name" : "N/A"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b568bc3dfd3d52632e94b3d"),
            "name" : "Compliance",
            "risksubtype" : [ 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b3e"),
                    "name" : "Banking Secrecy"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b3f"),
                    "name" : "Best Execution"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b40"),
                    "name" : "Client Asset and Money Protection"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b41"),
                    "name" : "Client Tax Information Compliance"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b42"),
                    "name" : "Competition and Anti-Trust"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b43"),
                    "name" : "Conduct"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b44"),
                    "name" : "Conflicts of Interest"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b45"),
                    "name" : "Cross Border"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b46"),
                    "name" : "Fair Outcomes for Clients - Account Management and Post Sales Practices"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b47"),
                    "name" : "Fair Outcomes for Clients - Appropriateness and Suitability"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b48"),
                    "name" : "Fair Outcomes for Clients - Client Communication"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b49"),
                    "name" : "Fair Outcomes for Clients - Sales Practices"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b4a"),
                    "name" : "Fiduciary Governance"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b4b"),
                    "name" : "General Legal and Regulatory Compliance"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b4c"),
                    "name" : "Licensing of Entities"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b4d"),
                    "name" : "Licensing of Individuals"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b4e"),
                    "name" : "Market Manipulation"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b4f"),
                    "name" : "Misuse of Information"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b50"),
                    "name" : "Non-Financial Regulatory Reporting"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b51"),
                    "name" : "Privacy"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b52"),
                    "name" : "Records Management"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b53"),
                    "name" : "Regulatory Commitments"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b54"),
                    "name" : "Senior Management Individual Accountability"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b55"),
                    "name" : "Trading Regulations"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b56"),
                    "name" : "Transaction & Trade Reporting"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b568bc3dfd3d52632e94b57"),
            "name" : "Conduct",
            "risksubtype" : [ 
                {
                    "_id" : ObjectId("5b4d9baceaad0e985e76f58a"),
                    "name" : "N/A"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b568bc3dfd3d52632e94b58"),
            "name" : "Finance",
            "risksubtype" : [ 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b59"),
                    "name" : "Accounting and Financial Reporting"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b5a"),
                    "name" : "Financial Regulatory Reporting"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b5b"),
                    "name" : "Prudential - Capital "
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b5c"),
                    "name" : "Prudential - Liquidity"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b5d"),
                    "name" : "Prudential - Recovery & Resolution Planning"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b568bc3dfd3d52632e94b5e"),
            "name" : "Credit risk",
            "risksubtype" : [ 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b5f"),
                    "name" : "Credit Risk Rules"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b60"),
                    "name" : "Customer Insolvency"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b61"),
                    "name" : "Prudential - Credit Risk"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b568bc3dfd3d52632e94b62"),
            "name" : "Enterprise Risk Management",
            "risksubtype" : [ 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b63"),
                    "name" : "Prudential – Risk Governance"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b568bc3dfd3d52632e94b64"),
            "name" : "Financial Crime Compliance",
            "risksubtype" : [ 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b65"),
                    "name" : "Anti-Bribery and Corruption"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b66"),
                    "name" : "Anti-Money Laundering (and Terrorist Financing)"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b67"),
                    "name" : "Sanctions"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b68"),
                    "name" : "Tax Evasion"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b568bc3dfd3d52632e94b69"),
            "name" : "Office of the Chief Information Security Officer",
            "risksubtype" : [ 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b6a"),
                    "name" : "Information and Cyber Security"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b568bc3dfd3d52632e94b6b"),
            "name" : "Market Risk",
            "risksubtype" : [ 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b6c"),
                    "name" : "Market Risk Rules"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b6d"),
                    "name" : "Prudential - Market Risk"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b568bc3dfd3d52632e94b6e"),
            "name" : "Business Efficiency",
            "risksubtype" : [ 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b6f"),
                    "name" : "Outsourcing"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b568bc3dfd3d52632e94b70"),
            "name" : "Group Company Secretary",
            "risksubtype" : [ 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b71"),
                    "name" : "Corporate Governance and Authorities"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b72"),
                    "name" : "Exchange Listing Rules"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b568bc3dfd3d52632e94b73"),
            "name" : "Group Internal Audit",
            "risksubtype" : [ 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b74"),
                    "name" : "Internal Audit"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b568bc3dfd3d52632e94b75"),
            "name" : "Human Resource",
            "risksubtype" : [ 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b76"),
                    "name" : "Employment, remuneration and benefits"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b568bc3dfd3d52632e94b77"),
            "name" : "Legal",
            "risksubtype" : [ 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b78"),
                    "name" : "Legal Enforceability"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b568bc3dfd3d52632e94b79"),
            "name" : "Operational Risk",
            "risksubtype" : [ 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b7a"),
                    "name" : "Fraud Prevention Rules"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b7b"),
                    "name" : "Operational Risk Rules"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b7c"),
                    "name" : "Product Approval and Governance"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b7d"),
                    "name" : "Prudential - Operational Risk"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b568bc3dfd3d52632e94b7e"),
            "name" : "Property",
            "risksubtype" : [ 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b7f"),
                    "name" : "Safety and Security"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b568bc3dfd3d52632e94b80"),
            "name" : "Group Tax",
            "risksubtype" : [ 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b81"),
                    "name" : "Tax"
                }
            ]
        }
    ],
    "created_date" : ISODate("2018-01-29T07:01:44.264Z"),
    "created_by" : "ss",
    "updated_date" : ISODate("2018-12-11T07:28:23.874Z"),
    "updated_by" : "ss_private",
    "type" : "internal"
})
db.getSiblingDB(database).ss_application.save({
    "_id" : ObjectId("5c880a141fa32be5015ac121"),
    "name" : "Operation",
    "logo" : "",
    "modules" : [ 
        {
            "_id" : "M001",
            "name" : "Scorecard",
            "param_name" : "Scorecard",
            "type" : "core",
            "parent_id" : [],
            "image_src" : "Scorecard.PNG",
            "path" : "scorecardinitiative",
            "seq" : 1
        }, 
        {
            "_id" : "M002",
            "name" : "Initiative",
            "param_name" : "Initiative",
            "type" : "core",
            "parent_id" : [],
            "image_src" : "Initiative.PNG",
            "path" : "scorecardinitiative",
            "seq" : 0
        }, 
        {
            "_id" : "M003",
            "name" : "Country Analysis",
            "param_name" : "CountryAnalysis",
            "type" : "additional",
            "parent_id" : [ 
                "M001"
            ],
            "image_src" : "CountryAnalysis.PNG",
            "path" : "scorecardinitiative",
            "seq" : 0
        }, 
        {
            "_id" : "M004",
            "name" : "Metric Drivers",
            "param_name" : "MetricDrivers",
            "type" : "additional",
            "parent_id" : [ 
                "M001", 
                "M002"
            ],
            "image_src" : "MetricDrivers.PNG",
            "path" : "scorecardinitiative",
            "seq" : 0
        }, 
        {
            "_id" : "M005",
            "name" : "Metric Analysis",
            "param_name" : "MetricAnalysis",
            "type" : "additional",
            "parent_id" : [ 
                "M001"
            ],
            "image_src" : "MetricAnalysis.PNG",
            "path" : "scorecardinitiative",
            "seq" : 0
        }, 
        {
            "_id" : "M006",
            "name" : "Adoption Module",
            "param_name" : "AdoptionModule",
            "type" : "additional",
            "parent_id" : [ 
                "M002"
            ],
            "image_src" : "Adoption.PNG",
            "path" : "adoptionmodule",
            "seq" : 8
        }, 
        {
            "_id" : "M007",
            "name" : "Metric Validation",
            "param_name" : "StagingArea",
            "type" : "dependency",
            "parent_id" : [ 
                "M001"
            ],
            "image_src" : "",
            "path" : "metricvalidation",
            "seq" : 5
        }, 
        {
            "_id" : "M008",
            "name" : "Initiative",
            "param_name" : "Initiative",
            "type" : "tabular_dependency",
            "parent_id" : [ 
                "M001"
            ],
            "image_src" : "",
            "path" : "scorecardinitiative",
            "seq" : 0
        }, 
        {
            "_id" : "M009",
            "name" : "Scorecard",
            "param_name" : "Scorecard",
            "type" : "tabular_dependency",
            "parent_id" : [ 
                "M001"
            ],
            "image_src" : "",
            "path" : "scorecardinitiative",
            "seq" : 0
        }, 
        {
            "_id" : "M010",
            "name" : "Shared Agenda",
            "param_name" : "SharedAgenda",
            "type" : "tabular_dependency",
            "parent_id" : [ 
                "M001"
            ],
            "image_src" : "",
            "path" : "scorecardinitiative",
            "seq" : 0
        }, 
        {
            "_id" : "M011",
            "name" : "Metric Country Analysis",
            "param_name" : "CountryAnalysis",
            "type" : "tabular_dependency",
            "parent_id" : [ 
                "M001"
            ],
            "image_src" : "",
            "path" : "scorecardinitiative",
            "seq" : 0
        }, 
        {
            "_id" : "M015",
            "name" : "Metric Upload",
            "param_name" : "MetricUpload",
            "type" : "dependency",
            "parent_id" : [ 
                "M001"
            ],
            "image_src" : "",
            "path" : "metricupload",
            "seq" : 7
        }, 
        {
            "_id" : "M017",
            "name" : "Overview",
            "param_name" : "Overview",
            "type" : "dependency",
            "parent_id" : [ 
                "M001", 
                "M002"
            ],
            "image_src" : "",
            "path" : "overview",
            "seq" : 6
        }, 
        {
            "_id" : "M023",
            "name" : "Clarity Staging",
            "param_name" : "InitiativeStaging",
            "type" : "dependency",
            "parent_id" : [ 
                "M001", 
                "M002"
            ],
            "image_src" : "",
            "path" : "initiativestaging",
            "seq" : 9
        }, 
        {
            "_id" : "M012",
            "name" : "Bef Sponsor",
            "param_name" : "BefSponsor",
            "type" : "dependency",
            "parent_id" : [ 
                "M002"
            ],
            "image_src" : "",
            "path" : "befsponsor",
            "seq" : 3
        }, 
        {
            "_id" : "M013",
            "name" : "Initiative Master",
            "param_name" : "InitiativeMaster",
            "type" : "dependency",
            "parent_id" : [ 
                "M002"
            ],
            "image_src" : "",
            "path" : "initiativemaster",
            "seq" : 2
        }, 
        {
            "_id" : "M016",
            "name" : "Configuration",
            "param_name" : "Configuration",
            "type" : "primary",
            "parent_id" : [],
            "image_src" : "",
            "path" : "configuration",
            "seq" : 6
        }, 
        {
            "_id" : "M018",
            "name" : "Application Audit Trail",
            "param_name" : "ApplicationAuditTrail",
            "type" : "tabular_primary",
            "parent_id" : [ 
                "M016"
            ],
            "image_src" : "",
            "path" : "configuration",
            "seq" : 0
        }, 
        {
            "_id" : "M019",
            "name" : "Role Management",
            "param_name" : "RoleManagement",
            "type" : "tabular_primary",
            "parent_id" : [ 
                "M016"
            ],
            "image_src" : "",
            "path" : "configuration",
            "seq" : 0
        }, 
        {
            "_id" : "M020",
            "name" : "User Audit Trail",
            "param_name" : "UserAuditTrail",
            "type" : "tabular_primary",
            "parent_id" : [ 
                "M016"
            ],
            "image_src" : "",
            "path" : "configuration",
            "seq" : 0
        }, 
        {
            "_id" : "M021",
            "name" : "Application Usage Detail",
            "param_name" : "ApplicationUsageDetail",
            "type" : "tabular_primary",
            "parent_id" : [ 
                "M016"
            ],
            "image_src" : "",
            "path" : "configuration",
            "seq" : 0
        }, 
        {
            "_id" : "M022",
            "name" : "User Management",
            "param_name" : "UserManagement",
            "type" : "tabular_primary",
            "parent_id" : [ 
                "M016"
            ],
            "image_src" : "",
            "path" : "configuration",
            "seq" : 0
        }
    ],
    "geography" : [ 
        {
            "_id" : ObjectId("5b7bb3ac48a002582424e97f"),
            "country" : "ANGOLA",
            "country_abbreviation" : "AO",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ac48a002582424e980"),
            "country" : "ARGENTINA",
            "country_abbreviation" : "AR",
            "region" : "Europe & Americas",
            "region_abbreviation" : "",
            "region_cluster" : "Europe & Americas",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ac48a002582424e981"),
            "country" : "AUSTRALIA",
            "country_abbreviation" : "AU",
            "region" : "ASA",
            "region_abbreviation" : "",
            "region_cluster" : "ASA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ac48a002582424e982"),
            "country" : "BAHRAIN",
            "country_abbreviation" : "BH",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ac48a002582424e983"),
            "country" : "BAHAMAS",
            "country_abbreviation" : "BS",
            "region" : "Europe & Americas",
            "region_abbreviation" : "",
            "region_cluster" : "Europe & Americas",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ac48a002582424e984"),
            "country" : "BANGLADESH",
            "country_abbreviation" : "BD",
            "region" : "ASA",
            "region_abbreviation" : "",
            "region_cluster" : "ASA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ac48a002582424e985"),
            "country" : "BOTSWANA",
            "country_abbreviation" : "BW",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ac48a002582424e986"),
            "country" : "BRAZIL",
            "country_abbreviation" : "BR",
            "region" : "Europe & Americas",
            "region_abbreviation" : "",
            "region_cluster" : "Europe & Americas",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ac48a002582424e987"),
            "country" : "BRUNEI",
            "country_abbreviation" : "BN",
            "region" : "ASA",
            "region_abbreviation" : "",
            "region_cluster" : "ASA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ac48a002582424e988"),
            "country" : "CAMBODIA",
            "country_abbreviation" : "KH",
            "region" : "ASA",
            "region_abbreviation" : "",
            "region_cluster" : "ASA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ac48a002582424e989"),
            "country" : "CAMEROON",
            "country_abbreviation" : "CM",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ac48a002582424e98a"),
            "country" : "CHINA",
            "country_abbreviation" : "CN",
            "region" : "GCNA",
            "region_abbreviation" : "",
            "region_cluster" : "GCNA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ac48a002582424e98b"),
            "country" : "COLOMBIA",
            "country_abbreviation" : "CO",
            "region" : "Europe & Americas",
            "region_abbreviation" : "",
            "region_cluster" : "Europe & Americas",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ac48a002582424e98c"),
            "country" : "COTE D'IVOIRE",
            "country_abbreviation" : "CI",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ac48a002582424e98d"),
            "country" : "EGYPT",
            "country_abbreviation" : "EG",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ac48a002582424e98e"),
            "country" : "FALKLAND ISLANDS",
            "country_abbreviation" : "FK",
            "region" : "Europe & Americas",
            "region_abbreviation" : "",
            "region_cluster" : "Europe & Americas",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ac48a002582424e98f"),
            "country" : "FRANCE",
            "country_abbreviation" : "FR",
            "region" : "Europe & Americas",
            "region_abbreviation" : "",
            "region_cluster" : "Europe & Americas",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e990"),
            "country" : "GAMBIA",
            "country_abbreviation" : "GM",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e991"),
            "country" : "GERMANY",
            "country_abbreviation" : "DE",
            "region" : "Europe & Americas",
            "region_abbreviation" : "",
            "region_cluster" : "Europe & Americas",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e992"),
            "country" : "GHANA",
            "country_abbreviation" : "GH",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e993"),
            "country" : "GUERNSEY",
            "country_abbreviation" : "GG",
            "region" : "Europe & Americas",
            "region_abbreviation" : "",
            "region_cluster" : "Europe & Americas",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e994"),
            "country" : "HONG KONG",
            "country_abbreviation" : "HK",
            "region" : "GCNA",
            "region_abbreviation" : "",
            "region_cluster" : "GCNA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e995"),
            "country" : "INDIA",
            "country_abbreviation" : "IN",
            "region" : "ASA",
            "region_abbreviation" : "",
            "region_cluster" : "ASA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e996"),
            "country" : "INDONESIA",
            "country_abbreviation" : "ID",
            "region" : "ASA",
            "region_abbreviation" : "",
            "region_cluster" : "ASA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e997"),
            "country" : "IRAQ",
            "country_abbreviation" : "IQ",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e998"),
            "country" : "IRELAND",
            "country_abbreviation" : "IE",
            "region" : "Europe & Americas",
            "region_abbreviation" : "",
            "region_cluster" : "Europe & Americas",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e999"),
            "country" : "JAPAN",
            "country_abbreviation" : "JP",
            "region" : "GCNA",
            "region_abbreviation" : "",
            "region_cluster" : "GCNA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e99a"),
            "country" : "JERSEY",
            "country_abbreviation" : "JE",
            "region" : "Europe & Americas",
            "region_abbreviation" : "",
            "region_cluster" : "Europe & Americas",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e99b"),
            "country" : "JORDAN",
            "country_abbreviation" : "JO",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e99c"),
            "country" : "KENYA",
            "country_abbreviation" : "KE",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e99d"),
            "country" : "SOUTH KOREA",
            "country_abbreviation" : "KR",
            "region" : "GCNA",
            "region_abbreviation" : "",
            "region_cluster" : "GCNA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e99e"),
            "country" : "LAOS",
            "country_abbreviation" : "LA",
            "region" : "ASA",
            "region_abbreviation" : "",
            "region_cluster" : "ASA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e99f"),
            "country" : "LEBANON",
            "country_abbreviation" : "LB",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9a0"),
            "country" : "LUXEMBOURG",
            "country_abbreviation" : "LU",
            "region" : "Europe & Americas",
            "region_abbreviation" : "",
            "region_cluster" : "Europe & Americas",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9a1"),
            "country" : "MACAU",
            "country_abbreviation" : "MO",
            "region" : "GCNA",
            "region_abbreviation" : "",
            "region_cluster" : "GCNA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9a2"),
            "country" : "MALAYSIA",
            "country_abbreviation" : "MY",
            "region" : "ASA",
            "region_abbreviation" : "",
            "region_cluster" : "ASA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9a3"),
            "country" : "MAURITIUS",
            "country_abbreviation" : "MU",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9a4"),
            "country" : "MYANMAR",
            "country_abbreviation" : "MM",
            "region" : "ASA",
            "region_abbreviation" : "",
            "region_cluster" : "ASA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9a5"),
            "country" : "NEPAL",
            "country_abbreviation" : "NP",
            "region" : "ASA",
            "region_abbreviation" : "",
            "region_cluster" : "ASA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9a6"),
            "country" : "NIGERIA",
            "country_abbreviation" : "NG",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9a7"),
            "country" : "OMAN",
            "country_abbreviation" : "OM",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9a8"),
            "country" : "PAKISTAN",
            "country_abbreviation" : "PK",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9a9"),
            "country" : "PHILIPPINES",
            "country_abbreviation" : "PH",
            "region" : "ASA",
            "region_abbreviation" : "",
            "region_cluster" : "ASA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9aa"),
            "country" : "QATAR",
            "country_abbreviation" : "QA",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9ab"),
            "country" : "SAUDI ARABIA",
            "country_abbreviation" : "SA",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9ac"),
            "country" : "SIERRA LEONE",
            "country_abbreviation" : "SL",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9ad"),
            "country" : "SINGAPORE",
            "country_abbreviation" : "SG",
            "region" : "ASA",
            "region_abbreviation" : "",
            "region_cluster" : "ASA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9ae"),
            "country" : "SOUTH AFRICA",
            "country_abbreviation" : "ZA",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9af"),
            "country" : "SRI LANKA",
            "country_abbreviation" : "LK",
            "region" : "ASA",
            "region_abbreviation" : "",
            "region_cluster" : "ASA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9b0"),
            "country" : "SWEDEN",
            "country_abbreviation" : "SE",
            "region" : "Europe & Americas",
            "region_abbreviation" : "",
            "region_cluster" : "Europe & Americas",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9b1"),
            "country" : "SWITZERLAND",
            "country_abbreviation" : "CH",
            "region" : "Europe & Americas",
            "region_abbreviation" : "",
            "region_cluster" : "Europe & Americas",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9b2"),
            "country" : "TAIPEI BRANCH",
            "country_abbreviation" : "TPB",
            "region" : "GCNA",
            "region_abbreviation" : "",
            "region_cluster" : "GCNA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9b3"),
            "country" : "TAIWAN",
            "country_abbreviation" : "TW",
            "region" : "GCNA",
            "region_abbreviation" : "",
            "region_cluster" : "GCNA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9b4"),
            "country" : "TANZANIA",
            "country_abbreviation" : "TZ",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9b5"),
            "country" : "THAILAND",
            "country_abbreviation" : "TH",
            "region" : "ASA",
            "region_abbreviation" : "",
            "region_cluster" : "ASA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9b6"),
            "country" : "TURKEY",
            "country_abbreviation" : "TR",
            "region" : "Europe & Americas",
            "region_abbreviation" : "",
            "region_cluster" : "Europe & Americas",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9b7"),
            "country" : "UNITED ARAB EMIRATES",
            "country_abbreviation" : "AE",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9b8"),
            "country" : "UGANDA",
            "country_abbreviation" : "UG",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9b9"),
            "country" : "UNITED KINGDOM",
            "country_abbreviation" : "GB",
            "region" : "Europe & Americas",
            "region_abbreviation" : "",
            "region_cluster" : "Europe & Americas",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9ba"),
            "country" : "UNITED STATES",
            "country_abbreviation" : "US",
            "region" : "Europe & Americas",
            "region_abbreviation" : "",
            "region_cluster" : "Europe & Americas",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9bb"),
            "country" : "VIETNAM",
            "country_abbreviation" : "VN",
            "region" : "ASA",
            "region_abbreviation" : "",
            "region_cluster" : "ASA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9bc"),
            "country" : "ZAMBIA",
            "country_abbreviation" : "ZM",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9bd"),
            "country" : "ZIMBABWE",
            "country_abbreviation" : "ZW",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9be"),
            "country" : "GROUP",
            "country_abbreviation" : "GRPCOUNTRY",
            "region" : "GROUP",
            "region_abbreviation" : "",
            "region_cluster" : "GROUP",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9bf"),
            "country" : "AME REGIONAL TEAM",
            "country_abbreviation" : "AM",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9c0"),
            "country" : "EUROPE & AMERICAS REGIONAL TEAM",
            "country_abbreviation" : "EA",
            "region" : "Europe & Americas",
            "region_abbreviation" : "",
            "region_cluster" : "Europe & Americas",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9c1"),
            "country" : "ASA REGIONAL TEAM",
            "country_abbreviation" : "AS",
            "region" : "ASA",
            "region_abbreviation" : "",
            "region_cluster" : "ASA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9c2"),
            "country" : "GCNA REGIONAL TEAM",
            "country_abbreviation" : "GC",
            "region" : "GCNA",
            "region_abbreviation" : "",
            "region_cluster" : "GCNA",
            "enable" : true
        }
    ],
    "lifecycle" : [ 
        {
            "id" : "LC1",
            "name" : "Regulatory",
            "seq" : 0.0
        }, 
        {
            "id" : "LC2",
            "name" : "Risk Assessment and Controls",
            "seq" : 1.0
        }, 
        {
            "id" : "LC3",
            "name" : "Frameworks, Policy & Standards",
            "seq" : 2.0
        }, 
        {
            "id" : "LC4",
            "name" : "Oversight & Assurance",
            "seq" : 3.0
        }, 
        {
            "id" : "LC5",
            "name" : "Governance, Resources & Organisation",
            "seq" : 4.0
        }, 
        {
            "id" : "LC6",
            "name" : "Technology & Data",
            "seq" : 5.0
        }, 
        {
            "id" : "LC7",
            "name" : "Business Enablement",
            "seq" : 6.0
        }
    ],
    "scorecard" : [ 
        {
            "id" : "TBD3",
            "name" : "Transform and disrupt with digital",
            "seq" : 0,
            "businessdriver" : [ 
                {
                    "id" : "BD1",
                    "name" : "Other Financial Framework",
                    "seq" : 0
                }
            ]
        }, 
        {
            "id" : "TBD1",
            "name" : "Deliver the financial framework and optimize low returning markets",
            "seq" : 1,
            "businessdriver" : [ 
                {
                    "id" : "BD2",
                    "name" : "Network",
                    "seq" : 0
                }, 
                {
                    "id" : "BD3",
                    "name" : "Industries",
                    "seq" : 0
                }, 
                {
                    "id" : "BD4",
                    "name" : "Client Other",
                    "seq" : 0
                }, 
                {
                    "id" : "BD5",
                    "name" : "International Products",
                    "seq" : 0
                }, 
                {
                    "id" : "BD6",
                    "name" : "Segmentation",
                    "seq" : 0
                }, 
                {
                    "id" : "BD7",
                    "name" : "Liabilities",
                    "seq" : 0
                }, 
                {
                    "id" : "BD8",
                    "name" : "ME Model",
                    "seq" : 0
                }, 
                {
                    "id" : "BD9",
                    "name" : "PvB Referrals",
                    "seq" : 0
                }, 
                {
                    "id" : "BD10",
                    "name" : "Ecosystem",
                    "seq" : 0
                }
            ]
        }, 
        {
            "id" : "TBD4",
            "name" : " Purpose and People",
            "seq" : 3,
            "businessdriver" : [ 
                {
                    "id" : "BD16",
                    "name" : "Costs",
                    "seq" : 0
                }, 
                {
                    "id" : "BD17",
                    "name" : "Process Efficiency",
                    "seq" : 0
                }, 
                {
                    "id" : "BD18",
                    "name" : "Change Protocol",
                    "seq" : 0
                }, 
                {
                    "id" : "BD19",
                    "name" : "Organisational Model",
                    "seq" : 0
                }, 
                {
                    "id" : "BD20",
                    "name" : "Tail & Sub-optimal",
                    "seq" : 0
                }, 
                {
                    "id" : "BD21",
                    "name" : "Efficiency Other",
                    "seq" : 0
                }
            ]
        }, 
        {
            "id" : "TBD2",
            "name" : "Deliver our network and grow our affluent business",
            "seq" : 4,
            "businessdriver" : [ 
                {
                    "id" : "BD22",
                    "name" : "Digitization",
                    "seq" : 0
                }, 
                {
                    "id" : "BD23",
                    "name" : "Analytics, MIS and Frontline Tools",
                    "seq" : 0
                }
            ]
        }
    ],
    "initiativepopup" : "Summary View",
    "additionaltabs" : [],
    "initiativetags" : [ 
        {
            "id" : "",
            "icon" : "Nq8PXGD_ZlZvkx-Fnvt5WzQt0QGPQtj0--wBY2Tj8XwOCQQWWi-V8JuFvEHZe6wF3e--OE.png",
            "name" : "Operational Excellence",
            "position" : "BOTTOM_RIGHT",
            "enableadditionaldetail" : true,
            "enable" : true
        }, 
        {
            "id" : "",
            "icon" : "KaAziK859HAvUIF77AG0fyAXygdjN7eu--77pxaSeaV4Dmw3G1A_VBVPHMewEg-1bU--p84.png",
            "name" : "Process 84",
            "position" : "BOTTOM_RIGHT",
            "enableadditionaldetail" : true,
            "enable" : true
        }, 
        {
            "id" : "",
            "icon" : "l7wgjjHA_ZFcWZHH5Tsgdqy_qgtNOski--compilance.png",
            "name" : "Compliance Conduct Plan Activities",
            "position" : "BOTTOM_RIGHT",
            "enableadditionaldetail" : false,
            "enable" : true
        }, 
        {
            "id" : "",
            "icon" : "pB8IrhL9XaNX6HNa4mSxDECnAnG0XXf0--internal_remediation.png",
            "name" : "Internal Remediation",
            "position" : "BOTTOM_RIGHT",
            "enableadditionaldetail" : false,
            "enable" : true
        }, 
        {
            "id" : "",
            "icon" : "V5N79y40XvUnGSiDYZqlKZWEUfgZcRaF--external.png",
            "name" : "External Remediation",
            "position" : "BOTTOM_RIGHT",
            "enableadditionaldetail" : false,
            "enable" : true
        }, 
        {
            "id" : "",
            "icon" : "7T7suQJDbQiADPTeMuzA_uWhOvIPqWZd--bottomup.png",
            "name" : "Bottom-up Initiative (Country-led)",
            "position" : "BOTTOM_RIGHT",
            "enableadditionaldetail" : false,
            "enable" : true
        }, 
        {
            "id" : "",
            "icon" : "yQxMB2er0JaadhtnvBvKxLfa1xhHAzkO--bottom-down.png",
            "name" : "Top-down initiative (Group-led)",
            "position" : "BOTTOM_RIGHT",
            "enableadditionaldetail" : false,
            "enable" : true
        }, 
        {
            "id" : "",
            "icon" : "Regulatory_Mandatory.png",
            "name" : "Scorecard Deliverable",
            "position" : "BOTTOM_RIGHT",
            "enableadditionaldetail" : false,
            "enable" : true
        }
    ],
    "usermetric" : {
        "users" : {
            "region" : true,
            "segment" : true,
            "productassignment" : true,
            "functions" : false
        },
        "roles" : {
            "ispartofinitiativeowner" : true,
            "segment" : false,
            "productassignment" : false,
            "functions" : false
        }
    },
    "configfilters" : [ 
        {
            "_id" : "CF13",
            "name" : "Project Classification",
            "parent_id" : [],
            "listoptions" : [ 
                "value", 
                "text", 
                "color", 
                "icon"
            ],
            "list" : [ 
                {
                    "text" : "Small",
                    "value" : "Small",
                    "alias" : "",
                    "color" : "#ff7f27",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Medium",
                    "value" : "Medium",
                    "alias" : "",
                    "color" : "#00a2e8",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Large",
                    "value" : "Large",
                    "alias" : "",
                    "color" : "#22b14c",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : false,
            "isrequired" : false
        }, 
        {
            "_id" : "CF15",
            "name" : "Search",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "Free Text",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "filter"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF16",
            "name" : "Date Range",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "Monthly Period",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "filter"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF17",
            "name" : "Initiative Type",
            "parent_id" : [],
            "listoptions" : [ 
                "value", 
                "text", 
                "displayoption", 
                "icon"
            ],
            "list" : [ 
                {
                    "text" : "FCC-led Initiative",
                    "value" : "FCCLED",
                    "alias" : "FCC-led Initiative",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "fcc",
                    "description" : ""
                }, 
                {
                    "text" : "Compliance-led Initiative",
                    "value" : "COMPLIANCELED",
                    "alias" : "Compliance-led Initiative",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "compliance",
                    "description" : ""
                }, 
                {
                    "text" : "CFCC initiatives",
                    "value" : "FCCCOMPLIANCE",
                    "alias" : "CFCC initiatives",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "joint",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [ 
                {
                    "text" : "Dog Ear",
                    "value" : "dogear"
                }, 
                {
                    "text" : "None",
                    "value" : "none"
                }
            ],
            "type" : "list",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF19",
            "name" : "Display Progress",
            "parent_id" : [],
            "listoptions" : [ 
                "value", 
                "text", 
                "color"
            ],
            "list" : [ 
                {
                    "text" : "On Track",
                    "value" : "green",
                    "alias" : "",
                    "color" : "#00a800",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "At Risk",
                    "value" : "amber",
                    "alias" : "",
                    "color" : "#ff9900",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Mgmt Support Required",
                    "value" : "red",
                    "alias" : "",
                    "color" : "#a80000",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Delayed or Re-Baselined",
                    "value" : "grey",
                    "alias" : "",
                    "color" : "#808080",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF21",
            "name" : "Task Legend",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "Toggle Button",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "filter"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF22",
            "name" : "Business Driver",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : false,
            "isrequired" : true
        }, 
        {
            "_id" : "CF26",
            "name" : "Product",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF27",
            "name" : "Segment",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF27_1",
            "name" : "Sub Segment",
            "parent_id" : [ 
                "CF27"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : false,
            "isrequired" : false
        }, 
        {
            "_id" : "CF28",
            "name" : "Function",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF29",
            "name" : "Risk Subtype",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : false,
            "isrequired" : false
        }, 
        {
            "_id" : "CF29_1",
            "name" : "Risk Subtype",
            "parent_id" : [ 
                "CF29"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : false,
            "isrequired" : false
        }, 
        {
            "_id" : "CF30",
            "name" : "Conduct Theme",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : false,
            "isrequired" : false
        }, 
        {
            "_id" : "CF30_1",
            "name" : "Conduct Sub Type",
            "parent_id" : [ 
                "CF30"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF31",
            "name" : "Initiative Category",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF31_1",
            "name" : "Initiative Sub Category",
            "parent_id" : [ 
                "CF31"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : false,
            "isrequired" : false
        }, 
        {
            "_id" : "CF4",
            "name" : "Business Impact",
            "parent_id" : [],
            "listoptions" : [ 
                "value", 
                "text"
            ],
            "list" : [ 
                {
                    "text" : "Low",
                    "value" : "Low",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Medium",
                    "value" : "Medium",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "High",
                    "value" : "High",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF41",
            "name" : "AE/PM",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "filter"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF43",
            "name" : "Five Shifts",
            "parent_id" : [],
            "listoptions" : [ 
                "value", 
                "text"
            ],
            "list" : [ 
                {
                    "text" : "Build Scale",
                    "value" : "Build Scale",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Reshape the Balance Sheet",
                    "value" : "Business Mix",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Enforce Capital Allocation discipline",
                    "value" : "Capital allocation & Costs",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Innovate and Digitise",
                    "value" : "Leverage technology via digitisation",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Exit tail and reduce low returning RWA",
                    "value" : "Other enablers",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : false,
            "isrequired" : false
        }, 
        {
            "_id" : "CF52",
            "name" : "Clarity Staging Filter",
            "parent_id" : [],
            "value" : "",
            "listoptions" : [ 
                "value", 
                "text"
            ],
            "list" : [ 
                {
                    "value" : "Clarity ID",
                    "text" : "Clarity ID"
                }, 
                {
                    "value" : "Project Name",
                    "text" : "Project Name"
                }
            ],
            "displayoptions" : null,
            "description" : "",
            "enable" : true,
            "type" : "list",
            "category" : [ 
                "filter"
            ],
            "isrequired" : false,
            "speciallist" : []
        }
    ],
    "configsummaryfields" : [ 
        {
            "_id" : "CF0",
            "name" : "Accountable Executive",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [ 
                {
                    "text" : "Multi Select",
                    "value" : "multiselect",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Drop Down List",
                    "value" : "dropdownlist",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "multiselect",
            "description" : "",
            "displayoptions" : [],
            "type" : "single-choice",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF1",
            "name" : "Project Manager",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF10",
            "name" : "Planned Cost",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF11",
            "name" : "Region",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [ 
                "ALL"
            ],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF12",
            "name" : "Country",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [ 
                "ALL"
            ],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF13",
            "name" : "Project Classification",
            "parent_id" : [],
            "listoptions" : [ 
                "value", 
                "text", 
                "color", 
                "icon"
            ],
            "list" : [ 
                {
                    "text" : "Small",
                    "value" : "Small",
                    "alias" : "",
                    "color" : "#ff7f27",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Medium",
                    "value" : "Medium",
                    "alias" : "",
                    "color" : "#00a2e8",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Large",
                    "value" : "Large",
                    "alias" : "",
                    "color" : "#22b14c",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF14",
            "name" : "Initiative Tracking",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF17",
            "name" : "Initiative Group",
            "parent_id" : [],
            "listoptions" : [ 
                "value", 
                "text", 
                "displayoption", 
                "icon"
            ],
            "list" : [ 
                {
                    "text" : "FCC-led Initiative",
                    "value" : "FCCLED",
                    "alias" : "FCC-led Initiative",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "fcc",
                    "description" : ""
                }, 
                {
                    "text" : "Compliance-led Initiative",
                    "value" : "COMPLIANCELED",
                    "alias" : "Compliance-led Initiative",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "compliance",
                    "description" : ""
                }, 
                {
                    "text" : "CFCC initiatives",
                    "value" : "FCCCOMPLIANCE",
                    "alias" : "CFCC initiatives",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "joint",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [ 
                {
                    "text" : "Dog Ear",
                    "value" : "dogear"
                }, 
                {
                    "text" : "None",
                    "value" : "none"
                }
            ],
            "type" : "list",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF18",
            "name" : "Revised End Date",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF19",
            "name" : "Project Status",
            "parent_id" : [],
            "listoptions" : [ 
                "value", 
                "text", 
                "color"
            ],
            "list" : [ 
                {
                    "text" : "On Track",
                    "value" : "green",
                    "alias" : "",
                    "color" : "#00a800",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "At Risk",
                    "value" : "amber",
                    "alias" : "",
                    "color" : "#ff9900",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Mgmt Support Required",
                    "value" : "red",
                    "alias" : "",
                    "color" : "#a80000",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Delayed or Re-Baselined",
                    "value" : "grey",
                    "alias" : "",
                    "color" : "#808080",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF2",
            "name" : "Technology Lead",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF20",
            "name" : "Status",
            "parent_id" : [],
            "listoptions" : [ 
                "value", 
                "text"
            ],
            "list" : [ 
                {
                    "text" : "Live",
                    "value" : "LIVE",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Retired",
                    "value" : "RETIRED",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field"
            ],
            "enable" : false,
            "isrequired" : false
        }, 
        {
            "_id" : "CF22",
            "name" : "Business Driver",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : false,
            "isrequired" : true
        }, 
        {
            "_id" : "CF23",
            "name" : "Useful Resources",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF24",
            "name" : "Metric Benchmark",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF25",
            "name" : "Is Initiative Tracked",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF26",
            "name" : "Product Assignment",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF27",
            "name" : "Segment",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF27_1",
            "name" : "Sub Segment",
            "parent_id" : [ 
                "CF27"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF28",
            "name" : "Function",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF29",
            "name" : "Principle Risk",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [ 
                "ALL"
            ],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF29_1",
            "name" : "Risk Subtype",
            "parent_id" : [ 
                "CF29"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [ 
                "ALL"
            ],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF3",
            "name" : "Strategic Sponsor",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF30",
            "name" : "Conduct Theme",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [ 
                "ALL"
            ],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF30_1",
            "name" : "Conduct Subtype",
            "parent_id" : [ 
                "CF30"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [ 
                "ALL"
            ],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF31",
            "name" : "Initiative Type",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [ 
                "ALL"
            ],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF31_1",
            "name" : "Initiative Sub Type",
            "parent_id" : [ 
                "CF31"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [ 
                "ALL"
            ],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF31_2",
            "name" : "Criticality Rating",
            "parent_id" : [ 
                "CF31"
            ],
            "listoptions" : [ 
                "value", 
                "text"
            ],
            "list" : [ 
                {
                    "text" : "A",
                    "value" : "A",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "B",
                    "value" : "B",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "C",
                    "value" : "C",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "N/A",
                    "value" : "N/A",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF32",
            "name" : "Tracking ID",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF33",
            "name" : "Risk & Issues",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF33_1",
            "name" : "Risk Name",
            "parent_id" : [ 
                "CF33"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF33_10",
            "name" : "Risk Category",
            "parent_id" : [ 
                "CF33"
            ],
            "listoptions" : [ 
                "value", 
                "text"
            ],
            "list" : [ 
                {
                    "text" : "Flexibility",
                    "value" : "Flexibility",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Functionability",
                    "value" : "Functionability",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Human Interface",
                    "value" : "Human Interface",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Implementation",
                    "value" : "Implementation",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Interdependencies",
                    "value" : "Interdependencies",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Objectives",
                    "value" : "Objectives",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Organizational Culture",
                    "value" : "Organizational Culture",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Resource Avaibility",
                    "value" : "Resource Avaibility",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Sponsorship",
                    "value" : "Sponsorship",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Supportability",
                    "value" : "Supportability",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Technical",
                    "value" : "Technical",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF33_11",
            "name" : "Risk Symptoms",
            "parent_id" : [ 
                "CF33"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF33_2",
            "name" : "Risk Description",
            "parent_id" : [ 
                "CF33"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF33_3",
            "name" : "Risk Country",
            "parent_id" : [ 
                "CF33"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF33_4",
            "name" : "Target Resolution",
            "parent_id" : [ 
                "CF33"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF33_5",
            "name" : "Risk Severity",
            "parent_id" : [ 
                "CF33"
            ],
            "listoptions" : [ 
                "value", 
                "text"
            ],
            "list" : [ 
                {
                    "text" : "Low",
                    "value" : "Low",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Medium",
                    "value" : "Medium",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "High",
                    "value" : "High",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF33_6",
            "name" : "Risk Priority",
            "parent_id" : [ 
                "CF33"
            ],
            "listoptions" : [ 
                "value", 
                "text"
            ],
            "list" : [ 
                {
                    "text" : "Low",
                    "value" : "Low",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Medium",
                    "value" : "Medium",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "High",
                    "value" : "High",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF33_7",
            "name" : "Risk Status",
            "parent_id" : [ 
                "CF33"
            ],
            "listoptions" : [ 
                "value", 
                "text"
            ],
            "list" : [ 
                {
                    "text" : "Open",
                    "value" : "Open",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Work in Progress",
                    "value" : "WorkinProgress",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Resolved",
                    "value" : "Resolved",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Closed",
                    "value" : "Closed",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF33_8",
            "name" : "Risk Probability",
            "parent_id" : [ 
                "CF33"
            ],
            "listoptions" : [ 
                "value", 
                "text"
            ],
            "list" : [ 
                {
                    "text" : "Low",
                    "value" : "Low",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Medium",
                    "value" : "Medium",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "High",
                    "value" : "High",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF33_9",
            "name" : "Risk Impact",
            "parent_id" : [ 
                "CF33"
            ],
            "listoptions" : [ 
                "value", 
                "text"
            ],
            "list" : [ 
                {
                    "text" : "Low",
                    "value" : "Low",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Medium",
                    "value" : "Medium",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "High",
                    "value" : "High",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF34",
            "name" : "Stakeholder",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF36",
            "name" : "Global",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF37",
            "name" : "Scorecard",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF38",
            "name" : "Initiative Category",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF4",
            "name" : "Business Impact",
            "parent_id" : [],
            "listoptions" : [ 
                "value", 
                "text"
            ],
            "list" : [ 
                {
                    "text" : "Low",
                    "value" : "Low",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Medium",
                    "value" : "Medium",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "High",
                    "value" : "High",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF42",
            "name" : "Is Global Apply",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : false,
            "isrequired" : false
        }, 
        {
            "_id" : "CF43",
            "name" : "Five Shifts",
            "parent_id" : [],
            "listoptions" : [ 
                "value", 
                "text"
            ],
            "list" : [ 
                {
                    "text" : "Build Scale",
                    "value" : "Build Scale",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Reshape the Balance Sheet",
                    "value" : "Business Mix",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Enforce Capital Allocation discipline",
                    "value" : "Capital allocation & Costs",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Innovate and Digitise",
                    "value" : "Leverage technology via digitisation",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Exit tail and reduce low returning RWA",
                    "value" : "Other enablers",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : false,
            "isrequired" : false
        }, 
        {
            "_id" : "CF5",
            "name" : "Problem Statement",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF6",
            "name" : "Project Description",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF7",
            "name" : "Key Deliverables/Milestones",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF7_0",
            "name" : "Deliverable",
            "parent_id" : [ 
                "CF7"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF7_1",
            "name" : "Start Date",
            "parent_id" : [ 
                "CF7"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF7_10",
            "name" : "Type",
            "parent_id" : [ 
                "CF7"
            ],
            "listoptions" : [ 
                "value", 
                "text"
            ],
            "list" : [ 
                {
                    "text" : "ECG",
                    "value" : "ECG",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Enterprise Change Governance Checklist"
                }, 
                {
                    "text" : "HLBR",
                    "value" : "HLBR",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "High Level Business Requirements"
                }, 
                {
                    "text" : "ORA",
                    "value" : "ORA",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Operational Risk Assessment"
                }, 
                {
                    "text" : "PCA",
                    "value" : "PCA",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Project Complexity Assessment"
                }, 
                {
                    "text" : "Pg Benefits Plan",
                    "value" : "Pg Benefits Plan",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Programme Benefits Management Plan"
                }, 
                {
                    "text" : "Pg Benefits Report",
                    "value" : "Pg Benefits Report",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Programme Benefits Report"
                }, 
                {
                    "text" : "Pg Closure",
                    "value" : "Pg Closure",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Programme Closure Report"
                }, 
                {
                    "text" : "Pg ToR",
                    "value" : "Pg ToR",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Programme Steering Committee Terms of Reference"
                }, 
                {
                    "text" : "PgED",
                    "value" : "PgED",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Programme Execution Document"
                }, 
                {
                    "text" : "PgMP",
                    "value" : "PgMP",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Programme Management Plan"
                }, 
                {
                    "text" : "Pj Benefits Plan",
                    "value" : "Pj Benefits Plan",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Project Management Plan"
                }, 
                {
                    "text" : "Pj Benefits Report",
                    "value" : "Pj Benefits Report",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Project Benefits Management Plan"
                }, 
                {
                    "text" : "Pj Closure",
                    "value" : "Pj Closure",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Project Closure Report"
                }, 
                {
                    "text" : "Pj ToR",
                    "value" : "Pj ToR",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Project Steering Committee Terms of Reference"
                }, 
                {
                    "text" : "PjED",
                    "value" : "PjED",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Project Execution Document"
                }, 
                {
                    "text" : "PjMP",
                    "value" : "PjMP",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Project Management Plan"
                }, 
                {
                    "text" : "SDF",
                    "value" : "SDF",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Systems Delivery Framework "
                }, 
                {
                    "text" : "Pilot Go-Live",
                    "value" : "Pilot Go-Live",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Pilot Go-Live"
                }, 
                {
                    "text" : "Go-Live",
                    "value" : "Go-Live",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Go-Live Confirmation"
                }, 
                {
                    "text" : "Phase Gate",
                    "value" : "Phase Gate",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Phase Gate Sign-off"
                }, 
                {
                    "text" : "Commercialization Plan",
                    "value" : "Commercialization Plan",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Commercialization Plan"
                }, 
                {
                    "text" : "N/A",
                    "value" : "N/A",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Not a Phase Gate milestone"
                }, 
                {
                    "text" : "AED",
                    "value" : "AED",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Agile Execution Document"
                }, 
                {
                    "text" : "ADMP",
                    "value" : "ADMP",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Agile Management Plan"
                }, 
                {
                    "text" : "Sprint 0",
                    "value" : "Sprint 0",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Sprint 0"
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF7_11",
            "name" : "RAG",
            "parent_id" : [ 
                "CF7"
            ],
            "listoptions" : [ 
                "value", 
                "text", 
                "color"
            ],
            "list" : [ 
                {
                    "text" : "Red",
                    "value" : "Red",
                    "alias" : "",
                    "color" : "#C00000",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Amber",
                    "value" : "Amber",
                    "alias" : "",
                    "color" : "#FF9900",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Green",
                    "value" : "Green",
                    "alias" : "",
                    "color" : "#009D44",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF7_12",
            "name" : "Progress Completion",
            "parent_id" : [ 
                "CF7"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF7_13",
            "name" : "Planned Cost",
            "parent_id" : [ 
                "CF7"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : false,
            "isrequired" : false
        }, 
        {
            "_id" : "CF7_14",
            "name" : "Five Shift",
            "parent_id" : [ 
                "CF7"
            ],
            "listoptions" : [ 
                "value", 
                "text"
            ],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field"
            ],
            "enable" : false,
            "isrequired" : false
        }, 
        {
            "_id" : "CF7_2",
            "name" : "End Date",
            "parent_id" : [ 
                "CF7"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF7_3",
            "name" : "Revised End Date",
            "parent_id" : [ 
                "CF7"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF7_4",
            "name" : "Country",
            "parent_id" : [ 
                "CF7"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [ 
                "ALL"
            ],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF7_5",
            "name" : "Complete",
            "parent_id" : [ 
                "CF7"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : false,
            "isrequired" : false
        }, 
        {
            "_id" : "CF7_6",
            "name" : "Status",
            "parent_id" : [ 
                "CF7"
            ],
            "listoptions" : [ 
                "value", 
                "text"
            ],
            "list" : [ 
                {
                    "text" : "Completed",
                    "value" : "Completed",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Not Started",
                    "value" : "Not Started",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Started",
                    "value" : "Started",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF7_7",
            "name" : "Status Comment",
            "parent_id" : [ 
                "CF7"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF7_8",
            "name" : "Owner",
            "parent_id" : [ 
                "CF7"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF7_9",
            "name" : "Region",
            "parent_id" : [ 
                "CF7"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [ 
                "ALL"
            ],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF8",
            "name" : "Progress Completion",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [ 
                {
                    "text" : "Calculated",
                    "value" : "calculated",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Manual Input",
                    "value" : "manual",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "manual",
            "description" : "",
            "displayoptions" : [],
            "type" : "single-choice",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF9",
            "name" : "Project Driver",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }
    ],
    "configscorecard" : [ 
        {
            "_id" : "CF53",
            "name" : "Weightage",
            "parent_id" : [],
            "value" : "",
            "listoptions" : [],
            "list" : null,
            "displayoptions" : null,
            "description" : "",
            "enable" : true,
            "type" : "none",
            "category" : [ 
                "scorecard"
            ],
            "isrequired" : false,
            "speciallist" : []
        }
    ],
    "periodfrom" : 2016,
    "periodto" : 2018,
    "projectnamemaxlength" : 20,
    "initiativetagmaxlimit" : 4,
    "description" : "",
    "segment" : [ 
        {
            "_id" : ObjectId("5b4c070501112617537cc93c"),
            "name" : "N/A",
            "subsegment" : [ 
                {
                    "_id" : ObjectId("5b569070dfd3d52632e94b82"),
                    "name" : "N/A"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b4c070501112617537cc93d"),
            "name" : "Corporate, Commercial & Institutional Banking",
            "subsegment" : [ 
                {
                    "_id" : ObjectId("5b569159dfd3d52632e94b83"),
                    "name" : "CB - High Value Small Business"
                }, 
                {
                    "_id" : ObjectId("5b569159dfd3d52632e94b84"),
                    "name" : "CB - Middle Enterprises"
                }, 
                {
                    "_id" : ObjectId("5b569159dfd3d52632e94b85"),
                    "name" : "CB - Middle Markets"
                }, 
                {
                    "_id" : ObjectId("5b569159dfd3d52632e94b86"),
                    "name" : "CB - Local Corporates"
                }, 
                {
                    "_id" : ObjectId("5b569159dfd3d52632e94b87"),
                    "name" : "GB - Banks & Broker Dealers"
                }, 
                {
                    "_id" : ObjectId("5b569159dfd3d52632e94b88"),
                    "name" : "GB - Commercial Real Estate"
                }, 
                {
                    "_id" : ObjectId("5b569159dfd3d52632e94b89"),
                    "name" : "GB - Financial & Strategic Investors Group"
                }, 
                {
                    "_id" : ObjectId("5b569159dfd3d52632e94b8a"),
                    "name" : "GB - Global Industries Group"
                }, 
                {
                    "_id" : ObjectId("5b569159dfd3d52632e94b8b"),
                    "name" : "GB - Global Subsidiaries"
                }, 
                {
                    "_id" : ObjectId("5b569159dfd3d52632e94b8c"),
                    "name" : "GB - Investors & Insurance"
                }, 
                {
                    "_id" : ObjectId("5b569159dfd3d52632e94b8d"),
                    "name" : "GB - Public Sector & Development Organisation"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b4c070601112617537cc93e"),
            "name" : "Private Banking",
            "subsegment" : [ 
                {
                    "_id" : ObjectId("5b569070dfd3d52632e94b82"),
                    "name" : "N/A"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b4c070601112617537cc940"),
            "name" : "Retail Banking",
            "subsegment" : [ 
                {
                    "_id" : ObjectId("5b569159dfd3d52632e94b8e"),
                    "name" : "Retail Business Banking"
                }, 
                {
                    "_id" : ObjectId("5b569159dfd3d52632e94b8f"),
                    "name" : "Retail Individual Banking"
                }
            ]
        }
    ],
    "productassignment" : [ 
        {
            "_id" : ObjectId("5b39f60ba7da87c5e8da382b"),
            "name" : "N/A"
        }, 
        {
            "_id" : ObjectId("5b39f60ba7da87c5e8da382c"),
            "name" : "Trade"
        }, 
        {
            "_id" : ObjectId("5b39f60ba7da87c5e8da382d"),
            "name" : "Securities Services (SS)"
        }, 
        {
            "_id" : ObjectId("5b39f60ba7da87c5e8da382e"),
            "name" : "Digitization and Client Access (DCA)"
        }, 
        {
            "_id" : ObjectId("5b39f60ba7da87c5e8da382f"),
            "name" : "Financial Markets (FM)"
        }, 
        {
            "_id" : ObjectId("5b39f60ba7da87c5e8da3830"),
            "name" : "Corporate Finance (CF)"
        }, 
        {
            "_id" : ObjectId("5b39f60ba7da87c5e8da3831"),
            "name" : "Corporate Lending (CL)"
        }, 
        {
            "_id" : ObjectId("5b39f60ba7da87c5e8da3832"),
            "name" : "Principal Finance (PF)"
        }, 
        {
            "_id" : ObjectId("5b39f60ba7da87c5e8da3833"),
            "name" : "Cash (CBR)"
        }, 
        {
            "_id" : ObjectId("5b39f60ba7da87c5e8da3834"),
            "name" : "Cash (non-CBR)"
        }, 
        {
            "_id" : ObjectId("5b39f60ba7da87c5e8da3835"),
            "name" : "Retail"
        }, 
        {
            "_id" : ObjectId("5b39f60ba7da87c5e8da3836"),
            "name" : "Wealth management"
        }
    ],
    "conducttheme" : [ 
        {
            "_id" : ObjectId("5b3b0407a7da87c5e8da3929"),
            "name" : "N/A",
            "subtype" : [ 
                {
                    "_id" : ObjectId("5b4d9e9ceaad0e985e76f5aa"),
                    "name" : "N/A"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b39f983a7da87c5e8da3842"),
            "name" : "Our Business",
            "subtype" : [ 
                {
                    "_id" : ObjectId("5b4d9f48eaad0e985e76f5ab"),
                    "name" : "Transparent Business Model"
                }, 
                {
                    "_id" : ObjectId("5b4d9f48eaad0e985e76f5ac"),
                    "name" : "Effective Governance"
                }, 
                {
                    "_id" : ObjectId("5b4d9f48eaad0e985e76f5ad"),
                    "name" : "Robust Infrastructure"
                }, 
                {
                    "_id" : ObjectId("5b4d9f48eaad0e985e76f5ae"),
                    "name" : "Exemplary Business Practices"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b39f984a7da87c5e8da3846"),
            "name" : "Each of Us",
            "subtype" : [ 
                {
                    "_id" : ObjectId("5b4d9f48eaad0e985e76f5af"),
                    "name" : "Ethical Leadership"
                }, 
                {
                    "_id" : ObjectId("5b4d9f48eaad0e985e76f5b0"),
                    "name" : "Aligned Incentives"
                }, 
                {
                    "_id" : ObjectId("5b4d9f48eaad0e985e76f5b1"),
                    "name" : "People Competency & Integrity"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b39f984a7da87c5e8da384c"),
            "name" : "Our External Stakeholders",
            "subtype" : [ 
                {
                    "_id" : ObjectId("5b4d9f48eaad0e985e76f5b2"),
                    "name" : "Fair Outcomes for Clients"
                }, 
                {
                    "_id" : ObjectId("5b4d9f48eaad0e985e76f5b3"),
                    "name" : "Effective Markets"
                }, 
                {
                    "_id" : ObjectId("5b4d9f48eaad0e985e76f5b4"),
                    "name" : "Financial Crime Compliance"
                }, 
                {
                    "_id" : ObjectId("5b4d9f48eaad0e985e76f5b5"),
                    "name" : "Stakeholder Confidence"
                }
            ]
        }
    ],
    "initiativecategory" : [ 
        {
            "_id" : ObjectId("5b4da21beaad0e985e76f5b7"),
            "name" : "FCC Group MAP",
            "subcategory" : [ 
                {
                    "_id" : ObjectId("5b4da21beaad0e985e76f5b8"),
                    "name" : "A. Governance, Oversight & Organisation"
                }, 
                {
                    "_id" : ObjectId("5b4da21beaad0e985e76f5b9"),
                    "name" : "B. Risk Assessment"
                }, 
                {
                    "_id" : ObjectId("5b4da21beaad0e985e76f5ba"),
                    "name" : "C. Policies, Standards and Procedures"
                }, 
                {
                    "_id" : ObjectId("5b4da21beaad0e985e76f5bb"),
                    "name" : "D. People"
                }, 
                {
                    "_id" : ObjectId("5b4da21beaad0e985e76f5bc"),
                    "name" : "E. Learning and Awareness"
                }, 
                {
                    "_id" : ObjectId("5b4da21beaad0e985e76f5bd"),
                    "name" : "F. CDD/EDD"
                }, 
                {
                    "_id" : ObjectId("5b4da21beaad0e985e76f5be"),
                    "name" : "G. Surveillance"
                }, 
                {
                    "_id" : ObjectId("5b4da21beaad0e985e76f5bf"),
                    "name" : "H. Investigations and Disclosures"
                }, 
                {
                    "_id" : ObjectId("5b4da21beaad0e985e76f5c0"),
                    "name" : "I. Assurance and Testing"
                }, 
                {
                    "_id" : ObjectId("5b4da21beaad0e985e76f5c1"),
                    "name" : "J. MI and Data Management"
                }, 
                {
                    "_id" : ObjectId("5b4da21beaad0e985e76f5c2"),
                    "name" : "K. Sanctions"
                }, 
                {
                    "_id" : ObjectId("5b4da21beaad0e985e76f5c3"),
                    "name" : "L. ABC"
                }, 
                {
                    "_id" : ObjectId("5b4da21beaad0e985e76f5c4"),
                    "name" : "M. Tax"
                }, 
                {
                    "_id" : ObjectId("5b4da21beaad0e985e76f5c5"),
                    "name" : "N. Regions and Countries"
                }, 
                {
                    "_id" : ObjectId("5b4da21beaad0e985e76f5c6"),
                    "name" : "O. Business"
                }, 
                {
                    "_id" : ObjectId("5b4da21beaad0e985e76f5c7"),
                    "name" : "P. Americas"
                }, 
                {
                    "_id" : ObjectId("5b4da21beaad0e985e76f5c8"),
                    "name" : "Q. Other Matters"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b4da21beaad0e985e76f5c9"),
            "name" : "FCC Country MAP",
            "subcategory" : []
        }, 
        {
            "_id" : ObjectId("5b4da21beaad0e985e76f5ca"),
            "name" : "FCC TOP Objectives",
            "subcategory" : []
        }, 
        {
            "_id" : ObjectId("5b4da21beaad0e985e76f5cb"),
            "name" : "FCC PRF & Gov",
            "subcategory" : []
        }, 
        {
            "_id" : ObjectId("5b4da21beaad0e985e76f5cc"),
            "name" : "CAP - Mandatory Regulatory Requirements",
            "subcategory" : []
        }, 
        {
            "_id" : ObjectId("5b4da21beaad0e985e76f5cd"),
            "name" : "CAP - Strategic Initiatives",
            "subcategory" : []
        }, 
        {
            "_id" : ObjectId("5b4da21beaad0e985e76f5ce"),
            "name" : "CAP - Other Initiatives",
            "subcategory" : []
        }, 
        {
            "_id" : ObjectId("5b4da21beaad0e985e76f5cf"),
            "name" : "Non-CAP -  Initiatives",
            "subcategory" : []
        }
    ],
    "principlerisk" : [ 
        {
            "_id" : ObjectId("5b4d9dcbeaad0e985e76f5a9"),
            "name" : "N/A",
            "risksubtype" : [ 
                {
                    "_id" : ObjectId("5b4d9baceaad0e985e76f58a"),
                    "name" : "N/A"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b568bc3dfd3d52632e94b3d"),
            "name" : "Compliance",
            "risksubtype" : [ 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b3e"),
                    "name" : "Banking Secrecy"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b3f"),
                    "name" : "Best Execution"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b40"),
                    "name" : "Client Asset and Money Protection"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b41"),
                    "name" : "Client Tax Information Compliance"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b42"),
                    "name" : "Competition and Anti-Trust"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b43"),
                    "name" : "Conduct"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b44"),
                    "name" : "Conflicts of Interest"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b45"),
                    "name" : "Cross Border"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b46"),
                    "name" : "Fair Outcomes for Clients - Account Management and Post Sales Practices"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b47"),
                    "name" : "Fair Outcomes for Clients - Appropriateness and Suitability"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b48"),
                    "name" : "Fair Outcomes for Clients - Client Communication"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b49"),
                    "name" : "Fair Outcomes for Clients - Sales Practices"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b4a"),
                    "name" : "Fiduciary Governance"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b4b"),
                    "name" : "General Legal and Regulatory Compliance"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b4c"),
                    "name" : "Licensing of Entities"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b4d"),
                    "name" : "Licensing of Individuals"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b4e"),
                    "name" : "Market Manipulation"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b4f"),
                    "name" : "Misuse of Information"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b50"),
                    "name" : "Non-Financial Regulatory Reporting"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b51"),
                    "name" : "Privacy"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b52"),
                    "name" : "Records Management"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b53"),
                    "name" : "Regulatory Commitments"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b54"),
                    "name" : "Senior Management Individual Accountability"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b55"),
                    "name" : "Trading Regulations"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b56"),
                    "name" : "Transaction & Trade Reporting"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b568bc3dfd3d52632e94b57"),
            "name" : "Conduct",
            "risksubtype" : [ 
                {
                    "_id" : ObjectId("5b4d9baceaad0e985e76f58a"),
                    "name" : "N/A"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b568bc3dfd3d52632e94b58"),
            "name" : "Finance",
            "risksubtype" : [ 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b59"),
                    "name" : "Accounting and Financial Reporting"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b5a"),
                    "name" : "Financial Regulatory Reporting"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b5b"),
                    "name" : "Prudential - Capital "
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b5c"),
                    "name" : "Prudential - Liquidity"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b5d"),
                    "name" : "Prudential - Recovery & Resolution Planning"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b568bc3dfd3d52632e94b5e"),
            "name" : "Credit risk",
            "risksubtype" : [ 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b5f"),
                    "name" : "Credit Risk Rules"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b60"),
                    "name" : "Customer Insolvency"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b61"),
                    "name" : "Prudential - Credit Risk"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b568bc3dfd3d52632e94b62"),
            "name" : "Enterprise Risk Management",
            "risksubtype" : [ 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b63"),
                    "name" : "Prudential – Risk Governance"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b568bc3dfd3d52632e94b64"),
            "name" : "Financial Crime Compliance",
            "risksubtype" : [ 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b65"),
                    "name" : "Anti-Bribery and Corruption"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b66"),
                    "name" : "Anti-Money Laundering (and Terrorist Financing)"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b67"),
                    "name" : "Sanctions"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b68"),
                    "name" : "Tax Evasion"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b568bc3dfd3d52632e94b69"),
            "name" : "Office of the Chief Information Security Officer",
            "risksubtype" : [ 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b6a"),
                    "name" : "Information and Cyber Security"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b568bc3dfd3d52632e94b6b"),
            "name" : "Market Risk",
            "risksubtype" : [ 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b6c"),
                    "name" : "Market Risk Rules"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b6d"),
                    "name" : "Prudential - Market Risk"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b568bc3dfd3d52632e94b6e"),
            "name" : "Business Efficiency",
            "risksubtype" : [ 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b6f"),
                    "name" : "Outsourcing"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b568bc3dfd3d52632e94b70"),
            "name" : "Group Company Secretary",
            "risksubtype" : [ 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b71"),
                    "name" : "Corporate Governance and Authorities"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b72"),
                    "name" : "Exchange Listing Rules"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b568bc3dfd3d52632e94b73"),
            "name" : "Group Internal Audit",
            "risksubtype" : [ 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b74"),
                    "name" : "Internal Audit"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b568bc3dfd3d52632e94b75"),
            "name" : "Human Resource",
            "risksubtype" : [ 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b76"),
                    "name" : "Employment, remuneration and benefits"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b568bc3dfd3d52632e94b77"),
            "name" : "Legal",
            "risksubtype" : [ 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b78"),
                    "name" : "Legal Enforceability"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b568bc3dfd3d52632e94b79"),
            "name" : "Operational Risk",
            "risksubtype" : [ 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b7a"),
                    "name" : "Fraud Prevention Rules"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b7b"),
                    "name" : "Operational Risk Rules"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b7c"),
                    "name" : "Product Approval and Governance"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b7d"),
                    "name" : "Prudential - Operational Risk"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b568bc3dfd3d52632e94b7e"),
            "name" : "Property",
            "risksubtype" : [ 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b7f"),
                    "name" : "Safety and Security"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b568bc3dfd3d52632e94b80"),
            "name" : "Group Tax",
            "risksubtype" : [ 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b81"),
                    "name" : "Tax"
                }
            ]
        }
    ],
    "created_date" : ISODate("2018-01-29T07:01:44.264Z"),
    "created_by" : "ss",
    "updated_date" : ISODate("2018-12-11T07:28:23.874Z"),
    "updated_by" : "ss_private",
    "type" : "internal"
})
db.getSiblingDB(database).ss_application.save({
    "_id" : ObjectId("5c880a141fa32be5015ac122"),
    "name" : "GIA",
    "logo" : "",
    "modules" : [ 
        {
            "_id" : "M001",
            "name" : "Scorecard",
            "param_name" : "Scorecard",
            "type" : "core",
            "parent_id" : [],
            "image_src" : "Scorecard.PNG",
            "path" : "scorecardinitiative",
            "seq" : 1
        }, 
        {
            "_id" : "M002",
            "name" : "Initiative",
            "param_name" : "Initiative",
            "type" : "core",
            "parent_id" : [],
            "image_src" : "Initiative.PNG",
            "path" : "scorecardinitiative",
            "seq" : 0
        }, 
        {
            "_id" : "M003",
            "name" : "Country Analysis",
            "param_name" : "CountryAnalysis",
            "type" : "additional",
            "parent_id" : [ 
                "M001"
            ],
            "image_src" : "CountryAnalysis.PNG",
            "path" : "scorecardinitiative",
            "seq" : 0
        }, 
        {
            "_id" : "M004",
            "name" : "Metric Drivers",
            "param_name" : "MetricDrivers",
            "type" : "additional",
            "parent_id" : [ 
                "M001", 
                "M002"
            ],
            "image_src" : "MetricDrivers.PNG",
            "path" : "scorecardinitiative",
            "seq" : 0
        }, 
        {
            "_id" : "M005",
            "name" : "Metric Analysis",
            "param_name" : "MetricAnalysis",
            "type" : "additional",
            "parent_id" : [ 
                "M001"
            ],
            "image_src" : "MetricAnalysis.PNG",
            "path" : "scorecardinitiative",
            "seq" : 0
        }, 
        {
            "_id" : "M006",
            "name" : "Adoption Module",
            "param_name" : "AdoptionModule",
            "type" : "additional",
            "parent_id" : [ 
                "M002"
            ],
            "image_src" : "Adoption.PNG",
            "path" : "adoptionmodule",
            "seq" : 8
        }, 
        {
            "_id" : "M007",
            "name" : "Metric Validation",
            "param_name" : "StagingArea",
            "type" : "dependency",
            "parent_id" : [ 
                "M001"
            ],
            "image_src" : "",
            "path" : "metricvalidation",
            "seq" : 5
        }, 
        {
            "_id" : "M008",
            "name" : "Initiative",
            "param_name" : "Initiative",
            "type" : "tabular_dependency",
            "parent_id" : [ 
                "M001"
            ],
            "image_src" : "",
            "path" : "scorecardinitiative",
            "seq" : 0
        }, 
        {
            "_id" : "M009",
            "name" : "Scorecard",
            "param_name" : "Scorecard",
            "type" : "tabular_dependency",
            "parent_id" : [ 
                "M001"
            ],
            "image_src" : "",
            "path" : "scorecardinitiative",
            "seq" : 0
        }, 
        {
            "_id" : "M010",
            "name" : "Shared Agenda",
            "param_name" : "SharedAgenda",
            "type" : "tabular_dependency",
            "parent_id" : [ 
                "M001"
            ],
            "image_src" : "",
            "path" : "scorecardinitiative",
            "seq" : 0
        }, 
        {
            "_id" : "M011",
            "name" : "Metric Country Analysis",
            "param_name" : "CountryAnalysis",
            "type" : "tabular_dependency",
            "parent_id" : [ 
                "M001"
            ],
            "image_src" : "",
            "path" : "scorecardinitiative",
            "seq" : 0
        }, 
        {
            "_id" : "M015",
            "name" : "Metric Upload",
            "param_name" : "MetricUpload",
            "type" : "dependency",
            "parent_id" : [ 
                "M001"
            ],
            "image_src" : "",
            "path" : "metricupload",
            "seq" : 7
        }, 
        {
            "_id" : "M017",
            "name" : "Overview",
            "param_name" : "Overview",
            "type" : "dependency",
            "parent_id" : [ 
                "M001", 
                "M002"
            ],
            "image_src" : "",
            "path" : "overview",
            "seq" : 6
        }, 
        {
            "_id" : "M023",
            "name" : "Clarity Staging",
            "param_name" : "InitiativeStaging",
            "type" : "dependency",
            "parent_id" : [ 
                "M001", 
                "M002"
            ],
            "image_src" : "",
            "path" : "initiativestaging",
            "seq" : 9
        }, 
        {
            "_id" : "M012",
            "name" : "Bef Sponsor",
            "param_name" : "BefSponsor",
            "type" : "dependency",
            "parent_id" : [ 
                "M002"
            ],
            "image_src" : "",
            "path" : "befsponsor",
            "seq" : 3
        }, 
        {
            "_id" : "M013",
            "name" : "Initiative Master",
            "param_name" : "InitiativeMaster",
            "type" : "dependency",
            "parent_id" : [ 
                "M002"
            ],
            "image_src" : "",
            "path" : "initiativemaster",
            "seq" : 2
        }, 
        {
            "_id" : "M016",
            "name" : "Configuration",
            "param_name" : "Configuration",
            "type" : "primary",
            "parent_id" : [],
            "image_src" : "",
            "path" : "configuration",
            "seq" : 6
        }, 
        {
            "_id" : "M018",
            "name" : "Application Audit Trail",
            "param_name" : "ApplicationAuditTrail",
            "type" : "tabular_primary",
            "parent_id" : [ 
                "M016"
            ],
            "image_src" : "",
            "path" : "configuration",
            "seq" : 0
        }, 
        {
            "_id" : "M019",
            "name" : "Role Management",
            "param_name" : "RoleManagement",
            "type" : "tabular_primary",
            "parent_id" : [ 
                "M016"
            ],
            "image_src" : "",
            "path" : "configuration",
            "seq" : 0
        }, 
        {
            "_id" : "M020",
            "name" : "User Audit Trail",
            "param_name" : "UserAuditTrail",
            "type" : "tabular_primary",
            "parent_id" : [ 
                "M016"
            ],
            "image_src" : "",
            "path" : "configuration",
            "seq" : 0
        }, 
        {
            "_id" : "M021",
            "name" : "Application Usage Detail",
            "param_name" : "ApplicationUsageDetail",
            "type" : "tabular_primary",
            "parent_id" : [ 
                "M016"
            ],
            "image_src" : "",
            "path" : "configuration",
            "seq" : 0
        }, 
        {
            "_id" : "M022",
            "name" : "User Management",
            "param_name" : "UserManagement",
            "type" : "tabular_primary",
            "parent_id" : [ 
                "M016"
            ],
            "image_src" : "",
            "path" : "configuration",
            "seq" : 0
        }
    ],
    "geography" : [ 
        {
            "_id" : ObjectId("5b7bb3ac48a002582424e97f"),
            "country" : "ANGOLA",
            "country_abbreviation" : "AO",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ac48a002582424e980"),
            "country" : "ARGENTINA",
            "country_abbreviation" : "AR",
            "region" : "Europe & Americas",
            "region_abbreviation" : "",
            "region_cluster" : "Europe & Americas",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ac48a002582424e981"),
            "country" : "AUSTRALIA",
            "country_abbreviation" : "AU",
            "region" : "ASA",
            "region_abbreviation" : "",
            "region_cluster" : "ASA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ac48a002582424e982"),
            "country" : "BAHRAIN",
            "country_abbreviation" : "BH",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ac48a002582424e983"),
            "country" : "BAHAMAS",
            "country_abbreviation" : "BS",
            "region" : "Europe & Americas",
            "region_abbreviation" : "",
            "region_cluster" : "Europe & Americas",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ac48a002582424e984"),
            "country" : "BANGLADESH",
            "country_abbreviation" : "BD",
            "region" : "ASA",
            "region_abbreviation" : "",
            "region_cluster" : "ASA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ac48a002582424e985"),
            "country" : "BOTSWANA",
            "country_abbreviation" : "BW",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ac48a002582424e986"),
            "country" : "BRAZIL",
            "country_abbreviation" : "BR",
            "region" : "Europe & Americas",
            "region_abbreviation" : "",
            "region_cluster" : "Europe & Americas",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ac48a002582424e987"),
            "country" : "BRUNEI",
            "country_abbreviation" : "BN",
            "region" : "ASA",
            "region_abbreviation" : "",
            "region_cluster" : "ASA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ac48a002582424e988"),
            "country" : "CAMBODIA",
            "country_abbreviation" : "KH",
            "region" : "ASA",
            "region_abbreviation" : "",
            "region_cluster" : "ASA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ac48a002582424e989"),
            "country" : "CAMEROON",
            "country_abbreviation" : "CM",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ac48a002582424e98a"),
            "country" : "CHINA",
            "country_abbreviation" : "CN",
            "region" : "GCNA",
            "region_abbreviation" : "",
            "region_cluster" : "GCNA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ac48a002582424e98b"),
            "country" : "COLOMBIA",
            "country_abbreviation" : "CO",
            "region" : "Europe & Americas",
            "region_abbreviation" : "",
            "region_cluster" : "Europe & Americas",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ac48a002582424e98c"),
            "country" : "COTE D'IVOIRE",
            "country_abbreviation" : "CI",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ac48a002582424e98d"),
            "country" : "EGYPT",
            "country_abbreviation" : "EG",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ac48a002582424e98e"),
            "country" : "FALKLAND ISLANDS",
            "country_abbreviation" : "FK",
            "region" : "Europe & Americas",
            "region_abbreviation" : "",
            "region_cluster" : "Europe & Americas",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ac48a002582424e98f"),
            "country" : "FRANCE",
            "country_abbreviation" : "FR",
            "region" : "Europe & Americas",
            "region_abbreviation" : "",
            "region_cluster" : "Europe & Americas",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e990"),
            "country" : "GAMBIA",
            "country_abbreviation" : "GM",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e991"),
            "country" : "GERMANY",
            "country_abbreviation" : "DE",
            "region" : "Europe & Americas",
            "region_abbreviation" : "",
            "region_cluster" : "Europe & Americas",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e992"),
            "country" : "GHANA",
            "country_abbreviation" : "GH",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e993"),
            "country" : "GUERNSEY",
            "country_abbreviation" : "GG",
            "region" : "Europe & Americas",
            "region_abbreviation" : "",
            "region_cluster" : "Europe & Americas",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e994"),
            "country" : "HONG KONG",
            "country_abbreviation" : "HK",
            "region" : "GCNA",
            "region_abbreviation" : "",
            "region_cluster" : "GCNA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e995"),
            "country" : "INDIA",
            "country_abbreviation" : "IN",
            "region" : "ASA",
            "region_abbreviation" : "",
            "region_cluster" : "ASA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e996"),
            "country" : "INDONESIA",
            "country_abbreviation" : "ID",
            "region" : "ASA",
            "region_abbreviation" : "",
            "region_cluster" : "ASA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e997"),
            "country" : "IRAQ",
            "country_abbreviation" : "IQ",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e998"),
            "country" : "IRELAND",
            "country_abbreviation" : "IE",
            "region" : "Europe & Americas",
            "region_abbreviation" : "",
            "region_cluster" : "Europe & Americas",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e999"),
            "country" : "JAPAN",
            "country_abbreviation" : "JP",
            "region" : "GCNA",
            "region_abbreviation" : "",
            "region_cluster" : "GCNA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e99a"),
            "country" : "JERSEY",
            "country_abbreviation" : "JE",
            "region" : "Europe & Americas",
            "region_abbreviation" : "",
            "region_cluster" : "Europe & Americas",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e99b"),
            "country" : "JORDAN",
            "country_abbreviation" : "JO",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e99c"),
            "country" : "KENYA",
            "country_abbreviation" : "KE",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e99d"),
            "country" : "SOUTH KOREA",
            "country_abbreviation" : "KR",
            "region" : "GCNA",
            "region_abbreviation" : "",
            "region_cluster" : "GCNA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e99e"),
            "country" : "LAOS",
            "country_abbreviation" : "LA",
            "region" : "ASA",
            "region_abbreviation" : "",
            "region_cluster" : "ASA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e99f"),
            "country" : "LEBANON",
            "country_abbreviation" : "LB",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9a0"),
            "country" : "LUXEMBOURG",
            "country_abbreviation" : "LU",
            "region" : "Europe & Americas",
            "region_abbreviation" : "",
            "region_cluster" : "Europe & Americas",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9a1"),
            "country" : "MACAU",
            "country_abbreviation" : "MO",
            "region" : "GCNA",
            "region_abbreviation" : "",
            "region_cluster" : "GCNA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9a2"),
            "country" : "MALAYSIA",
            "country_abbreviation" : "MY",
            "region" : "ASA",
            "region_abbreviation" : "",
            "region_cluster" : "ASA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9a3"),
            "country" : "MAURITIUS",
            "country_abbreviation" : "MU",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9a4"),
            "country" : "MYANMAR",
            "country_abbreviation" : "MM",
            "region" : "ASA",
            "region_abbreviation" : "",
            "region_cluster" : "ASA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9a5"),
            "country" : "NEPAL",
            "country_abbreviation" : "NP",
            "region" : "ASA",
            "region_abbreviation" : "",
            "region_cluster" : "ASA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9a6"),
            "country" : "NIGERIA",
            "country_abbreviation" : "NG",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9a7"),
            "country" : "OMAN",
            "country_abbreviation" : "OM",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9a8"),
            "country" : "PAKISTAN",
            "country_abbreviation" : "PK",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9a9"),
            "country" : "PHILIPPINES",
            "country_abbreviation" : "PH",
            "region" : "ASA",
            "region_abbreviation" : "",
            "region_cluster" : "ASA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9aa"),
            "country" : "QATAR",
            "country_abbreviation" : "QA",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9ab"),
            "country" : "SAUDI ARABIA",
            "country_abbreviation" : "SA",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9ac"),
            "country" : "SIERRA LEONE",
            "country_abbreviation" : "SL",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9ad"),
            "country" : "SINGAPORE",
            "country_abbreviation" : "SG",
            "region" : "ASA",
            "region_abbreviation" : "",
            "region_cluster" : "ASA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9ae"),
            "country" : "SOUTH AFRICA",
            "country_abbreviation" : "ZA",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9af"),
            "country" : "SRI LANKA",
            "country_abbreviation" : "LK",
            "region" : "ASA",
            "region_abbreviation" : "",
            "region_cluster" : "ASA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9b0"),
            "country" : "SWEDEN",
            "country_abbreviation" : "SE",
            "region" : "Europe & Americas",
            "region_abbreviation" : "",
            "region_cluster" : "Europe & Americas",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9b1"),
            "country" : "SWITZERLAND",
            "country_abbreviation" : "CH",
            "region" : "Europe & Americas",
            "region_abbreviation" : "",
            "region_cluster" : "Europe & Americas",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9b2"),
            "country" : "TAIPEI BRANCH",
            "country_abbreviation" : "TPB",
            "region" : "GCNA",
            "region_abbreviation" : "",
            "region_cluster" : "GCNA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9b3"),
            "country" : "TAIWAN",
            "country_abbreviation" : "TW",
            "region" : "GCNA",
            "region_abbreviation" : "",
            "region_cluster" : "GCNA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9b4"),
            "country" : "TANZANIA",
            "country_abbreviation" : "TZ",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9b5"),
            "country" : "THAILAND",
            "country_abbreviation" : "TH",
            "region" : "ASA",
            "region_abbreviation" : "",
            "region_cluster" : "ASA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9b6"),
            "country" : "TURKEY",
            "country_abbreviation" : "TR",
            "region" : "Europe & Americas",
            "region_abbreviation" : "",
            "region_cluster" : "Europe & Americas",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9b7"),
            "country" : "UNITED ARAB EMIRATES",
            "country_abbreviation" : "AE",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9b8"),
            "country" : "UGANDA",
            "country_abbreviation" : "UG",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9b9"),
            "country" : "UNITED KINGDOM",
            "country_abbreviation" : "GB",
            "region" : "Europe & Americas",
            "region_abbreviation" : "",
            "region_cluster" : "Europe & Americas",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9ba"),
            "country" : "UNITED STATES",
            "country_abbreviation" : "US",
            "region" : "Europe & Americas",
            "region_abbreviation" : "",
            "region_cluster" : "Europe & Americas",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9bb"),
            "country" : "VIETNAM",
            "country_abbreviation" : "VN",
            "region" : "ASA",
            "region_abbreviation" : "",
            "region_cluster" : "ASA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9bc"),
            "country" : "ZAMBIA",
            "country_abbreviation" : "ZM",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9bd"),
            "country" : "ZIMBABWE",
            "country_abbreviation" : "ZW",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9be"),
            "country" : "GROUP",
            "country_abbreviation" : "GRPCOUNTRY",
            "region" : "GROUP",
            "region_abbreviation" : "",
            "region_cluster" : "GROUP",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9bf"),
            "country" : "AME REGIONAL TEAM",
            "country_abbreviation" : "AM",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9c0"),
            "country" : "EUROPE & AMERICAS REGIONAL TEAM",
            "country_abbreviation" : "EA",
            "region" : "Europe & Americas",
            "region_abbreviation" : "",
            "region_cluster" : "Europe & Americas",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9c1"),
            "country" : "ASA REGIONAL TEAM",
            "country_abbreviation" : "AS",
            "region" : "ASA",
            "region_abbreviation" : "",
            "region_cluster" : "ASA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9c2"),
            "country" : "GCNA REGIONAL TEAM",
            "country_abbreviation" : "GC",
            "region" : "GCNA",
            "region_abbreviation" : "",
            "region_cluster" : "GCNA",
            "enable" : true
        }
    ],
    "lifecycle" : [ 
        {
            "id" : "LC1",
            "name" : "Regulatory",
            "seq" : 0.0
        }, 
        {
            "id" : "LC2",
            "name" : "Risk Assessment and Controls",
            "seq" : 1.0
        }, 
        {
            "id" : "LC3",
            "name" : "Frameworks, Policy & Standards",
            "seq" : 2.0
        }, 
        {
            "id" : "LC4",
            "name" : "Oversight & Assurance",
            "seq" : 3.0
        }, 
        {
            "id" : "LC5",
            "name" : "Governance, Resources & Organisation",
            "seq" : 4.0
        }, 
        {
            "id" : "LC6",
            "name" : "Technology & Data",
            "seq" : 5.0
        }, 
        {
            "id" : "LC7",
            "name" : "Business Enablement",
            "seq" : 6.0
        }
    ],
    "scorecard" : [ 
        {
            "id" : "TBD3",
            "name" : "Transform and disrupt with digital",
            "seq" : 0,
            "businessdriver" : [ 
                {
                    "id" : "BD1",
                    "name" : "Other Financial Framework",
                    "seq" : 0
                }
            ]
        }, 
        {
            "id" : "TBD1",
            "name" : "Deliver the financial framework and optimize low returning markets",
            "seq" : 1,
            "businessdriver" : [ 
                {
                    "id" : "BD2",
                    "name" : "Network",
                    "seq" : 0
                }, 
                {
                    "id" : "BD3",
                    "name" : "Industries",
                    "seq" : 0
                }, 
                {
                    "id" : "BD4",
                    "name" : "Client Other",
                    "seq" : 0
                }, 
                {
                    "id" : "BD5",
                    "name" : "International Products",
                    "seq" : 0
                }, 
                {
                    "id" : "BD6",
                    "name" : "Segmentation",
                    "seq" : 0
                }, 
                {
                    "id" : "BD7",
                    "name" : "Liabilities",
                    "seq" : 0
                }, 
                {
                    "id" : "BD8",
                    "name" : "ME Model",
                    "seq" : 0
                }, 
                {
                    "id" : "BD9",
                    "name" : "PvB Referrals",
                    "seq" : 0
                }, 
                {
                    "id" : "BD10",
                    "name" : "Ecosystem",
                    "seq" : 0
                }
            ]
        }, 
        {
            "id" : "TBD4",
            "name" : " Purpose and People",
            "seq" : 3,
            "businessdriver" : [ 
                {
                    "id" : "BD16",
                    "name" : "Costs",
                    "seq" : 0
                }, 
                {
                    "id" : "BD17",
                    "name" : "Process Efficiency",
                    "seq" : 0
                }, 
                {
                    "id" : "BD18",
                    "name" : "Change Protocol",
                    "seq" : 0
                }, 
                {
                    "id" : "BD19",
                    "name" : "Organisational Model",
                    "seq" : 0
                }, 
                {
                    "id" : "BD20",
                    "name" : "Tail & Sub-optimal",
                    "seq" : 0
                }, 
                {
                    "id" : "BD21",
                    "name" : "Efficiency Other",
                    "seq" : 0
                }
            ]
        }, 
        {
            "id" : "TBD2",
            "name" : "Deliver our network and grow our affluent business",
            "seq" : 4,
            "businessdriver" : [ 
                {
                    "id" : "BD22",
                    "name" : "Digitization",
                    "seq" : 0
                }, 
                {
                    "id" : "BD23",
                    "name" : "Analytics, MIS and Frontline Tools",
                    "seq" : 0
                }
            ]
        }
    ],
    "initiativepopup" : "Summary View",
    "additionaltabs" : [],
    "initiativetags" : [ 
        {
            "id" : "",
            "icon" : "Nq8PXGD_ZlZvkx-Fnvt5WzQt0QGPQtj0--wBY2Tj8XwOCQQWWi-V8JuFvEHZe6wF3e--OE.png",
            "name" : "Operational Excellence",
            "position" : "BOTTOM_RIGHT",
            "enableadditionaldetail" : true,
            "enable" : true
        }, 
        {
            "id" : "",
            "icon" : "KaAziK859HAvUIF77AG0fyAXygdjN7eu--77pxaSeaV4Dmw3G1A_VBVPHMewEg-1bU--p84.png",
            "name" : "Process 84",
            "position" : "BOTTOM_RIGHT",
            "enableadditionaldetail" : true,
            "enable" : true
        }, 
        {
            "id" : "",
            "icon" : "l7wgjjHA_ZFcWZHH5Tsgdqy_qgtNOski--compilance.png",
            "name" : "Compliance Conduct Plan Activities",
            "position" : "BOTTOM_RIGHT",
            "enableadditionaldetail" : false,
            "enable" : true
        }, 
        {
            "id" : "",
            "icon" : "pB8IrhL9XaNX6HNa4mSxDECnAnG0XXf0--internal_remediation.png",
            "name" : "Internal Remediation",
            "position" : "BOTTOM_RIGHT",
            "enableadditionaldetail" : false,
            "enable" : true
        }, 
        {
            "id" : "",
            "icon" : "V5N79y40XvUnGSiDYZqlKZWEUfgZcRaF--external.png",
            "name" : "External Remediation",
            "position" : "BOTTOM_RIGHT",
            "enableadditionaldetail" : false,
            "enable" : true
        }, 
        {
            "id" : "",
            "icon" : "7T7suQJDbQiADPTeMuzA_uWhOvIPqWZd--bottomup.png",
            "name" : "Bottom-up Initiative (Country-led)",
            "position" : "BOTTOM_RIGHT",
            "enableadditionaldetail" : false,
            "enable" : true
        }, 
        {
            "id" : "",
            "icon" : "yQxMB2er0JaadhtnvBvKxLfa1xhHAzkO--bottom-down.png",
            "name" : "Top-down initiative (Group-led)",
            "position" : "BOTTOM_RIGHT",
            "enableadditionaldetail" : false,
            "enable" : true
        }, 
        {
            "id" : "",
            "icon" : "Regulatory_Mandatory.png",
            "name" : "Scorecard Deliverable",
            "position" : "BOTTOM_RIGHT",
            "enableadditionaldetail" : false,
            "enable" : true
        }
    ],
    "usermetric" : {
        "users" : {
            "region" : true,
            "segment" : true,
            "productassignment" : true,
            "functions" : false
        },
        "roles" : {
            "ispartofinitiativeowner" : true,
            "segment" : false,
            "productassignment" : false,
            "functions" : false
        }
    },
    "configfilters" : [ 
        {
            "_id" : "CF13",
            "name" : "Project Classification",
            "parent_id" : [],
            "listoptions" : [ 
                "value", 
                "text", 
                "color", 
                "icon"
            ],
            "list" : [ 
                {
                    "text" : "Small",
                    "value" : "Small",
                    "alias" : "",
                    "color" : "#ff7f27",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Medium",
                    "value" : "Medium",
                    "alias" : "",
                    "color" : "#00a2e8",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Large",
                    "value" : "Large",
                    "alias" : "",
                    "color" : "#22b14c",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : false,
            "isrequired" : false
        }, 
        {
            "_id" : "CF15",
            "name" : "Search",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "Free Text",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "filter"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF16",
            "name" : "Date Range",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "Monthly Period",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "filter"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF17",
            "name" : "Initiative Type",
            "parent_id" : [],
            "listoptions" : [ 
                "value", 
                "text", 
                "displayoption", 
                "icon"
            ],
            "list" : [ 
                {
                    "text" : "FCC-led Initiative",
                    "value" : "FCCLED",
                    "alias" : "FCC-led Initiative",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "fcc",
                    "description" : ""
                }, 
                {
                    "text" : "Compliance-led Initiative",
                    "value" : "COMPLIANCELED",
                    "alias" : "Compliance-led Initiative",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "compliance",
                    "description" : ""
                }, 
                {
                    "text" : "CFCC initiatives",
                    "value" : "FCCCOMPLIANCE",
                    "alias" : "CFCC initiatives",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "joint",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [ 
                {
                    "text" : "Dog Ear",
                    "value" : "dogear"
                }, 
                {
                    "text" : "None",
                    "value" : "none"
                }
            ],
            "type" : "list",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF19",
            "name" : "Display Progress",
            "parent_id" : [],
            "listoptions" : [ 
                "value", 
                "text", 
                "color"
            ],
            "list" : [ 
                {
                    "text" : "On Track",
                    "value" : "green",
                    "alias" : "",
                    "color" : "#00a800",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "At Risk",
                    "value" : "amber",
                    "alias" : "",
                    "color" : "#ff9900",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Mgmt Support Required",
                    "value" : "red",
                    "alias" : "",
                    "color" : "#a80000",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Delayed or Re-Baselined",
                    "value" : "grey",
                    "alias" : "",
                    "color" : "#808080",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF21",
            "name" : "Task Legend",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "Toggle Button",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "filter"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF22",
            "name" : "Business Driver",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : false,
            "isrequired" : true
        }, 
        {
            "_id" : "CF26",
            "name" : "Product",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF27",
            "name" : "Segment",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF27_1",
            "name" : "Sub Segment",
            "parent_id" : [ 
                "CF27"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : false,
            "isrequired" : false
        }, 
        {
            "_id" : "CF28",
            "name" : "Function",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF29",
            "name" : "Risk Subtype",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : false,
            "isrequired" : false
        }, 
        {
            "_id" : "CF29_1",
            "name" : "Risk Subtype",
            "parent_id" : [ 
                "CF29"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : false,
            "isrequired" : false
        }, 
        {
            "_id" : "CF30",
            "name" : "Conduct Theme",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : false,
            "isrequired" : false
        }, 
        {
            "_id" : "CF30_1",
            "name" : "Conduct Sub Type",
            "parent_id" : [ 
                "CF30"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF31",
            "name" : "Initiative Category",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF31_1",
            "name" : "Initiative Sub Category",
            "parent_id" : [ 
                "CF31"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : false,
            "isrequired" : false
        }, 
        {
            "_id" : "CF4",
            "name" : "Business Impact",
            "parent_id" : [],
            "listoptions" : [ 
                "value", 
                "text"
            ],
            "list" : [ 
                {
                    "text" : "Low",
                    "value" : "Low",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Medium",
                    "value" : "Medium",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "High",
                    "value" : "High",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF41",
            "name" : "AE/PM",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "filter"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF43",
            "name" : "Five Shifts",
            "parent_id" : [],
            "listoptions" : [ 
                "value", 
                "text"
            ],
            "list" : [ 
                {
                    "text" : "Build Scale",
                    "value" : "Build Scale",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Reshape the Balance Sheet",
                    "value" : "Business Mix",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Enforce Capital Allocation discipline",
                    "value" : "Capital allocation & Costs",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Innovate and Digitise",
                    "value" : "Leverage technology via digitisation",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Exit tail and reduce low returning RWA",
                    "value" : "Other enablers",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : false,
            "isrequired" : false
        }, 
        {
            "_id" : "CF52",
            "name" : "Clarity Staging Filter",
            "parent_id" : [],
            "value" : "",
            "listoptions" : [ 
                "value", 
                "text"
            ],
            "list" : [ 
                {
                    "value" : "Clarity ID",
                    "text" : "Clarity ID"
                }, 
                {
                    "value" : "Project Name",
                    "text" : "Project Name"
                }
            ],
            "displayoptions" : null,
            "description" : "",
            "enable" : true,
            "type" : "list",
            "category" : [ 
                "filter"
            ],
            "isrequired" : false,
            "speciallist" : []
        }
    ],
    "configsummaryfields" : [ 
        {
            "_id" : "CF0",
            "name" : "Accountable Executive",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [ 
                {
                    "text" : "Multi Select",
                    "value" : "multiselect",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Drop Down List",
                    "value" : "dropdownlist",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "multiselect",
            "description" : "",
            "displayoptions" : [],
            "type" : "single-choice",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF1",
            "name" : "Project Manager",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF10",
            "name" : "Planned Cost",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF11",
            "name" : "Region",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [ 
                "ALL"
            ],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF12",
            "name" : "Country",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [ 
                "ALL"
            ],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF13",
            "name" : "Project Classification",
            "parent_id" : [],
            "listoptions" : [ 
                "value", 
                "text", 
                "color", 
                "icon"
            ],
            "list" : [ 
                {
                    "text" : "Small",
                    "value" : "Small",
                    "alias" : "",
                    "color" : "#ff7f27",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Medium",
                    "value" : "Medium",
                    "alias" : "",
                    "color" : "#00a2e8",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Large",
                    "value" : "Large",
                    "alias" : "",
                    "color" : "#22b14c",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF14",
            "name" : "Initiative Tracking",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF17",
            "name" : "Initiative Group",
            "parent_id" : [],
            "listoptions" : [ 
                "value", 
                "text", 
                "displayoption", 
                "icon"
            ],
            "list" : [ 
                {
                    "text" : "FCC-led Initiative",
                    "value" : "FCCLED",
                    "alias" : "FCC-led Initiative",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "fcc",
                    "description" : ""
                }, 
                {
                    "text" : "Compliance-led Initiative",
                    "value" : "COMPLIANCELED",
                    "alias" : "Compliance-led Initiative",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "compliance",
                    "description" : ""
                }, 
                {
                    "text" : "CFCC initiatives",
                    "value" : "FCCCOMPLIANCE",
                    "alias" : "CFCC initiatives",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "joint",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [ 
                {
                    "text" : "Dog Ear",
                    "value" : "dogear"
                }, 
                {
                    "text" : "None",
                    "value" : "none"
                }
            ],
            "type" : "list",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF18",
            "name" : "Revised End Date",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF19",
            "name" : "Project Status",
            "parent_id" : [],
            "listoptions" : [ 
                "value", 
                "text", 
                "color"
            ],
            "list" : [ 
                {
                    "text" : "On Track",
                    "value" : "green",
                    "alias" : "",
                    "color" : "#00a800",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "At Risk",
                    "value" : "amber",
                    "alias" : "",
                    "color" : "#ff9900",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Mgmt Support Required",
                    "value" : "red",
                    "alias" : "",
                    "color" : "#a80000",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Delayed or Re-Baselined",
                    "value" : "grey",
                    "alias" : "",
                    "color" : "#808080",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF2",
            "name" : "Technology Lead",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF20",
            "name" : "Status",
            "parent_id" : [],
            "listoptions" : [ 
                "value", 
                "text"
            ],
            "list" : [ 
                {
                    "text" : "Live",
                    "value" : "LIVE",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Retired",
                    "value" : "RETIRED",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field"
            ],
            "enable" : false,
            "isrequired" : false
        }, 
        {
            "_id" : "CF22",
            "name" : "Business Driver",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : false,
            "isrequired" : true
        }, 
        {
            "_id" : "CF23",
            "name" : "Useful Resources",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF24",
            "name" : "Metric Benchmark",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF25",
            "name" : "Is Initiative Tracked",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF26",
            "name" : "Product Assignment",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF27",
            "name" : "Segment",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF27_1",
            "name" : "Sub Segment",
            "parent_id" : [ 
                "CF27"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF28",
            "name" : "Function",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF29",
            "name" : "Principle Risk",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [ 
                "ALL"
            ],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF29_1",
            "name" : "Risk Subtype",
            "parent_id" : [ 
                "CF29"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [ 
                "ALL"
            ],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF3",
            "name" : "Strategic Sponsor",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF30",
            "name" : "Conduct Theme",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [ 
                "ALL"
            ],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF30_1",
            "name" : "Conduct Subtype",
            "parent_id" : [ 
                "CF30"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [ 
                "ALL"
            ],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF31",
            "name" : "Initiative Type",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [ 
                "ALL"
            ],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF31_1",
            "name" : "Initiative Sub Type",
            "parent_id" : [ 
                "CF31"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [ 
                "ALL"
            ],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF31_2",
            "name" : "Criticality Rating",
            "parent_id" : [ 
                "CF31"
            ],
            "listoptions" : [ 
                "value", 
                "text"
            ],
            "list" : [ 
                {
                    "text" : "A",
                    "value" : "A",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "B",
                    "value" : "B",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "C",
                    "value" : "C",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "N/A",
                    "value" : "N/A",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF32",
            "name" : "Tracking ID",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF33",
            "name" : "Risk & Issues",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF33_1",
            "name" : "Risk Name",
            "parent_id" : [ 
                "CF33"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF33_10",
            "name" : "Risk Category",
            "parent_id" : [ 
                "CF33"
            ],
            "listoptions" : [ 
                "value", 
                "text"
            ],
            "list" : [ 
                {
                    "text" : "Flexibility",
                    "value" : "Flexibility",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Functionability",
                    "value" : "Functionability",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Human Interface",
                    "value" : "Human Interface",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Implementation",
                    "value" : "Implementation",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Interdependencies",
                    "value" : "Interdependencies",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Objectives",
                    "value" : "Objectives",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Organizational Culture",
                    "value" : "Organizational Culture",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Resource Avaibility",
                    "value" : "Resource Avaibility",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Sponsorship",
                    "value" : "Sponsorship",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Supportability",
                    "value" : "Supportability",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Technical",
                    "value" : "Technical",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF33_11",
            "name" : "Risk Symptoms",
            "parent_id" : [ 
                "CF33"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF33_2",
            "name" : "Risk Description",
            "parent_id" : [ 
                "CF33"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF33_3",
            "name" : "Risk Country",
            "parent_id" : [ 
                "CF33"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF33_4",
            "name" : "Target Resolution",
            "parent_id" : [ 
                "CF33"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF33_5",
            "name" : "Risk Severity",
            "parent_id" : [ 
                "CF33"
            ],
            "listoptions" : [ 
                "value", 
                "text"
            ],
            "list" : [ 
                {
                    "text" : "Low",
                    "value" : "Low",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Medium",
                    "value" : "Medium",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "High",
                    "value" : "High",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF33_6",
            "name" : "Risk Priority",
            "parent_id" : [ 
                "CF33"
            ],
            "listoptions" : [ 
                "value", 
                "text"
            ],
            "list" : [ 
                {
                    "text" : "Low",
                    "value" : "Low",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Medium",
                    "value" : "Medium",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "High",
                    "value" : "High",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF33_7",
            "name" : "Risk Status",
            "parent_id" : [ 
                "CF33"
            ],
            "listoptions" : [ 
                "value", 
                "text"
            ],
            "list" : [ 
                {
                    "text" : "Open",
                    "value" : "Open",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Work in Progress",
                    "value" : "WorkinProgress",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Resolved",
                    "value" : "Resolved",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Closed",
                    "value" : "Closed",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF33_8",
            "name" : "Risk Probability",
            "parent_id" : [ 
                "CF33"
            ],
            "listoptions" : [ 
                "value", 
                "text"
            ],
            "list" : [ 
                {
                    "text" : "Low",
                    "value" : "Low",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Medium",
                    "value" : "Medium",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "High",
                    "value" : "High",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF33_9",
            "name" : "Risk Impact",
            "parent_id" : [ 
                "CF33"
            ],
            "listoptions" : [ 
                "value", 
                "text"
            ],
            "list" : [ 
                {
                    "text" : "Low",
                    "value" : "Low",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Medium",
                    "value" : "Medium",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "High",
                    "value" : "High",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF34",
            "name" : "Stakeholder",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF36",
            "name" : "Global",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF37",
            "name" : "Scorecard",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF38",
            "name" : "Initiative Category",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF4",
            "name" : "Business Impact",
            "parent_id" : [],
            "listoptions" : [ 
                "value", 
                "text"
            ],
            "list" : [ 
                {
                    "text" : "Low",
                    "value" : "Low",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Medium",
                    "value" : "Medium",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "High",
                    "value" : "High",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF42",
            "name" : "Is Global Apply",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : false,
            "isrequired" : false
        }, 
        {
            "_id" : "CF43",
            "name" : "Five Shifts",
            "parent_id" : [],
            "listoptions" : [ 
                "value", 
                "text"
            ],
            "list" : [ 
                {
                    "text" : "Build Scale",
                    "value" : "Build Scale",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Reshape the Balance Sheet",
                    "value" : "Business Mix",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Enforce Capital Allocation discipline",
                    "value" : "Capital allocation & Costs",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Innovate and Digitise",
                    "value" : "Leverage technology via digitisation",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Exit tail and reduce low returning RWA",
                    "value" : "Other enablers",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : false,
            "isrequired" : false
        }, 
        {
            "_id" : "CF5",
            "name" : "Problem Statement",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF6",
            "name" : "Project Description",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF7",
            "name" : "Key Deliverables/Milestones",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF7_0",
            "name" : "Deliverable",
            "parent_id" : [ 
                "CF7"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF7_1",
            "name" : "Start Date",
            "parent_id" : [ 
                "CF7"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF7_10",
            "name" : "Type",
            "parent_id" : [ 
                "CF7"
            ],
            "listoptions" : [ 
                "value", 
                "text"
            ],
            "list" : [ 
                {
                    "text" : "ECG",
                    "value" : "ECG",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Enterprise Change Governance Checklist"
                }, 
                {
                    "text" : "HLBR",
                    "value" : "HLBR",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "High Level Business Requirements"
                }, 
                {
                    "text" : "ORA",
                    "value" : "ORA",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Operational Risk Assessment"
                }, 
                {
                    "text" : "PCA",
                    "value" : "PCA",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Project Complexity Assessment"
                }, 
                {
                    "text" : "Pg Benefits Plan",
                    "value" : "Pg Benefits Plan",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Programme Benefits Management Plan"
                }, 
                {
                    "text" : "Pg Benefits Report",
                    "value" : "Pg Benefits Report",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Programme Benefits Report"
                }, 
                {
                    "text" : "Pg Closure",
                    "value" : "Pg Closure",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Programme Closure Report"
                }, 
                {
                    "text" : "Pg ToR",
                    "value" : "Pg ToR",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Programme Steering Committee Terms of Reference"
                }, 
                {
                    "text" : "PgED",
                    "value" : "PgED",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Programme Execution Document"
                }, 
                {
                    "text" : "PgMP",
                    "value" : "PgMP",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Programme Management Plan"
                }, 
                {
                    "text" : "Pj Benefits Plan",
                    "value" : "Pj Benefits Plan",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Project Management Plan"
                }, 
                {
                    "text" : "Pj Benefits Report",
                    "value" : "Pj Benefits Report",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Project Benefits Management Plan"
                }, 
                {
                    "text" : "Pj Closure",
                    "value" : "Pj Closure",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Project Closure Report"
                }, 
                {
                    "text" : "Pj ToR",
                    "value" : "Pj ToR",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Project Steering Committee Terms of Reference"
                }, 
                {
                    "text" : "PjED",
                    "value" : "PjED",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Project Execution Document"
                }, 
                {
                    "text" : "PjMP",
                    "value" : "PjMP",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Project Management Plan"
                }, 
                {
                    "text" : "SDF",
                    "value" : "SDF",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Systems Delivery Framework "
                }, 
                {
                    "text" : "Pilot Go-Live",
                    "value" : "Pilot Go-Live",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Pilot Go-Live"
                }, 
                {
                    "text" : "Go-Live",
                    "value" : "Go-Live",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Go-Live Confirmation"
                }, 
                {
                    "text" : "Phase Gate",
                    "value" : "Phase Gate",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Phase Gate Sign-off"
                }, 
                {
                    "text" : "Commercialization Plan",
                    "value" : "Commercialization Plan",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Commercialization Plan"
                }, 
                {
                    "text" : "N/A",
                    "value" : "N/A",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Not a Phase Gate milestone"
                }, 
                {
                    "text" : "AED",
                    "value" : "AED",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Agile Execution Document"
                }, 
                {
                    "text" : "ADMP",
                    "value" : "ADMP",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Agile Management Plan"
                }, 
                {
                    "text" : "Sprint 0",
                    "value" : "Sprint 0",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Sprint 0"
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF7_11",
            "name" : "RAG",
            "parent_id" : [ 
                "CF7"
            ],
            "listoptions" : [ 
                "value", 
                "text", 
                "color"
            ],
            "list" : [ 
                {
                    "text" : "Red",
                    "value" : "Red",
                    "alias" : "",
                    "color" : "#C00000",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Amber",
                    "value" : "Amber",
                    "alias" : "",
                    "color" : "#FF9900",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Green",
                    "value" : "Green",
                    "alias" : "",
                    "color" : "#009D44",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF7_12",
            "name" : "Progress Completion",
            "parent_id" : [ 
                "CF7"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF7_13",
            "name" : "Planned Cost",
            "parent_id" : [ 
                "CF7"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : false,
            "isrequired" : false
        }, 
        {
            "_id" : "CF7_14",
            "name" : "Five Shift",
            "parent_id" : [ 
                "CF7"
            ],
            "listoptions" : [ 
                "value", 
                "text"
            ],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field"
            ],
            "enable" : false,
            "isrequired" : false
        }, 
        {
            "_id" : "CF7_2",
            "name" : "End Date",
            "parent_id" : [ 
                "CF7"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF7_3",
            "name" : "Revised End Date",
            "parent_id" : [ 
                "CF7"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF7_4",
            "name" : "Country",
            "parent_id" : [ 
                "CF7"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [ 
                "ALL"
            ],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF7_5",
            "name" : "Complete",
            "parent_id" : [ 
                "CF7"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : false,
            "isrequired" : false
        }, 
        {
            "_id" : "CF7_6",
            "name" : "Status",
            "parent_id" : [ 
                "CF7"
            ],
            "listoptions" : [ 
                "value", 
                "text"
            ],
            "list" : [ 
                {
                    "text" : "Completed",
                    "value" : "Completed",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Not Started",
                    "value" : "Not Started",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Started",
                    "value" : "Started",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF7_7",
            "name" : "Status Comment",
            "parent_id" : [ 
                "CF7"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF7_8",
            "name" : "Owner",
            "parent_id" : [ 
                "CF7"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF7_9",
            "name" : "Region",
            "parent_id" : [ 
                "CF7"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [ 
                "ALL"
            ],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF8",
            "name" : "Progress Completion",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [ 
                {
                    "text" : "Calculated",
                    "value" : "calculated",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Manual Input",
                    "value" : "manual",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "manual",
            "description" : "",
            "displayoptions" : [],
            "type" : "single-choice",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF9",
            "name" : "Project Driver",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }
    ],
    "configscorecard" : [ 
        {
            "_id" : "CF53",
            "name" : "Weightage",
            "parent_id" : [],
            "value" : "",
            "listoptions" : [],
            "list" : null,
            "displayoptions" : null,
            "description" : "",
            "enable" : true,
            "type" : "none",
            "category" : [ 
                "scorecard"
            ],
            "isrequired" : false,
            "speciallist" : []
        }
    ],
    "periodfrom" : 2016,
    "periodto" : 2018,
    "projectnamemaxlength" : 20,
    "initiativetagmaxlimit" : 4,
    "description" : "",
    "segment" : [ 
        {
            "_id" : ObjectId("5b4c070501112617537cc93c"),
            "name" : "N/A",
            "subsegment" : [ 
                {
                    "_id" : ObjectId("5b569070dfd3d52632e94b82"),
                    "name" : "N/A"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b4c070501112617537cc93d"),
            "name" : "Corporate, Commercial & Institutional Banking",
            "subsegment" : [ 
                {
                    "_id" : ObjectId("5b569159dfd3d52632e94b83"),
                    "name" : "CB - High Value Small Business"
                }, 
                {
                    "_id" : ObjectId("5b569159dfd3d52632e94b84"),
                    "name" : "CB - Middle Enterprises"
                }, 
                {
                    "_id" : ObjectId("5b569159dfd3d52632e94b85"),
                    "name" : "CB - Middle Markets"
                }, 
                {
                    "_id" : ObjectId("5b569159dfd3d52632e94b86"),
                    "name" : "CB - Local Corporates"
                }, 
                {
                    "_id" : ObjectId("5b569159dfd3d52632e94b87"),
                    "name" : "GB - Banks & Broker Dealers"
                }, 
                {
                    "_id" : ObjectId("5b569159dfd3d52632e94b88"),
                    "name" : "GB - Commercial Real Estate"
                }, 
                {
                    "_id" : ObjectId("5b569159dfd3d52632e94b89"),
                    "name" : "GB - Financial & Strategic Investors Group"
                }, 
                {
                    "_id" : ObjectId("5b569159dfd3d52632e94b8a"),
                    "name" : "GB - Global Industries Group"
                }, 
                {
                    "_id" : ObjectId("5b569159dfd3d52632e94b8b"),
                    "name" : "GB - Global Subsidiaries"
                }, 
                {
                    "_id" : ObjectId("5b569159dfd3d52632e94b8c"),
                    "name" : "GB - Investors & Insurance"
                }, 
                {
                    "_id" : ObjectId("5b569159dfd3d52632e94b8d"),
                    "name" : "GB - Public Sector & Development Organisation"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b4c070601112617537cc93e"),
            "name" : "Private Banking",
            "subsegment" : [ 
                {
                    "_id" : ObjectId("5b569070dfd3d52632e94b82"),
                    "name" : "N/A"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b4c070601112617537cc940"),
            "name" : "Retail Banking",
            "subsegment" : [ 
                {
                    "_id" : ObjectId("5b569159dfd3d52632e94b8e"),
                    "name" : "Retail Business Banking"
                }, 
                {
                    "_id" : ObjectId("5b569159dfd3d52632e94b8f"),
                    "name" : "Retail Individual Banking"
                }
            ]
        }
    ],
    "productassignment" : [ 
        {
            "_id" : ObjectId("5b39f60ba7da87c5e8da382b"),
            "name" : "N/A"
        }, 
        {
            "_id" : ObjectId("5b39f60ba7da87c5e8da382c"),
            "name" : "Trade"
        }, 
        {
            "_id" : ObjectId("5b39f60ba7da87c5e8da382d"),
            "name" : "Securities Services (SS)"
        }, 
        {
            "_id" : ObjectId("5b39f60ba7da87c5e8da382e"),
            "name" : "Digitization and Client Access (DCA)"
        }, 
        {
            "_id" : ObjectId("5b39f60ba7da87c5e8da382f"),
            "name" : "Financial Markets (FM)"
        }, 
        {
            "_id" : ObjectId("5b39f60ba7da87c5e8da3830"),
            "name" : "Corporate Finance (CF)"
        }, 
        {
            "_id" : ObjectId("5b39f60ba7da87c5e8da3831"),
            "name" : "Corporate Lending (CL)"
        }, 
        {
            "_id" : ObjectId("5b39f60ba7da87c5e8da3832"),
            "name" : "Principal Finance (PF)"
        }, 
        {
            "_id" : ObjectId("5b39f60ba7da87c5e8da3833"),
            "name" : "Cash (CBR)"
        }, 
        {
            "_id" : ObjectId("5b39f60ba7da87c5e8da3834"),
            "name" : "Cash (non-CBR)"
        }, 
        {
            "_id" : ObjectId("5b39f60ba7da87c5e8da3835"),
            "name" : "Retail"
        }, 
        {
            "_id" : ObjectId("5b39f60ba7da87c5e8da3836"),
            "name" : "Wealth management"
        }
    ],
    "conducttheme" : [ 
        {
            "_id" : ObjectId("5b3b0407a7da87c5e8da3929"),
            "name" : "N/A",
            "subtype" : [ 
                {
                    "_id" : ObjectId("5b4d9e9ceaad0e985e76f5aa"),
                    "name" : "N/A"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b39f983a7da87c5e8da3842"),
            "name" : "Our Business",
            "subtype" : [ 
                {
                    "_id" : ObjectId("5b4d9f48eaad0e985e76f5ab"),
                    "name" : "Transparent Business Model"
                }, 
                {
                    "_id" : ObjectId("5b4d9f48eaad0e985e76f5ac"),
                    "name" : "Effective Governance"
                }, 
                {
                    "_id" : ObjectId("5b4d9f48eaad0e985e76f5ad"),
                    "name" : "Robust Infrastructure"
                }, 
                {
                    "_id" : ObjectId("5b4d9f48eaad0e985e76f5ae"),
                    "name" : "Exemplary Business Practices"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b39f984a7da87c5e8da3846"),
            "name" : "Each of Us",
            "subtype" : [ 
                {
                    "_id" : ObjectId("5b4d9f48eaad0e985e76f5af"),
                    "name" : "Ethical Leadership"
                }, 
                {
                    "_id" : ObjectId("5b4d9f48eaad0e985e76f5b0"),
                    "name" : "Aligned Incentives"
                }, 
                {
                    "_id" : ObjectId("5b4d9f48eaad0e985e76f5b1"),
                    "name" : "People Competency & Integrity"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b39f984a7da87c5e8da384c"),
            "name" : "Our External Stakeholders",
            "subtype" : [ 
                {
                    "_id" : ObjectId("5b4d9f48eaad0e985e76f5b2"),
                    "name" : "Fair Outcomes for Clients"
                }, 
                {
                    "_id" : ObjectId("5b4d9f48eaad0e985e76f5b3"),
                    "name" : "Effective Markets"
                }, 
                {
                    "_id" : ObjectId("5b4d9f48eaad0e985e76f5b4"),
                    "name" : "Financial Crime Compliance"
                }, 
                {
                    "_id" : ObjectId("5b4d9f48eaad0e985e76f5b5"),
                    "name" : "Stakeholder Confidence"
                }
            ]
        }
    ],
    "initiativecategory" : [ 
        {
            "_id" : ObjectId("5b4da21beaad0e985e76f5b7"),
            "name" : "FCC Group MAP",
            "subcategory" : [ 
                {
                    "_id" : ObjectId("5b4da21beaad0e985e76f5b8"),
                    "name" : "A. Governance, Oversight & Organisation"
                }, 
                {
                    "_id" : ObjectId("5b4da21beaad0e985e76f5b9"),
                    "name" : "B. Risk Assessment"
                }, 
                {
                    "_id" : ObjectId("5b4da21beaad0e985e76f5ba"),
                    "name" : "C. Policies, Standards and Procedures"
                }, 
                {
                    "_id" : ObjectId("5b4da21beaad0e985e76f5bb"),
                    "name" : "D. People"
                }, 
                {
                    "_id" : ObjectId("5b4da21beaad0e985e76f5bc"),
                    "name" : "E. Learning and Awareness"
                }, 
                {
                    "_id" : ObjectId("5b4da21beaad0e985e76f5bd"),
                    "name" : "F. CDD/EDD"
                }, 
                {
                    "_id" : ObjectId("5b4da21beaad0e985e76f5be"),
                    "name" : "G. Surveillance"
                }, 
                {
                    "_id" : ObjectId("5b4da21beaad0e985e76f5bf"),
                    "name" : "H. Investigations and Disclosures"
                }, 
                {
                    "_id" : ObjectId("5b4da21beaad0e985e76f5c0"),
                    "name" : "I. Assurance and Testing"
                }, 
                {
                    "_id" : ObjectId("5b4da21beaad0e985e76f5c1"),
                    "name" : "J. MI and Data Management"
                }, 
                {
                    "_id" : ObjectId("5b4da21beaad0e985e76f5c2"),
                    "name" : "K. Sanctions"
                }, 
                {
                    "_id" : ObjectId("5b4da21beaad0e985e76f5c3"),
                    "name" : "L. ABC"
                }, 
                {
                    "_id" : ObjectId("5b4da21beaad0e985e76f5c4"),
                    "name" : "M. Tax"
                }, 
                {
                    "_id" : ObjectId("5b4da21beaad0e985e76f5c5"),
                    "name" : "N. Regions and Countries"
                }, 
                {
                    "_id" : ObjectId("5b4da21beaad0e985e76f5c6"),
                    "name" : "O. Business"
                }, 
                {
                    "_id" : ObjectId("5b4da21beaad0e985e76f5c7"),
                    "name" : "P. Americas"
                }, 
                {
                    "_id" : ObjectId("5b4da21beaad0e985e76f5c8"),
                    "name" : "Q. Other Matters"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b4da21beaad0e985e76f5c9"),
            "name" : "FCC Country MAP",
            "subcategory" : []
        }, 
        {
            "_id" : ObjectId("5b4da21beaad0e985e76f5ca"),
            "name" : "FCC TOP Objectives",
            "subcategory" : []
        }, 
        {
            "_id" : ObjectId("5b4da21beaad0e985e76f5cb"),
            "name" : "FCC PRF & Gov",
            "subcategory" : []
        }, 
        {
            "_id" : ObjectId("5b4da21beaad0e985e76f5cc"),
            "name" : "CAP - Mandatory Regulatory Requirements",
            "subcategory" : []
        }, 
        {
            "_id" : ObjectId("5b4da21beaad0e985e76f5cd"),
            "name" : "CAP - Strategic Initiatives",
            "subcategory" : []
        }, 
        {
            "_id" : ObjectId("5b4da21beaad0e985e76f5ce"),
            "name" : "CAP - Other Initiatives",
            "subcategory" : []
        }, 
        {
            "_id" : ObjectId("5b4da21beaad0e985e76f5cf"),
            "name" : "Non-CAP -  Initiatives",
            "subcategory" : []
        }
    ],
    "principlerisk" : [ 
        {
            "_id" : ObjectId("5b4d9dcbeaad0e985e76f5a9"),
            "name" : "N/A",
            "risksubtype" : [ 
                {
                    "_id" : ObjectId("5b4d9baceaad0e985e76f58a"),
                    "name" : "N/A"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b568bc3dfd3d52632e94b3d"),
            "name" : "Compliance",
            "risksubtype" : [ 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b3e"),
                    "name" : "Banking Secrecy"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b3f"),
                    "name" : "Best Execution"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b40"),
                    "name" : "Client Asset and Money Protection"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b41"),
                    "name" : "Client Tax Information Compliance"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b42"),
                    "name" : "Competition and Anti-Trust"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b43"),
                    "name" : "Conduct"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b44"),
                    "name" : "Conflicts of Interest"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b45"),
                    "name" : "Cross Border"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b46"),
                    "name" : "Fair Outcomes for Clients - Account Management and Post Sales Practices"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b47"),
                    "name" : "Fair Outcomes for Clients - Appropriateness and Suitability"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b48"),
                    "name" : "Fair Outcomes for Clients - Client Communication"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b49"),
                    "name" : "Fair Outcomes for Clients - Sales Practices"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b4a"),
                    "name" : "Fiduciary Governance"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b4b"),
                    "name" : "General Legal and Regulatory Compliance"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b4c"),
                    "name" : "Licensing of Entities"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b4d"),
                    "name" : "Licensing of Individuals"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b4e"),
                    "name" : "Market Manipulation"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b4f"),
                    "name" : "Misuse of Information"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b50"),
                    "name" : "Non-Financial Regulatory Reporting"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b51"),
                    "name" : "Privacy"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b52"),
                    "name" : "Records Management"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b53"),
                    "name" : "Regulatory Commitments"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b54"),
                    "name" : "Senior Management Individual Accountability"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b55"),
                    "name" : "Trading Regulations"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b56"),
                    "name" : "Transaction & Trade Reporting"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b568bc3dfd3d52632e94b57"),
            "name" : "Conduct",
            "risksubtype" : [ 
                {
                    "_id" : ObjectId("5b4d9baceaad0e985e76f58a"),
                    "name" : "N/A"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b568bc3dfd3d52632e94b58"),
            "name" : "Finance",
            "risksubtype" : [ 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b59"),
                    "name" : "Accounting and Financial Reporting"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b5a"),
                    "name" : "Financial Regulatory Reporting"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b5b"),
                    "name" : "Prudential - Capital "
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b5c"),
                    "name" : "Prudential - Liquidity"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b5d"),
                    "name" : "Prudential - Recovery & Resolution Planning"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b568bc3dfd3d52632e94b5e"),
            "name" : "Credit risk",
            "risksubtype" : [ 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b5f"),
                    "name" : "Credit Risk Rules"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b60"),
                    "name" : "Customer Insolvency"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b61"),
                    "name" : "Prudential - Credit Risk"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b568bc3dfd3d52632e94b62"),
            "name" : "Enterprise Risk Management",
            "risksubtype" : [ 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b63"),
                    "name" : "Prudential – Risk Governance"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b568bc3dfd3d52632e94b64"),
            "name" : "Financial Crime Compliance",
            "risksubtype" : [ 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b65"),
                    "name" : "Anti-Bribery and Corruption"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b66"),
                    "name" : "Anti-Money Laundering (and Terrorist Financing)"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b67"),
                    "name" : "Sanctions"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b68"),
                    "name" : "Tax Evasion"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b568bc3dfd3d52632e94b69"),
            "name" : "Office of the Chief Information Security Officer",
            "risksubtype" : [ 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b6a"),
                    "name" : "Information and Cyber Security"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b568bc3dfd3d52632e94b6b"),
            "name" : "Market Risk",
            "risksubtype" : [ 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b6c"),
                    "name" : "Market Risk Rules"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b6d"),
                    "name" : "Prudential - Market Risk"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b568bc3dfd3d52632e94b6e"),
            "name" : "Business Efficiency",
            "risksubtype" : [ 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b6f"),
                    "name" : "Outsourcing"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b568bc3dfd3d52632e94b70"),
            "name" : "Group Company Secretary",
            "risksubtype" : [ 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b71"),
                    "name" : "Corporate Governance and Authorities"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b72"),
                    "name" : "Exchange Listing Rules"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b568bc3dfd3d52632e94b73"),
            "name" : "Group Internal Audit",
            "risksubtype" : [ 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b74"),
                    "name" : "Internal Audit"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b568bc3dfd3d52632e94b75"),
            "name" : "Human Resource",
            "risksubtype" : [ 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b76"),
                    "name" : "Employment, remuneration and benefits"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b568bc3dfd3d52632e94b77"),
            "name" : "Legal",
            "risksubtype" : [ 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b78"),
                    "name" : "Legal Enforceability"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b568bc3dfd3d52632e94b79"),
            "name" : "Operational Risk",
            "risksubtype" : [ 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b7a"),
                    "name" : "Fraud Prevention Rules"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b7b"),
                    "name" : "Operational Risk Rules"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b7c"),
                    "name" : "Product Approval and Governance"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b7d"),
                    "name" : "Prudential - Operational Risk"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b568bc3dfd3d52632e94b7e"),
            "name" : "Property",
            "risksubtype" : [ 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b7f"),
                    "name" : "Safety and Security"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b568bc3dfd3d52632e94b80"),
            "name" : "Group Tax",
            "risksubtype" : [ 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b81"),
                    "name" : "Tax"
                }
            ]
        }
    ],
    "created_date" : ISODate("2018-01-29T07:01:44.264Z"),
    "created_by" : "ss",
    "updated_date" : ISODate("2018-12-11T07:28:23.874Z"),
    "updated_by" : "ss_private",
    "type" : "internal"
})
db.getSiblingDB(database).ss_application.save({
    "_id" : ObjectId("5c880a141fa32be5015ac123"),
    "name" : "GCFO",
    "logo" : "",
    "modules" : [ 
        {
            "_id" : "M001",
            "name" : "Scorecard",
            "param_name" : "Scorecard",
            "type" : "core",
            "parent_id" : [],
            "image_src" : "Scorecard.PNG",
            "path" : "scorecardinitiative",
            "seq" : 1
        }, 
        {
            "_id" : "M002",
            "name" : "Initiative",
            "param_name" : "Initiative",
            "type" : "core",
            "parent_id" : [],
            "image_src" : "Initiative.PNG",
            "path" : "scorecardinitiative",
            "seq" : 0
        }, 
        {
            "_id" : "M003",
            "name" : "Country Analysis",
            "param_name" : "CountryAnalysis",
            "type" : "additional",
            "parent_id" : [ 
                "M001"
            ],
            "image_src" : "CountryAnalysis.PNG",
            "path" : "scorecardinitiative",
            "seq" : 0
        }, 
        {
            "_id" : "M004",
            "name" : "Metric Drivers",
            "param_name" : "MetricDrivers",
            "type" : "additional",
            "parent_id" : [ 
                "M001", 
                "M002"
            ],
            "image_src" : "MetricDrivers.PNG",
            "path" : "scorecardinitiative",
            "seq" : 0
        }, 
        {
            "_id" : "M005",
            "name" : "Metric Analysis",
            "param_name" : "MetricAnalysis",
            "type" : "additional",
            "parent_id" : [ 
                "M001"
            ],
            "image_src" : "MetricAnalysis.PNG",
            "path" : "scorecardinitiative",
            "seq" : 0
        }, 
        {
            "_id" : "M006",
            "name" : "Adoption Module",
            "param_name" : "AdoptionModule",
            "type" : "additional",
            "parent_id" : [ 
                "M002"
            ],
            "image_src" : "Adoption.PNG",
            "path" : "adoptionmodule",
            "seq" : 8
        }, 
        {
            "_id" : "M007",
            "name" : "Metric Validation",
            "param_name" : "StagingArea",
            "type" : "dependency",
            "parent_id" : [ 
                "M001"
            ],
            "image_src" : "",
            "path" : "metricvalidation",
            "seq" : 5
        }, 
        {
            "_id" : "M008",
            "name" : "Initiative",
            "param_name" : "Initiative",
            "type" : "tabular_dependency",
            "parent_id" : [ 
                "M001"
            ],
            "image_src" : "",
            "path" : "scorecardinitiative",
            "seq" : 0
        }, 
        {
            "_id" : "M009",
            "name" : "Scorecard",
            "param_name" : "Scorecard",
            "type" : "tabular_dependency",
            "parent_id" : [ 
                "M001"
            ],
            "image_src" : "",
            "path" : "scorecardinitiative",
            "seq" : 0
        }, 
        {
            "_id" : "M010",
            "name" : "Shared Agenda",
            "param_name" : "SharedAgenda",
            "type" : "tabular_dependency",
            "parent_id" : [ 
                "M001"
            ],
            "image_src" : "",
            "path" : "scorecardinitiative",
            "seq" : 0
        }, 
        {
            "_id" : "M011",
            "name" : "Metric Country Analysis",
            "param_name" : "CountryAnalysis",
            "type" : "tabular_dependency",
            "parent_id" : [ 
                "M001"
            ],
            "image_src" : "",
            "path" : "scorecardinitiative",
            "seq" : 0
        }, 
        {
            "_id" : "M015",
            "name" : "Metric Upload",
            "param_name" : "MetricUpload",
            "type" : "dependency",
            "parent_id" : [ 
                "M001"
            ],
            "image_src" : "",
            "path" : "metricupload",
            "seq" : 7
        }, 
        {
            "_id" : "M017",
            "name" : "Overview",
            "param_name" : "Overview",
            "type" : "dependency",
            "parent_id" : [ 
                "M001", 
                "M002"
            ],
            "image_src" : "",
            "path" : "overview",
            "seq" : 6
        }, 
        {
            "_id" : "M023",
            "name" : "Clarity Staging",
            "param_name" : "InitiativeStaging",
            "type" : "dependency",
            "parent_id" : [ 
                "M001", 
                "M002"
            ],
            "image_src" : "",
            "path" : "initiativestaging",
            "seq" : 9
        }, 
        {
            "_id" : "M012",
            "name" : "Bef Sponsor",
            "param_name" : "BefSponsor",
            "type" : "dependency",
            "parent_id" : [ 
                "M002"
            ],
            "image_src" : "",
            "path" : "befsponsor",
            "seq" : 3
        }, 
        {
            "_id" : "M013",
            "name" : "Initiative Master",
            "param_name" : "InitiativeMaster",
            "type" : "dependency",
            "parent_id" : [ 
                "M002"
            ],
            "image_src" : "",
            "path" : "initiativemaster",
            "seq" : 2
        }, 
        {
            "_id" : "M016",
            "name" : "Configuration",
            "param_name" : "Configuration",
            "type" : "primary",
            "parent_id" : [],
            "image_src" : "",
            "path" : "configuration",
            "seq" : 6
        }, 
        {
            "_id" : "M018",
            "name" : "Application Audit Trail",
            "param_name" : "ApplicationAuditTrail",
            "type" : "tabular_primary",
            "parent_id" : [ 
                "M016"
            ],
            "image_src" : "",
            "path" : "configuration",
            "seq" : 0
        }, 
        {
            "_id" : "M019",
            "name" : "Role Management",
            "param_name" : "RoleManagement",
            "type" : "tabular_primary",
            "parent_id" : [ 
                "M016"
            ],
            "image_src" : "",
            "path" : "configuration",
            "seq" : 0
        }, 
        {
            "_id" : "M020",
            "name" : "User Audit Trail",
            "param_name" : "UserAuditTrail",
            "type" : "tabular_primary",
            "parent_id" : [ 
                "M016"
            ],
            "image_src" : "",
            "path" : "configuration",
            "seq" : 0
        }, 
        {
            "_id" : "M021",
            "name" : "Application Usage Detail",
            "param_name" : "ApplicationUsageDetail",
            "type" : "tabular_primary",
            "parent_id" : [ 
                "M016"
            ],
            "image_src" : "",
            "path" : "configuration",
            "seq" : 0
        }, 
        {
            "_id" : "M022",
            "name" : "User Management",
            "param_name" : "UserManagement",
            "type" : "tabular_primary",
            "parent_id" : [ 
                "M016"
            ],
            "image_src" : "",
            "path" : "configuration",
            "seq" : 0
        }
    ],
    "geography" : [ 
        {
            "_id" : ObjectId("5b7bb3ac48a002582424e97f"),
            "country" : "ANGOLA",
            "country_abbreviation" : "AO",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ac48a002582424e980"),
            "country" : "ARGENTINA",
            "country_abbreviation" : "AR",
            "region" : "Europe & Americas",
            "region_abbreviation" : "",
            "region_cluster" : "Europe & Americas",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ac48a002582424e981"),
            "country" : "AUSTRALIA",
            "country_abbreviation" : "AU",
            "region" : "ASA",
            "region_abbreviation" : "",
            "region_cluster" : "ASA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ac48a002582424e982"),
            "country" : "BAHRAIN",
            "country_abbreviation" : "BH",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ac48a002582424e983"),
            "country" : "BAHAMAS",
            "country_abbreviation" : "BS",
            "region" : "Europe & Americas",
            "region_abbreviation" : "",
            "region_cluster" : "Europe & Americas",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ac48a002582424e984"),
            "country" : "BANGLADESH",
            "country_abbreviation" : "BD",
            "region" : "ASA",
            "region_abbreviation" : "",
            "region_cluster" : "ASA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ac48a002582424e985"),
            "country" : "BOTSWANA",
            "country_abbreviation" : "BW",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ac48a002582424e986"),
            "country" : "BRAZIL",
            "country_abbreviation" : "BR",
            "region" : "Europe & Americas",
            "region_abbreviation" : "",
            "region_cluster" : "Europe & Americas",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ac48a002582424e987"),
            "country" : "BRUNEI",
            "country_abbreviation" : "BN",
            "region" : "ASA",
            "region_abbreviation" : "",
            "region_cluster" : "ASA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ac48a002582424e988"),
            "country" : "CAMBODIA",
            "country_abbreviation" : "KH",
            "region" : "ASA",
            "region_abbreviation" : "",
            "region_cluster" : "ASA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ac48a002582424e989"),
            "country" : "CAMEROON",
            "country_abbreviation" : "CM",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ac48a002582424e98a"),
            "country" : "CHINA",
            "country_abbreviation" : "CN",
            "region" : "GCNA",
            "region_abbreviation" : "",
            "region_cluster" : "GCNA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ac48a002582424e98b"),
            "country" : "COLOMBIA",
            "country_abbreviation" : "CO",
            "region" : "Europe & Americas",
            "region_abbreviation" : "",
            "region_cluster" : "Europe & Americas",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ac48a002582424e98c"),
            "country" : "COTE D'IVOIRE",
            "country_abbreviation" : "CI",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ac48a002582424e98d"),
            "country" : "EGYPT",
            "country_abbreviation" : "EG",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ac48a002582424e98e"),
            "country" : "FALKLAND ISLANDS",
            "country_abbreviation" : "FK",
            "region" : "Europe & Americas",
            "region_abbreviation" : "",
            "region_cluster" : "Europe & Americas",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ac48a002582424e98f"),
            "country" : "FRANCE",
            "country_abbreviation" : "FR",
            "region" : "Europe & Americas",
            "region_abbreviation" : "",
            "region_cluster" : "Europe & Americas",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e990"),
            "country" : "GAMBIA",
            "country_abbreviation" : "GM",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e991"),
            "country" : "GERMANY",
            "country_abbreviation" : "DE",
            "region" : "Europe & Americas",
            "region_abbreviation" : "",
            "region_cluster" : "Europe & Americas",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e992"),
            "country" : "GHANA",
            "country_abbreviation" : "GH",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e993"),
            "country" : "GUERNSEY",
            "country_abbreviation" : "GG",
            "region" : "Europe & Americas",
            "region_abbreviation" : "",
            "region_cluster" : "Europe & Americas",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e994"),
            "country" : "HONG KONG",
            "country_abbreviation" : "HK",
            "region" : "GCNA",
            "region_abbreviation" : "",
            "region_cluster" : "GCNA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e995"),
            "country" : "INDIA",
            "country_abbreviation" : "IN",
            "region" : "ASA",
            "region_abbreviation" : "",
            "region_cluster" : "ASA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e996"),
            "country" : "INDONESIA",
            "country_abbreviation" : "ID",
            "region" : "ASA",
            "region_abbreviation" : "",
            "region_cluster" : "ASA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e997"),
            "country" : "IRAQ",
            "country_abbreviation" : "IQ",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e998"),
            "country" : "IRELAND",
            "country_abbreviation" : "IE",
            "region" : "Europe & Americas",
            "region_abbreviation" : "",
            "region_cluster" : "Europe & Americas",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e999"),
            "country" : "JAPAN",
            "country_abbreviation" : "JP",
            "region" : "GCNA",
            "region_abbreviation" : "",
            "region_cluster" : "GCNA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e99a"),
            "country" : "JERSEY",
            "country_abbreviation" : "JE",
            "region" : "Europe & Americas",
            "region_abbreviation" : "",
            "region_cluster" : "Europe & Americas",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e99b"),
            "country" : "JORDAN",
            "country_abbreviation" : "JO",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e99c"),
            "country" : "KENYA",
            "country_abbreviation" : "KE",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e99d"),
            "country" : "SOUTH KOREA",
            "country_abbreviation" : "KR",
            "region" : "GCNA",
            "region_abbreviation" : "",
            "region_cluster" : "GCNA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e99e"),
            "country" : "LAOS",
            "country_abbreviation" : "LA",
            "region" : "ASA",
            "region_abbreviation" : "",
            "region_cluster" : "ASA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e99f"),
            "country" : "LEBANON",
            "country_abbreviation" : "LB",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9a0"),
            "country" : "LUXEMBOURG",
            "country_abbreviation" : "LU",
            "region" : "Europe & Americas",
            "region_abbreviation" : "",
            "region_cluster" : "Europe & Americas",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9a1"),
            "country" : "MACAU",
            "country_abbreviation" : "MO",
            "region" : "GCNA",
            "region_abbreviation" : "",
            "region_cluster" : "GCNA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9a2"),
            "country" : "MALAYSIA",
            "country_abbreviation" : "MY",
            "region" : "ASA",
            "region_abbreviation" : "",
            "region_cluster" : "ASA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9a3"),
            "country" : "MAURITIUS",
            "country_abbreviation" : "MU",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9a4"),
            "country" : "MYANMAR",
            "country_abbreviation" : "MM",
            "region" : "ASA",
            "region_abbreviation" : "",
            "region_cluster" : "ASA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9a5"),
            "country" : "NEPAL",
            "country_abbreviation" : "NP",
            "region" : "ASA",
            "region_abbreviation" : "",
            "region_cluster" : "ASA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9a6"),
            "country" : "NIGERIA",
            "country_abbreviation" : "NG",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9a7"),
            "country" : "OMAN",
            "country_abbreviation" : "OM",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9a8"),
            "country" : "PAKISTAN",
            "country_abbreviation" : "PK",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9a9"),
            "country" : "PHILIPPINES",
            "country_abbreviation" : "PH",
            "region" : "ASA",
            "region_abbreviation" : "",
            "region_cluster" : "ASA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9aa"),
            "country" : "QATAR",
            "country_abbreviation" : "QA",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9ab"),
            "country" : "SAUDI ARABIA",
            "country_abbreviation" : "SA",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9ac"),
            "country" : "SIERRA LEONE",
            "country_abbreviation" : "SL",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9ad"),
            "country" : "SINGAPORE",
            "country_abbreviation" : "SG",
            "region" : "ASA",
            "region_abbreviation" : "",
            "region_cluster" : "ASA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9ae"),
            "country" : "SOUTH AFRICA",
            "country_abbreviation" : "ZA",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9af"),
            "country" : "SRI LANKA",
            "country_abbreviation" : "LK",
            "region" : "ASA",
            "region_abbreviation" : "",
            "region_cluster" : "ASA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9b0"),
            "country" : "SWEDEN",
            "country_abbreviation" : "SE",
            "region" : "Europe & Americas",
            "region_abbreviation" : "",
            "region_cluster" : "Europe & Americas",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9b1"),
            "country" : "SWITZERLAND",
            "country_abbreviation" : "CH",
            "region" : "Europe & Americas",
            "region_abbreviation" : "",
            "region_cluster" : "Europe & Americas",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9b2"),
            "country" : "TAIPEI BRANCH",
            "country_abbreviation" : "TPB",
            "region" : "GCNA",
            "region_abbreviation" : "",
            "region_cluster" : "GCNA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9b3"),
            "country" : "TAIWAN",
            "country_abbreviation" : "TW",
            "region" : "GCNA",
            "region_abbreviation" : "",
            "region_cluster" : "GCNA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9b4"),
            "country" : "TANZANIA",
            "country_abbreviation" : "TZ",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9b5"),
            "country" : "THAILAND",
            "country_abbreviation" : "TH",
            "region" : "ASA",
            "region_abbreviation" : "",
            "region_cluster" : "ASA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9b6"),
            "country" : "TURKEY",
            "country_abbreviation" : "TR",
            "region" : "Europe & Americas",
            "region_abbreviation" : "",
            "region_cluster" : "Europe & Americas",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9b7"),
            "country" : "UNITED ARAB EMIRATES",
            "country_abbreviation" : "AE",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9b8"),
            "country" : "UGANDA",
            "country_abbreviation" : "UG",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9b9"),
            "country" : "UNITED KINGDOM",
            "country_abbreviation" : "GB",
            "region" : "Europe & Americas",
            "region_abbreviation" : "",
            "region_cluster" : "Europe & Americas",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9ba"),
            "country" : "UNITED STATES",
            "country_abbreviation" : "US",
            "region" : "Europe & Americas",
            "region_abbreviation" : "",
            "region_cluster" : "Europe & Americas",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9bb"),
            "country" : "VIETNAM",
            "country_abbreviation" : "VN",
            "region" : "ASA",
            "region_abbreviation" : "",
            "region_cluster" : "ASA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9bc"),
            "country" : "ZAMBIA",
            "country_abbreviation" : "ZM",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9bd"),
            "country" : "ZIMBABWE",
            "country_abbreviation" : "ZW",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9be"),
            "country" : "GROUP",
            "country_abbreviation" : "GRPCOUNTRY",
            "region" : "GROUP",
            "region_abbreviation" : "",
            "region_cluster" : "GROUP",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9bf"),
            "country" : "AME REGIONAL TEAM",
            "country_abbreviation" : "AM",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9c0"),
            "country" : "EUROPE & AMERICAS REGIONAL TEAM",
            "country_abbreviation" : "EA",
            "region" : "Europe & Americas",
            "region_abbreviation" : "",
            "region_cluster" : "Europe & Americas",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9c1"),
            "country" : "ASA REGIONAL TEAM",
            "country_abbreviation" : "AS",
            "region" : "ASA",
            "region_abbreviation" : "",
            "region_cluster" : "ASA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9c2"),
            "country" : "GCNA REGIONAL TEAM",
            "country_abbreviation" : "GC",
            "region" : "GCNA",
            "region_abbreviation" : "",
            "region_cluster" : "GCNA",
            "enable" : true
        }
    ],
    "lifecycle" : [ 
        {
            "id" : "LC1",
            "name" : "Regulatory",
            "seq" : 0.0
        }, 
        {
            "id" : "LC2",
            "name" : "Risk Assessment and Controls",
            "seq" : 1.0
        }, 
        {
            "id" : "LC3",
            "name" : "Frameworks, Policy & Standards",
            "seq" : 2.0
        }, 
        {
            "id" : "LC4",
            "name" : "Oversight & Assurance",
            "seq" : 3.0
        }, 
        {
            "id" : "LC5",
            "name" : "Governance, Resources & Organisation",
            "seq" : 4.0
        }, 
        {
            "id" : "LC6",
            "name" : "Technology & Data",
            "seq" : 5.0
        }, 
        {
            "id" : "LC7",
            "name" : "Business Enablement",
            "seq" : 6.0
        }
    ],
    "scorecard" : [ 
        {
            "id" : "TBD3",
            "name" : "Transform and disrupt with digital",
            "seq" : 0,
            "businessdriver" : [ 
                {
                    "id" : "BD1",
                    "name" : "Other Financial Framework",
                    "seq" : 0
                }
            ]
        }, 
        {
            "id" : "TBD1",
            "name" : "Deliver the financial framework and optimize low returning markets",
            "seq" : 1,
            "businessdriver" : [ 
                {
                    "id" : "BD2",
                    "name" : "Network",
                    "seq" : 0
                }, 
                {
                    "id" : "BD3",
                    "name" : "Industries",
                    "seq" : 0
                }, 
                {
                    "id" : "BD4",
                    "name" : "Client Other",
                    "seq" : 0
                }, 
                {
                    "id" : "BD5",
                    "name" : "International Products",
                    "seq" : 0
                }, 
                {
                    "id" : "BD6",
                    "name" : "Segmentation",
                    "seq" : 0
                }, 
                {
                    "id" : "BD7",
                    "name" : "Liabilities",
                    "seq" : 0
                }, 
                {
                    "id" : "BD8",
                    "name" : "ME Model",
                    "seq" : 0
                }, 
                {
                    "id" : "BD9",
                    "name" : "PvB Referrals",
                    "seq" : 0
                }, 
                {
                    "id" : "BD10",
                    "name" : "Ecosystem",
                    "seq" : 0
                }
            ]
        }, 
        {
            "id" : "TBD4",
            "name" : " Purpose and People",
            "seq" : 3,
            "businessdriver" : [ 
                {
                    "id" : "BD16",
                    "name" : "Costs",
                    "seq" : 0
                }, 
                {
                    "id" : "BD17",
                    "name" : "Process Efficiency",
                    "seq" : 0
                }, 
                {
                    "id" : "BD18",
                    "name" : "Change Protocol",
                    "seq" : 0
                }, 
                {
                    "id" : "BD19",
                    "name" : "Organisational Model",
                    "seq" : 0
                }, 
                {
                    "id" : "BD20",
                    "name" : "Tail & Sub-optimal",
                    "seq" : 0
                }, 
                {
                    "id" : "BD21",
                    "name" : "Efficiency Other",
                    "seq" : 0
                }
            ]
        }, 
        {
            "id" : "TBD2",
            "name" : "Deliver our network and grow our affluent business",
            "seq" : 4,
            "businessdriver" : [ 
                {
                    "id" : "BD22",
                    "name" : "Digitization",
                    "seq" : 0
                }, 
                {
                    "id" : "BD23",
                    "name" : "Analytics, MIS and Frontline Tools",
                    "seq" : 0
                }
            ]
        }
    ],
    "initiativepopup" : "Summary View",
    "additionaltabs" : [],
    "initiativetags" : [ 
        {
            "id" : "",
            "icon" : "Nq8PXGD_ZlZvkx-Fnvt5WzQt0QGPQtj0--wBY2Tj8XwOCQQWWi-V8JuFvEHZe6wF3e--OE.png",
            "name" : "Operational Excellence",
            "position" : "BOTTOM_RIGHT",
            "enableadditionaldetail" : true,
            "enable" : true
        }, 
        {
            "id" : "",
            "icon" : "KaAziK859HAvUIF77AG0fyAXygdjN7eu--77pxaSeaV4Dmw3G1A_VBVPHMewEg-1bU--p84.png",
            "name" : "Process 84",
            "position" : "BOTTOM_RIGHT",
            "enableadditionaldetail" : true,
            "enable" : true
        }, 
        {
            "id" : "",
            "icon" : "l7wgjjHA_ZFcWZHH5Tsgdqy_qgtNOski--compilance.png",
            "name" : "Compliance Conduct Plan Activities",
            "position" : "BOTTOM_RIGHT",
            "enableadditionaldetail" : false,
            "enable" : true
        }, 
        {
            "id" : "",
            "icon" : "pB8IrhL9XaNX6HNa4mSxDECnAnG0XXf0--internal_remediation.png",
            "name" : "Internal Remediation",
            "position" : "BOTTOM_RIGHT",
            "enableadditionaldetail" : false,
            "enable" : true
        }, 
        {
            "id" : "",
            "icon" : "V5N79y40XvUnGSiDYZqlKZWEUfgZcRaF--external.png",
            "name" : "External Remediation",
            "position" : "BOTTOM_RIGHT",
            "enableadditionaldetail" : false,
            "enable" : true
        }, 
        {
            "id" : "",
            "icon" : "7T7suQJDbQiADPTeMuzA_uWhOvIPqWZd--bottomup.png",
            "name" : "Bottom-up Initiative (Country-led)",
            "position" : "BOTTOM_RIGHT",
            "enableadditionaldetail" : false,
            "enable" : true
        }, 
        {
            "id" : "",
            "icon" : "yQxMB2er0JaadhtnvBvKxLfa1xhHAzkO--bottom-down.png",
            "name" : "Top-down initiative (Group-led)",
            "position" : "BOTTOM_RIGHT",
            "enableadditionaldetail" : false,
            "enable" : true
        }, 
        {
            "id" : "",
            "icon" : "Regulatory_Mandatory.png",
            "name" : "Scorecard Deliverable",
            "position" : "BOTTOM_RIGHT",
            "enableadditionaldetail" : false,
            "enable" : true
        }
    ],
    "usermetric" : {
        "users" : {
            "region" : true,
            "segment" : true,
            "productassignment" : true,
            "functions" : false
        },
        "roles" : {
            "ispartofinitiativeowner" : true,
            "segment" : false,
            "productassignment" : false,
            "functions" : false
        }
    },
    "configfilters" : [ 
        {
            "_id" : "CF13",
            "name" : "Project Classification",
            "parent_id" : [],
            "listoptions" : [ 
                "value", 
                "text", 
                "color", 
                "icon"
            ],
            "list" : [ 
                {
                    "text" : "Small",
                    "value" : "Small",
                    "alias" : "",
                    "color" : "#ff7f27",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Medium",
                    "value" : "Medium",
                    "alias" : "",
                    "color" : "#00a2e8",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Large",
                    "value" : "Large",
                    "alias" : "",
                    "color" : "#22b14c",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : false,
            "isrequired" : false
        }, 
        {
            "_id" : "CF15",
            "name" : "Search",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "Free Text",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "filter"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF16",
            "name" : "Date Range",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "Monthly Period",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "filter"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF17",
            "name" : "Initiative Type",
            "parent_id" : [],
            "listoptions" : [ 
                "value", 
                "text", 
                "displayoption", 
                "icon"
            ],
            "list" : [ 
                {
                    "text" : "FCC-led Initiative",
                    "value" : "FCCLED",
                    "alias" : "FCC-led Initiative",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "fcc",
                    "description" : ""
                }, 
                {
                    "text" : "Compliance-led Initiative",
                    "value" : "COMPLIANCELED",
                    "alias" : "Compliance-led Initiative",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "compliance",
                    "description" : ""
                }, 
                {
                    "text" : "CFCC initiatives",
                    "value" : "FCCCOMPLIANCE",
                    "alias" : "CFCC initiatives",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "joint",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [ 
                {
                    "text" : "Dog Ear",
                    "value" : "dogear"
                }, 
                {
                    "text" : "None",
                    "value" : "none"
                }
            ],
            "type" : "list",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF19",
            "name" : "Display Progress",
            "parent_id" : [],
            "listoptions" : [ 
                "value", 
                "text", 
                "color"
            ],
            "list" : [ 
                {
                    "text" : "On Track",
                    "value" : "green",
                    "alias" : "",
                    "color" : "#00a800",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "At Risk",
                    "value" : "amber",
                    "alias" : "",
                    "color" : "#ff9900",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Mgmt Support Required",
                    "value" : "red",
                    "alias" : "",
                    "color" : "#a80000",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Delayed or Re-Baselined",
                    "value" : "grey",
                    "alias" : "",
                    "color" : "#808080",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF21",
            "name" : "Task Legend",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "Toggle Button",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "filter"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF22",
            "name" : "Business Driver",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : false,
            "isrequired" : true
        }, 
        {
            "_id" : "CF26",
            "name" : "Product",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF27",
            "name" : "Segment",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF27_1",
            "name" : "Sub Segment",
            "parent_id" : [ 
                "CF27"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : false,
            "isrequired" : false
        }, 
        {
            "_id" : "CF28",
            "name" : "Function",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF29",
            "name" : "Risk Subtype",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : false,
            "isrequired" : false
        }, 
        {
            "_id" : "CF29_1",
            "name" : "Risk Subtype",
            "parent_id" : [ 
                "CF29"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : false,
            "isrequired" : false
        }, 
        {
            "_id" : "CF30",
            "name" : "Conduct Theme",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : false,
            "isrequired" : false
        }, 
        {
            "_id" : "CF30_1",
            "name" : "Conduct Sub Type",
            "parent_id" : [ 
                "CF30"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF31",
            "name" : "Initiative Category",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF31_1",
            "name" : "Initiative Sub Category",
            "parent_id" : [ 
                "CF31"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : false,
            "isrequired" : false
        }, 
        {
            "_id" : "CF4",
            "name" : "Business Impact",
            "parent_id" : [],
            "listoptions" : [ 
                "value", 
                "text"
            ],
            "list" : [ 
                {
                    "text" : "Low",
                    "value" : "Low",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Medium",
                    "value" : "Medium",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "High",
                    "value" : "High",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF41",
            "name" : "AE/PM",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "filter"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF43",
            "name" : "Five Shifts",
            "parent_id" : [],
            "listoptions" : [ 
                "value", 
                "text"
            ],
            "list" : [ 
                {
                    "text" : "Build Scale",
                    "value" : "Build Scale",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Reshape the Balance Sheet",
                    "value" : "Business Mix",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Enforce Capital Allocation discipline",
                    "value" : "Capital allocation & Costs",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Innovate and Digitise",
                    "value" : "Leverage technology via digitisation",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Exit tail and reduce low returning RWA",
                    "value" : "Other enablers",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : false,
            "isrequired" : false
        }, 
        {
            "_id" : "CF52",
            "name" : "Clarity Staging Filter",
            "parent_id" : [],
            "value" : "",
            "listoptions" : [ 
                "value", 
                "text"
            ],
            "list" : [ 
                {
                    "value" : "Clarity ID",
                    "text" : "Clarity ID"
                }, 
                {
                    "value" : "Project Name",
                    "text" : "Project Name"
                }
            ],
            "displayoptions" : null,
            "description" : "",
            "enable" : true,
            "type" : "list",
            "category" : [ 
                "filter"
            ],
            "isrequired" : false,
            "speciallist" : []
        }
    ],
    "configsummaryfields" : [ 
        {
            "_id" : "CF0",
            "name" : "Accountable Executive",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [ 
                {
                    "text" : "Multi Select",
                    "value" : "multiselect",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Drop Down List",
                    "value" : "dropdownlist",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "multiselect",
            "description" : "",
            "displayoptions" : [],
            "type" : "single-choice",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF1",
            "name" : "Project Manager",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF10",
            "name" : "Planned Cost",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF11",
            "name" : "Region",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [ 
                "ALL"
            ],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF12",
            "name" : "Country",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [ 
                "ALL"
            ],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF13",
            "name" : "Project Classification",
            "parent_id" : [],
            "listoptions" : [ 
                "value", 
                "text", 
                "color", 
                "icon"
            ],
            "list" : [ 
                {
                    "text" : "Small",
                    "value" : "Small",
                    "alias" : "",
                    "color" : "#ff7f27",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Medium",
                    "value" : "Medium",
                    "alias" : "",
                    "color" : "#00a2e8",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Large",
                    "value" : "Large",
                    "alias" : "",
                    "color" : "#22b14c",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF14",
            "name" : "Initiative Tracking",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF17",
            "name" : "Initiative Group",
            "parent_id" : [],
            "listoptions" : [ 
                "value", 
                "text", 
                "displayoption", 
                "icon"
            ],
            "list" : [ 
                {
                    "text" : "FCC-led Initiative",
                    "value" : "FCCLED",
                    "alias" : "FCC-led Initiative",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "fcc",
                    "description" : ""
                }, 
                {
                    "text" : "Compliance-led Initiative",
                    "value" : "COMPLIANCELED",
                    "alias" : "Compliance-led Initiative",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "compliance",
                    "description" : ""
                }, 
                {
                    "text" : "CFCC initiatives",
                    "value" : "FCCCOMPLIANCE",
                    "alias" : "CFCC initiatives",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "joint",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [ 
                {
                    "text" : "Dog Ear",
                    "value" : "dogear"
                }, 
                {
                    "text" : "None",
                    "value" : "none"
                }
            ],
            "type" : "list",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF18",
            "name" : "Revised End Date",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF19",
            "name" : "Project Status",
            "parent_id" : [],
            "listoptions" : [ 
                "value", 
                "text", 
                "color"
            ],
            "list" : [ 
                {
                    "text" : "On Track",
                    "value" : "green",
                    "alias" : "",
                    "color" : "#00a800",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "At Risk",
                    "value" : "amber",
                    "alias" : "",
                    "color" : "#ff9900",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Mgmt Support Required",
                    "value" : "red",
                    "alias" : "",
                    "color" : "#a80000",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Delayed or Re-Baselined",
                    "value" : "grey",
                    "alias" : "",
                    "color" : "#808080",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF2",
            "name" : "Technology Lead",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF20",
            "name" : "Status",
            "parent_id" : [],
            "listoptions" : [ 
                "value", 
                "text"
            ],
            "list" : [ 
                {
                    "text" : "Live",
                    "value" : "LIVE",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Retired",
                    "value" : "RETIRED",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field"
            ],
            "enable" : false,
            "isrequired" : false
        }, 
        {
            "_id" : "CF22",
            "name" : "Business Driver",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : false,
            "isrequired" : true
        }, 
        {
            "_id" : "CF23",
            "name" : "Useful Resources",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF24",
            "name" : "Metric Benchmark",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF25",
            "name" : "Is Initiative Tracked",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF26",
            "name" : "Product Assignment",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF27",
            "name" : "Segment",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF27_1",
            "name" : "Sub Segment",
            "parent_id" : [ 
                "CF27"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF28",
            "name" : "Function",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF29",
            "name" : "Principle Risk",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [ 
                "ALL"
            ],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF29_1",
            "name" : "Risk Subtype",
            "parent_id" : [ 
                "CF29"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [ 
                "ALL"
            ],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF3",
            "name" : "Strategic Sponsor",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF30",
            "name" : "Conduct Theme",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [ 
                "ALL"
            ],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF30_1",
            "name" : "Conduct Subtype",
            "parent_id" : [ 
                "CF30"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [ 
                "ALL"
            ],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF31",
            "name" : "Initiative Type",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [ 
                "ALL"
            ],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF31_1",
            "name" : "Initiative Sub Type",
            "parent_id" : [ 
                "CF31"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [ 
                "ALL"
            ],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF31_2",
            "name" : "Criticality Rating",
            "parent_id" : [ 
                "CF31"
            ],
            "listoptions" : [ 
                "value", 
                "text"
            ],
            "list" : [ 
                {
                    "text" : "A",
                    "value" : "A",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "B",
                    "value" : "B",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "C",
                    "value" : "C",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "N/A",
                    "value" : "N/A",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF32",
            "name" : "Tracking ID",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF33",
            "name" : "Risk & Issues",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF33_1",
            "name" : "Risk Name",
            "parent_id" : [ 
                "CF33"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF33_10",
            "name" : "Risk Category",
            "parent_id" : [ 
                "CF33"
            ],
            "listoptions" : [ 
                "value", 
                "text"
            ],
            "list" : [ 
                {
                    "text" : "Flexibility",
                    "value" : "Flexibility",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Functionability",
                    "value" : "Functionability",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Human Interface",
                    "value" : "Human Interface",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Implementation",
                    "value" : "Implementation",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Interdependencies",
                    "value" : "Interdependencies",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Objectives",
                    "value" : "Objectives",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Organizational Culture",
                    "value" : "Organizational Culture",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Resource Avaibility",
                    "value" : "Resource Avaibility",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Sponsorship",
                    "value" : "Sponsorship",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Supportability",
                    "value" : "Supportability",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Technical",
                    "value" : "Technical",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF33_11",
            "name" : "Risk Symptoms",
            "parent_id" : [ 
                "CF33"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF33_2",
            "name" : "Risk Description",
            "parent_id" : [ 
                "CF33"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF33_3",
            "name" : "Risk Country",
            "parent_id" : [ 
                "CF33"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF33_4",
            "name" : "Target Resolution",
            "parent_id" : [ 
                "CF33"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF33_5",
            "name" : "Risk Severity",
            "parent_id" : [ 
                "CF33"
            ],
            "listoptions" : [ 
                "value", 
                "text"
            ],
            "list" : [ 
                {
                    "text" : "Low",
                    "value" : "Low",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Medium",
                    "value" : "Medium",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "High",
                    "value" : "High",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF33_6",
            "name" : "Risk Priority",
            "parent_id" : [ 
                "CF33"
            ],
            "listoptions" : [ 
                "value", 
                "text"
            ],
            "list" : [ 
                {
                    "text" : "Low",
                    "value" : "Low",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Medium",
                    "value" : "Medium",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "High",
                    "value" : "High",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF33_7",
            "name" : "Risk Status",
            "parent_id" : [ 
                "CF33"
            ],
            "listoptions" : [ 
                "value", 
                "text"
            ],
            "list" : [ 
                {
                    "text" : "Open",
                    "value" : "Open",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Work in Progress",
                    "value" : "WorkinProgress",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Resolved",
                    "value" : "Resolved",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Closed",
                    "value" : "Closed",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF33_8",
            "name" : "Risk Probability",
            "parent_id" : [ 
                "CF33"
            ],
            "listoptions" : [ 
                "value", 
                "text"
            ],
            "list" : [ 
                {
                    "text" : "Low",
                    "value" : "Low",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Medium",
                    "value" : "Medium",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "High",
                    "value" : "High",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF33_9",
            "name" : "Risk Impact",
            "parent_id" : [ 
                "CF33"
            ],
            "listoptions" : [ 
                "value", 
                "text"
            ],
            "list" : [ 
                {
                    "text" : "Low",
                    "value" : "Low",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Medium",
                    "value" : "Medium",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "High",
                    "value" : "High",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF34",
            "name" : "Stakeholder",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF36",
            "name" : "Global",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF37",
            "name" : "Scorecard",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF38",
            "name" : "Initiative Category",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF4",
            "name" : "Business Impact",
            "parent_id" : [],
            "listoptions" : [ 
                "value", 
                "text"
            ],
            "list" : [ 
                {
                    "text" : "Low",
                    "value" : "Low",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Medium",
                    "value" : "Medium",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "High",
                    "value" : "High",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF42",
            "name" : "Is Global Apply",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : false,
            "isrequired" : false
        }, 
        {
            "_id" : "CF43",
            "name" : "Five Shifts",
            "parent_id" : [],
            "listoptions" : [ 
                "value", 
                "text"
            ],
            "list" : [ 
                {
                    "text" : "Build Scale",
                    "value" : "Build Scale",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Reshape the Balance Sheet",
                    "value" : "Business Mix",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Enforce Capital Allocation discipline",
                    "value" : "Capital allocation & Costs",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Innovate and Digitise",
                    "value" : "Leverage technology via digitisation",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Exit tail and reduce low returning RWA",
                    "value" : "Other enablers",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : false,
            "isrequired" : false
        }, 
        {
            "_id" : "CF5",
            "name" : "Problem Statement",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF6",
            "name" : "Project Description",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF7",
            "name" : "Key Deliverables/Milestones",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF7_0",
            "name" : "Deliverable",
            "parent_id" : [ 
                "CF7"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF7_1",
            "name" : "Start Date",
            "parent_id" : [ 
                "CF7"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF7_10",
            "name" : "Type",
            "parent_id" : [ 
                "CF7"
            ],
            "listoptions" : [ 
                "value", 
                "text"
            ],
            "list" : [ 
                {
                    "text" : "ECG",
                    "value" : "ECG",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Enterprise Change Governance Checklist"
                }, 
                {
                    "text" : "HLBR",
                    "value" : "HLBR",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "High Level Business Requirements"
                }, 
                {
                    "text" : "ORA",
                    "value" : "ORA",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Operational Risk Assessment"
                }, 
                {
                    "text" : "PCA",
                    "value" : "PCA",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Project Complexity Assessment"
                }, 
                {
                    "text" : "Pg Benefits Plan",
                    "value" : "Pg Benefits Plan",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Programme Benefits Management Plan"
                }, 
                {
                    "text" : "Pg Benefits Report",
                    "value" : "Pg Benefits Report",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Programme Benefits Report"
                }, 
                {
                    "text" : "Pg Closure",
                    "value" : "Pg Closure",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Programme Closure Report"
                }, 
                {
                    "text" : "Pg ToR",
                    "value" : "Pg ToR",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Programme Steering Committee Terms of Reference"
                }, 
                {
                    "text" : "PgED",
                    "value" : "PgED",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Programme Execution Document"
                }, 
                {
                    "text" : "PgMP",
                    "value" : "PgMP",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Programme Management Plan"
                }, 
                {
                    "text" : "Pj Benefits Plan",
                    "value" : "Pj Benefits Plan",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Project Management Plan"
                }, 
                {
                    "text" : "Pj Benefits Report",
                    "value" : "Pj Benefits Report",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Project Benefits Management Plan"
                }, 
                {
                    "text" : "Pj Closure",
                    "value" : "Pj Closure",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Project Closure Report"
                }, 
                {
                    "text" : "Pj ToR",
                    "value" : "Pj ToR",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Project Steering Committee Terms of Reference"
                }, 
                {
                    "text" : "PjED",
                    "value" : "PjED",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Project Execution Document"
                }, 
                {
                    "text" : "PjMP",
                    "value" : "PjMP",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Project Management Plan"
                }, 
                {
                    "text" : "SDF",
                    "value" : "SDF",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Systems Delivery Framework "
                }, 
                {
                    "text" : "Pilot Go-Live",
                    "value" : "Pilot Go-Live",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Pilot Go-Live"
                }, 
                {
                    "text" : "Go-Live",
                    "value" : "Go-Live",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Go-Live Confirmation"
                }, 
                {
                    "text" : "Phase Gate",
                    "value" : "Phase Gate",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Phase Gate Sign-off"
                }, 
                {
                    "text" : "Commercialization Plan",
                    "value" : "Commercialization Plan",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Commercialization Plan"
                }, 
                {
                    "text" : "N/A",
                    "value" : "N/A",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Not a Phase Gate milestone"
                }, 
                {
                    "text" : "AED",
                    "value" : "AED",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Agile Execution Document"
                }, 
                {
                    "text" : "ADMP",
                    "value" : "ADMP",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Agile Management Plan"
                }, 
                {
                    "text" : "Sprint 0",
                    "value" : "Sprint 0",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Sprint 0"
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF7_11",
            "name" : "RAG",
            "parent_id" : [ 
                "CF7"
            ],
            "listoptions" : [ 
                "value", 
                "text", 
                "color"
            ],
            "list" : [ 
                {
                    "text" : "Red",
                    "value" : "Red",
                    "alias" : "",
                    "color" : "#C00000",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Amber",
                    "value" : "Amber",
                    "alias" : "",
                    "color" : "#FF9900",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Green",
                    "value" : "Green",
                    "alias" : "",
                    "color" : "#009D44",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF7_12",
            "name" : "Progress Completion",
            "parent_id" : [ 
                "CF7"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF7_13",
            "name" : "Planned Cost",
            "parent_id" : [ 
                "CF7"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : false,
            "isrequired" : false
        }, 
        {
            "_id" : "CF7_14",
            "name" : "Five Shift",
            "parent_id" : [ 
                "CF7"
            ],
            "listoptions" : [ 
                "value", 
                "text"
            ],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field"
            ],
            "enable" : false,
            "isrequired" : false
        }, 
        {
            "_id" : "CF7_2",
            "name" : "End Date",
            "parent_id" : [ 
                "CF7"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF7_3",
            "name" : "Revised End Date",
            "parent_id" : [ 
                "CF7"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF7_4",
            "name" : "Country",
            "parent_id" : [ 
                "CF7"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [ 
                "ALL"
            ],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF7_5",
            "name" : "Complete",
            "parent_id" : [ 
                "CF7"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : false,
            "isrequired" : false
        }, 
        {
            "_id" : "CF7_6",
            "name" : "Status",
            "parent_id" : [ 
                "CF7"
            ],
            "listoptions" : [ 
                "value", 
                "text"
            ],
            "list" : [ 
                {
                    "text" : "Completed",
                    "value" : "Completed",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Not Started",
                    "value" : "Not Started",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Started",
                    "value" : "Started",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF7_7",
            "name" : "Status Comment",
            "parent_id" : [ 
                "CF7"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF7_8",
            "name" : "Owner",
            "parent_id" : [ 
                "CF7"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF7_9",
            "name" : "Region",
            "parent_id" : [ 
                "CF7"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [ 
                "ALL"
            ],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF8",
            "name" : "Progress Completion",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [ 
                {
                    "text" : "Calculated",
                    "value" : "calculated",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Manual Input",
                    "value" : "manual",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "manual",
            "description" : "",
            "displayoptions" : [],
            "type" : "single-choice",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF9",
            "name" : "Project Driver",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }
    ],
    "configscorecard" : [ 
        {
            "_id" : "CF53",
            "name" : "Weightage",
            "parent_id" : [],
            "value" : "",
            "listoptions" : [],
            "list" : null,
            "displayoptions" : null,
            "description" : "",
            "enable" : true,
            "type" : "none",
            "category" : [ 
                "scorecard"
            ],
            "isrequired" : false,
            "speciallist" : []
        }
    ],
    "periodfrom" : 2016,
    "periodto" : 2018,
    "projectnamemaxlength" : 20,
    "initiativetagmaxlimit" : 4,
    "description" : "",
    "segment" : [ 
        {
            "_id" : ObjectId("5b4c070501112617537cc93c"),
            "name" : "N/A",
            "subsegment" : [ 
                {
                    "_id" : ObjectId("5b569070dfd3d52632e94b82"),
                    "name" : "N/A"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b4c070501112617537cc93d"),
            "name" : "Corporate, Commercial & Institutional Banking",
            "subsegment" : [ 
                {
                    "_id" : ObjectId("5b569159dfd3d52632e94b83"),
                    "name" : "CB - High Value Small Business"
                }, 
                {
                    "_id" : ObjectId("5b569159dfd3d52632e94b84"),
                    "name" : "CB - Middle Enterprises"
                }, 
                {
                    "_id" : ObjectId("5b569159dfd3d52632e94b85"),
                    "name" : "CB - Middle Markets"
                }, 
                {
                    "_id" : ObjectId("5b569159dfd3d52632e94b86"),
                    "name" : "CB - Local Corporates"
                }, 
                {
                    "_id" : ObjectId("5b569159dfd3d52632e94b87"),
                    "name" : "GB - Banks & Broker Dealers"
                }, 
                {
                    "_id" : ObjectId("5b569159dfd3d52632e94b88"),
                    "name" : "GB - Commercial Real Estate"
                }, 
                {
                    "_id" : ObjectId("5b569159dfd3d52632e94b89"),
                    "name" : "GB - Financial & Strategic Investors Group"
                }, 
                {
                    "_id" : ObjectId("5b569159dfd3d52632e94b8a"),
                    "name" : "GB - Global Industries Group"
                }, 
                {
                    "_id" : ObjectId("5b569159dfd3d52632e94b8b"),
                    "name" : "GB - Global Subsidiaries"
                }, 
                {
                    "_id" : ObjectId("5b569159dfd3d52632e94b8c"),
                    "name" : "GB - Investors & Insurance"
                }, 
                {
                    "_id" : ObjectId("5b569159dfd3d52632e94b8d"),
                    "name" : "GB - Public Sector & Development Organisation"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b4c070601112617537cc93e"),
            "name" : "Private Banking",
            "subsegment" : [ 
                {
                    "_id" : ObjectId("5b569070dfd3d52632e94b82"),
                    "name" : "N/A"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b4c070601112617537cc940"),
            "name" : "Retail Banking",
            "subsegment" : [ 
                {
                    "_id" : ObjectId("5b569159dfd3d52632e94b8e"),
                    "name" : "Retail Business Banking"
                }, 
                {
                    "_id" : ObjectId("5b569159dfd3d52632e94b8f"),
                    "name" : "Retail Individual Banking"
                }
            ]
        }
    ],
    "productassignment" : [ 
        {
            "_id" : ObjectId("5b39f60ba7da87c5e8da382b"),
            "name" : "N/A"
        }, 
        {
            "_id" : ObjectId("5b39f60ba7da87c5e8da382c"),
            "name" : "Trade"
        }, 
        {
            "_id" : ObjectId("5b39f60ba7da87c5e8da382d"),
            "name" : "Securities Services (SS)"
        }, 
        {
            "_id" : ObjectId("5b39f60ba7da87c5e8da382e"),
            "name" : "Digitization and Client Access (DCA)"
        }, 
        {
            "_id" : ObjectId("5b39f60ba7da87c5e8da382f"),
            "name" : "Financial Markets (FM)"
        }, 
        {
            "_id" : ObjectId("5b39f60ba7da87c5e8da3830"),
            "name" : "Corporate Finance (CF)"
        }, 
        {
            "_id" : ObjectId("5b39f60ba7da87c5e8da3831"),
            "name" : "Corporate Lending (CL)"
        }, 
        {
            "_id" : ObjectId("5b39f60ba7da87c5e8da3832"),
            "name" : "Principal Finance (PF)"
        }, 
        {
            "_id" : ObjectId("5b39f60ba7da87c5e8da3833"),
            "name" : "Cash (CBR)"
        }, 
        {
            "_id" : ObjectId("5b39f60ba7da87c5e8da3834"),
            "name" : "Cash (non-CBR)"
        }, 
        {
            "_id" : ObjectId("5b39f60ba7da87c5e8da3835"),
            "name" : "Retail"
        }, 
        {
            "_id" : ObjectId("5b39f60ba7da87c5e8da3836"),
            "name" : "Wealth management"
        }
    ],
    "conducttheme" : [ 
        {
            "_id" : ObjectId("5b3b0407a7da87c5e8da3929"),
            "name" : "N/A",
            "subtype" : [ 
                {
                    "_id" : ObjectId("5b4d9e9ceaad0e985e76f5aa"),
                    "name" : "N/A"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b39f983a7da87c5e8da3842"),
            "name" : "Our Business",
            "subtype" : [ 
                {
                    "_id" : ObjectId("5b4d9f48eaad0e985e76f5ab"),
                    "name" : "Transparent Business Model"
                }, 
                {
                    "_id" : ObjectId("5b4d9f48eaad0e985e76f5ac"),
                    "name" : "Effective Governance"
                }, 
                {
                    "_id" : ObjectId("5b4d9f48eaad0e985e76f5ad"),
                    "name" : "Robust Infrastructure"
                }, 
                {
                    "_id" : ObjectId("5b4d9f48eaad0e985e76f5ae"),
                    "name" : "Exemplary Business Practices"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b39f984a7da87c5e8da3846"),
            "name" : "Each of Us",
            "subtype" : [ 
                {
                    "_id" : ObjectId("5b4d9f48eaad0e985e76f5af"),
                    "name" : "Ethical Leadership"
                }, 
                {
                    "_id" : ObjectId("5b4d9f48eaad0e985e76f5b0"),
                    "name" : "Aligned Incentives"
                }, 
                {
                    "_id" : ObjectId("5b4d9f48eaad0e985e76f5b1"),
                    "name" : "People Competency & Integrity"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b39f984a7da87c5e8da384c"),
            "name" : "Our External Stakeholders",
            "subtype" : [ 
                {
                    "_id" : ObjectId("5b4d9f48eaad0e985e76f5b2"),
                    "name" : "Fair Outcomes for Clients"
                }, 
                {
                    "_id" : ObjectId("5b4d9f48eaad0e985e76f5b3"),
                    "name" : "Effective Markets"
                }, 
                {
                    "_id" : ObjectId("5b4d9f48eaad0e985e76f5b4"),
                    "name" : "Financial Crime Compliance"
                }, 
                {
                    "_id" : ObjectId("5b4d9f48eaad0e985e76f5b5"),
                    "name" : "Stakeholder Confidence"
                }
            ]
        }
    ],
    "initiativecategory" : [ 
        {
            "_id" : ObjectId("5b4da21beaad0e985e76f5b7"),
            "name" : "FCC Group MAP",
            "subcategory" : [ 
                {
                    "_id" : ObjectId("5b4da21beaad0e985e76f5b8"),
                    "name" : "A. Governance, Oversight & Organisation"
                }, 
                {
                    "_id" : ObjectId("5b4da21beaad0e985e76f5b9"),
                    "name" : "B. Risk Assessment"
                }, 
                {
                    "_id" : ObjectId("5b4da21beaad0e985e76f5ba"),
                    "name" : "C. Policies, Standards and Procedures"
                }, 
                {
                    "_id" : ObjectId("5b4da21beaad0e985e76f5bb"),
                    "name" : "D. People"
                }, 
                {
                    "_id" : ObjectId("5b4da21beaad0e985e76f5bc"),
                    "name" : "E. Learning and Awareness"
                }, 
                {
                    "_id" : ObjectId("5b4da21beaad0e985e76f5bd"),
                    "name" : "F. CDD/EDD"
                }, 
                {
                    "_id" : ObjectId("5b4da21beaad0e985e76f5be"),
                    "name" : "G. Surveillance"
                }, 
                {
                    "_id" : ObjectId("5b4da21beaad0e985e76f5bf"),
                    "name" : "H. Investigations and Disclosures"
                }, 
                {
                    "_id" : ObjectId("5b4da21beaad0e985e76f5c0"),
                    "name" : "I. Assurance and Testing"
                }, 
                {
                    "_id" : ObjectId("5b4da21beaad0e985e76f5c1"),
                    "name" : "J. MI and Data Management"
                }, 
                {
                    "_id" : ObjectId("5b4da21beaad0e985e76f5c2"),
                    "name" : "K. Sanctions"
                }, 
                {
                    "_id" : ObjectId("5b4da21beaad0e985e76f5c3"),
                    "name" : "L. ABC"
                }, 
                {
                    "_id" : ObjectId("5b4da21beaad0e985e76f5c4"),
                    "name" : "M. Tax"
                }, 
                {
                    "_id" : ObjectId("5b4da21beaad0e985e76f5c5"),
                    "name" : "N. Regions and Countries"
                }, 
                {
                    "_id" : ObjectId("5b4da21beaad0e985e76f5c6"),
                    "name" : "O. Business"
                }, 
                {
                    "_id" : ObjectId("5b4da21beaad0e985e76f5c7"),
                    "name" : "P. Americas"
                }, 
                {
                    "_id" : ObjectId("5b4da21beaad0e985e76f5c8"),
                    "name" : "Q. Other Matters"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b4da21beaad0e985e76f5c9"),
            "name" : "FCC Country MAP",
            "subcategory" : []
        }, 
        {
            "_id" : ObjectId("5b4da21beaad0e985e76f5ca"),
            "name" : "FCC TOP Objectives",
            "subcategory" : []
        }, 
        {
            "_id" : ObjectId("5b4da21beaad0e985e76f5cb"),
            "name" : "FCC PRF & Gov",
            "subcategory" : []
        }, 
        {
            "_id" : ObjectId("5b4da21beaad0e985e76f5cc"),
            "name" : "CAP - Mandatory Regulatory Requirements",
            "subcategory" : []
        }, 
        {
            "_id" : ObjectId("5b4da21beaad0e985e76f5cd"),
            "name" : "CAP - Strategic Initiatives",
            "subcategory" : []
        }, 
        {
            "_id" : ObjectId("5b4da21beaad0e985e76f5ce"),
            "name" : "CAP - Other Initiatives",
            "subcategory" : []
        }, 
        {
            "_id" : ObjectId("5b4da21beaad0e985e76f5cf"),
            "name" : "Non-CAP -  Initiatives",
            "subcategory" : []
        }
    ],
    "principlerisk" : [ 
        {
            "_id" : ObjectId("5b4d9dcbeaad0e985e76f5a9"),
            "name" : "N/A",
            "risksubtype" : [ 
                {
                    "_id" : ObjectId("5b4d9baceaad0e985e76f58a"),
                    "name" : "N/A"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b568bc3dfd3d52632e94b3d"),
            "name" : "Compliance",
            "risksubtype" : [ 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b3e"),
                    "name" : "Banking Secrecy"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b3f"),
                    "name" : "Best Execution"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b40"),
                    "name" : "Client Asset and Money Protection"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b41"),
                    "name" : "Client Tax Information Compliance"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b42"),
                    "name" : "Competition and Anti-Trust"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b43"),
                    "name" : "Conduct"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b44"),
                    "name" : "Conflicts of Interest"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b45"),
                    "name" : "Cross Border"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b46"),
                    "name" : "Fair Outcomes for Clients - Account Management and Post Sales Practices"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b47"),
                    "name" : "Fair Outcomes for Clients - Appropriateness and Suitability"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b48"),
                    "name" : "Fair Outcomes for Clients - Client Communication"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b49"),
                    "name" : "Fair Outcomes for Clients - Sales Practices"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b4a"),
                    "name" : "Fiduciary Governance"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b4b"),
                    "name" : "General Legal and Regulatory Compliance"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b4c"),
                    "name" : "Licensing of Entities"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b4d"),
                    "name" : "Licensing of Individuals"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b4e"),
                    "name" : "Market Manipulation"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b4f"),
                    "name" : "Misuse of Information"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b50"),
                    "name" : "Non-Financial Regulatory Reporting"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b51"),
                    "name" : "Privacy"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b52"),
                    "name" : "Records Management"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b53"),
                    "name" : "Regulatory Commitments"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b54"),
                    "name" : "Senior Management Individual Accountability"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b55"),
                    "name" : "Trading Regulations"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b56"),
                    "name" : "Transaction & Trade Reporting"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b568bc3dfd3d52632e94b57"),
            "name" : "Conduct",
            "risksubtype" : [ 
                {
                    "_id" : ObjectId("5b4d9baceaad0e985e76f58a"),
                    "name" : "N/A"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b568bc3dfd3d52632e94b58"),
            "name" : "Finance",
            "risksubtype" : [ 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b59"),
                    "name" : "Accounting and Financial Reporting"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b5a"),
                    "name" : "Financial Regulatory Reporting"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b5b"),
                    "name" : "Prudential - Capital "
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b5c"),
                    "name" : "Prudential - Liquidity"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b5d"),
                    "name" : "Prudential - Recovery & Resolution Planning"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b568bc3dfd3d52632e94b5e"),
            "name" : "Credit risk",
            "risksubtype" : [ 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b5f"),
                    "name" : "Credit Risk Rules"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b60"),
                    "name" : "Customer Insolvency"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b61"),
                    "name" : "Prudential - Credit Risk"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b568bc3dfd3d52632e94b62"),
            "name" : "Enterprise Risk Management",
            "risksubtype" : [ 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b63"),
                    "name" : "Prudential – Risk Governance"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b568bc3dfd3d52632e94b64"),
            "name" : "Financial Crime Compliance",
            "risksubtype" : [ 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b65"),
                    "name" : "Anti-Bribery and Corruption"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b66"),
                    "name" : "Anti-Money Laundering (and Terrorist Financing)"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b67"),
                    "name" : "Sanctions"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b68"),
                    "name" : "Tax Evasion"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b568bc3dfd3d52632e94b69"),
            "name" : "Office of the Chief Information Security Officer",
            "risksubtype" : [ 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b6a"),
                    "name" : "Information and Cyber Security"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b568bc3dfd3d52632e94b6b"),
            "name" : "Market Risk",
            "risksubtype" : [ 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b6c"),
                    "name" : "Market Risk Rules"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b6d"),
                    "name" : "Prudential - Market Risk"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b568bc3dfd3d52632e94b6e"),
            "name" : "Business Efficiency",
            "risksubtype" : [ 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b6f"),
                    "name" : "Outsourcing"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b568bc3dfd3d52632e94b70"),
            "name" : "Group Company Secretary",
            "risksubtype" : [ 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b71"),
                    "name" : "Corporate Governance and Authorities"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b72"),
                    "name" : "Exchange Listing Rules"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b568bc3dfd3d52632e94b73"),
            "name" : "Group Internal Audit",
            "risksubtype" : [ 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b74"),
                    "name" : "Internal Audit"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b568bc3dfd3d52632e94b75"),
            "name" : "Human Resource",
            "risksubtype" : [ 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b76"),
                    "name" : "Employment, remuneration and benefits"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b568bc3dfd3d52632e94b77"),
            "name" : "Legal",
            "risksubtype" : [ 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b78"),
                    "name" : "Legal Enforceability"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b568bc3dfd3d52632e94b79"),
            "name" : "Operational Risk",
            "risksubtype" : [ 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b7a"),
                    "name" : "Fraud Prevention Rules"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b7b"),
                    "name" : "Operational Risk Rules"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b7c"),
                    "name" : "Product Approval and Governance"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b7d"),
                    "name" : "Prudential - Operational Risk"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b568bc3dfd3d52632e94b7e"),
            "name" : "Property",
            "risksubtype" : [ 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b7f"),
                    "name" : "Safety and Security"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b568bc3dfd3d52632e94b80"),
            "name" : "Group Tax",
            "risksubtype" : [ 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b81"),
                    "name" : "Tax"
                }
            ]
        }
    ],
    "created_date" : ISODate("2018-01-29T07:01:44.264Z"),
    "created_by" : "ss",
    "updated_date" : ISODate("2018-12-11T07:28:23.874Z"),
    "updated_by" : "ss_private",
    "type" : "internal"
})
db.getSiblingDB(database).ss_application.save({
    "_id" : ObjectId("5c880a141fa32be5015ac124"),
    "name" : "BE",
    "logo" : "",
    "modules" : [ 
        {
            "_id" : "M001",
            "name" : "Scorecard",
            "param_name" : "Scorecard",
            "type" : "core",
            "parent_id" : [],
            "image_src" : "Scorecard.PNG",
            "path" : "scorecardinitiative",
            "seq" : 1
        }, 
        {
            "_id" : "M002",
            "name" : "Initiative",
            "param_name" : "Initiative",
            "type" : "core",
            "parent_id" : [],
            "image_src" : "Initiative.PNG",
            "path" : "scorecardinitiative",
            "seq" : 0
        }, 
        {
            "_id" : "M003",
            "name" : "Country Analysis",
            "param_name" : "CountryAnalysis",
            "type" : "additional",
            "parent_id" : [ 
                "M001"
            ],
            "image_src" : "CountryAnalysis.PNG",
            "path" : "scorecardinitiative",
            "seq" : 0
        }, 
        {
            "_id" : "M004",
            "name" : "Metric Drivers",
            "param_name" : "MetricDrivers",
            "type" : "additional",
            "parent_id" : [ 
                "M001", 
                "M002"
            ],
            "image_src" : "MetricDrivers.PNG",
            "path" : "scorecardinitiative",
            "seq" : 0
        }, 
        {
            "_id" : "M005",
            "name" : "Metric Analysis",
            "param_name" : "MetricAnalysis",
            "type" : "additional",
            "parent_id" : [ 
                "M001"
            ],
            "image_src" : "MetricAnalysis.PNG",
            "path" : "scorecardinitiative",
            "seq" : 0
        }, 
        {
            "_id" : "M006",
            "name" : "Adoption Module",
            "param_name" : "AdoptionModule",
            "type" : "additional",
            "parent_id" : [ 
                "M002"
            ],
            "image_src" : "Adoption.PNG",
            "path" : "adoptionmodule",
            "seq" : 8
        }, 
        {
            "_id" : "M007",
            "name" : "Metric Validation",
            "param_name" : "StagingArea",
            "type" : "dependency",
            "parent_id" : [ 
                "M001"
            ],
            "image_src" : "",
            "path" : "metricvalidation",
            "seq" : 5
        }, 
        {
            "_id" : "M008",
            "name" : "Initiative",
            "param_name" : "Initiative",
            "type" : "tabular_dependency",
            "parent_id" : [ 
                "M001"
            ],
            "image_src" : "",
            "path" : "scorecardinitiative",
            "seq" : 0
        }, 
        {
            "_id" : "M009",
            "name" : "Scorecard",
            "param_name" : "Scorecard",
            "type" : "tabular_dependency",
            "parent_id" : [ 
                "M001"
            ],
            "image_src" : "",
            "path" : "scorecardinitiative",
            "seq" : 0
        }, 
        {
            "_id" : "M010",
            "name" : "Shared Agenda",
            "param_name" : "SharedAgenda",
            "type" : "tabular_dependency",
            "parent_id" : [ 
                "M001"
            ],
            "image_src" : "",
            "path" : "scorecardinitiative",
            "seq" : 0
        }, 
        {
            "_id" : "M011",
            "name" : "Metric Country Analysis",
            "param_name" : "CountryAnalysis",
            "type" : "tabular_dependency",
            "parent_id" : [ 
                "M001"
            ],
            "image_src" : "",
            "path" : "scorecardinitiative",
            "seq" : 0
        }, 
        {
            "_id" : "M015",
            "name" : "Metric Upload",
            "param_name" : "MetricUpload",
            "type" : "dependency",
            "parent_id" : [ 
                "M001"
            ],
            "image_src" : "",
            "path" : "metricupload",
            "seq" : 7
        }, 
        {
            "_id" : "M017",
            "name" : "Overview",
            "param_name" : "Overview",
            "type" : "dependency",
            "parent_id" : [ 
                "M001", 
                "M002"
            ],
            "image_src" : "",
            "path" : "overview",
            "seq" : 6
        }, 
        {
            "_id" : "M023",
            "name" : "Clarity Staging",
            "param_name" : "InitiativeStaging",
            "type" : "dependency",
            "parent_id" : [ 
                "M001", 
                "M002"
            ],
            "image_src" : "",
            "path" : "initiativestaging",
            "seq" : 9
        }, 
        {
            "_id" : "M012",
            "name" : "Bef Sponsor",
            "param_name" : "BefSponsor",
            "type" : "dependency",
            "parent_id" : [ 
                "M002"
            ],
            "image_src" : "",
            "path" : "befsponsor",
            "seq" : 3
        }, 
        {
            "_id" : "M013",
            "name" : "Initiative Master",
            "param_name" : "InitiativeMaster",
            "type" : "dependency",
            "parent_id" : [ 
                "M002"
            ],
            "image_src" : "",
            "path" : "initiativemaster",
            "seq" : 2
        }, 
        {
            "_id" : "M016",
            "name" : "Configuration",
            "param_name" : "Configuration",
            "type" : "primary",
            "parent_id" : [],
            "image_src" : "",
            "path" : "configuration",
            "seq" : 6
        }, 
        {
            "_id" : "M018",
            "name" : "Application Audit Trail",
            "param_name" : "ApplicationAuditTrail",
            "type" : "tabular_primary",
            "parent_id" : [ 
                "M016"
            ],
            "image_src" : "",
            "path" : "configuration",
            "seq" : 0
        }, 
        {
            "_id" : "M019",
            "name" : "Role Management",
            "param_name" : "RoleManagement",
            "type" : "tabular_primary",
            "parent_id" : [ 
                "M016"
            ],
            "image_src" : "",
            "path" : "configuration",
            "seq" : 0
        }, 
        {
            "_id" : "M020",
            "name" : "User Audit Trail",
            "param_name" : "UserAuditTrail",
            "type" : "tabular_primary",
            "parent_id" : [ 
                "M016"
            ],
            "image_src" : "",
            "path" : "configuration",
            "seq" : 0
        }, 
        {
            "_id" : "M021",
            "name" : "Application Usage Detail",
            "param_name" : "ApplicationUsageDetail",
            "type" : "tabular_primary",
            "parent_id" : [ 
                "M016"
            ],
            "image_src" : "",
            "path" : "configuration",
            "seq" : 0
        }, 
        {
            "_id" : "M022",
            "name" : "User Management",
            "param_name" : "UserManagement",
            "type" : "tabular_primary",
            "parent_id" : [ 
                "M016"
            ],
            "image_src" : "",
            "path" : "configuration",
            "seq" : 0
        }
    ],
    "geography" : [ 
        {
            "_id" : ObjectId("5b7bb3ac48a002582424e97f"),
            "country" : "ANGOLA",
            "country_abbreviation" : "AO",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ac48a002582424e980"),
            "country" : "ARGENTINA",
            "country_abbreviation" : "AR",
            "region" : "Europe & Americas",
            "region_abbreviation" : "",
            "region_cluster" : "Europe & Americas",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ac48a002582424e981"),
            "country" : "AUSTRALIA",
            "country_abbreviation" : "AU",
            "region" : "ASA",
            "region_abbreviation" : "",
            "region_cluster" : "ASA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ac48a002582424e982"),
            "country" : "BAHRAIN",
            "country_abbreviation" : "BH",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ac48a002582424e983"),
            "country" : "BAHAMAS",
            "country_abbreviation" : "BS",
            "region" : "Europe & Americas",
            "region_abbreviation" : "",
            "region_cluster" : "Europe & Americas",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ac48a002582424e984"),
            "country" : "BANGLADESH",
            "country_abbreviation" : "BD",
            "region" : "ASA",
            "region_abbreviation" : "",
            "region_cluster" : "ASA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ac48a002582424e985"),
            "country" : "BOTSWANA",
            "country_abbreviation" : "BW",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ac48a002582424e986"),
            "country" : "BRAZIL",
            "country_abbreviation" : "BR",
            "region" : "Europe & Americas",
            "region_abbreviation" : "",
            "region_cluster" : "Europe & Americas",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ac48a002582424e987"),
            "country" : "BRUNEI",
            "country_abbreviation" : "BN",
            "region" : "ASA",
            "region_abbreviation" : "",
            "region_cluster" : "ASA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ac48a002582424e988"),
            "country" : "CAMBODIA",
            "country_abbreviation" : "KH",
            "region" : "ASA",
            "region_abbreviation" : "",
            "region_cluster" : "ASA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ac48a002582424e989"),
            "country" : "CAMEROON",
            "country_abbreviation" : "CM",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ac48a002582424e98a"),
            "country" : "CHINA",
            "country_abbreviation" : "CN",
            "region" : "GCNA",
            "region_abbreviation" : "",
            "region_cluster" : "GCNA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ac48a002582424e98b"),
            "country" : "COLOMBIA",
            "country_abbreviation" : "CO",
            "region" : "Europe & Americas",
            "region_abbreviation" : "",
            "region_cluster" : "Europe & Americas",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ac48a002582424e98c"),
            "country" : "COTE D'IVOIRE",
            "country_abbreviation" : "CI",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ac48a002582424e98d"),
            "country" : "EGYPT",
            "country_abbreviation" : "EG",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ac48a002582424e98e"),
            "country" : "FALKLAND ISLANDS",
            "country_abbreviation" : "FK",
            "region" : "Europe & Americas",
            "region_abbreviation" : "",
            "region_cluster" : "Europe & Americas",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ac48a002582424e98f"),
            "country" : "FRANCE",
            "country_abbreviation" : "FR",
            "region" : "Europe & Americas",
            "region_abbreviation" : "",
            "region_cluster" : "Europe & Americas",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e990"),
            "country" : "GAMBIA",
            "country_abbreviation" : "GM",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e991"),
            "country" : "GERMANY",
            "country_abbreviation" : "DE",
            "region" : "Europe & Americas",
            "region_abbreviation" : "",
            "region_cluster" : "Europe & Americas",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e992"),
            "country" : "GHANA",
            "country_abbreviation" : "GH",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e993"),
            "country" : "GUERNSEY",
            "country_abbreviation" : "GG",
            "region" : "Europe & Americas",
            "region_abbreviation" : "",
            "region_cluster" : "Europe & Americas",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e994"),
            "country" : "HONG KONG",
            "country_abbreviation" : "HK",
            "region" : "GCNA",
            "region_abbreviation" : "",
            "region_cluster" : "GCNA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e995"),
            "country" : "INDIA",
            "country_abbreviation" : "IN",
            "region" : "ASA",
            "region_abbreviation" : "",
            "region_cluster" : "ASA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e996"),
            "country" : "INDONESIA",
            "country_abbreviation" : "ID",
            "region" : "ASA",
            "region_abbreviation" : "",
            "region_cluster" : "ASA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e997"),
            "country" : "IRAQ",
            "country_abbreviation" : "IQ",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e998"),
            "country" : "IRELAND",
            "country_abbreviation" : "IE",
            "region" : "Europe & Americas",
            "region_abbreviation" : "",
            "region_cluster" : "Europe & Americas",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e999"),
            "country" : "JAPAN",
            "country_abbreviation" : "JP",
            "region" : "GCNA",
            "region_abbreviation" : "",
            "region_cluster" : "GCNA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e99a"),
            "country" : "JERSEY",
            "country_abbreviation" : "JE",
            "region" : "Europe & Americas",
            "region_abbreviation" : "",
            "region_cluster" : "Europe & Americas",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e99b"),
            "country" : "JORDAN",
            "country_abbreviation" : "JO",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e99c"),
            "country" : "KENYA",
            "country_abbreviation" : "KE",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e99d"),
            "country" : "SOUTH KOREA",
            "country_abbreviation" : "KR",
            "region" : "GCNA",
            "region_abbreviation" : "",
            "region_cluster" : "GCNA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e99e"),
            "country" : "LAOS",
            "country_abbreviation" : "LA",
            "region" : "ASA",
            "region_abbreviation" : "",
            "region_cluster" : "ASA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e99f"),
            "country" : "LEBANON",
            "country_abbreviation" : "LB",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9a0"),
            "country" : "LUXEMBOURG",
            "country_abbreviation" : "LU",
            "region" : "Europe & Americas",
            "region_abbreviation" : "",
            "region_cluster" : "Europe & Americas",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9a1"),
            "country" : "MACAU",
            "country_abbreviation" : "MO",
            "region" : "GCNA",
            "region_abbreviation" : "",
            "region_cluster" : "GCNA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9a2"),
            "country" : "MALAYSIA",
            "country_abbreviation" : "MY",
            "region" : "ASA",
            "region_abbreviation" : "",
            "region_cluster" : "ASA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9a3"),
            "country" : "MAURITIUS",
            "country_abbreviation" : "MU",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9a4"),
            "country" : "MYANMAR",
            "country_abbreviation" : "MM",
            "region" : "ASA",
            "region_abbreviation" : "",
            "region_cluster" : "ASA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9a5"),
            "country" : "NEPAL",
            "country_abbreviation" : "NP",
            "region" : "ASA",
            "region_abbreviation" : "",
            "region_cluster" : "ASA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9a6"),
            "country" : "NIGERIA",
            "country_abbreviation" : "NG",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9a7"),
            "country" : "OMAN",
            "country_abbreviation" : "OM",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9a8"),
            "country" : "PAKISTAN",
            "country_abbreviation" : "PK",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9a9"),
            "country" : "PHILIPPINES",
            "country_abbreviation" : "PH",
            "region" : "ASA",
            "region_abbreviation" : "",
            "region_cluster" : "ASA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9aa"),
            "country" : "QATAR",
            "country_abbreviation" : "QA",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9ab"),
            "country" : "SAUDI ARABIA",
            "country_abbreviation" : "SA",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9ac"),
            "country" : "SIERRA LEONE",
            "country_abbreviation" : "SL",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9ad"),
            "country" : "SINGAPORE",
            "country_abbreviation" : "SG",
            "region" : "ASA",
            "region_abbreviation" : "",
            "region_cluster" : "ASA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9ae"),
            "country" : "SOUTH AFRICA",
            "country_abbreviation" : "ZA",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9af"),
            "country" : "SRI LANKA",
            "country_abbreviation" : "LK",
            "region" : "ASA",
            "region_abbreviation" : "",
            "region_cluster" : "ASA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9b0"),
            "country" : "SWEDEN",
            "country_abbreviation" : "SE",
            "region" : "Europe & Americas",
            "region_abbreviation" : "",
            "region_cluster" : "Europe & Americas",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9b1"),
            "country" : "SWITZERLAND",
            "country_abbreviation" : "CH",
            "region" : "Europe & Americas",
            "region_abbreviation" : "",
            "region_cluster" : "Europe & Americas",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9b2"),
            "country" : "TAIPEI BRANCH",
            "country_abbreviation" : "TPB",
            "region" : "GCNA",
            "region_abbreviation" : "",
            "region_cluster" : "GCNA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9b3"),
            "country" : "TAIWAN",
            "country_abbreviation" : "TW",
            "region" : "GCNA",
            "region_abbreviation" : "",
            "region_cluster" : "GCNA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9b4"),
            "country" : "TANZANIA",
            "country_abbreviation" : "TZ",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9b5"),
            "country" : "THAILAND",
            "country_abbreviation" : "TH",
            "region" : "ASA",
            "region_abbreviation" : "",
            "region_cluster" : "ASA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9b6"),
            "country" : "TURKEY",
            "country_abbreviation" : "TR",
            "region" : "Europe & Americas",
            "region_abbreviation" : "",
            "region_cluster" : "Europe & Americas",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9b7"),
            "country" : "UNITED ARAB EMIRATES",
            "country_abbreviation" : "AE",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9b8"),
            "country" : "UGANDA",
            "country_abbreviation" : "UG",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9b9"),
            "country" : "UNITED KINGDOM",
            "country_abbreviation" : "GB",
            "region" : "Europe & Americas",
            "region_abbreviation" : "",
            "region_cluster" : "Europe & Americas",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9ba"),
            "country" : "UNITED STATES",
            "country_abbreviation" : "US",
            "region" : "Europe & Americas",
            "region_abbreviation" : "",
            "region_cluster" : "Europe & Americas",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9bb"),
            "country" : "VIETNAM",
            "country_abbreviation" : "VN",
            "region" : "ASA",
            "region_abbreviation" : "",
            "region_cluster" : "ASA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9bc"),
            "country" : "ZAMBIA",
            "country_abbreviation" : "ZM",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9bd"),
            "country" : "ZIMBABWE",
            "country_abbreviation" : "ZW",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9be"),
            "country" : "GROUP",
            "country_abbreviation" : "GRPCOUNTRY",
            "region" : "GROUP",
            "region_abbreviation" : "",
            "region_cluster" : "GROUP",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9bf"),
            "country" : "AME REGIONAL TEAM",
            "country_abbreviation" : "AM",
            "region" : "AME",
            "region_abbreviation" : "",
            "region_cluster" : "AME",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9c0"),
            "country" : "EUROPE & AMERICAS REGIONAL TEAM",
            "country_abbreviation" : "EA",
            "region" : "Europe & Americas",
            "region_abbreviation" : "",
            "region_cluster" : "Europe & Americas",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9c1"),
            "country" : "ASA REGIONAL TEAM",
            "country_abbreviation" : "AS",
            "region" : "ASA",
            "region_abbreviation" : "",
            "region_cluster" : "ASA",
            "enable" : true
        }, 
        {
            "_id" : ObjectId("5b7bb3ad48a002582424e9c2"),
            "country" : "GCNA REGIONAL TEAM",
            "country_abbreviation" : "GC",
            "region" : "GCNA",
            "region_abbreviation" : "",
            "region_cluster" : "GCNA",
            "enable" : true
        }
    ],
    "lifecycle" : [ 
        {
            "id" : "LC1",
            "name" : "Regulatory",
            "seq" : 0.0
        }, 
        {
            "id" : "LC2",
            "name" : "Risk Assessment and Controls",
            "seq" : 1.0
        }, 
        {
            "id" : "LC3",
            "name" : "Frameworks, Policy & Standards",
            "seq" : 2.0
        }, 
        {
            "id" : "LC4",
            "name" : "Oversight & Assurance",
            "seq" : 3.0
        }, 
        {
            "id" : "LC5",
            "name" : "Governance, Resources & Organisation",
            "seq" : 4.0
        }, 
        {
            "id" : "LC6",
            "name" : "Technology & Data",
            "seq" : 5.0
        }, 
        {
            "id" : "LC7",
            "name" : "Business Enablement",
            "seq" : 6.0
        }
    ],
    "scorecard" : [ 
        {
            "id" : "TBD3",
            "name" : "Transform and disrupt with digital",
            "seq" : 0,
            "businessdriver" : [ 
                {
                    "id" : "BD1",
                    "name" : "Other Financial Framework",
                    "seq" : 0
                }
            ]
        }, 
        {
            "id" : "TBD1",
            "name" : "Deliver the financial framework and optimize low returning markets",
            "seq" : 1,
            "businessdriver" : [ 
                {
                    "id" : "BD2",
                    "name" : "Network",
                    "seq" : 0
                }, 
                {
                    "id" : "BD3",
                    "name" : "Industries",
                    "seq" : 0
                }, 
                {
                    "id" : "BD4",
                    "name" : "Client Other",
                    "seq" : 0
                }, 
                {
                    "id" : "BD5",
                    "name" : "International Products",
                    "seq" : 0
                }, 
                {
                    "id" : "BD6",
                    "name" : "Segmentation",
                    "seq" : 0
                }, 
                {
                    "id" : "BD7",
                    "name" : "Liabilities",
                    "seq" : 0
                }, 
                {
                    "id" : "BD8",
                    "name" : "ME Model",
                    "seq" : 0
                }, 
                {
                    "id" : "BD9",
                    "name" : "PvB Referrals",
                    "seq" : 0
                }, 
                {
                    "id" : "BD10",
                    "name" : "Ecosystem",
                    "seq" : 0
                }
            ]
        }, 
        {
            "id" : "TBD4",
            "name" : " Purpose and People",
            "seq" : 3,
            "businessdriver" : [ 
                {
                    "id" : "BD16",
                    "name" : "Costs",
                    "seq" : 0
                }, 
                {
                    "id" : "BD17",
                    "name" : "Process Efficiency",
                    "seq" : 0
                }, 
                {
                    "id" : "BD18",
                    "name" : "Change Protocol",
                    "seq" : 0
                }, 
                {
                    "id" : "BD19",
                    "name" : "Organisational Model",
                    "seq" : 0
                }, 
                {
                    "id" : "BD20",
                    "name" : "Tail & Sub-optimal",
                    "seq" : 0
                }, 
                {
                    "id" : "BD21",
                    "name" : "Efficiency Other",
                    "seq" : 0
                }
            ]
        }, 
        {
            "id" : "TBD2",
            "name" : "Deliver our network and grow our affluent business",
            "seq" : 4,
            "businessdriver" : [ 
                {
                    "id" : "BD22",
                    "name" : "Digitization",
                    "seq" : 0
                }, 
                {
                    "id" : "BD23",
                    "name" : "Analytics, MIS and Frontline Tools",
                    "seq" : 0
                }
            ]
        }
    ],
    "initiativepopup" : "Summary View",
    "additionaltabs" : [],
    "initiativetags" : [ 
        {
            "id" : "",
            "icon" : "Nq8PXGD_ZlZvkx-Fnvt5WzQt0QGPQtj0--wBY2Tj8XwOCQQWWi-V8JuFvEHZe6wF3e--OE.png",
            "name" : "Operational Excellence",
            "position" : "BOTTOM_RIGHT",
            "enableadditionaldetail" : true,
            "enable" : true
        }, 
        {
            "id" : "",
            "icon" : "KaAziK859HAvUIF77AG0fyAXygdjN7eu--77pxaSeaV4Dmw3G1A_VBVPHMewEg-1bU--p84.png",
            "name" : "Process 84",
            "position" : "BOTTOM_RIGHT",
            "enableadditionaldetail" : true,
            "enable" : true
        }, 
        {
            "id" : "",
            "icon" : "l7wgjjHA_ZFcWZHH5Tsgdqy_qgtNOski--compilance.png",
            "name" : "Compliance Conduct Plan Activities",
            "position" : "BOTTOM_RIGHT",
            "enableadditionaldetail" : false,
            "enable" : true
        }, 
        {
            "id" : "",
            "icon" : "pB8IrhL9XaNX6HNa4mSxDECnAnG0XXf0--internal_remediation.png",
            "name" : "Internal Remediation",
            "position" : "BOTTOM_RIGHT",
            "enableadditionaldetail" : false,
            "enable" : true
        }, 
        {
            "id" : "",
            "icon" : "V5N79y40XvUnGSiDYZqlKZWEUfgZcRaF--external.png",
            "name" : "External Remediation",
            "position" : "BOTTOM_RIGHT",
            "enableadditionaldetail" : false,
            "enable" : true
        }, 
        {
            "id" : "",
            "icon" : "7T7suQJDbQiADPTeMuzA_uWhOvIPqWZd--bottomup.png",
            "name" : "Bottom-up Initiative (Country-led)",
            "position" : "BOTTOM_RIGHT",
            "enableadditionaldetail" : false,
            "enable" : true
        }, 
        {
            "id" : "",
            "icon" : "yQxMB2er0JaadhtnvBvKxLfa1xhHAzkO--bottom-down.png",
            "name" : "Top-down initiative (Group-led)",
            "position" : "BOTTOM_RIGHT",
            "enableadditionaldetail" : false,
            "enable" : true
        }, 
        {
            "id" : "",
            "icon" : "Regulatory_Mandatory.png",
            "name" : "Scorecard Deliverable",
            "position" : "BOTTOM_RIGHT",
            "enableadditionaldetail" : false,
            "enable" : true
        }
    ],
    "usermetric" : {
        "users" : {
            "region" : true,
            "segment" : true,
            "productassignment" : true,
            "functions" : false
        },
        "roles" : {
            "ispartofinitiativeowner" : true,
            "segment" : false,
            "productassignment" : false,
            "functions" : false
        }
    },
    "configfilters" : [ 
        {
            "_id" : "CF13",
            "name" : "Project Classification",
            "parent_id" : [],
            "listoptions" : [ 
                "value", 
                "text", 
                "color", 
                "icon"
            ],
            "list" : [ 
                {
                    "text" : "Small",
                    "value" : "Small",
                    "alias" : "",
                    "color" : "#ff7f27",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Medium",
                    "value" : "Medium",
                    "alias" : "",
                    "color" : "#00a2e8",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Large",
                    "value" : "Large",
                    "alias" : "",
                    "color" : "#22b14c",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : false,
            "isrequired" : false
        }, 
        {
            "_id" : "CF15",
            "name" : "Search",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "Free Text",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "filter"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF16",
            "name" : "Date Range",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "Monthly Period",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "filter"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF17",
            "name" : "Initiative Type",
            "parent_id" : [],
            "listoptions" : [ 
                "value", 
                "text", 
                "displayoption", 
                "icon"
            ],
            "list" : [ 
                {
                    "text" : "FCC-led Initiative",
                    "value" : "FCCLED",
                    "alias" : "FCC-led Initiative",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "fcc",
                    "description" : ""
                }, 
                {
                    "text" : "Compliance-led Initiative",
                    "value" : "COMPLIANCELED",
                    "alias" : "Compliance-led Initiative",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "compliance",
                    "description" : ""
                }, 
                {
                    "text" : "CFCC initiatives",
                    "value" : "FCCCOMPLIANCE",
                    "alias" : "CFCC initiatives",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "joint",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [ 
                {
                    "text" : "Dog Ear",
                    "value" : "dogear"
                }, 
                {
                    "text" : "None",
                    "value" : "none"
                }
            ],
            "type" : "list",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF19",
            "name" : "Display Progress",
            "parent_id" : [],
            "listoptions" : [ 
                "value", 
                "text", 
                "color"
            ],
            "list" : [ 
                {
                    "text" : "On Track",
                    "value" : "green",
                    "alias" : "",
                    "color" : "#00a800",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "At Risk",
                    "value" : "amber",
                    "alias" : "",
                    "color" : "#ff9900",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Mgmt Support Required",
                    "value" : "red",
                    "alias" : "",
                    "color" : "#a80000",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Delayed or Re-Baselined",
                    "value" : "grey",
                    "alias" : "",
                    "color" : "#808080",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF21",
            "name" : "Task Legend",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "Toggle Button",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "filter"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF22",
            "name" : "Business Driver",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : false,
            "isrequired" : true
        }, 
        {
            "_id" : "CF26",
            "name" : "Product",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF27",
            "name" : "Segment",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF27_1",
            "name" : "Sub Segment",
            "parent_id" : [ 
                "CF27"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : false,
            "isrequired" : false
        }, 
        {
            "_id" : "CF28",
            "name" : "Function",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF29",
            "name" : "Risk Subtype",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : false,
            "isrequired" : false
        }, 
        {
            "_id" : "CF29_1",
            "name" : "Risk Subtype",
            "parent_id" : [ 
                "CF29"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : false,
            "isrequired" : false
        }, 
        {
            "_id" : "CF30",
            "name" : "Conduct Theme",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : false,
            "isrequired" : false
        }, 
        {
            "_id" : "CF30_1",
            "name" : "Conduct Sub Type",
            "parent_id" : [ 
                "CF30"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF31",
            "name" : "Initiative Category",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF31_1",
            "name" : "Initiative Sub Category",
            "parent_id" : [ 
                "CF31"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : false,
            "isrequired" : false
        }, 
        {
            "_id" : "CF4",
            "name" : "Business Impact",
            "parent_id" : [],
            "listoptions" : [ 
                "value", 
                "text"
            ],
            "list" : [ 
                {
                    "text" : "Low",
                    "value" : "Low",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Medium",
                    "value" : "Medium",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "High",
                    "value" : "High",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF41",
            "name" : "AE/PM",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "filter"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF43",
            "name" : "Five Shifts",
            "parent_id" : [],
            "listoptions" : [ 
                "value", 
                "text"
            ],
            "list" : [ 
                {
                    "text" : "Build Scale",
                    "value" : "Build Scale",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Reshape the Balance Sheet",
                    "value" : "Business Mix",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Enforce Capital Allocation discipline",
                    "value" : "Capital allocation & Costs",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Innovate and Digitise",
                    "value" : "Leverage technology via digitisation",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Exit tail and reduce low returning RWA",
                    "value" : "Other enablers",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : false,
            "isrequired" : false
        }, 
        {
            "_id" : "CF52",
            "name" : "Clarity Staging Filter",
            "parent_id" : [],
            "value" : "",
            "listoptions" : [ 
                "value", 
                "text"
            ],
            "list" : [ 
                {
                    "value" : "Clarity ID",
                    "text" : "Clarity ID"
                }, 
                {
                    "value" : "Project Name",
                    "text" : "Project Name"
                }
            ],
            "displayoptions" : null,
            "description" : "",
            "enable" : true,
            "type" : "list",
            "category" : [ 
                "filter"
            ],
            "isrequired" : false,
            "speciallist" : []
        }
    ],
    "configsummaryfields" : [ 
        {
            "_id" : "CF0",
            "name" : "Accountable Executive",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [ 
                {
                    "text" : "Multi Select",
                    "value" : "multiselect",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Drop Down List",
                    "value" : "dropdownlist",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "multiselect",
            "description" : "",
            "displayoptions" : [],
            "type" : "single-choice",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF1",
            "name" : "Project Manager",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF10",
            "name" : "Planned Cost",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF11",
            "name" : "Region",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [ 
                "ALL"
            ],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF12",
            "name" : "Country",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [ 
                "ALL"
            ],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF13",
            "name" : "Project Classification",
            "parent_id" : [],
            "listoptions" : [ 
                "value", 
                "text", 
                "color", 
                "icon"
            ],
            "list" : [ 
                {
                    "text" : "Small",
                    "value" : "Small",
                    "alias" : "",
                    "color" : "#ff7f27",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Medium",
                    "value" : "Medium",
                    "alias" : "",
                    "color" : "#00a2e8",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Large",
                    "value" : "Large",
                    "alias" : "",
                    "color" : "#22b14c",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF14",
            "name" : "Initiative Tracking",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF17",
            "name" : "Initiative Group",
            "parent_id" : [],
            "listoptions" : [ 
                "value", 
                "text", 
                "displayoption", 
                "icon"
            ],
            "list" : [ 
                {
                    "text" : "FCC-led Initiative",
                    "value" : "FCCLED",
                    "alias" : "FCC-led Initiative",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "fcc",
                    "description" : ""
                }, 
                {
                    "text" : "Compliance-led Initiative",
                    "value" : "COMPLIANCELED",
                    "alias" : "Compliance-led Initiative",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "compliance",
                    "description" : ""
                }, 
                {
                    "text" : "CFCC initiatives",
                    "value" : "FCCCOMPLIANCE",
                    "alias" : "CFCC initiatives",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "joint",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [ 
                {
                    "text" : "Dog Ear",
                    "value" : "dogear"
                }, 
                {
                    "text" : "None",
                    "value" : "none"
                }
            ],
            "type" : "list",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF18",
            "name" : "Revised End Date",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF19",
            "name" : "Project Status",
            "parent_id" : [],
            "listoptions" : [ 
                "value", 
                "text", 
                "color"
            ],
            "list" : [ 
                {
                    "text" : "On Track",
                    "value" : "green",
                    "alias" : "",
                    "color" : "#00a800",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "At Risk",
                    "value" : "amber",
                    "alias" : "",
                    "color" : "#ff9900",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Mgmt Support Required",
                    "value" : "red",
                    "alias" : "",
                    "color" : "#a80000",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Delayed or Re-Baselined",
                    "value" : "grey",
                    "alias" : "",
                    "color" : "#808080",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF2",
            "name" : "Technology Lead",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF20",
            "name" : "Status",
            "parent_id" : [],
            "listoptions" : [ 
                "value", 
                "text"
            ],
            "list" : [ 
                {
                    "text" : "Live",
                    "value" : "LIVE",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Retired",
                    "value" : "RETIRED",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field"
            ],
            "enable" : false,
            "isrequired" : false
        }, 
        {
            "_id" : "CF22",
            "name" : "Business Driver",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : false,
            "isrequired" : true
        }, 
        {
            "_id" : "CF23",
            "name" : "Useful Resources",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF24",
            "name" : "Metric Benchmark",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF25",
            "name" : "Is Initiative Tracked",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF26",
            "name" : "Product Assignment",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF27",
            "name" : "Segment",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF27_1",
            "name" : "Sub Segment",
            "parent_id" : [ 
                "CF27"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF28",
            "name" : "Function",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF29",
            "name" : "Principle Risk",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [ 
                "ALL"
            ],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF29_1",
            "name" : "Risk Subtype",
            "parent_id" : [ 
                "CF29"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [ 
                "ALL"
            ],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF3",
            "name" : "Strategic Sponsor",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF30",
            "name" : "Conduct Theme",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [ 
                "ALL"
            ],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF30_1",
            "name" : "Conduct Subtype",
            "parent_id" : [ 
                "CF30"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [ 
                "ALL"
            ],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF31",
            "name" : "Initiative Type",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [ 
                "ALL"
            ],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF31_1",
            "name" : "Initiative Sub Type",
            "parent_id" : [ 
                "CF31"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [ 
                "ALL"
            ],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF31_2",
            "name" : "Criticality Rating",
            "parent_id" : [ 
                "CF31"
            ],
            "listoptions" : [ 
                "value", 
                "text"
            ],
            "list" : [ 
                {
                    "text" : "A",
                    "value" : "A",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "B",
                    "value" : "B",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "C",
                    "value" : "C",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "N/A",
                    "value" : "N/A",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF32",
            "name" : "Tracking ID",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF33",
            "name" : "Risk & Issues",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF33_1",
            "name" : "Risk Name",
            "parent_id" : [ 
                "CF33"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF33_10",
            "name" : "Risk Category",
            "parent_id" : [ 
                "CF33"
            ],
            "listoptions" : [ 
                "value", 
                "text"
            ],
            "list" : [ 
                {
                    "text" : "Flexibility",
                    "value" : "Flexibility",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Functionability",
                    "value" : "Functionability",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Human Interface",
                    "value" : "Human Interface",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Implementation",
                    "value" : "Implementation",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Interdependencies",
                    "value" : "Interdependencies",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Objectives",
                    "value" : "Objectives",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Organizational Culture",
                    "value" : "Organizational Culture",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Resource Avaibility",
                    "value" : "Resource Avaibility",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Sponsorship",
                    "value" : "Sponsorship",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Supportability",
                    "value" : "Supportability",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Technical",
                    "value" : "Technical",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF33_11",
            "name" : "Risk Symptoms",
            "parent_id" : [ 
                "CF33"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF33_2",
            "name" : "Risk Description",
            "parent_id" : [ 
                "CF33"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF33_3",
            "name" : "Risk Country",
            "parent_id" : [ 
                "CF33"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF33_4",
            "name" : "Target Resolution",
            "parent_id" : [ 
                "CF33"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF33_5",
            "name" : "Risk Severity",
            "parent_id" : [ 
                "CF33"
            ],
            "listoptions" : [ 
                "value", 
                "text"
            ],
            "list" : [ 
                {
                    "text" : "Low",
                    "value" : "Low",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Medium",
                    "value" : "Medium",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "High",
                    "value" : "High",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF33_6",
            "name" : "Risk Priority",
            "parent_id" : [ 
                "CF33"
            ],
            "listoptions" : [ 
                "value", 
                "text"
            ],
            "list" : [ 
                {
                    "text" : "Low",
                    "value" : "Low",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Medium",
                    "value" : "Medium",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "High",
                    "value" : "High",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF33_7",
            "name" : "Risk Status",
            "parent_id" : [ 
                "CF33"
            ],
            "listoptions" : [ 
                "value", 
                "text"
            ],
            "list" : [ 
                {
                    "text" : "Open",
                    "value" : "Open",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Work in Progress",
                    "value" : "WorkinProgress",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Resolved",
                    "value" : "Resolved",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Closed",
                    "value" : "Closed",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF33_8",
            "name" : "Risk Probability",
            "parent_id" : [ 
                "CF33"
            ],
            "listoptions" : [ 
                "value", 
                "text"
            ],
            "list" : [ 
                {
                    "text" : "Low",
                    "value" : "Low",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Medium",
                    "value" : "Medium",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "High",
                    "value" : "High",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF33_9",
            "name" : "Risk Impact",
            "parent_id" : [ 
                "CF33"
            ],
            "listoptions" : [ 
                "value", 
                "text"
            ],
            "list" : [ 
                {
                    "text" : "Low",
                    "value" : "Low",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Medium",
                    "value" : "Medium",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "High",
                    "value" : "High",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF34",
            "name" : "Stakeholder",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF36",
            "name" : "Global",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF37",
            "name" : "Scorecard",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF38",
            "name" : "Initiative Category",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF4",
            "name" : "Business Impact",
            "parent_id" : [],
            "listoptions" : [ 
                "value", 
                "text"
            ],
            "list" : [ 
                {
                    "text" : "Low",
                    "value" : "Low",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Medium",
                    "value" : "Medium",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "High",
                    "value" : "High",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF42",
            "name" : "Is Global Apply",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : false,
            "isrequired" : false
        }, 
        {
            "_id" : "CF43",
            "name" : "Five Shifts",
            "parent_id" : [],
            "listoptions" : [ 
                "value", 
                "text"
            ],
            "list" : [ 
                {
                    "text" : "Build Scale",
                    "value" : "Build Scale",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Reshape the Balance Sheet",
                    "value" : "Business Mix",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Enforce Capital Allocation discipline",
                    "value" : "Capital allocation & Costs",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Innovate and Digitise",
                    "value" : "Leverage technology via digitisation",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Exit tail and reduce low returning RWA",
                    "value" : "Other enablers",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field", 
                "filter"
            ],
            "enable" : false,
            "isrequired" : false
        }, 
        {
            "_id" : "CF5",
            "name" : "Problem Statement",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF6",
            "name" : "Project Description",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF7",
            "name" : "Key Deliverables/Milestones",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF7_0",
            "name" : "Deliverable",
            "parent_id" : [ 
                "CF7"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF7_1",
            "name" : "Start Date",
            "parent_id" : [ 
                "CF7"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF7_10",
            "name" : "Type",
            "parent_id" : [ 
                "CF7"
            ],
            "listoptions" : [ 
                "value", 
                "text"
            ],
            "list" : [ 
                {
                    "text" : "ECG",
                    "value" : "ECG",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Enterprise Change Governance Checklist"
                }, 
                {
                    "text" : "HLBR",
                    "value" : "HLBR",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "High Level Business Requirements"
                }, 
                {
                    "text" : "ORA",
                    "value" : "ORA",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Operational Risk Assessment"
                }, 
                {
                    "text" : "PCA",
                    "value" : "PCA",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Project Complexity Assessment"
                }, 
                {
                    "text" : "Pg Benefits Plan",
                    "value" : "Pg Benefits Plan",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Programme Benefits Management Plan"
                }, 
                {
                    "text" : "Pg Benefits Report",
                    "value" : "Pg Benefits Report",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Programme Benefits Report"
                }, 
                {
                    "text" : "Pg Closure",
                    "value" : "Pg Closure",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Programme Closure Report"
                }, 
                {
                    "text" : "Pg ToR",
                    "value" : "Pg ToR",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Programme Steering Committee Terms of Reference"
                }, 
                {
                    "text" : "PgED",
                    "value" : "PgED",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Programme Execution Document"
                }, 
                {
                    "text" : "PgMP",
                    "value" : "PgMP",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Programme Management Plan"
                }, 
                {
                    "text" : "Pj Benefits Plan",
                    "value" : "Pj Benefits Plan",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Project Management Plan"
                }, 
                {
                    "text" : "Pj Benefits Report",
                    "value" : "Pj Benefits Report",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Project Benefits Management Plan"
                }, 
                {
                    "text" : "Pj Closure",
                    "value" : "Pj Closure",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Project Closure Report"
                }, 
                {
                    "text" : "Pj ToR",
                    "value" : "Pj ToR",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Project Steering Committee Terms of Reference"
                }, 
                {
                    "text" : "PjED",
                    "value" : "PjED",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Project Execution Document"
                }, 
                {
                    "text" : "PjMP",
                    "value" : "PjMP",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Project Management Plan"
                }, 
                {
                    "text" : "SDF",
                    "value" : "SDF",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Systems Delivery Framework "
                }, 
                {
                    "text" : "Pilot Go-Live",
                    "value" : "Pilot Go-Live",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Pilot Go-Live"
                }, 
                {
                    "text" : "Go-Live",
                    "value" : "Go-Live",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Go-Live Confirmation"
                }, 
                {
                    "text" : "Phase Gate",
                    "value" : "Phase Gate",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Phase Gate Sign-off"
                }, 
                {
                    "text" : "Commercialization Plan",
                    "value" : "Commercialization Plan",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Commercialization Plan"
                }, 
                {
                    "text" : "N/A",
                    "value" : "N/A",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Not a Phase Gate milestone"
                }, 
                {
                    "text" : "AED",
                    "value" : "AED",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Agile Execution Document"
                }, 
                {
                    "text" : "ADMP",
                    "value" : "ADMP",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Agile Management Plan"
                }, 
                {
                    "text" : "Sprint 0",
                    "value" : "Sprint 0",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : "Sprint 0"
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF7_11",
            "name" : "RAG",
            "parent_id" : [ 
                "CF7"
            ],
            "listoptions" : [ 
                "value", 
                "text", 
                "color"
            ],
            "list" : [ 
                {
                    "text" : "Red",
                    "value" : "Red",
                    "alias" : "",
                    "color" : "#C00000",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Amber",
                    "value" : "Amber",
                    "alias" : "",
                    "color" : "#FF9900",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Green",
                    "value" : "Green",
                    "alias" : "",
                    "color" : "#009D44",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF7_12",
            "name" : "Progress Completion",
            "parent_id" : [ 
                "CF7"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF7_13",
            "name" : "Planned Cost",
            "parent_id" : [ 
                "CF7"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : false,
            "isrequired" : false
        }, 
        {
            "_id" : "CF7_14",
            "name" : "Five Shift",
            "parent_id" : [ 
                "CF7"
            ],
            "listoptions" : [ 
                "value", 
                "text"
            ],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field"
            ],
            "enable" : false,
            "isrequired" : false
        }, 
        {
            "_id" : "CF7_2",
            "name" : "End Date",
            "parent_id" : [ 
                "CF7"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF7_3",
            "name" : "Revised End Date",
            "parent_id" : [ 
                "CF7"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF7_4",
            "name" : "Country",
            "parent_id" : [ 
                "CF7"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [ 
                "ALL"
            ],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF7_5",
            "name" : "Complete",
            "parent_id" : [ 
                "CF7"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : false,
            "isrequired" : false
        }, 
        {
            "_id" : "CF7_6",
            "name" : "Status",
            "parent_id" : [ 
                "CF7"
            ],
            "listoptions" : [ 
                "value", 
                "text"
            ],
            "list" : [ 
                {
                    "text" : "Completed",
                    "value" : "Completed",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Not Started",
                    "value" : "Not Started",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Started",
                    "value" : "Started",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "list",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : true
        }, 
        {
            "_id" : "CF7_7",
            "name" : "Status Comment",
            "parent_id" : [ 
                "CF7"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF7_8",
            "name" : "Owner",
            "parent_id" : [ 
                "CF7"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF7_9",
            "name" : "Region",
            "parent_id" : [ 
                "CF7"
            ],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [ 
                "ALL"
            ],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF8",
            "name" : "Progress Completion",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [ 
                {
                    "text" : "Calculated",
                    "value" : "calculated",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }, 
                {
                    "text" : "Manual Input",
                    "value" : "manual",
                    "alias" : "",
                    "color" : "",
                    "icon" : "",
                    "displayoption" : "",
                    "description" : ""
                }
            ],
            "speciallist" : [],
            "value" : "manual",
            "description" : "",
            "displayoptions" : [],
            "type" : "single-choice",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }, 
        {
            "_id" : "CF9",
            "name" : "Project Driver",
            "parent_id" : [],
            "listoptions" : [],
            "list" : [],
            "speciallist" : [],
            "value" : "",
            "description" : "",
            "displayoptions" : [],
            "type" : "none",
            "category" : [ 
                "summary_field"
            ],
            "enable" : true,
            "isrequired" : false
        }
    ],
    "configscorecard" : [ 
        {
            "_id" : "CF53",
            "name" : "Weightage",
            "parent_id" : [],
            "value" : "",
            "listoptions" : [],
            "list" : null,
            "displayoptions" : null,
            "description" : "",
            "enable" : true,
            "type" : "none",
            "category" : [ 
                "scorecard"
            ],
            "isrequired" : false,
            "speciallist" : []
        }
    ],
    "periodfrom" : 2016,
    "periodto" : 2018,
    "projectnamemaxlength" : 20,
    "initiativetagmaxlimit" : 4,
    "description" : "",
    "segment" : [ 
        {
            "_id" : ObjectId("5b4c070501112617537cc93c"),
            "name" : "N/A",
            "subsegment" : [ 
                {
                    "_id" : ObjectId("5b569070dfd3d52632e94b82"),
                    "name" : "N/A"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b4c070501112617537cc93d"),
            "name" : "Corporate, Commercial & Institutional Banking",
            "subsegment" : [ 
                {
                    "_id" : ObjectId("5b569159dfd3d52632e94b83"),
                    "name" : "CB - High Value Small Business"
                }, 
                {
                    "_id" : ObjectId("5b569159dfd3d52632e94b84"),
                    "name" : "CB - Middle Enterprises"
                }, 
                {
                    "_id" : ObjectId("5b569159dfd3d52632e94b85"),
                    "name" : "CB - Middle Markets"
                }, 
                {
                    "_id" : ObjectId("5b569159dfd3d52632e94b86"),
                    "name" : "CB - Local Corporates"
                }, 
                {
                    "_id" : ObjectId("5b569159dfd3d52632e94b87"),
                    "name" : "GB - Banks & Broker Dealers"
                }, 
                {
                    "_id" : ObjectId("5b569159dfd3d52632e94b88"),
                    "name" : "GB - Commercial Real Estate"
                }, 
                {
                    "_id" : ObjectId("5b569159dfd3d52632e94b89"),
                    "name" : "GB - Financial & Strategic Investors Group"
                }, 
                {
                    "_id" : ObjectId("5b569159dfd3d52632e94b8a"),
                    "name" : "GB - Global Industries Group"
                }, 
                {
                    "_id" : ObjectId("5b569159dfd3d52632e94b8b"),
                    "name" : "GB - Global Subsidiaries"
                }, 
                {
                    "_id" : ObjectId("5b569159dfd3d52632e94b8c"),
                    "name" : "GB - Investors & Insurance"
                }, 
                {
                    "_id" : ObjectId("5b569159dfd3d52632e94b8d"),
                    "name" : "GB - Public Sector & Development Organisation"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b4c070601112617537cc93e"),
            "name" : "Private Banking",
            "subsegment" : [ 
                {
                    "_id" : ObjectId("5b569070dfd3d52632e94b82"),
                    "name" : "N/A"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b4c070601112617537cc940"),
            "name" : "Retail Banking",
            "subsegment" : [ 
                {
                    "_id" : ObjectId("5b569159dfd3d52632e94b8e"),
                    "name" : "Retail Business Banking"
                }, 
                {
                    "_id" : ObjectId("5b569159dfd3d52632e94b8f"),
                    "name" : "Retail Individual Banking"
                }
            ]
        }
    ],
    "productassignment" : [ 
        {
            "_id" : ObjectId("5b39f60ba7da87c5e8da382b"),
            "name" : "N/A"
        }, 
        {
            "_id" : ObjectId("5b39f60ba7da87c5e8da382c"),
            "name" : "Trade"
        }, 
        {
            "_id" : ObjectId("5b39f60ba7da87c5e8da382d"),
            "name" : "Securities Services (SS)"
        }, 
        {
            "_id" : ObjectId("5b39f60ba7da87c5e8da382e"),
            "name" : "Digitization and Client Access (DCA)"
        }, 
        {
            "_id" : ObjectId("5b39f60ba7da87c5e8da382f"),
            "name" : "Financial Markets (FM)"
        }, 
        {
            "_id" : ObjectId("5b39f60ba7da87c5e8da3830"),
            "name" : "Corporate Finance (CF)"
        }, 
        {
            "_id" : ObjectId("5b39f60ba7da87c5e8da3831"),
            "name" : "Corporate Lending (CL)"
        }, 
        {
            "_id" : ObjectId("5b39f60ba7da87c5e8da3832"),
            "name" : "Principal Finance (PF)"
        }, 
        {
            "_id" : ObjectId("5b39f60ba7da87c5e8da3833"),
            "name" : "Cash (CBR)"
        }, 
        {
            "_id" : ObjectId("5b39f60ba7da87c5e8da3834"),
            "name" : "Cash (non-CBR)"
        }, 
        {
            "_id" : ObjectId("5b39f60ba7da87c5e8da3835"),
            "name" : "Retail"
        }, 
        {
            "_id" : ObjectId("5b39f60ba7da87c5e8da3836"),
            "name" : "Wealth management"
        }
    ],
    "conducttheme" : [ 
        {
            "_id" : ObjectId("5b3b0407a7da87c5e8da3929"),
            "name" : "N/A",
            "subtype" : [ 
                {
                    "_id" : ObjectId("5b4d9e9ceaad0e985e76f5aa"),
                    "name" : "N/A"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b39f983a7da87c5e8da3842"),
            "name" : "Our Business",
            "subtype" : [ 
                {
                    "_id" : ObjectId("5b4d9f48eaad0e985e76f5ab"),
                    "name" : "Transparent Business Model"
                }, 
                {
                    "_id" : ObjectId("5b4d9f48eaad0e985e76f5ac"),
                    "name" : "Effective Governance"
                }, 
                {
                    "_id" : ObjectId("5b4d9f48eaad0e985e76f5ad"),
                    "name" : "Robust Infrastructure"
                }, 
                {
                    "_id" : ObjectId("5b4d9f48eaad0e985e76f5ae"),
                    "name" : "Exemplary Business Practices"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b39f984a7da87c5e8da3846"),
            "name" : "Each of Us",
            "subtype" : [ 
                {
                    "_id" : ObjectId("5b4d9f48eaad0e985e76f5af"),
                    "name" : "Ethical Leadership"
                }, 
                {
                    "_id" : ObjectId("5b4d9f48eaad0e985e76f5b0"),
                    "name" : "Aligned Incentives"
                }, 
                {
                    "_id" : ObjectId("5b4d9f48eaad0e985e76f5b1"),
                    "name" : "People Competency & Integrity"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b39f984a7da87c5e8da384c"),
            "name" : "Our External Stakeholders",
            "subtype" : [ 
                {
                    "_id" : ObjectId("5b4d9f48eaad0e985e76f5b2"),
                    "name" : "Fair Outcomes for Clients"
                }, 
                {
                    "_id" : ObjectId("5b4d9f48eaad0e985e76f5b3"),
                    "name" : "Effective Markets"
                }, 
                {
                    "_id" : ObjectId("5b4d9f48eaad0e985e76f5b4"),
                    "name" : "Financial Crime Compliance"
                }, 
                {
                    "_id" : ObjectId("5b4d9f48eaad0e985e76f5b5"),
                    "name" : "Stakeholder Confidence"
                }
            ]
        }
    ],
    "initiativecategory" : [ 
        {
            "_id" : ObjectId("5b4da21beaad0e985e76f5b7"),
            "name" : "FCC Group MAP",
            "subcategory" : [ 
                {
                    "_id" : ObjectId("5b4da21beaad0e985e76f5b8"),
                    "name" : "A. Governance, Oversight & Organisation"
                }, 
                {
                    "_id" : ObjectId("5b4da21beaad0e985e76f5b9"),
                    "name" : "B. Risk Assessment"
                }, 
                {
                    "_id" : ObjectId("5b4da21beaad0e985e76f5ba"),
                    "name" : "C. Policies, Standards and Procedures"
                }, 
                {
                    "_id" : ObjectId("5b4da21beaad0e985e76f5bb"),
                    "name" : "D. People"
                }, 
                {
                    "_id" : ObjectId("5b4da21beaad0e985e76f5bc"),
                    "name" : "E. Learning and Awareness"
                }, 
                {
                    "_id" : ObjectId("5b4da21beaad0e985e76f5bd"),
                    "name" : "F. CDD/EDD"
                }, 
                {
                    "_id" : ObjectId("5b4da21beaad0e985e76f5be"),
                    "name" : "G. Surveillance"
                }, 
                {
                    "_id" : ObjectId("5b4da21beaad0e985e76f5bf"),
                    "name" : "H. Investigations and Disclosures"
                }, 
                {
                    "_id" : ObjectId("5b4da21beaad0e985e76f5c0"),
                    "name" : "I. Assurance and Testing"
                }, 
                {
                    "_id" : ObjectId("5b4da21beaad0e985e76f5c1"),
                    "name" : "J. MI and Data Management"
                }, 
                {
                    "_id" : ObjectId("5b4da21beaad0e985e76f5c2"),
                    "name" : "K. Sanctions"
                }, 
                {
                    "_id" : ObjectId("5b4da21beaad0e985e76f5c3"),
                    "name" : "L. ABC"
                }, 
                {
                    "_id" : ObjectId("5b4da21beaad0e985e76f5c4"),
                    "name" : "M. Tax"
                }, 
                {
                    "_id" : ObjectId("5b4da21beaad0e985e76f5c5"),
                    "name" : "N. Regions and Countries"
                }, 
                {
                    "_id" : ObjectId("5b4da21beaad0e985e76f5c6"),
                    "name" : "O. Business"
                }, 
                {
                    "_id" : ObjectId("5b4da21beaad0e985e76f5c7"),
                    "name" : "P. Americas"
                }, 
                {
                    "_id" : ObjectId("5b4da21beaad0e985e76f5c8"),
                    "name" : "Q. Other Matters"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b4da21beaad0e985e76f5c9"),
            "name" : "FCC Country MAP",
            "subcategory" : []
        }, 
        {
            "_id" : ObjectId("5b4da21beaad0e985e76f5ca"),
            "name" : "FCC TOP Objectives",
            "subcategory" : []
        }, 
        {
            "_id" : ObjectId("5b4da21beaad0e985e76f5cb"),
            "name" : "FCC PRF & Gov",
            "subcategory" : []
        }, 
        {
            "_id" : ObjectId("5b4da21beaad0e985e76f5cc"),
            "name" : "CAP - Mandatory Regulatory Requirements",
            "subcategory" : []
        }, 
        {
            "_id" : ObjectId("5b4da21beaad0e985e76f5cd"),
            "name" : "CAP - Strategic Initiatives",
            "subcategory" : []
        }, 
        {
            "_id" : ObjectId("5b4da21beaad0e985e76f5ce"),
            "name" : "CAP - Other Initiatives",
            "subcategory" : []
        }, 
        {
            "_id" : ObjectId("5b4da21beaad0e985e76f5cf"),
            "name" : "Non-CAP -  Initiatives",
            "subcategory" : []
        }
    ],
    "principlerisk" : [ 
        {
            "_id" : ObjectId("5b4d9dcbeaad0e985e76f5a9"),
            "name" : "N/A",
            "risksubtype" : [ 
                {
                    "_id" : ObjectId("5b4d9baceaad0e985e76f58a"),
                    "name" : "N/A"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b568bc3dfd3d52632e94b3d"),
            "name" : "Compliance",
            "risksubtype" : [ 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b3e"),
                    "name" : "Banking Secrecy"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b3f"),
                    "name" : "Best Execution"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b40"),
                    "name" : "Client Asset and Money Protection"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b41"),
                    "name" : "Client Tax Information Compliance"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b42"),
                    "name" : "Competition and Anti-Trust"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b43"),
                    "name" : "Conduct"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b44"),
                    "name" : "Conflicts of Interest"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b45"),
                    "name" : "Cross Border"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b46"),
                    "name" : "Fair Outcomes for Clients - Account Management and Post Sales Practices"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b47"),
                    "name" : "Fair Outcomes for Clients - Appropriateness and Suitability"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b48"),
                    "name" : "Fair Outcomes for Clients - Client Communication"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b49"),
                    "name" : "Fair Outcomes for Clients - Sales Practices"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b4a"),
                    "name" : "Fiduciary Governance"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b4b"),
                    "name" : "General Legal and Regulatory Compliance"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b4c"),
                    "name" : "Licensing of Entities"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b4d"),
                    "name" : "Licensing of Individuals"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b4e"),
                    "name" : "Market Manipulation"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b4f"),
                    "name" : "Misuse of Information"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b50"),
                    "name" : "Non-Financial Regulatory Reporting"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b51"),
                    "name" : "Privacy"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b52"),
                    "name" : "Records Management"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b53"),
                    "name" : "Regulatory Commitments"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b54"),
                    "name" : "Senior Management Individual Accountability"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b55"),
                    "name" : "Trading Regulations"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b56"),
                    "name" : "Transaction & Trade Reporting"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b568bc3dfd3d52632e94b57"),
            "name" : "Conduct",
            "risksubtype" : [ 
                {
                    "_id" : ObjectId("5b4d9baceaad0e985e76f58a"),
                    "name" : "N/A"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b568bc3dfd3d52632e94b58"),
            "name" : "Finance",
            "risksubtype" : [ 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b59"),
                    "name" : "Accounting and Financial Reporting"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b5a"),
                    "name" : "Financial Regulatory Reporting"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b5b"),
                    "name" : "Prudential - Capital "
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b5c"),
                    "name" : "Prudential - Liquidity"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b5d"),
                    "name" : "Prudential - Recovery & Resolution Planning"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b568bc3dfd3d52632e94b5e"),
            "name" : "Credit risk",
            "risksubtype" : [ 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b5f"),
                    "name" : "Credit Risk Rules"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b60"),
                    "name" : "Customer Insolvency"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b61"),
                    "name" : "Prudential - Credit Risk"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b568bc3dfd3d52632e94b62"),
            "name" : "Enterprise Risk Management",
            "risksubtype" : [ 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b63"),
                    "name" : "Prudential – Risk Governance"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b568bc3dfd3d52632e94b64"),
            "name" : "Financial Crime Compliance",
            "risksubtype" : [ 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b65"),
                    "name" : "Anti-Bribery and Corruption"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b66"),
                    "name" : "Anti-Money Laundering (and Terrorist Financing)"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b67"),
                    "name" : "Sanctions"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b68"),
                    "name" : "Tax Evasion"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b568bc3dfd3d52632e94b69"),
            "name" : "Office of the Chief Information Security Officer",
            "risksubtype" : [ 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b6a"),
                    "name" : "Information and Cyber Security"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b568bc3dfd3d52632e94b6b"),
            "name" : "Market Risk",
            "risksubtype" : [ 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b6c"),
                    "name" : "Market Risk Rules"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b6d"),
                    "name" : "Prudential - Market Risk"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b568bc3dfd3d52632e94b6e"),
            "name" : "Business Efficiency",
            "risksubtype" : [ 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b6f"),
                    "name" : "Outsourcing"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b568bc3dfd3d52632e94b70"),
            "name" : "Group Company Secretary",
            "risksubtype" : [ 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b71"),
                    "name" : "Corporate Governance and Authorities"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b72"),
                    "name" : "Exchange Listing Rules"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b568bc3dfd3d52632e94b73"),
            "name" : "Group Internal Audit",
            "risksubtype" : [ 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b74"),
                    "name" : "Internal Audit"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b568bc3dfd3d52632e94b75"),
            "name" : "Human Resource",
            "risksubtype" : [ 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b76"),
                    "name" : "Employment, remuneration and benefits"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b568bc3dfd3d52632e94b77"),
            "name" : "Legal",
            "risksubtype" : [ 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b78"),
                    "name" : "Legal Enforceability"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b568bc3dfd3d52632e94b79"),
            "name" : "Operational Risk",
            "risksubtype" : [ 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b7a"),
                    "name" : "Fraud Prevention Rules"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b7b"),
                    "name" : "Operational Risk Rules"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b7c"),
                    "name" : "Product Approval and Governance"
                }, 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b7d"),
                    "name" : "Prudential - Operational Risk"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b568bc3dfd3d52632e94b7e"),
            "name" : "Property",
            "risksubtype" : [ 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b7f"),
                    "name" : "Safety and Security"
                }
            ]
        }, 
        {
            "_id" : ObjectId("5b568bc3dfd3d52632e94b80"),
            "name" : "Group Tax",
            "risksubtype" : [ 
                {
                    "_id" : ObjectId("5b568bc3dfd3d52632e94b81"),
                    "name" : "Tax"
                }
            ]
        }
    ],
    "created_date" : ISODate("2018-01-29T07:01:44.264Z"),
    "created_by" : "ss",
    "updated_date" : ISODate("2018-12-11T07:28:23.874Z"),
    "updated_by" : "ss_private",
    "type" : "internal"
})
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
        db.getSiblingDB(acldatabase).acl_accessibility.save(accs)
    })
    userlist.forEach(function(x){
      var existing = db.getSiblingDB(acldatabase).acl_users.find({loginid:x.loginid,groups:group._id}).toArray()
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
		}
      	db.getSiblingDB(acldatabase).acl_users.save(userdata)
      }
    })
})
