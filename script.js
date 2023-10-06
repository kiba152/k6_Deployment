import { browser } from 'k6/experimental/browser';
import { check } from 'k6';
import http from 'k6/http';
import exec from 'k6/execution'
// require('dotenv').config()
export const options = {
  scenarios:{
    login:{
      exec: 'createTaskPage_customerLocation',
      executor: 'per-vu-iterations',
      vus: 5,
      iterations: 1,
      maxDuration: '30m',
      options: {
        browser: {
          type: 'chromium', // chromium is the only supported browser type so as long as
                            // the option is set, Chromium/Google Chrome will be used
        },},
    },
  },
  
}

export default function main(){
  createTaskProtocol()
  // 1
}

export async function loginPage() {


  const context = browser.newContext({
    screen: { width: 1440, height: 1024 },
    viewport: { width: 1320, height: 1024 },

    // deviceScaleFactor: 5,
    
  });
  const page = context.newPage({
    headless: false,
  });
  
  let tokenValue1 = {
      token: "res"
    }

  try {
    if(tokenValue1.token == "res"){
      await page.goto('https://dashboard-dev.elogii.com/#/login');
    page.evaluate(() => {
    let tokenValue = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzU2NGY4NWM1NTdjMTAwMTI2NjFlNDAiLCJ0eXBlIjoyMCwibGV2ZWwiOjIwLCJlbWFpbCI6Imthcml1a2kubXVoaW5kaUBlbG9naWkuY29tIiwib3JnYW5pemF0aW9uIjoiNjM1NjRmODVjNTU3YzEwMDEyNjYxZTNlIiwicGF0aCI6IjYzNTY0Zjg1YzU1N2MxMDAxMjY2MWUzZSIsInRlYW1zIjpbXSwic2x1ZyI6Imthcml1a2lxYSIsImlhdCI6MTY5NTgyOTM5NywiZXhwIjoxNjk2NDM0MTk3fQ.6reya42PedXqwMjxnkjYRWB6F5L0MxTzLTJ9EjOFEnQ"

   localStorage.setItem("elogii.auth",`{"isAuthenticated":true,"token":"${tokenValue}","user":{"_id":"63564f85c557c10012661e40","type":20,"level":20,"flags":{"onboarding":{"overview":false,"depot":false,"dimension":false,"skills":false,"capabilities":false,"supportContact":false,"issueOptions":false,"optimisationOptions":false,"vehicleType":false,"vehicle":false,"driver":false,"import":false,"planning":false,"completed":false},"isPasswordReset":false,"isHidden":false,"firstLogin":1666601070},"email":"kariuki.muhindi@elogii.com","firstName":"Kariuki","lastName":"Muhindi","path":"63564f85c557c10012661e3e","organization":"63564f85c557c10012661e3e","role":"admin","permissions":{"analytics":{"view":true,"read":true},"billing":{"read":true},"communications":{"voice":true},"customers":{"create":true,"delete":true,"read":true,"update":true},"tasks":{"create":true,"delete":true,"read":true,"update":true},"taskTemplates":{"create":true,"delete":true,"read":true,"view":true,"update":true},"routePlans":{"create":true,"delete":true,"read":true,"view":true,"update":true},"demo":{"clear":true,"create":true},"drivers":{"create":true,"delete":true,"read":true,"update":true},"notifications":{"manage":true},"optimization":{"runForRoutes":true,"runForDate":true},"organizations":{"delete":true,"read":true,"update":true,"view":{"operation":true,"configuration":true}},"routes":true,"users":{"create":true,"delete":true,"read":true,"view":true,"update":true},"teams":{"create":true,"delete":true,"read":true,"view":true,"update":true,"entities":true},"vehicleTypes":{"create":true,"delete":true,"read":true,"update":true},"vehicles":{"create":true,"delete":true,"read":true,"update":true},"zones":{"create":true,"delete":true,"read":true,"update":true},"hooks":{"create":true,"delete":true,"read":true,"update":true},"notes":{"create":true,"delete":true,"read":true,"update":true},"jobs":true,"depots":true,"locations":true},"uid":"U-CN76NCCB","teams":[],"createdAt":"2022-10-24T08:40:37.174Z","updatedAt":"2023-05-10T11:53:01.059Z","__v":0,"settings":{"locale":"en"}},"organizationSlug":"kariukiqa"}`)
    });

    page.reload();

    await Promise.all([
      page.waitForNavigation(),
      page.waitForSelector('div[class="elogii-button elogii-button-primary elogii-button-normal optimize-button multi-day optimize-popover "]'),
      // page.waitForSelector("//div[contains(@class,'elogii-button elogii-button-new elogii-button-normal filter-new-button add-button')]//div[contains(@class,'elogii-button-content')]")
    ]);
  
    check(page, {
      // url: page.url() == 'https://dashboard-dev.elogii.com/#/tasks',
      url2: page.url() == 'https://dashboard-dev.elogii.com/#/operations/planning',
    });
    }else{
    const url = 'https://api-dev.elogii.com/auth/login'
    const payload = JSON.stringify({
      email: __ENV.EMAIL,
      password: __ENV.PASSWORD
    })
  
    const params = {
      headers:{
        'content-Type': 'application/json'
      }
    }
    
    const res = http.post(url,payload,params)
    tokenValue1.token = res.json().token
    console.log(__ENV.EMAIL)
    
    await page.goto('https://dashboard-dev.elogii.com/#/login');
    // await page.goto('https://dashboard-dev.elogii.com/#/operations/planning');
    page.evaluate((tokenValue1) => {
      console.log(tokenValue1.token)
    let tokenValue = `${tokenValue1.token}`
      // localStorage.setItem('mapbox.eventData:YnJpc3Fx', `{"lastSuccess":1693994207718,"tokenU":"brisqq"}`);
     return localStorage.setItem("elogii.auth",`{"isAuthenticated":true,"token":"${tokenValue}","user":{"_id":"63564f85c557c10012661e40","type":20,"level":20,"flags":{"onboarding":{"overview":false,"depot":false,"dimension":false,"skills":false,"capabilities":false,"supportContact":false,"issueOptions":false,"optimisationOptions":false,"vehicleType":false,"vehicle":false,"driver":false,"import":false,"planning":false,"completed":false},"isPasswordReset":false,"isHidden":false,"firstLogin":1666601070},"email":"kariuki.muhindi@elogii.com","firstName":"Kariuki","lastName":"Muhindi","path":"63564f85c557c10012661e3e","organization":"63564f85c557c10012661e3e","role":"admin","permissions":{"analytics":{"view":true,"read":true},"billing":{"read":true},"communications":{"voice":true},"customers":{"create":true,"delete":true,"read":true,"update":true},"tasks":{"create":true,"delete":true,"read":true,"update":true},"taskTemplates":{"create":true,"delete":true,"read":true,"view":true,"update":true},"routePlans":{"create":true,"delete":true,"read":true,"view":true,"update":true},"demo":{"clear":true,"create":true},"drivers":{"create":true,"delete":true,"read":true,"update":true},"notifications":{"manage":true},"optimization":{"runForRoutes":true,"runForDate":true},"organizations":{"delete":true,"read":true,"update":true,"view":{"operation":true,"configuration":true}},"routes":true,"users":{"create":true,"delete":true,"read":true,"view":true,"update":true},"teams":{"create":true,"delete":true,"read":true,"view":true,"update":true,"entities":true},"vehicleTypes":{"create":true,"delete":true,"read":true,"update":true},"vehicles":{"create":true,"delete":true,"read":true,"update":true},"zones":{"create":true,"delete":true,"read":true,"update":true},"hooks":{"create":true,"delete":true,"read":true,"update":true},"notes":{"create":true,"delete":true,"read":true,"update":true},"jobs":true,"depots":true,"locations":true},"uid":"U-CN76NCCB","teams":[],"createdAt":"2022-10-24T08:40:37.174Z","updatedAt":"2023-05-10T11:53:01.059Z","__v":0,"settings":{"locale":"en"}},"organizationSlug":"kariukiqa"}`)
    },tokenValue1);
  }

 
  }
   finally {
    page.close();
    // browser.close();
  }
}
export async function loginPage2() {


  const context = browser.newContext({
    screen: { width: 1440, height: 1024 },
    viewport: { width: 1320, height: 1024 },

    // deviceScaleFactor: 5,
    
  });
  const page = context.newPage({
    headless: false,
  });
  
  

  try {
   
      await page.goto('https://dashboard-dev.elogii.com/#/login');
      // let tokenValue1 = {
      //   token: "res"
      // }
    page.evaluate(() => {
    let tokenValue = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzU2NGY4NWM1NTdjMTAwMTI2NjFlNDAiLCJ0eXBlIjoyMCwibGV2ZWwiOjIwLCJlbWFpbCI6Imthcml1a2kubXVoaW5kaUBlbG9naWkuY29tIiwib3JnYW5pemF0aW9uIjoiNjM1NjRmODVjNTU3YzEwMDEyNjYxZTNlIiwicGF0aCI6IjYzNTY0Zjg1YzU1N2MxMDAxMjY2MWUzZSIsInRlYW1zIjpbXSwic2x1ZyI6Imthcml1a2lxYSIsImlhdCI6MTY5NTgyOTM5NywiZXhwIjoxNjk2NDM0MTk3fQ.6reya42PedXqwMjxnkjYRWB6F5L0MxTzLTJ9EjOFEnQ"

   localStorage.setItem("elogii.auth",`{"isAuthenticated":true,"token":"${tokenValue}","user":{"_id":"63564f85c557c10012661e40","type":20,"level":20,"flags":{"onboarding":{"overview":false,"depot":false,"dimension":false,"skills":false,"capabilities":false,"supportContact":false,"issueOptions":false,"optimisationOptions":false,"vehicleType":false,"vehicle":false,"driver":false,"import":false,"planning":false,"completed":false},"isPasswordReset":false,"isHidden":false,"firstLogin":1666601070},"email":"kariuki.muhindi@elogii.com","firstName":"Kariuki","lastName":"Muhindi","path":"63564f85c557c10012661e3e","organization":"63564f85c557c10012661e3e","role":"admin","permissions":{"analytics":{"view":true,"read":true},"billing":{"read":true},"communications":{"voice":true},"customers":{"create":true,"delete":true,"read":true,"update":true},"tasks":{"create":true,"delete":true,"read":true,"update":true},"taskTemplates":{"create":true,"delete":true,"read":true,"view":true,"update":true},"routePlans":{"create":true,"delete":true,"read":true,"view":true,"update":true},"demo":{"clear":true,"create":true},"drivers":{"create":true,"delete":true,"read":true,"update":true},"notifications":{"manage":true},"optimization":{"runForRoutes":true,"runForDate":true},"organizations":{"delete":true,"read":true,"update":true,"view":{"operation":true,"configuration":true}},"routes":true,"users":{"create":true,"delete":true,"read":true,"view":true,"update":true},"teams":{"create":true,"delete":true,"read":true,"view":true,"update":true,"entities":true},"vehicleTypes":{"create":true,"delete":true,"read":true,"update":true},"vehicles":{"create":true,"delete":true,"read":true,"update":true},"zones":{"create":true,"delete":true,"read":true,"update":true},"hooks":{"create":true,"delete":true,"read":true,"update":true},"notes":{"create":true,"delete":true,"read":true,"update":true},"jobs":true,"depots":true,"locations":true},"uid":"U-CN76NCCB","teams":[],"createdAt":"2022-10-24T08:40:37.174Z","updatedAt":"2023-05-10T11:53:01.059Z","__v":0,"settings":{"locale":"en"}},"organizationSlug":"kariukiqa"}`)
    });

    page.reload();

    await Promise.all([
      // page.waitForNavigation(),
      page.waitForSelector('div[class="elogii-button elogii-button-primary elogii-button-normal optimize-button multi-day optimize-popover "]'),
      // page.waitForSelector("//div[contains(@class,'elogii-button elogii-button-new elogii-button-normal filter-new-button add-button')]//div[contains(@class,'elogii-button-content')]")
    ]);
  
    check(page, {
      // url: page.url() == 'https://dashboard-dev.elogii.com/#/tasks',
      url2: page.url() == 'https://dashboard-dev.elogii.com/#/operations/planning',
    });
    
 

 
  }
   finally {
    page.close();
    // browser.close();
  }
}
export async function operationsPage() {
  const browser = chromium.launch({
     headless: false,
     ignoreDefaultArgs: [
      'window-size'
     ]

    });
  const context = browser.newContext();
  const page = context.newPage();

  try {
    await page.goto('https://dashboard-dev.elogii.com/#/login');

    page.locator('input[id="email"]').type('kariuki.muhindi@elogii.com');
    page.locator('input[id="password"]').type('123456');

    const submitButton = page.locator('button[type="submit"]');

    await Promise.all([page.waitForNavigation(), submitButton.click()]);
    // console.log(page.url());

    // await page.goto('https://dashboard-dev.elogii.com/#/operations/planning');
    //  const optimizeTasksButton = page.locator('div[class="elogii-button elogii-button-primary elogii-button-normal optimize-button multi-day optimize-popover "]');
    // await Promise.all([page.waitForNavigation(), optimizeTasksButton.click()]);

    // text.waitFor({
    //         state: 'visible',
    // });  
    // const page2 = context.newPage();
    // await page2.goto('https://dashboard-dev.elogii.com/#/operations/planning');
    
    page.waitForSelector('div[class="elogii-button elogii-button-primary elogii-button-normal optimize-button multi-day optimize-popover "]');

    const text = page.locator('div[class="elogii-button elogii-button-primary elogii-button-normal optimize-button multi-day optimize-popover "]');
    text.hover()
    console.log('waited')

    // page.bringToFront();
    // const optimizeTasksButton = page.locator('div[class="elogii-button elogii-button-primary elogii-button-normal optimize-button multi-day optimize-popover "]');
    // await Promise.all([page.waitForNavigation(), optimizeTasksButton.click()]);
    

    // // Toggle selection
    const tasksMenuButton1 = page.locator('body > div:nth-child(1) > section:nth-child(1) > section:nth-child(2) > main:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > i:nth-child(1)');
    await Promise.all([page.waitForNavigation(), tasksMenuButton1.click()]);

    check(page, {
      url: page.url() == 'https://dashboard-dev.elogii.com/#/operations/planning',

    });
  } finally {
    page.close();
    browser.close();
  }
}

