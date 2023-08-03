const ContactInfo=require("./ContactInfo");
const NotFound = require("./error/NotFound");
const ValidationError = require("./error/ValidationError");

class Contact{
    static ID=1;
    constructor(contactName,country){
        this.ID=Contact.ID++;
        this.contactName=contactName;
        this.country=country;
        this.contactInfos=[];
    }

    updateContact(parameter, updatedValue) {
        try{
            switch (parameter) {
                case "contactName":
                    if (typeof updatedValue !== 'string') {
                        throw new ValidationError("Invalid new contact name");
                    }
                    this.contactName = updatedValue;
                    return this;
                case "country":
                    if (typeof updatedValue !== 'string') {
                        throw new ValidationError("Invalid new country name");
                    }
                    this.country = updatedValue;
                    return this;
                default:
                    throw new ValidationError("Invalid Parameter!");
            }
        }
        catch(e){
            throw e;
        }
    }

    

    createContactInfo(city,areaName){
        let contactInfoObj=new ContactInfo(city,areaName);
        this.contactInfos.push(contactInfoObj)
        return contactInfoObj;
    }

    getContactInfo(){
        return this.contactInfos
    }

    findContactInfo(contactID){
        try{
            for(let index=0;index<this.contactInfos.length;index++){
                if(this.contactInfos[index].ID==contactID){
                    return index;
                }
            }
            throw new NotFound("Contact Info not found");
        }
        catch(e){
            throw e;
        }
    }
    
    getContactInfoByID(contactID){
        try{
            let indexOfContactInfo=this.findContactInfo(contactInfoID);
            return this.contactInfos[indexOfContactInfo];
        }
        catch(e){
            throw e;
        }
    }
    
    updateContactInfo(contactInfoID,parameter,value){
        try{
            let indexOfContactInfo=this.findContactInfo(contactInfoID);
            return this.contactInfos[indexOfContactInfo].updateContactInfo(parameter,value);
        }
        catch(e){
            throw e;
        }
    }

    deleteContactInfo(contactID){ 
        try{
            let indexOfContactInfo=this.findContactInfo(contactInfoID);
            this.contactInfos.splice(indexOfContactInfo,1);
            return Contact.contactInfos;
        }
        catch(e){
            throw e;
        }
    }

  
}

module.exports = Contact