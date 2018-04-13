var express = require('express')
var bodyparser = require('body-parser')
var mysql = require('mysql')
var app = express()

app.use(bodyparser.urlencoded({}))
var pool = mysql.createPool({
	host:'127.0.0.1',
	user:'root',
	password:'',
	database:'item',
	port:3306
}) 

//查询
app.get('/',(req,res) => {
	res.setHeader('Access-Control-Allow-Origin','*')
	pool.getConnection(function(err,connection){
		if(err){
			console.log(err)
			return
		}
		var sql = 'select week,one,two,three,four,five,six,seven,eight from kecb'
		connection.query(sql,function(err,data){
			if(err){
				console.log(err)
				return
		    }
			res.send(data)
			connection.end()
		})
	})
})
//修改
app.post('/update',function(req,res){
	res.setHeader('Access-Control-Allow-Origin','*')
	var json = req.body
	pool.getConnection(function(err,connection){
		if(err){
			console.log(err)
			return
		}
		
		var sql = 'update kecb set () where()'
		connection.query(sql,[json.week,json.one],function(err,data){
			if(err){
			console.log(err)
			return
		     }
			res.send()
			connection.end()
		})
	})
})
//删除
// app.post('/del',function(req,res){
// 	res.setHeader('Access-Control-Allow-Origin','*')
// 	var id = req.body.id
// 	pool.getConnection(function(err,connection){
// 		if(err){
// 			console.log(err)
// 			return
// 		}
// 		var sql = `delete from kecb where id= ${id}`
// 		connection.query(sql,[id],function(err,data){
// 			if(err){
// 			console.log(err)
// 			return
// 		     }
// 			res.send()
// 			connection.end()
// 		})
// 	})
// })
 
// //添加
// app.post('/add',function(req,res){
// 	res.setHeader('Access-Control-Allow-Origin','*')
// 	var json = req.body
// 	pool.getConnection(function(err,connection){
// 		if(err){
// 			console.log(err)
// 			return
// 		}
// 		var sql = 'insert into kecb(week,one) values(?,?)'
// 		connection.query(sql,[json.week,json.one],function(err,data){
// 			if(err){
// 			console.log(err)
// 			return
// 		     }
// 			res.send()
// 			connection.end()
// 		})
// 	})
// })

app.listen(3000,function(){
	console.log('ok')
})
