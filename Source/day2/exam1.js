var foo=[1,2,3,4,5,6,7,8,9,10];


for(var i=0;i<10;i++)
{
	console.log(i,foo[i]);
}
for(var j=0;j<10;j++)
{
	console.log(j, foo[j]*2);
}

for(var k=0;k<10;k++){
foo.push(foo[k]);
console.log(foo);
}