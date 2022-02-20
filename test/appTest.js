let chai = require('chai')
let chaiHTTP = require('chai-http')
let app = require('../app')

//Assertiion style
chai.should();
chai.expect();
chai.use(chaiHTTP);

//PERSON TASK
//Test GET by id
describe('Test API', () => {
    
    //Test GET find person by ID
    describe("GET person by ID", () => {
        it('It should return one person data', (done) => {
            chai.request(app)
                .get('/person/6211209aeca34631751aaa83')
                .end((err, response) => {
                    response.should.be.status(200);
                    //response.body.length.should.be.equal(6);
                    done();
                });
        });
    });

    //Test GET perosn by friend ID
    describe("GET person by friend ID", () => {
        it('It should return one person data', (done) => {
            chai.request(app)
                .get('/person//6211445734c5825e2fd03f3a/isFriend/1')
                .end((err, response) => {
                    console.log(response.body)
                    response.should.be.status(200);
                    done();
                });
        });
    });

  
    //Test POST person

    //Test PATCH person info

    //Test PATCH assign friend

    //Test PATCH unassign friend

    //Test PATCH assign pet

    //Test PATCH assign pet

    //Test DELETE a person
        


})