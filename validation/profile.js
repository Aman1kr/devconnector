const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateProfileInput(data){
    let errors = {};

    data.handle = !isEmpty(data.handle) ? data.handle: '';
    data.status = !isEmpty(data.status) ? data.status: '';
    data.skills = !isEmpty(data.skills) ? data.skills: '';
    
    if(!Validator.isLength(data.handle, {min:2,max:40})){
        errors.handle = 'Handle needs to between 2 and 4 chararcters';
    }

    if(Validator.isEmpty(data.handle)){
        errors.handle = 'Profile handle is required';
    }

    if(Validator.isEmpty(data.status)){
        errors.status = 'Status field is required';
    }

    
    if(Validator.isEmpty(data.skills)){
        errors.skills = 'Skills field is required';
    }

    if(!isEmpty(data.website)){
        if(!Validator.isURL(data.website)) {
            errors.website = 'Not a valid URL';
        }
    }

    if(!isEmpty(data.youtube)){
        if(!Validator.isURL(data.youtube)) {
            errors.youtube = 'Not a valid URL';
        }
    }

    if(!isEmpty(data.twitter)){
        if(!Validator.isURL(data.twitter)) {
            errors.twitter = 'Not a valid URL';
        }
    }

    if(!isEmpty(data.facebook)){
        if(!Validator.isURL(data.facebook)) {
            errors.facebook = 'Not a valid URL';
        }
    }

    if(!isEmpty(data.instgram)){
        if(!Validator.isURL(data.instgram)) {
            errors.instgram = 'Not a valid URL';
        }
    }

    if(!isEmpty(data.linkdin)){
        if(!Validator.isURL(data.linkdin)) {
            errors.linkdin = 'Not a valid URL';
        }
    }



    return {
        errors,
        isValid: isEmpty(errors)
    };
};