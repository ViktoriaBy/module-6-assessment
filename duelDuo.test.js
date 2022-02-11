
// import { Builder, Capabilities, By } from "selenium-webdriver"
const {Builder, Capabilities, By, Key} = require('selenium-webdriver')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('clicking draw btn displays div with id choices', async () => {
    const drawBtn = await driver.findElement(By.id('draw'))
    await drawBtn.click();

  
    await driver.sleep(3000)
})

test('clicking add duo btn displays div with id playerId', async () => {
    const drawBtn = await driver.findElement(By.id('draw'))
    await drawBtn.click();

    await driver.sleep(3000)

    const addDuoBtn = await driver.findElement(By.className('bot-btn'))
    await addDuoBtn.click();

  
    await driver.sleep(3000)
})

test('when bot is removed from duo', async () => {
    const drawBtn = await driver.findElement(By.id('draw'))
    await drawBtn.click();

    await driver.sleep(3000)


    const addDuoBtn = await driver.findElement(By.className('bot-btn'))
    await addDuoBtn.click();

    await driver.sleep(3000)

    const removeBod = await driver.findElement(By.linkText('Remove from Duo'))
    await removeBod.click();
  
    await driver.sleep(3000)
})

