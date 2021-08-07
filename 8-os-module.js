const os = require('os');

// info about current user
const user = os.userInfo();
console.log(user);

// method returns the system uptime in seconds
let systemTime = os.uptime();
console.log(`The System Uptime is ${systemTime} seconds`);
console.log(`The System Uptime is ${systemTime/60} minutes`);
console.log(`The System Uptime is ${systemTime/3600} hours`);
console.log(`The system uptime is ${systemTime/86400} days`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem()
}
console.log(currentOS);