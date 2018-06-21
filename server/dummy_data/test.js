import chai from 'chai';
import supertest from 'supertest';
import app from '../app';
import { beforeEach, describe, it } from 'mocha';

const {expect} = chai.expect;
const request = supertest(app);

let data = {};
let ride_request = ['Tolu requested to join your ride', 'Ade requested to join your ride'];

describe('API Endpoints testing', () => {
    describe('Get all Rides in the application', () => {
        beforeEach(() => {
            data = {
                id: 1,
                name: 'Ajayi Samuel',
                from: 'ccHub, Herbert Macaulay Road, Lagos Mainland',
                to: 'Adetokunbo Ademola Street, Eti-Osa',
                departure_time: '4pm',
                ride_request: [],
            },
            {
                id: 2,
                name: 'Samuel Tutu',
                from: 'CMS, Lagos Island',
                to: 'Adetokunbo Ademola Street, Eti-Osa',
                departure_time: '5pm',
                ride_request: [],
            },
            {
                id: 3,
                name: 'Ezeh Chika',
                from: 'Gwarinpa Estate, Abuja, Federal Capital Territory, Nigeria',
                to: 'Danube Street, Abuja, Federal Capital Territory, Nigeria',
                departure_time: '2pm',
                ride_request: [],
            },
            {
                id: 4,
                name: 'Jennifer Dickson',
                from: 'Herbert Macaulay Road, Lagos Mainland',
                to: 'Amuwo Odofin',
                departure_time: '8pm',
                ride_request: [],
            },
            {
                id: 5,
                name: 'Beulah Isaac',
                from: 'Campus Mini Stadium, Lagos Island',
                to: 'Victoria Island, Eti-Osa',
                departure_time: '3pm',
                ride_request: [],
            },
            {
                id: 6,
                name: 'Jeffery Owolabi',
                from: 'Ikoyi Club 1938 Road, Lagos Island',
                to: 'Omole Bus Stop, Isheri Road, Ikeja',
                departure_time: '7pm',
                ride_request: [],
            };
        });
        it('Should GET all the rides in the application', ()=>{
            request.get('/api/v1/rides')
                .end((err, res) => {
                    expect(res.status).to.equal(200);
                    expect(res).to.be.an('object');
                });
        });
        it('Should GET a single ride from the application', ()=>{
            request.get('/api/v1/rides/1')
                .end((err, res) => {
                    //console.log("request: ", res, 'error: ', err)
                    expect(res.status).to.equal(200);
                    expect(res).to.be.an('object');
                });
        });
        it('Should CREATE a new Ride in the application', ()=> {
            request.post('/api/v1/rides')
                .send(data)
                .end((err, res) => {
                    //console.log("request: ", res, 'error: ', err)
                    expect(res.status).to.equal(201);
                    expect(res).to.be.an('object');
                });
        });
        it('Should POST a Ride Request to join a ride by the given id', () => {
            request.post('/api/v1/rides/1/request')
                .send(ride_request)
                .end((err, res) => {
                    //console.log("request: ", res, 'error: ', err)
                    expect(res.status).to.equal(201);
                    expect(res).to.be.an('object');
                });
        });
    });
})