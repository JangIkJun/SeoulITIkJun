var object1 ={name: "john1", age: 11, item: ["item1","item1"]};
var object2 ={name: "john2", age: 12, item: ["item2","item2"]};
var object3 ={name: "john3", age: 13, item: ["item3","item3"]};
var object4 ={name: "john4", age: 14, item: ["item4","item4"]};

var users=[];
users.push(object1);
users.push(object2);
users.push(object3);
users.push(object4);

for(var i=0;i<users.length;i++)
{
	if (users[i].name === "john1"){
	console.log("이름은 "+users[i].name+" 입니다.");
	console.log("나이는 "+users[i].age+" 입니다.");
	console.log("아이템은 "+users[i].item+" 입니다.");
	console.log("---------------------------------");
break;
}

}