class Validator {
    constructor() {

    }
    isEmail(str) {
       return ((str.indexOf('@') !== -1) && (str.indexOf('.') !== -1))
    }
    isDomain(str) {
        return ((str.indexOf('.com') !== -1) || (str.indexOf('.net') !== -1) || (str.indexOf('.ru') !== -1) || (str.indexOf('.su') !== -1))
    }
    isDate(str) {
        let date = str.match(/[0-9]{2}\.[0-9]{2}\.[0-9]{4}/);
        return date === null ? false : true;
    }
    isPhone(str) {
        let phone = str.match(/\+7\ \([0-9]{3}\)\ [0-9]{3}-[0-9]{2}-[0-9]{2}/);
        return phone === null ? false : true;
    }

}
let validator = new Validator();
console.log(validator.isEmail('test@mail.ru'));
console.log(validator.isDomain('test.net'));
console.log(validator.isDate('09.12.2021'));
console.log(validator.isPhone('+7 (096) 231-40-14'));
