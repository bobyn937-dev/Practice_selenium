import { By, Key, Builder, Browser } from "selenium-webdriver";
const color=["Black","Green","Pink","Brown"];
const selectedProduct="Seasonal color chuck 70";
import { expect } from "chai";

function getRandomNumber(min,max) {
    return Math.floor(Math.random() * (max - min) + min);
}
async function test1() {
    const driver = await new Builder().forBrowser(Browser.CHROME).build();
    await driver.manage().window().maximize();
    await driver.get("https://demo.evershop.io/");
    await driver.findElement(By.xpath("//a[@class='search-icon']")).click();
    await driver.sleep(2000);
    await driver.findElement(By.xpath("//input[@placeholder='Search']")).sendKeys("seasonal color");
    await driver.sleep(2000);
    await driver.findElement(By.xpath("//input[@placeholder='Search']")).sendKeys(Key.ENTER);
    await driver.sleep(2000);
    await driver.findElement(By.xpath("(//div[contains(@class,'product-name product-list-name mt-4 mb-1')])[1]")).click();
    await driver.findElement(By.xpath("//a[text()='X']")).click();
    await driver.sleep(2000);
    //await driver.findElement(By.xpath("//a[text()='Black']")).click();
    const getRandomData=getRandomNumber(0,3);
    await driver.findElement(By.xpath(`//a[text()='${color[getRandomData]}']`)).click();
await driver.sleep(2000);
    await driver.findElement(By.name("qty")).clear();
    await driver.findElement(By.name("qty")).sendKeys(3);
    await driver.findElement(By.xpath("//span[contains(text(),'ADD TO CART')]")).click();
const viewCart="//a[contains(text(),'VIEW CART')]";
//await driver.findElement(By.xpath(viewCart)).isEnable
//if else condition use kora jay
//if ((await driver.findElement(By.xpath(viewCart)).isEnabled())==true){
//await driver.findElement(By.xpath(viewCart)).click();
//}else{
    await driver.sleep(2000);
await driver.findElement(By.xpath(viewCart)).click();
//}
//await driver.findElement(By.xpath(viewCart)).click();
//actual product varification
const actualProduct=await driver.findElement(By.xpath("//a[contains(@href,'seasonal-color-chuck-70-122')]")).getText();
expect(selectedProduct).to.eql(actualProduct);
//const actualProduct=await driver.findElement(By.xpath(`//a[contains(@text,'${selectedProduct}')]")).isDisplayed();
//expect(actualProduct).to.be.true;
await driver.quit();
}
test1();