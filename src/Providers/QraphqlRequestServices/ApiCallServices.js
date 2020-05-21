
import { parseAndValidateIncomingData } from './Helpers'


class RequestQLapi {
  constructor(method, headers) {
    debugger
    this.headers = headers;
    this.method = method;
  }
 

  loginUserQuery ( email , password ) {
    debugger
    try {
      return {
        query: `query{login ( email : "${email}", password :"${password}")
                      {  
                          userId 
                          accessToken 
                          refreshToken 
                          tokenExpiration 
                      }
                    }`,
      }
    } catch (error) {
      console.log(error)
    }
  }
  createUserMutation(email, password ) {
    try {
      return {
        query: `mutation{createUser(userInput :{ email : "${email}", password :"${password}"})
                      { 
                        _id 
                        email
                      }
                    }`,
      }
    } catch (error) {
      console.log(error)
    }
  }
  createEvent(event) {
   console.log(typeof(event.date));
   console.log('headers', this.headers)
    try {
      return{ query : `mutation{createEvent(eventInput :{ title : "${event.title}" , description : "${event.description}", price : ${event.price}, date : "${event.date}"})
          {
            title
    
            creator{
              email
              password
            }
          }
        }`,
      }
    } catch (error) {
      console.log(error)
    }
  }

  async applyRequestFor(QueryOrMutation,forLogin=false) {
    debugger
    const headers = {
      method: this.method,
      body: JSON.stringify(QueryOrMutation),
      headers: this.headers,
    };
    try {
        const incomingData = await fetch("http://localhost:3000/api", headers);
        return parseAndValidateIncomingData(incomingData);
    } catch ( error ) {
      console.log(error)
    }
  }
}

export default RequestQLapi;

