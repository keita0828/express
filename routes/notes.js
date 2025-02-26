var express = require('express');
var router = express.Router();



// 接続情報を設定
const { MongoClient } = require("mongodb");
const uri =  "mongodb+srv://keita:amo0828db@cluster0.wwyxk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);

router.get('/', async (req,res) => {
// データベース、コレクションを指定
const database = client.db('notes');
const client = database.collection('notes');

// idが1のドキュメントを取得
const query = { id: 2 };
const note = await notes.findOne(query);

res.json(note.title);
})

module.exports = router;