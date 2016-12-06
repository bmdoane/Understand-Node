// Moved to controller from app following modularity 
const { urlencoded } = require('body-parser')
const urlencodedParser = urlencoded({ extended: false })

module.exports = (app) => {
	
	app.get('/', (req, res) => {
		res.render('index')
	})
	
	app.get('/employee/:id', (req, res) => {
		res.render('person', { ID: req.params.id, Qstr: req.query.qstr })
	})
	
	app.post('/employee', urlencodedParser, (req, res) => {
		res.send('Thank you!')
		console.log(req.body.firstName)
		console.log(req.body.lastName)
	})
	
}