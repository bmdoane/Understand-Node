module.exports = (app) => {
	
	app.get('/api/employee/:id', (req, res) => {
	// get that data from database
		res.json({ firstName: 'Carlester', lastName: 'Crumpler' })
	})
	
	app.post('/api/employee', (req, res) => {
		// save to the database
	})
	
	app.delete('/api/employee/:id', (req, res) => {
		// delete from the database
	})
	
}