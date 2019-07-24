

module.exports.getPage = function(p)
{  
    let page="";
   // console.log(`The student first name is : ${first} and last name is ${last}`);
        if (p=="p1") {
            page="p1";
        }
    
        if (p=="p2") {
            page="p2";
            }
       
        if (p=="p3") {
            page="p3";
        } 
        
        if (p=="p4") {
            page="p4";
        }
        return page;
};