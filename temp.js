const path = require('path')
const express = require('express')

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')
// app.set('view engine', 'hbs');
app.set('view engine', 'hbs');


app.use(express.static(publicDirectoryPath))


app.get('', (req, res) => {
    res.render('index')
})

// Setup an weather route and render a apge title
app.get('/weather', (req, res) => {
    res.send({
        title: 'Weather Page'
    })
})
app.listen(3000, () => {
    console.log('Server is up on port 3000')
})
// app.com
// app.com/help
// app.com/about

// Goal: Setup two new routes 
// 1.  Setup an about route and render a apge title
// 2.  Setup an weather route and render a apge title
// 3.  Test your work by visiting both in the browser

