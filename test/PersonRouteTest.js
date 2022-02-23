const { expect } = require('chai');
let chai = require('chai')
let chaiHTTP = require('chai-http')
let app = require('../app')


//Assertiion style
chai.should();
chai.expect();
chai.use(chaiHTTP);

//PERSON TASK
describe('Test API', () => {
    
    //Test GET find person by ID
    // describe("GET person by ID", () => {
    //     it('It GET person data', (done) => {
    //         chai.request(app)
    //             .get('/person/6211209aeca34631751aaa83/isFriend/0')
    //             .end((err, response) => {
    //                 console.log(response.body)
    //                 response.should.be.status(200);
    //                 done();
    //             });
    //     });
    // });

    //Test GET person by friend ID
    // describe("GET person by friend ID", () => {
    //     it('It GET person data by friend ID', (done) => {
    //         chai.request(app)
    //             .get('/person/6211445734c5825e2fd03f3a/isFriend/1')
    //             .end((err, response) => {
    //                 console.log(response.body)
    //                 response.should.be.status(200);
    //                 done();
    //             });
    //     });
    // });

    //Test POST person
    // describe("POST person data", () => {
    //     it('It POST person data', (done) => {
    //         let personData = {
    //             name: "Bella",
    //             lastname: "Chew"
    //         }
    //         chai.request(app)
    //             .post('/person/addPerson')
    //             .send(personData)
    //             .end((err, response) => {
    //                 console.log(response.body)
    //                 response.should.be.status(200);
    //                 response.body.should.have.property('name');
    //                 response.body.should.have.property('lastname');
    //                 expect(response.body.friend).to.be.empty;
    //                 expect(response.body.pet).to.be.empty;
    //                 done();
    //             });
    //     });
    // });


    // //Test PATCH person info
    // describe("PATCH person data", () => {
    //     it('It PATCH existing person name', (done) => {
    //         let personData = {
    //             name: "Arman changed"
    //         }
    //         chai.request(app)
    //             .patch('/person/6212241f273610c99d487e18')
    //             .send(personData)
    //             .end((err, response) => {
    //                 console.log(response.body)
    //                 response.should.be.status(200);
    //                 response.body.should.have.property('name').equal("Arman changed");
    //                 done();
    //             });
    //     });
    // });


    // //Test PATCH assign friend
    // describe("PATCH assign friend to a person data", () => {
    //     let personData = {
    //         friend: "6211209aeca34631751aaa83"
    //     }
    //     it('It PATCH friend to a person', (done) => {
    //         chai.request(app)
    //             .patch('/person/assignFriend/621330b0a6257dfb8b429f18')
    //             .send(personData)
    //             .end((err, response) => {
    //                 console.log(response.body)
    //                 // response.should.be.status(200);
    //                 // response.body.should.have.property('name').equal("Arman changed");
    //                 // expect(response.body.friend).to.be.a('array').that.contains('6211209aeca34631751aaa83');
    //                 done();
    //             });
    //     });
    // });

    // //Test PATCH unassign friend
    // describe("PATCH unassign friend from a person data", () => {
    //     let personData = {
    //         friend: "6211209aeca34631751aaa83"
    //     }
    //     it('It PATCH unassign friend to a person', (done) => {
    //         chai.request(app)
    //             .patch('/person/unassignFriend/621330b0a6257dfb8b429f18')
    //             .send(personData)
    //             .end((err, response) => {
    //                 console.log(response.body)
    //                 response.should.be.status(200);
    //                 // response.body.should.have.property('name').equal("Arman changed");
    //                 // expect(response.body.friend).to.be.a('array').that.is.empty;
    //                 done();
    //             });
    //     });
    // });

    // //Test PATCH assign pet
    // describe("PATCH assign pet to a person data", () => {
    //     let personData = {
    //         pet: "6211445734c5825e2fd03f39"
    //     }
    //     it('It PATCH assign pet to a person', (done) => {
    //         chai.request(app)
    //             .patch('/person/assignPet/6212241f273610c99d487e18')
    //             .send(personData)
    //             .end((err, response) => {
    //                 console.log(response.body)
    //                 response.should.be.status(200);
    //                 response.body.should.have.property('name').equal("Arman changed");
    //                 expect(response.body.pet).to.be.a('array').that.contains('6211445734c5825e2fd03f39');
    //                 done();
    //             });
    //     });
    // });

    // //Test PATCH unassign pet
    // describe("PATCH unassign pet from a person data", () => {
    //     let personData = {
    //         pet: "6211445734c5825e2fd03f39"
    //     }
    //     it('It PATCH unassign friend to a person', (done) => {
    //         chai.request(app)
    //             .patch('/person/unassignPet/6212241f273610c99d487e18')
    //             .send(personData)
    //             .end((err, response) => {
    //                 console.log(response.body)
    //                 response.should.be.status(200);
    //                 response.body.should.have.property('name').equal("Arman changed");
    //                 expect(response.body.friend).to.be.a('array').that.is.empty;                   
    //                 done();
    //             });
    //     });
    // });

    // //Test DELETE a person
    // describe("DELETE person by ID", () => {
    //     it('It DELETE person data', (done) => {
    //         chai.request(app)
    //             .delete('/person/621144f8b4d9edb16d9382cb')
    //             .end((err, response) => {
    //                 response.should.be.status(200);
    //                 done();
    //             });
    //     });
    // });
        


})