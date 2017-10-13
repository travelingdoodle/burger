// Import orm.js
var orm = require("../config/orm.js");

var burger = 
{
	selectAll: function(cb)
	{
		orm.selectAll("burgers", function(res)
		{
			cb(res);
		});	
	},

insertOne: function(cols, vals, cb)
{
	orm.insertOne("burgers", cols, vals, function(res)
	{
		cb(res);
	});
},

updateOne: function(objColVals, id, cb)
{
	orm.updateOne("burgers", objColVals, id, function(res)
	{
		cb(res);
	});
}
};

module.exports = burger;