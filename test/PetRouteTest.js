const { expect } = require('chai');
let chai = require('chai')
let chaiHTTP = require('chai-http')
let app = require('../app')


//Assertiion style
chai.should();
chai.expect();
chai.use(chaiHTTP);

//PET TASK
describe('Test API', () => {
    
    //Test GET find person by ID
    // describe("GET pet by ID", () => {
    //     it('It GET pet data', (done) => {
    //         chai.request(app)
    //             .get('/pet/6211e26f260f043a5b3c2aec/isPerson/0')
    //             .end((err, response) => {
    //                 console.log(response.body);
    //                 response.should.be.status(200);
    //                 done();
    //             });
    //     });
    // });

    // //Test GET person by friend ID
    // describe("GET pet by person ID", () => {
    //     it('It GET pet(s) data', (done) => {
    //         chai.request(app)
    //             .get('/pet/6211209aeca34631751aaa83/isPerson/1')
    //             .end((err, response) => {
    //                 console.log(response.body);
    //                 response.should.be.status(200);
    //                 done();
    //             });
    //     });
    // });

    // //Test POST pet
    // describe("POST pet data", () => {
    //     it('It POST pet data', (done) => {
    //         let petData = {
    //             name: "Rock"
    //         }
    //         chai.request(app)
    //             .post('/pet/addPet')
    //             .send(petData)
    //             .end((err, response) => {
    //                 response.should.be.status(200);
    //                 response.body.should.have.property('name');
    //                 done();
    //             });
    //     });
    // });


    //Test PATCH pet info
    // describe("PATCH pet data", () => {
    //     it('It PATCH existing pet name', (done) => {
    //         let petData = {
    //             name: "Rock changed"
    //         }
    //         chai.request(app)
    //             .patch('/pet/6213349de4219740fdaa8c19')
    //             .send(petData)
    //             .end((err, response) => {
    //                 console.log(response.body)
    //                 response.should.be.status(200);
    //                 response.body.should.have.property('name').equal("Rock changed");
    //                 done();
    //             });
    //     });
    // });

    // //Test DELETE a person
    // describe("DELETE pet by ID", () => {
    //     it('It DELETE pet data', (done) => {
    //         chai.request(app)
    //             .delete('/pet/621144f8b4d9edb16d9382ca')
    //             .end((err, response) => {
    //                 response.should.be.status(200);
    //                 done();
    //             });
    //     });
    // });
        


})