const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000;

app.use(express.json())

const courses = [
    { id: 1, name: 'course One' },
    { id: 2, name: 'course Two' },
    { id: 3, name: 'course Three' },
]

app.get('/',(req, res)=>{
    res.send('Hello World!')
})

app.get('/api/courses',(req, res)=>{
    res.send(courses)
})

app.get('/api/courses/:id',(req, res)=>{
    let course = courses.find(c => parseInt(req.params.id) === c.id)
    if(!course){
        res.status(404).send(`The course with the given ID - [${req.params.id}] was not found! `)
    }
    res.send(course)
})

app.post('/api/courses',(req, res)=>{
    const course = {
        id: courses.length + 1,
        name: req.body.name,
    }
    courses.push(course)
    req.send(course)
})
// app.get('/api/courses/:id',(req, res)=>{
//     res.send(req.params.id)
// })
// app.get('/api/courses/:year/:month',(req, res)=>{
//     res.send(req.params)
// })

app.listen(PORT, function(){
    console.log(`Server listen ${PORT}`)
})