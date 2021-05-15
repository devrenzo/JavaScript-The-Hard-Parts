// Arrays are object with methods
const teams = [];

// the dot notation cerces automatically to string
// this aproach dont work with invalid characters (0,-,$,#,@,etc)
teams.ferrari = 'Red';

// We cant user brakets notation if the parameter is not a variable
// teams[mercedes] = 'Black';

// we have to coerce to a string
teams['mercedes'] = 'black';

console.log(teams);
