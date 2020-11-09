




export const getEventById = (id,events) => {
  
  
   return events.find(event =>event._id=== id);
}