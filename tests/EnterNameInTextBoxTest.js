import {EnterNameInTextBox} from '../pages/EnterNameInTextBox.js';

//creating objects of the class EnterNameInTextBox and calling the methods to perform the actions
const result = new EnterNameInTextBox();

try {
    await result.openBrowser("https://demoqa.com/text-box");
    
    await result.writeNameOnTextBox("Mubashshira Amjad");

    //retrieve the entered name
    const enteredName = await result.getNameFromTextBox();
    
    //verify the result
    if(enteredName === "Mubashshira Amjad"){
        console.log("Test Passed: Got the entered name!!");
    } else{
        console.log("Test Failed: Didn't get the expected name!!");
    }

} finally {
   // await result.closeBrowser();
    }