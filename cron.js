import User from "./models/User.js";
import cron from "node-cron";


//This functions gathers all the emails of the users present in our db testDb.
export const getAllUsersEmail = async() =>  {
  try{
        //We can decide the schedule of cron jobs from here.
        cron.schedule('* * * * *', async ()=> {
           const usersData = await User.find();
           if(usersData.length > 0){
            let emails = [];
             
             usersData.map((user)=> {
                emails.push(user.email);
             })

             console.log(emails);
           }

           
           
        })
  }
  catch(err){
    console.log(err);
  }
}


