const {Builder, Capabilities, By} = require('selenium-webdriver')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://127.0.0.1:5501/movieList/index.html')
} )

afterAll(async()=>{
    await driver.quit()
})

test('adds movie to list', async () => {
    await driver.findElement(By.xpath('//input')).sendKeys('batman')

    await driver.findElement(By.xpath('//button[text()="Add"]')).click()

    const movie = await driver.findElement(By.xpath('//li'))

    expect(movie.isDisplayed()).toBeTruthy()
})

test('crosses off batman', async () => {
    await driver.findElement(By.xpath('//span[text()="batman"]')).click()
    await driver.sleep(2000)
})

test('un crosses off batman', async () => {
    await driver.findElement(By.xpath('//span[text()="batman"]')).click()
    await driver.sleep(2000)
})

test('deletes batman', async () => {
    await driver.findElement(By.id('batman')).click()
    await driver.sleep(2000)
})