'use strict';

var routes = require('next-routes')();

routes.add('/campaign/new', '/campaign/new').add('/campaign/:address', '/campaign/show').add('/campaign/:address/requests', '/campaign/requests/index').add('/campaign/:address/requests/new', '/campaign/requests/new');
module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZjs7QUFFQSxPQUFPLEFBQVAsSUFBVyxBQUFYLGlCQUEyQixBQUEzQixpQkFDSyxBQURMLElBQ1MsQUFEVCxzQkFDOEIsQUFEOUIsa0JBRUssQUFGTCxJQUVTLEFBRlQsK0JBRXdDLEFBRnhDLDRCQUdLLEFBSEwsSUFHUyxBQUhULG1DQUc0QyxBQUg1QztBQUlBLE9BQU8sQUFBUCxVQUFnQixBQUFoQiIsImZpbGUiOiJyb3V0ZXMuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvdGgvRGVza3RvcC9ibG9ja2NoYWluL2tpY2tzdGFydCJ9