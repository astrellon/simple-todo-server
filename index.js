const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 3000

// Setup JSON parsing for the express app.
app.use(bodyParser.json()) // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })) // support encoded

// State management
let items = []
let itemId = 0;

function addItem(text)
{
    const id = ++itemId
    items = [...items, {id, text}]

    return id
}

function removeItem(id)
{
    const oldLength = items.length
    items = items.filter(item => item.id !== id)
    return items.length != oldLength
}

// Handling URL routing
app.get('/', (req, res) =>
{
    res.send('Example Todo Server')
})

app.get('/api/items', (req, res) =>
{
    res.json({items})
})

app.post('/api/items', (req, res) =>
{
    try
    {
        const text = req.body.text
        const newId = addItem(text)

        res.json({ success: true, newId })
    }
    catch (error)
    {
        res.json({ success: false, error })
    }
})

app.delete('/api/items/:id', (req, res) =>
{
    try
    {
        const id = parseInt(req.params.id)

        const removed = removeItem(id)

        res.json({ success: true, removed })
    }
    catch (error)
    {
        res.json({ success: false, error })
    }
})

// Start server
app.listen(port, () => console.log(`Todo Server listening on port ${port}!`))