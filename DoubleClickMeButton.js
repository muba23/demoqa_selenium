import {Builder, By, until} from 'selenium-webdriver';

class DoubleClickMeButton {
    constructor(){
        this.driver = new Builder().forBrowser('chrome').build();
        this.doubleClickButton = By.id('doubleClickBtn');
        this.successMessage = By.id('doubleClickMessage');
    }

    //open the browser and navigate to the given URL
    async openBrowser(){
        await this.driver.get("https://demoqa.com/buttons");
        await this.driver.manage().window().maximize(); //maximize the browser window
    }
    //double click on the button    
    async doubleClickButtonAction(){
        const button = await this.driver.wait(until.elementLocated(this.doubleClickButton), 10000);

        await this.driver.wait(until.elementIsVisible(button), 10000);

        // Scroll the button into the center of the screen
        await this.driver.executeScript("arguments[0].scrollIntoView({block: 'center'});", button);

        await this.driver.actions().doubleClick(button).perform();
        console.log("Double Click performed!");
    }

    //get the success message after double click
    async getSuccessMessage(){

        //wait for the success message to be visible after double click
        const messageElement = await this.driver.wait(until.elementLocated(this.successMessage), 10000);
        
        //wait for the success message to be visible
        await this.driver.wait(until.elementIsVisible(messageElement), 10000);
        
        //get the text of the success message
        const messageText = await messageElement.getText();

        console.log("Success Message: " + messageText);

        return messageText;
    }
    //close the browser
    async closeBrowser(){
        await this.driver.quit();
    }
}
    //creating objects
     const result = new DoubleClickMeButton();

    try{
        await result.openBrowser();
        await result.doubleClickButtonAction();
        
        //get the success message after double click
        const successMessage = await result.getSuccessMessage();

        //verify the result
        if(successMessage === "You have done a double click"){
            console.log("Test Passed: Got the success message!!");
        } else{
            console.log("Test Failed: Didn't get the expected success message!!");
        }
    } finally {
        //await result.closeBrowser();
    }
    