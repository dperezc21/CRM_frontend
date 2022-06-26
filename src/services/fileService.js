const url = 'http://192.168.101.14:3000/'

class ContactService{
    async insertContact(info){
        try {
            
            const response = await fetch(url+'insertContact',{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body: JSON.stringify(info)
            });
            const data = await response.json();
            return data;
        } catch (error) {
         console.log(error);   
        }
    }

    async getContacts(){
        try {
            const response = await fetch(url+'getContacts',{
                method:'GET',
                headers:{
                    'content-type':'application/json'
                }
            });
            const data = await response.json();
            return data;
            
        } catch (error) {
            console.log(error)   
        }
        
    }

    async deleteContact(id){
        try {
            const response = await fetch(url+'deleteContact/'+id,{
                method:'DELETE',
                headers:{
                    'content-type':'application/json'
                },
            })
            const data = await response.json();
            return data;
        } catch (error) {
            console.log(error)
        }
    }

}

export default ContactService