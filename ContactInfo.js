const ValidationError = require("./error/ValidationError");

class ContactInfo{
    static ID=1;
    constructor(city,areaName){
       this.ID=ContactInfo.ID++;
       this.city=city;
       this.areaName=areaName;
    }

    updateContactInfo(parameter, value) {
        try{
            switch (parameter) {
            case "city":
                if (typeof newValue !== 'string') {
                    throw new ValidationError("Invalid new city name");
                }
                this.city = newValue
                return this;
            case "areaName":
                if (typeof newValue !== 'string') {
                    throw new ValidationError("Invalid new area name");
                }
                this.areaName = newValue
                return this;
            default:
                throw new ValidationError("Invalid Parameter!");
            }
        }
        catch(e){
            throw e;
        }

}
}
module.exports = ContactInfo