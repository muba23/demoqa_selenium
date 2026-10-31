import {Builder, By} from 'selenium-webdriver';

class EnterNameInTextBox {
    constructor(){
        this.driver = new Builder().forBrowser('chrome').build();
        this.writeUserName = By.id('userName'); //locator for the full name text box
    }

//creating methods to find elements by different locators
    //open the browser and navigate to the given URL
    async openBrowser(url){
        await this.driver.get(url);
        await this.driver.manage().window().maximize(); //maximize the browser window
    }

    //write the user name on the text box
    async writeNameOnTextBox(fullName){
        await this.driver.findElement(this.writeUserName).sendKeys(fullName);
    }

    //get the entered full name from the text box
    async getNameFromTextBox(){
        const nameField = await this.driver.findElement(this.writeUserName);
        const enteredName = await nameField.getAttribute('value'); 

        console.log("Entered Name: " + enteredName);
        return enteredName;
    }
    //close the browser
    async closeBrowser(){
        await this.driver.quit();
    }
}

export {EnterNameInTextBox};