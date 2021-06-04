import 'react-native';
import React from 'react'
import Login from "../components/Login"
import {render,fireEvent} from '@testing-library/react-native'

const mockNavigation = {
  navigate: jest.fn(),
  addListener: jest.fn()
};
describe(' Login Component ', () => {
  const expectedResponse = {
        
    email: 'bilal@gmail.com',
   
  
}
  it("testaction",async() => {
    
 
    //const onPress =jest.fn()
   

    const {getByTestId } = render(<Login navigation={mockNavigation}/>)
      const password = getByTestId("passwordId")
      const email = getByTestId("emailId")
      const signInButton = getByTestId("buttonId");
 
      
     
       await fireEvent.changeText(password, '123456');
       await fireEvent.changeText(email, 'bilal@gmail.com');
       await fireEvent.press(signInButton)
       expect(email.props.value).toEqual(expectedResponse.email)
    
     
    //  try{
    //    console.log("try")
    //     console.log(await fireEvent.press(signUpButton))
        
      
      
     
    //     //console.log(val.data)
    //     //expect(response).toEqual("1");
    //  }
    //   catch(e){
    //   console.log("FAiled")
    //    if(e.response){
    //      console.log(e.response.data.error)
    //      fail(e)
    //     }
    //     console.log(e)
     
        
    //  }
      
     
      
     
    
           
    })
    
    

  });

 
   
    
  
