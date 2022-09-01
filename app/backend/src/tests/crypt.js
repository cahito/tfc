const bcrypt = require('bcryptjs');

const test = bcrypt.getRounds('$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW');
console.log('getRounds', test);

const test2 = bcrypt.getSalt('$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW');
console.log('getSalt', test2);

const test3 = bcrypt.compareSync(123456, '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW');
console.log('decode', test3);

const test4 = bcrypt.hashSync('senha123', '$2a$08$xi.Hxk1czAO0nZR..B393u');
console.log('hashSync', test4);

const test5 = bcrypt.hashSync('senha456', '$2a$08$xi.Hxk1czAO0nZR..B393u');
console.log('hashSync', test5);
