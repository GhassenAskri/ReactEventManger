
export  async function parseAndValidateIncomingData( data ) {
  debugger
    try {
      if( data.status !== 200 && data.status !== 201 && data.status !==500){
         return 'failed '
      }
     const parsedData = await data.json();
      if('errors' in parsedData){
        return parsedData.errors[0]
      }else{
        return parsedData.data
      }    
    } catch (error) {
        throw error
    }
  }
