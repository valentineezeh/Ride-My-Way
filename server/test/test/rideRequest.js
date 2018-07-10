import request from 'supertest';
import chai from 'chai';
import app from '../../app';
import testData from '../faker/rideRequestFaker';
import validToken from '../../test/test/user.test';

const { expect } = chai;

describe('Ride-My-Way Ride Request Test', () => {
    it('should load the api home page', (done) => {
        request(app)
            .get('/api/v1')
            .expect(200)
            .end((err) => {
                if(err){
                    done(err);
                }
                done();
            });
    });
    it('should return error if ride route is incorrect', (done) => {
        request(app)
            .get('/api/v1/users/rides/1/request')
            .set('authorization', validToken.token)
            .end((error, res) => {
                expect(404);
                expect(res.body.message).to.include('Invalid Route');
                if(error) done(error);
                done();
            });
    }) ;
    it('should return error if token is not present when getting a ride request', (done) => {
        request(app)
            .get('/api/v1/users/rides/1/requests')
            .end((error, res) => {
                expect(401);
                expect(res.body.message).to.include('You need to signup or login to perform this action');
                if(error){
                    done(err);
                }
                done();
            });
    });
    it('should return all ride requests in the application', (done) => {
        request(app)
            .get('/api/v1/users/rides/1/requests')
            .set('authorization', validToken.token)
            .end((error, res) => {
                expect(200);
                expect(res.body.data);
                if(error) done(error);
                done();
            });
    });
    it('should return error if token is not valid when creating RIDE REQUEST', (done) => {
        request(app)
            .post('/api/v1/rides/1/requests')
            .send(testData.rideRequest)
            .set('authorization', 'fghfghfghfgh')
            .end((error, res) => {
                expect(401);
                expect(res.body.message).to.include('You do not have permission to this page.');
                if(error) done(error);
                done();
            });
    });
    it('should save ride request to database if login is valid' +
    ' User and body is filled correctly', (done) => {
        request(app)
            .post('/api/v1/rides/1/requests')
            .send(testData.rideRequest)
            .set('authorization', validToken.token)
            .end((error, res) => {
                expect(201);
                expect(res.body.data);
                if(error) done(error);
                done();
            });
    });
    it('should return error if Ride id does not exist', (done) => {
        request(app)
            .post('/api/v1/rides/30/requests')
            .send(testData.rideRequest)
            .set('authorization', validToken.token)
            .end((error, res) => {
                expect(404);
                expect(res.body.message).to.include('The requested ride offer does not exist');
                if(error) done(error);
                done();
            });
    });
    it('should UPDATE a ride request to reject a ride in the database if login is valid' + ' User and body is filled correctly', (done) => {
        request(app)
            .put('/api/v1/users/rides/2/requests/2')
            .send(testData.rideRequest)
            .set('authorization', validToken.token)
            .end((error, res) => {
                expect(200);
                expect(res.body.message).to.include('rides has been accepted.');
                if(error) done(error);
                done();
            });
    });
    it('should UPDATE a ride request to accept a ride in the database if login is valid' + ' User and body is filled correctly', (done) => {
        request(app)
            .put('/api/v1/users/rides/2/requests/1')
            .send(testData.rideRequest2)
            .set('authorization', validToken.token)
            .end((error, res) => {
                expect(200);
                expect(res.body.message).to.include('rides have be rejected');
                if(error) done(error);
                done();
            });
    });
    it('should throw an error if status is not accept or reject', (done) => {
        request(app)
            .put('/api/v1/users/rides/2/requests/2')
            .send(testData.rideRequest5)
            .set('authorization', validToken.token)
            .end((error, res) => {
                expect(400);
                expect(res.body.message).to.include('status can either be accept or reject.');
                if(error) done(error);
                done();
            });
    }); 
    it('should throw an error if status field is empty', (done) => {
        request(app)
            .put('/api/v1/users/rides/2/requests/2')
            .send(testData.rideRequest3)
            .set('authorization', validToken.token)
            .end((error, res) => {
                expect(400);
                expect(res.body.message).to.include('status should not be empty.');
                if(error) done(error);
                done();
            });
    });
    
});