export async function createTaskPage_customLocation() {
  
  const browser = chromium.launch({ 
    headless: false,
    // slowMo: '3s',
    ignoreDefaultArgs: [
      'window-size'
     ]
  });

  const page = browser.newPage({});
    
  try {
    
  
    // Authenticate
    await page.goto('https://dashboard-dev.elogii.com/#/login');
    // let tokenValue1 = {
    //   token: "res"
    // }
  page.evaluate(() => {
  let tokenValue = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzU2NGY4NWM1NTdjMTAwMTI2NjFlNDAiLCJ0eXBlIjoyMCwibGV2ZWwiOjIwLCJlbWFpbCI6Imthcml1a2kubXVoaW5kaUBlbG9naWkuY29tIiwib3JnYW5pemF0aW9uIjoiNjM1NjRmODVjNTU3YzEwMDEyNjYxZTNlIiwicGF0aCI6IjYzNTY0Zjg1YzU1N2MxMDAxMjY2MWUzZSIsInRlYW1zIjpbXSwic2x1ZyI6Imthcml1a2lxYSIsImlhdCI6MTY5NTgyOTM5NywiZXhwIjoxNjk2NDM0MTk3fQ.6reya42PedXqwMjxnkjYRWB6F5L0MxTzLTJ9EjOFEnQ"

 localStorage.setItem("elogii.auth",`{"isAuthenticated":true,"token":"${tokenValue}","user":{"_id":"63564f85c557c10012661e40","type":20,"level":20,"flags":{"onboarding":{"overview":false,"depot":false,"dimension":false,"skills":false,"capabilities":false,"supportContact":false,"issueOptions":false,"optimisationOptions":false,"vehicleType":false,"vehicle":false,"driver":false,"import":false,"planning":false,"completed":false},"isPasswordReset":false,"isHidden":false,"firstLogin":1666601070},"email":"kariuki.muhindi@elogii.com","firstName":"Kariuki","lastName":"Muhindi","path":"63564f85c557c10012661e3e","organization":"63564f85c557c10012661e3e","role":"admin","permissions":{"analytics":{"view":true,"read":true},"billing":{"read":true},"communications":{"voice":true},"customers":{"create":true,"delete":true,"read":true,"update":true},"tasks":{"create":true,"delete":true,"read":true,"update":true},"taskTemplates":{"create":true,"delete":true,"read":true,"view":true,"update":true},"routePlans":{"create":true,"delete":true,"read":true,"view":true,"update":true},"demo":{"clear":true,"create":true},"drivers":{"create":true,"delete":true,"read":true,"update":true},"notifications":{"manage":true},"optimization":{"runForRoutes":true,"runForDate":true},"organizations":{"delete":true,"read":true,"update":true,"view":{"operation":true,"configuration":true}},"routes":true,"users":{"create":true,"delete":true,"read":true,"view":true,"update":true},"teams":{"create":true,"delete":true,"read":true,"view":true,"update":true,"entities":true},"vehicleTypes":{"create":true,"delete":true,"read":true,"update":true},"vehicles":{"create":true,"delete":true,"read":true,"update":true},"zones":{"create":true,"delete":true,"read":true,"update":true},"hooks":{"create":true,"delete":true,"read":true,"update":true},"notes":{"create":true,"delete":true,"read":true,"update":true},"jobs":true,"depots":true,"locations":true},"uid":"U-CN76NCCB","teams":[],"createdAt":"2022-10-24T08:40:37.174Z","updatedAt":"2023-05-10T11:53:01.059Z","__v":0,"settings":{"locale":"en"}},"organizationSlug":"kariukiqa"}`)
  });

  page.reload();

  await Promise.all([
    // page.waitForNavigation(),
    page.waitForSelector('div[class="elogii-button elogii-button-primary elogii-button-normal optimize-button multi-day optimize-popover "]'),
    // page.waitForSelector("//div[contains(@class,'elogii-button elogii-button-new elogii-button-normal filter-new-button add-button')]//div[contains(@class,'elogii-button-content')]")
  ]);

    // Click tasks nav button after redirect to operations page
    const tasksNavButton = page.locator('a[href="#/tasks"]')
    await Promise.all([page.waitForNavigation(),tasksNavButton.click()]);
    // Click add new tasks button
    const addTask = page.waitForSelector("//div[contains(@class,'elogii-button elogii-button-new elogii-button-normal filter-new-button add-button')]//div[contains(@class,'elogii-button-content')]")
    await Promise.all([page.waitForSelector("//div[contains(@class,'elogii-button elogii-button-new elogii-button-normal filter-new-button add-button')]//div[contains(@class,'elogii-button-content')]"), addTask.click()]);
    //Click location details
    page.locator("(//label[@class='ant-radio-button-wrapper ant-radio-button-wrapper-checked'])[2]").click()
    // //Enter address details
    const addressLookup = page.locator("(//input[@placeholder='Please enter at least 4 characters'])[1]")
    addressLookup.type('Skeena Hill')


    const addressLookupResults = page.waitForSelector("div[class='address-lookup-results'] div:nth-child(1)", {
      timeout: 3000
    })
    addressLookupResults.click()

    // page.waitForTimeout(3000)

        const addressLookupSaveLocation = page.locator("div[title='Save location'] div[class='elogii-button-content']",{
          timeout: 5000
        })
//         addressLookupSaveLocation.waitFor({
//       state: 'visible',
//       timeout: 40000
// });
addressLookupSaveLocation.click()
// page.waitForTimeout(3000)
 
    // check(page, {
    //   locationCheck: addressLookup.inputValue() == 'Skeena Hill, London, SW18 5, United Kingdom',
    // })

    
    // //Click save button
    const saveButton = page.locator('body > div:nth-child(1) > section:nth-child(1) > section:nth-child(2) > main:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1)')
    await Promise.all([
      // page.waitForTimeout(3000),
       saveButton.click(),
       
      ]);
      // page.waitForTimeout(3000)
    check(page, {
      url: page.url() == 'https://dashboard-dev.elogii.com/#/tasks/new',
      addTask: page.locator("div[class='details-title-section-right'] h1").innerText() == "New task",
      toastMessage: page.locator("//div[@class='ant-message']//span").innerText()  == "Created Successfully"

    });
 
  } finally {
    page.close();
    browser.close();
  }
}
export async function createTaskPage_customerLocation() {
  
  const context = browser.newContext({
    screen: { width: 1440, height: 1024 },
    viewport: { width: 1320, height: 1024 },

    // deviceScaleFactor: 5,
    
  });
  const page = context.newPage({
    headless: false,
  });
    
  try {
    
  
    // Authenticate
    await page.goto('https://dashboard-dev.elogii.com/#/login');
    // let tokenValue1 = {
    //   token: "res"
    // }
  page.evaluate(() => {
  let tokenValue = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzU2NGY4NWM1NTdjMTAwMTI2NjFlNDAiLCJ0eXBlIjoyMCwibGV2ZWwiOjIwLCJlbWFpbCI6Imthcml1a2kubXVoaW5kaUBlbG9naWkuY29tIiwib3JnYW5pemF0aW9uIjoiNjM1NjRmODVjNTU3YzEwMDEyNjYxZTNlIiwicGF0aCI6IjYzNTY0Zjg1YzU1N2MxMDAxMjY2MWUzZSIsInRlYW1zIjpbXSwic2x1ZyI6Imthcml1a2lxYSIsImlhdCI6MTY5NjU5OTIxMiwiZXhwIjoxNjk3MjA0MDEyfQ.2U-MdbFF6mpFqrfTPWeN9Ffn6SsyI3M0Iu0hkNmbbjc"

 localStorage.setItem("elogii.auth",`{"isAuthenticated":true,"token":"${tokenValue}","user":{"_id":"63564f85c557c10012661e40","type":20,"level":20,"flags":{"onboarding":{"overview":false,"depot":false,"dimension":false,"skills":false,"capabilities":false,"supportContact":false,"issueOptions":false,"optimisationOptions":false,"vehicleType":false,"vehicle":false,"driver":false,"import":false,"planning":false,"completed":false},"isPasswordReset":false,"isHidden":false,"firstLogin":1666601070},"email":"kariuki.muhindi@elogii.com","firstName":"Kariuki","lastName":"Muhindi","path":"63564f85c557c10012661e3e","organization":"63564f85c557c10012661e3e","role":"admin","permissions":{"analytics":{"view":true,"read":true},"billing":{"read":true},"communications":{"voice":true},"customers":{"create":true,"delete":true,"read":true,"update":true},"tasks":{"create":true,"delete":true,"read":true,"update":true},"taskTemplates":{"create":true,"delete":true,"read":true,"view":true,"update":true},"routePlans":{"create":true,"delete":true,"read":true,"view":true,"update":true},"demo":{"clear":true,"create":true},"drivers":{"create":true,"delete":true,"read":true,"update":true},"notifications":{"manage":true},"optimization":{"runForRoutes":true,"runForDate":true},"organizations":{"delete":true,"read":true,"update":true,"view":{"operation":true,"configuration":true}},"routes":true,"users":{"create":true,"delete":true,"read":true,"view":true,"update":true},"teams":{"create":true,"delete":true,"read":true,"view":true,"update":true,"entities":true},"vehicleTypes":{"create":true,"delete":true,"read":true,"update":true},"vehicles":{"create":true,"delete":true,"read":true,"update":true},"zones":{"create":true,"delete":true,"read":true,"update":true},"hooks":{"create":true,"delete":true,"read":true,"update":true},"notes":{"create":true,"delete":true,"read":true,"update":true},"jobs":true,"depots":true,"locations":true},"uid":"U-CN76NCCB","teams":[],"createdAt":"2022-10-24T08:40:37.174Z","updatedAt":"2023-05-10T11:53:01.059Z","__v":0,"settings":{"locale":"en"}},"organizationSlug":"kariukiqa"}`)
  });

  page.reload();

  await Promise.all([
    page.waitForNavigation(),
    page.waitForSelector("//div[@class='splitter-cont left-cont']//div[@class='task-filters']//button[1]",
    {
      timeout: "120000"
    }),
    // page.waitForSelector("//div[contains(@class,'elogii-button elogii-button-new elogii-button-normal filter-new-button add-button')]//div[contains(@class,'elogii-button-content')]")
  ]);

    // Click tasks nav button after redirect to operations page
    const tasksNavButton = page.locator('a[href="#/tasks"]')
    await Promise.all([page.waitForNavigation(),tasksNavButton.click()]);
    // Click add new tasks button
    const addTask = page.waitForSelector("//div[contains(@class,'elogii-button elogii-button-new elogii-button-normal filter-new-button add-button')]//div[contains(@class,'elogii-button-content')]")
    //Click customer location button
    const customerLocation = page.locator("//div[@id='location.type']//span[contains(text(),'Customer location')]")
    await Promise.all([
      page.waitForSelector("//div[contains(@class,'elogii-button elogii-button-new elogii-button-normal filter-new-button add-button')]//div[contains(@class,'elogii-button-content')]"),
       addTask.click(),
       customerLocation.click(),
      ]);

    
    // //Click save button
    const saveButton = page.locator('body > div:nth-child(1) > section:nth-child(1) > section:nth-child(2) > main:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1)')
    await Promise.all([
       saveButton.click(),
      ]);
      page.waitForSelector("div[class='ant-message-custom-content ant-message-success'] span")
    check(page, {
      url: page.url() == 'https://dashboard-dev.elogii.com/#/tasks/new',
      addTask: page.locator("div[class='details-title-section-right'] h1").innerText() == "New task",
      toastMessage: page.locator("div[class='ant-message-custom-content ant-message-success'] span").innerText()  == "Created Successfully"

    });
 
  } finally {
    page.close();
    // browser.close();
  }
}
export async function defaultLocationCreateTaskPage() {
  
  const browser = chromium.launch({ 
    headless: false,
    // slowMo: '3s',
    ignoreDefaultArgs: [
      'window-size'
     ]
  });

  const page = browser.newPage({});
    
  try {
    
  
    // Authenticate
    await page.goto('https://dashboard-dev.elogii.com/#/login')

    
    page.locator('input[id="email"]').type('kariuki.muhindi@elogii.com');
    page.locator('input[id="password"]').type('123456');

    const submitButton = page.locator('button[type="submit"]')
    await Promise.all([page.waitForNavigation(),
       submitButton.click()]);

    // Click tasks nav button after redirect to operations page
    // const tasksNavButton = page.locator('a[href="#/tasks"]')
    // await Promise.all([page.waitForNavigation(),tasksNavButton.click()]);
    // Click add new tasks button
    const addTask = page.waitForSelector("//div[contains(@class,'elogii-button elogii-button-new elogii-button-normal filter-new-button add-button')]//div[contains(@class,'elogii-button-content')]")
    await Promise.all([page.waitForSelector("//div[contains(@class,'elogii-button elogii-button-new elogii-button-normal filter-new-button add-button')]//div[contains(@class,'elogii-button-content')]"), addTask.click()]);
    //Click location details
    page.locator("(//label[@class='ant-radio-button-wrapper ant-radio-button-wrapper-checked'])[2]").click()
    // //Enter address details
    const addressLookup = page.locator("(//input[@placeholder='Please enter at least 4 characters'])[1]")
    addressLookup.type('Skeena Hill')


    const addressLookupResults = page.waitForSelector("div[class='address-lookup-results'] div:nth-child(1)")
    addressLookupResults.click()

    // page.waitForTimeout(3000)

//         const addressLookupResults = page.locator("div[class='address-lookup-results'] div:nth-child(1)")
//     addressLookupResults.waitFor({
//       state: 'visible',
// });
 
    // check(page, {
    //   locationCheck: addressLookup.inputValue() == 'Skeena Hill, London, SW18 5, United Kingdom',
    // })

    
    // //Click save button
    const saveButton = page.locator('body > div:nth-child(1) > section:nth-child(1) > section:nth-child(2) > main:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1)')
    await Promise.all([
      page.waitForTimeout(3000),
       saveButton.click(),
       
      ]);
      page.waitForTimeout(3000)
    check(page, {
      url: page.url() == 'https://dashboard-dev.elogii.com/#/tasks/new',
      addTask: page.locator("div[class='details-title-section-right'] h1").innerText() == "New task",
      toastMessage: page.locator("//div[@class='ant-message']//span").innerText()  == "Created Successfully"

    });
 
  } finally {
    page.close();
    browser.close();
  }
}

