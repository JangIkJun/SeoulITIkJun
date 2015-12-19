var express = require('express');
var router = express.Router();

var Parse = require('parse/node');
Parse.initialize('Ki1uK6MSZr62f1TlegMHAdnNo1LDt8qZ8e2RYjbB',
	'Kax3BtEUiet1LA5QIRoRgzG3qGY0v8u3wBFq22dx');
/* GET users listing. */

router.get('/', function(req, res, next)
{
  //GET /users
  //회원가입

var query = new Parse.Query(Parse.User);
query.equalTo("username",req.body.username);

query.find({
	success: function(user){
		res.json('Success: 회원조회 완료',{user:user});
	},
	error: function(user,error){
		res.json('Error: 회원조회 실패',{error:error});
	}
});
});


router.post('/',function(req,res,next)
{
// POST/users
// 회원 가입하기

var user = new Parse.User();
user.set("username",req.body.username);
user.set("password",req.body.password);
user.set("email",req.body.email); 

user.signUp(null,{
	seccess:function(user){
		res.json('Success: 회원가입 완료', {user:user});
	},
	error:function(user, error){
		res.json('Error: 회원가입 실패',{error:error});
	}
});
});


router.put('/:objectId',function(req,res,next)
{


//다음시간에


	res.send('users 회원가입수정하기');
});



router.delete('/',function(req,res,next)
{

//다음 시간에


	
});


module.exports = router;
