FILES STREAM IN NODEJS

*POSIX-PORTABLE OPERATING SYSTEM INTERFACE

---this is a family of standards specified by the IEEE society.
---it consists of api and command interfaces that is os neutral thus can work anywhere.
---

*FORMS

ALL THE FUNCTION IN NODEJS HAVE BOTH ASYNC AND SYNC FORMS .

---ASYNCHRONOUS FUNCTION FORM 
----- a callback function is passed which takes two arguments thus first is variable and second is variable .if fucntion executes properly the first argument automatically gets null or undefined and any successful data can be returned in the second argument.

NOTE: dont treat null like it cannot be used in if .

---SYNCRONOUS FORM 
-----in this exceptions are automatically thrown thus use try/catch immediately.
//


ASYNC                                                            SYNC

*want to remove a file                           *want to remove a file

fs.unlink(path,callback)                         fs.unlinkSync(path)


fs.unlinkSync('tmp/hello');//sync way
console.log("succcessfully deleted");

fs.unlink('/tmp/hello',function(err)//async way
{
    if(err) //here is '/tmp/hello' if cannot be found or doesnt exists then err will be null . 
        throw err;
    
    console.log("successfully deleted");
    
});




NOTE:Complete path need to give.

________________________________________________________________________________________
*want to check whether a file exists           *want to check whether a file exists
fs.exists(path,callback)                                  fs.existsSync(path)
                                                

var fs=require('fs');                                                    
  
  if(fs.existsSync(path))  sync way
                                                        
  {


                                                            
      do something    

                                                        
      
 }






fs.exists(path,function(exists)    async way                                                                                      
{

if(exists)
{
do something
}
});

NOTE:it returns boolean thus can be used in 'if' statements. 

______________________________________________________________________________________________