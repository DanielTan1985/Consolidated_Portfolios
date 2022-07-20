import axios from 'axios';

//Connected to Heroku Backend API [Postgres]
export default axios.create({
	baseURL: 'https://backendpersonalapi.herokuapp.com/',
});
