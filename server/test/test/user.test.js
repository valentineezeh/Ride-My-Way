import request from 'supertest';
import chai from 'chai';
import app from '../../app';
import testData from '../faker/userfaker';

const { expect } = chai;
const testUser = {};
const validToken = {};


chai.should();

describe('Ride-My-Way User Test', () => {
    it('should load the api home page', (done) => {
        request(app)
            .get('/api/v1/')
            .expect(200)
            .end((err) => {
                if(err){ done(err); }
                done();
            });
    });
    it('should return error if email field is empty on signup', (done) => {
        request(app).post('/api/v1/auth/signup')
            .send(testData.wronginfo)
            .end((error, res) => {
                expect(400);
                expect(res.body.message).to.include('Valid Email is required');
                if(error) done(error);
                done();
            });  
    });
    it('should return error if password field is empty on signup', (done) => {
        request(app).post('/api/v1/auth/signup')
            .send(testData.wronginfo1)
            .end((error, res) => {
                expect(400);
                expect(res.body.message).to.include('Password should not be empty');
                if(error) done(error);
                done();
            });
    });
    it('should return error if password field is less than six character on signup', (done) => {
        request(app).post('/api/v1/auth/signup')
            .send(testData.wronginfo2)
            .end((error, res) => {
                expect(400);
                expect(res.body.message).to.include('Password must exceed 6 characters..');
                if(error) done(error);
                done();
            });
    });
    it('Should create a new user with email and password', (done) => {
        request(app)
            .post('/api/v1/auth/signup')
            .set('Content-Type', 'application/json')
            .send(testData.signupUser)
            .expect(201)
            .end((err, res) => {
                testUser.user = res.body.data;
                expect(testUser.user).to.have.property('firstname');
                expect(testUser.user).to.have.property('lastname');
                expect(testUser.user).to.have.property('email');
                expect(res.body.data.email).to.equal(testData.signupUser.email);
                if (err) return done(err);
                done();

            });
    });
    it('should throw error if email already exist in database', (done) => {
        request(app)
            .post('/api/v1/auth/signup')
            .set('Content-Type', 'application/json')
            .send(testData.signupUser)
            .expect(400)
            .end((err, res) => {
                expect(res.body.message).to.equal('This Email has already been used by another user.');
                if(err) return done(err);
                done();
            });
    });
    it('Should return error if email field is empty on login', (done) => {
        request(app).post('/api/v1/auth/login')
            .send(testData.loginerror1)
            .end((error, res) => {
                expect(400);
                expect(res.body.message).to.include('Email should not be empty');
                if(error) done(error);
                done();
            });
    });
    it('Should return error if password field is empty on signin', (done) => {
        request(app).post('/api/v1/auth/login')
            .send(testData.loginerror2)
            .end((error, res) => {
                expect(400);
                expect(res.body.message).to.include('Password should not be empty.');
                if (error) done(error);
                done();
            });
    });
    
    it('user login Successfully with correct details', (done) => {
        request(app)
            .post('/api/v1/auth/login')
            .send(testData.loginUser)
            .expect(200)
            .end((err, res) => {
                expect(res.body.message).to.equal('Welcome User You are now Logged In');
                if (err) return done(err);
                done();
            });
    });
    it('should return a token when user successful signin', (done) => {
        request(app)
            .post('/api/v1/auth/login')
            .send(testData.loginUser)
            .expect(200)
            .end((err, res) => {
                validToken.token = res.body.data.token;
                expect();
                expect(res.body.message).to.equal('Welcome User You are now Logged In');
                if (err) return done(err);
                done();
            });
    });     
});

export default validToken;