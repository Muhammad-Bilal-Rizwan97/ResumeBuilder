import 'react-native';
import React from 'react'
import Form from "../components/Form"
import {render,fireEvent} from '@testing-library/react-native'

const mockNavigation = {
  navigate: jest.fn(),
  addListener: jest.fn()
};
describe(' Form Component ', () => {
  const expectedResponse = {
        
    username: 'bilal',
    email: 'bilal@gmail.com',
    number: '03312540480',
    skills:"C++,C",
    title: 'Full-Stack Developer',
    address: 'A-149 block 12 gulistan e jauhar',
    objective: 'A passionate and ambitious business graduate from a leading university seeking a position to translate my knowledge & expertise into value for the organization through my efforts & continuous learning.',
    school: 'Federal Secondary School',
    startFromSchool: '2005',
    endToSchool: '2015',
    college: 'Govt. Dehli College',
    startFromCollege: '2015',
    endToCollege: '2017',
    university: 'National University FAST',
    startFromUniversity: '2017',
    endToUniversity: '2021',
    experience1Title: 'Scayle Pvt. Ltd',
    experience1Description: 'Web Developer',
    startFromExperience1: 'June 2018',
    endToExperience1: 'July 2018',
    experience2Title: 'Supernet Pvt. Ltd',
    experience2Description: 'Web Developer',
    startFromExperience2: 'June 2019',
    endToExperience2: 'July 2019',
    experience3Title: 'System Ltd.',
    experience3Description: 'Front-end Developer',
    startFromExperience3: 'June 2020',
    endToExperience3: 'July 2020'
}
  it("testaction",async() => {
    
 
    //const onPress =jest.fn()
   
    
        const {getByTestId } = render(<Form navigation={mockNavigation}/>)
   
    
      const username = getByTestId("usernameId")
      const email = getByTestId("emailId")
      const number = getByTestId("numberId")
      const title = getByTestId("titleId")
      const address = getByTestId("addressId")
      const objective = getByTestId("objectiveId")
      const skills = getByTestId("skillsId")
      const school = getByTestId("schoolId")
      const startFromSchool = getByTestId("schoolStartId")
      const endToSchool = getByTestId("schoolEndId")
      const college = getByTestId("collegeId")
      const startFromCollege = getByTestId("collegeStartId")
      const endToCollege = getByTestId("collegeEndId")
      const university = getByTestId("universityId")
      const startFromUniversity = getByTestId("uniStartId")
      const endToUniversity = getByTestId("uniEndId")
      const experience1Title = getByTestId("exp1TitleId")
      const experience1Description = getByTestId("exp1DescId")
      const startFromExperience1 = getByTestId("exp1StartId")
      const endToExperience1 = getByTestId("exp1EndId")
      const experience2Title = getByTestId("exp2TitleId")
      const experience2Description = getByTestId("exp2DescId")
      const startFromExperience2 = getByTestId("exp2StartId")
      const endToExperience2 = getByTestId("exp2EndId")
      const experience3Title = getByTestId("exp3TitleId")
      const experience3Description = getByTestId("exp3DescId")
      const startFromExperience3 = getByTestId("exp3StartId")
      const endToExperience3 = getByTestId("exp3EndId")
      const submit = getByTestId("ButtonId");
 
      
     
       await fireEvent.changeText(skills, 'C++,C');
       await fireEvent.changeText(username, 'bilal');
       await fireEvent.changeText(email, 'bilal@gmail.com');
       await fireEvent.changeText(number, '03312540480');
       await fireEvent.changeText(title, 'Full-Stack Developer');
       await fireEvent.changeText(address, 'A-149 block 12 gulistan e jauhar');
       await fireEvent.changeText(objective, 'A passionate and ambitious business graduate from a leading university seeking a position to translate my knowledge & expertise into value for the organization through my efforts & continuous learning.');
       await fireEvent.changeText(school, 'Federal Secondary School');
       await fireEvent.changeText(startFromSchool, '2005');
       await fireEvent.changeText(endToSchool, '2015');
       await fireEvent.changeText(college, 'Govt. Dehli College');
       await fireEvent.changeText(startFromCollege, '2015');
       await fireEvent.changeText(endToCollege, '2017');
       await fireEvent.changeText(university, 'National University FAST');
       await fireEvent.changeText(startFromUniversity, '2017');
       await fireEvent.changeText(endToUniversity, '2021');
       await fireEvent.changeText(experience1Title, 'Scayle Pvt. Ltd');
       await fireEvent.changeText(experience1Description, 'Web Developer');
       await fireEvent.changeText(startFromExperience1, 'June 2018');
       await fireEvent.changeText(endToExperience1, 'July 2018');
       await fireEvent.changeText(experience2Title, 'Supernet Pvt. Ltd');
       await fireEvent.changeText(experience2Description, 'Web Developer');
       await fireEvent.changeText(startFromExperience2, 'June 2019');
       await fireEvent.changeText(endToExperience2, 'July 2019');
       await fireEvent.changeText(experience3Title, 'System Ltd.');
       await fireEvent.changeText(experience3Description, 'Front-end Developer');
       await fireEvent.changeText(startFromExperience3, 'June 2020');
       await fireEvent.changeText(endToExperience3, 'July 2020');
       await fireEvent.press(submit)
       const response = {
           username:username.props.value,
           skills:skills.props.value,
           email:email.props.value,
           number:number.props.value,
           title:title.props.value,
           address:address.props.value,
           objective:objective.props.value,
           school:school.props.value,
           startFromSchool:startFromSchool.props.value,
           endToSchool:endToSchool.props.value,
           college:college.props.value,
           startFromCollege:startFromCollege.props.value,
           endToCollege:endToCollege.props.value,
           university:university.props.value,
           startFromUniversity:startFromUniversity.props.value,
           endToUniversity:endToUniversity.props.value,
           experience1Title:experience1Title.props.value,
           experience1Description:experience1Description.props.value,
           startFromExperience1:startFromExperience1.props.value,
           endToExperience1:endToExperience1.props.value,
           experience2Title:experience2Title.props.value,
           experience2Description:experience2Description.props.value,
           startFromExperience2:startFromExperience2.props.value,
           endToExperience2:endToExperience2.props.value,
           experience3Title:experience3Title.props.value,
           experience3Description:experience3Description.props.value,
           startFromExperience3:startFromExperience3.props.value,
           endToExperience3:endToExperience3.props.value
       }
       expect(response).toEqual(expectedResponse)
    
     
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
 
   
    
  
