import request from 'supertest';
import chai from 'chai';
import app from '../../app';
import testData from '../faker/ridefaker';
import validToken from '../../test/test/user.test';

//console.log(testData)

const { expect } = chai;

describe('Ride-My-Way Rides Test', () => {
    it('should load the api home page', (done) => {
        request(app)
          .get('/api/v1')
          .expect(200)
          .end((err) => {
              if(err){
                  done(err);
              }
              done()
          });
    });
    it('should return error if token is not present when creating a ride', (done) => {
        request(app)
          .post('/api/v1/users/rides')
          .send(testData.ride)
          .end((error, res) => {
            expect(401);
            expect(res.body.message).to.include('No token provided');
            if(error) done(error);
            done();
          })    
    });
    it('should return error if token is not valid when creating RIDE', (done) => {
        request(app)
          .post('/api/v1/users/rides')
          .send(testData.ride)
          .set('authorization', 'fghfghfghfgh')
          .end((error, res) => {
              expect(401);
              expect(res.body.message).to.include('You do not have permission to this page.');
              if(error) done(error);
              done();
          });
    });
    // Passing
    it('should save ride to database if login is valid' +
    ' User and body is filled correctly', (done) => {
        //console.log(testData.ride)
        request(app)
          .post('/api/v1/users/rides')
          .send(testData.ride)
          .set('authorization', validToken.token)
          .end((error, res) => {
              expect(201);
              //console.log(res.body)
              expect(res.body.data)
              if(error) done(error)
              done()
          })
    }
    )
    it('should return error if login as User and destination start point is empty', (done) => {
        request(app)
          .post('/api/v1/users/rides')
          .send(testData.ride4)
          .set('authorization', validToken.token)
          .end((error, res) => {
              expect(400);
              //console.log(res.body.message)
              expect(res.body.message).to.include('destination start point is required.');
              if(error) done(error)
              done()
          });
    });
    it('should return error if destination stop point is empty', (done) => {
        request(app)
          .post('/api/v1/users/rides')
          .send(testData.ride5)
          .set('authorization', validToken.token)
          .end((error, res) => {
              expect(400);
              //console.log(res.body)
              expect(res.body.message).to.include('destination stop point is required.');
              if(error) done(error)
              done();
          })
    })
    it('should return error if destination time is empty', (done) => {
        request(app)
          .post('/api/v1/users/rides')
          .send(testData.ride6)
          .set('authorization', validToken.token)
          .end((error, res) => {
              expect(400);
              expect(res.body.message).to.include('destination time point is required.');
              if(error) done(error)
              done();
          })
    })
   it('should return 401 if no token', (done) => {
       request(app)
         .get('/api/v1/rides')
         .end((error, res) => {
             expect(401);
             //console.log(res.body)
             expect(res.body.message).to.include('No token provided');
             if(error) done(error)
             done()
         });
   });
   it('should return error if ride route is incorrect', (done) => {
    request(app)
      .get('/api/v1/ride')
      .set('authorization', validToken.token)
      .end((error, res) => {
          expect(404);
          //console.log(res.body)
          expect(res.body.message).to.include('Invalid Route')
          if(error) done(error)
          done()
      })
}) ;
it('should return all rides in the application', (done) => {
    request(app)
      .get('/api/v1/rides')
      .set('authorization', validToken.token)
      .end((error, res) => {
          expect(200);
          //console.log(res.body.data)
          expect(res.body.message).to.include('All Rides has been retrieve')
          if(error) done(error)
          done()
      });
});

it('should return all rides in the application', (done) => {
    request(app)
      .get('/api/v1/rides/1')
      .set('authorization', validToken.token)
      .end((error, res) => {
          expect(200);
          //console.log(res.body.data)
          expect(res.body.message).to.include('Ride has been retrieve')
          if(error) done(error)
          done()
      });
});
  
})