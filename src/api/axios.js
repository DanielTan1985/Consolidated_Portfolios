import axios from 'axios';

//Connected to Heroku Backend API [Postgres]
export default axios.create({
	baseURL: 'https://backendpersonalapi.herokuapp.com/',
});
//https://backendpersonalapi.herokuapp.com/
//https://gentle-fortress-35413.herokuapp.com/api/auth/signup