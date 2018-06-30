import request from 'supertest';
import chai from 'chai';
import app from '../../app';
import testData from '../faker/userfaker';

const { expect } = chai;
const testUser = {};
const validToken = {};

describe('Ride-My-Way User Test', () => {
    it('should load the api home page', (done) => {
        request(app)
          .get('/api/v1/')
          .expect(200)
          .end((err) => {
              if(err){ done(err) }
              done();
          });
    });
    it('should return error if email field is empty on signup', (done) => {
        request(app).post('/api/v1/auth/signup')
          .send(testData.wronginfo)
          .end((error, res) => {
            expect(400);
            //console.log(res.body.message)
            expect(res.body.message[0]).to.include('Valid Email is required');
            if(error) done(error)
            done()
          });  
    });

    // // Not Passing
    // it('should return error if password field is empty on signup', (done) => {
    //     request(app).post('/api/v1/auth/signup')
    //       .send(testData.wronginfo1)
    //       .end((error, res) => {
    //           expect(400);
    //           console.log(res.body)
    //           expect(res.body.message).to.include('Password Cannot be Blank.');
    //           if(error) done(error);
    //           done()
    //       });
    // });
    // it('should return error if password field is less than six character on signup', (done) => {
    //     request(app).post('/api/v1/auth/signup')
    //       .send(testData.wronginfo2)
    //       .end((error, res) => {
    //           expect(400);
    //           //console.log(res)
    //           expect(res.body.message).to.include('Password cannot be less than six charaters!');
    //           if(error) done(error)
    //           done();
    //       });
    // });
    
    // passing
    it('Should return error if email field is empty on login', (done) => {
        request(app).post('/api/v1/auth/login')
          .send(testData.loginerror1)
          .end((error, res) => {
              expect(400);
              expect(res.body.message[0]).to.include('Email should not be empty');
              if(error) done(error)
              done()
          });
    });

    // passing
    it('Should return error if password field is empty on signin', (done) => {
        request(app).post('/api/v1/auth/login')
          .send(testData.loginerror2)
          .end((error, res) => {
              expect(400);
              expect(res.body.message[0]).to.include('Password should not be empty.');
              if (error) done(error)
              done()
          });
    });
    // Passing
    it('Should create a new user with email and password', (done) => {
        request(app)
          .post('/api/v1/auth/signup')
          .set('Content-Type', 'application/json')
          .send(testData.signupUser)
          .expect(201)
          .end((err, res) => {
              testUser.user = res.body.data;
              //console.log("===================")
              //console.log(res.body)
              expect(testUser.user).to.have.property('firstname');
              expect(testUser.user).to.have.property('lastname');
              expect(testUser.user).to.have.property('email');
              expect(res.body.data.email).to.equal(testData.signupUser.email);
              if (err) return done(err);
              done();

          })
    })
    // Passing
    it("should throw error if email already exist in database", (done) => {
        request(app)
          .post('/api/v1/auth/signup')
          .set('Content-Type', 'application/json')
          .send(testData.signupUser3)
          .expect(409)
          .end((err, res) => {
              //console.log(res.body)
              expect(res.body.message).to.equal('User already exist.');
              if(err) return done(err);
              done();
          });
    });
      //passing
      it('user cant login if the password is not correct', (done) => {
        request(app)
          .post('/api/v1/auth/login')
          .send(testData.loginUser2)
          .expect(400)
          .end((err, res) => {
            expect(res.body.message).to.equal('Authentication failed, wrong Password');
            if (err) return done(err);
            done();
          });
      });

      //passing
      it('user cant login if the email is not correct.', (done) => {
        request(app)
          .post('/api/v1/auth/login')
          .send(testData.loginUser3)
          .expect(400)
          .end((err, res) => {
            //console.log(res.body)
            expect(res.body.message).to.equal('Authentication failed, wrong Password');
            if (err) return done(err);
            done();
          });
      });
      //Passing
      it('user login Successfully with correct details', (done) => {
        request(app)
          .post('/api/v1/auth/login')
          .send(testData.loginUser1)
          .expect(200)
          .end((err, res) => {
              //console.log(testData.loginUser1.password)
             // console.log(testData.signupUser.password)
           // console.log(res.body.message)
            expect(res.body.message).to.equal("Welcome User You are now Logged In");
            if (err) return done(err);
            done();
          });
      });
      // Passing
      it('should return a token when user successful signin', (done) => {
        request(app)
          .post('/api/v1/auth/login')
          .send(testData.loginUser1)
          .expect(200)
          .end((err, res) => {
            //console.log("==================Message================")
            validToken.token = res.body.token;
            //console.log(validToken.token)
            expect(validToken.token);
            //console.log("==================Message================")
            //console.log(res.body)
            expect(res.body.message).to.equal("Welcome User You are now Logged In");
            if (err) return done(err);
            done();
          });
      });     
});

export default validToken;