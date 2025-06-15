module.exports = {
	development: {
		client: 'pg',
		connection: {
			host: '127.0.0.1',
			user: 'elona',
			password: 'root',
			database: 'my_blog'
		},
		migrations: {
			directory: './migrations'
		}
	}
}
  