import chai from 'chai';
import supertest from 'supertest';
import app from '../app';
import data from './model/db';
import { beforeEach, describe, it } from 'mocha';
import { doesNotReject } from 'assert';

const {expect} = chai.expect;
const request = supertest(app);

//let data = {};
let ride_request = ['Tolu requested to join your ride', 'Ade requested to join your ride'];

describe('API Endpoints testing', () => {
    beforeEach(() => {
        data;
    });
     /*
    * Test to Get all Rides in Application 
    */
    describe('Get all Rides in the application', () => {
        it('Should GET all the rides in the application', ()=>{
            request.get('/api/v1/rides')
                .end((err, res) => {
                    expect(res.status).to.equal(200);
                    expect(res).to.be.json;
                    expect(res).to.be.an('object');
                    expect(res.body.rides).to.be.an('array');
                });
        });
        
    });
    /*
    * Test the POST route
    */
    describe('POST a Ride in the application', () => {
        it('Should POST a rides in the application', ()=>{
            request.post('/api/v1/rides')
            .send({
                id: 7,
                name: 'Tolu Mike',
                from: 'Ikorodu Town Hall, Saka Sonoiki Street Road, Lagos Mainland',
                to: 'Adetokunbo Ademola Street, Eti-Osa',
                departure_time: '5pm',
                ride_request: [], 
            })
                .end((err, res) => {
                    //console.log("request: ", res, 'error: ', err)
                    expect(res.status).to.equal(201);
                    expect(res).to.be.json;
                    expect(res).to.be.an('object');
                    expect(res.body.rides).to.be.an('array');
                });
        });
    
    });
     /*
    * Test to check for invalid Post
    */
    describe('POST a Ride in the application', () => {
        it('Respond with 400 Bad Request', ()=>{
            request.post('/api/v1/rides')
            .send({
                from: 'Ikorodu Town Hall, Saka Sonoiki Street Road, Lagos Mainland',
                to: 'Adetokunbo Ademola Street, Eti-Osa',
                departure_time: '5pm',
                ride_request: [], 
            })
                .end((err, res) => {
                    if(err){
                        expect(err).to.have.status(400)
                    }
                    else{
                        //console.log("request: ", res, 'error: ', err)
                    expect(res.status).to.equal(400);
                    expect(res).to.be.json;
                    expect(res).to.be.an('object');
                    expect(res.body.rides).to.be.an('array');
                    }
                });
        });
    
    });
    /*
    * Test the Get a Single Ride from application
    */
    describe('Get a Single Ride from the application', () => {
        it('Should GET a single ride from the application', ()=>{
            request.get('/api/v1/rides/1')
                .end((err, res) => {
                    //console.log("request: ", res, 'error: ', err)
                    expect(res.status).to.equal(200);
                    expect(res).to.be.json;
                    expect(res).to.be.an('object');
                    expect(res.body.rides).to.be.an('array');
                });
        });
    
    });
    /*
    * Test to check for invalid RoutenPage not found 
    */
    describe('Get a Ride from the application', () => {
        it('Should respond with Ride not found', ()=>{
            request.get('/api/v1/rides/88')
                .end((err, res) => {
                    if(err){
                        expect(err).to.have.status(404)
                    }
                    else{
                        //console.log("request: ", res, 'error: ', err)
                    expect(res.status).to.equal(200);
                    expect(res).to.be.json;
                    expect(res).to.be.an('object');
                    expect(res.body.rides).to.be.an('array');
                    }
                });
        });
    
    });
    /*
    * Test to GET a ride from the application
    */
    describe('Get a Ride from the application', () => {
        it('Should GET a single ride from the application', ()=>{
            request.get('/api/v1/rides/2')
                .end((err, res) => {
                    //console.log("request: ", res, 'error: ', err)
                    expect(res.status).to.equal(200);
                    expect(res).to.be.json;
                    expect(res).to.be.an('object');
                    expect(res.body.rides).to.be.an('array');
                });
        });
    
    });
    /*
    * Test to Post to join a ride 
    */
    describe('Post to Join a Ride in the application', () => {
        it('Should POST a Ride Request from the application', ()=>{
            request.post('/api/v1/rides/1/request')
                .send({
                    ride_request
                })
                .end((err, res) => {
                    //console.log("request: ", res, 'error: ', err)
                    expect(res.status).to.equal(201);
                    expect(res).to.be.json;
                    expect(res).to.be.an('object');
                    expect(res.body.rides).to.be.an('array');
                });
        });
    });
    /*
    * Test to check for invalid Route 
    */
    describe('Bad Request to POST a Ride in the application', () => {
        it('Respond with 400 Bad Request', ()=>{
            request.post('/api/v1/rides')
            .send({
                ride_request: [], 
            })
                .end((err, res) => {
                    if(err){
                        expect(err).to.have.status(400)
                    }
                    else{
                        //console.log("request: ", res, 'error: ', err)
                    expect(res.status).to.equal(400);
                    expect(res).to.be.json;
                    expect(res).to.be.an('object');
                    expect(res.body.rides).to.be.an('array');
                    }
                });
        });
    
    });
    
});
