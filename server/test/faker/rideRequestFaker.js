import faker from 'faker';

const rideRequestFaker = {
    rideRequest:{
        "accept": "true",
        "reject": "false",
        "userid": 1,
        "rideid": 1,
    },
    rideRequest2:{
        "accept": "false",
        "reject": "true",
        "userid": 2,
        "rideid": 2,
    },
    rideRequest3:{
        "accept": '',
        "reject": "true",
        "userid": 3,
        "rideid": 3,
    },
    rideRequest4:{
        "accept": 'true',
        "reject": "",
        "userid": 4,
        "rideid": 4,
    },
    rideRequest5:{
        "accept": 'menh',
        "reject": "false",
        "userid": 5,
        "rideid": 5,
    },
    rideRequest6:{
        "accept": 'true',
        "reject": "menh",
        "userid": 6,
        "rideid": 6,
    },
}

export default rideRequestFaker;