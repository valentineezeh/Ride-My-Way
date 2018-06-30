import faker from 'faker';

const userfake = {
    invalidToken: 'invalidtoken',
    signupUser: {
        firstname: 'ajayi',
        lastname: 'samuel',
        email: 'samuel14@example.com',
        about: 'Ride with me now',
        password: '1234567',
        confirmPassword: '1234567'
    },
    signupUser1: {
        firstname: 'chika',
        lastname: 'ezeh',
        email: 'chika9@example.com',
        about: 'Ride with me',
        password: '$2b$10$XbXqsOMvxNDgy6nXHNITmOGVplfoxDhvGW.FW6iuVj89B4m/Q/F0u',
        confirmPassword: '1234567'
    },
    signupUser3: {
        firstname: 'val',
        lastname: 'ezeh',
        email: 'val0@example.com',
        about: 'Ride with me now',
        password: '1234567',
        confirmPassword: '1234567'
    },
    loginUser: {
        email: 'samuel@example.com',
        password: '1234567'
    },
    wronginfo: {
        firstname: 'ajayi',
        lastname: 'samuel',
        email: '',
        password: '1234567'
    },
    wronginfo1: {
        firstname: 'ajayi',
        lastname: 'samuel',
        email: 'samuel@example.com',
        password: '',
    },
    wronginfo2: {
        firstname: 'ajayi',
        lastname: 'samuel',
        email: 'samuel1@example.com',
        password: '1234567'
    },
    loginUser1: {
        email: 'chika9@example.com',
        password: '$2b$10$XbXqsOMvxNDgy6nXHNITmOGVplfoxDhvGW.FW6iuVj89B4m/Q/F0u'
    },
    loginUser2: {
        email: 'testuser@example.com',
        password: '1234567'
    },
    loginerror1: {
        email: '',
        password: '1234567'
    },
    loginerror2: {
        email: 'testuser@example.com',
        password: ''
    },
    loginUser3: {
        email: 'baba@example.com',
        password: '1234567'
    },
    missingPass: {
        email: faker.internet.email(),
    },
    missingName: {
        email: faker.internet.email(),
        password: '1234567'
    },
    wrongPassWord: {
        email: faker.internet.email(),
        password: '12345678'
    },
}

export default userfake;