export function loginProtocol(){
  const url = 'https://api-dev.elogii.com/auth/login'
  const payload = JSON.stringify({
    email: 'kariuki.muhindi@elogii.com',
    password: '123456'
  })
  const params = {
    headers:{
      'content-Type': 'application/json'
    }
  }

  const res = http.post(url,payload,params)
  console.log(res.json().token)
  
  check(res,{
    'status is 200': (r) => r.status === 200,
    'has email': (r) => r.body.includes('kariuki.muhindi@elogii.com')
  })
}

export function getTaskProtocol(){
  const url = 'https://api-dev.elogii.com/tasks?date>20230801'
  const params = {
    headers:{
      'Authorization': 'ApiKey dev:64ca5302b03e87fe5171e288:sRNkD_emS_yWfN6m-SPyW',
      
    }
  }

  const res = http.get(url,params)
  check(res,{
    'status is 200': (r) => r.status === 200,
    'has uid': (r) => r.body.includes('T-2OBSEDN5')
  })
}

export function createTaskProtocol(){
  const url = 'https://api-dev.elogii.com/tasks'
  const payload = JSON.stringify({
      type: 1,
      date: 20231004,
      timeWindows: [
          {
              start: 420,
              end: 960
          }
      ],
      pickup: {
          location: {
              type: 0,
              uid: "DEP-N409XAAM"
          }
      },
      location: {
          type: 2,
          name: "John F Hunt Regeneration Ltd",
          address: "City Temple Church",
          addressLine2: "City Temple Quarter",
          postCode: "EC4A 3BL",
          city: "London",
          country: "GB",
          contactName: "Ciprian",
          contactPhone: "07890642789",
          contactEmail: ""
      },
  
      productCode: "ORD3251921.4-2:1",
      priority: 1,
      locked: false,
      allowedWeekDays: null
  
  })

  const params = {
    headers:{
      'Authorization': 'ApiKey dev:64ca5302b03e87fe5171e288:sRNkD_emS_yWfN6m-SPyW',
    }
  }

  const res = http.post(url,payload,params)

  check(res,{
    'status is 200': (r) => r.status === 200,
    'has product code': (r) => r.body.includes('ORD3251921.4-2:1')
  })
}