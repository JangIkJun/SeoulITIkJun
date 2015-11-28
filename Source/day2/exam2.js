var array =[1,2,3];
var foo = function(j)
{
	for(var i=0;i<j.length;i++)
		console.log(j[i]);
};

var bar = function(array1)
{
	console.log(array1);
array1[1]= array1[0];
console.log(array1);

}

var user =[];
var sighup = function(name, age)
{
	var user = {name: name, age: age};
	user.push(user);
}




foo(array);
bar(array);


