import express from 'express'
import path from 'path'


const app = express();

app.use(express.static(path.resolve(__dirname, '../dist')))

app.get('/*', function(req, res){
    res.sendFile(path.resolve(__dirname, '../dist/index.html'))
})


app.listen(1234, function(){
    console.log('Listening to the things!')
})