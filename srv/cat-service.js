//Imports
const cds= require("@sap/cds");

module.exports = cds.service.impl( async function() {

    const {training} = this.entities;

    this.before("READ","training",req => {
        console.log(req);
    });

    this.before("CREATE","training",req => {
        console.log(req.data);
        if(req.data.duration > "2"){
            req.reject(400,"Duration is more than 2 hours");
        }
    });

    this.after("READ","training",(res) => {
       for (let index = 0; index < res.length; index++) {
            res[index].skill = "BPA";
        
       }
    });

});