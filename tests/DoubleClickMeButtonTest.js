import {DoubleClickMeButton} from '../pages/DoubleClickMeButton.js';

//creating objects for the class DoubleClickMeButton and calling the methods to perform the actions
     const result = new DoubleClickMeButton();

    try{
        await result.openBrowser("https://demoqa.com/buttons");
        await result.doubleClickButtonAction();
        
        //get the success message after double click
        const successMessage = await result.getSuccessMessage();

        //verify the result
        if(successMessage === "You have done a double click."){
            console.log("Test Passed: Got the success message!!");
        } else{
            console.log("Test Failed: Didn't get the expected success message!!");
        }
    } finally {
        //await result.closeBrowser();
    }