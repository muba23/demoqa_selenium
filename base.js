import {Builder, By} from 'selenium-webdriver';

class Base{
    constructor(){
        this.driver = new Builder().forBrowser('chrome').build();
    }

    //creating methods to find elements by different locators

    //open the browser and navigate to the given URL
    async openBrowser(){
        await this.driver.get("https://demoqa.com/text-box");
    }

    //close the browser
    async closeBrowser(){
        await this.driver.quit();
    }
}

//creating objects
const result = new Base();
result.openBrowser();
//result.closeBrowser();