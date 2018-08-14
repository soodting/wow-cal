export default {
  development: {
    // host: 'http://172.19.217.111:8080',
    host: 'http://localhost',
    port: 3000
  },
  production: {
    host: '',
    port: 3001
  }
}[process.env.NODE_ENV || 'development']
