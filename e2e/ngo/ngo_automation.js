var Excel = require('exceljs');

// create object for workbook
var inboundWorkbook = new Excel.Workbook();
inboundWorkbook.xlsx.readFile("./TestData/ngo_automation.xlsx").then(function () {
    var inboundWorksheet = inboundWorkbook.getWorksheet(1);
    browser.waitForAngularEnabled(false);

    var totalRowsIncludingEmptyRows = inboundWorksheet.rowCount

    // loop till end of row
    for (var i = 1; i <= totalRowsIncludingEmptyRows; i++) {
        var cellValue = inboundWorksheet.getRow(i).getCell(i).toString();

    }

    global.EmailID = inboundWorksheet.getRow(2).getCell(1).toString();
    global.password = inboundWorksheet.getRow(2).getCell(2).toString();

    

   
    global.FirstName = inboundWorksheet.getRow(2).getCell(3).toString();
    
    global.lastName = inboundWorksheet.getRow(2).getCell(4).toString();
    global.EmailID1 = inboundWorksheet.getRow(2).getCell(5).toString();
    global.password1 = inboundWorksheet.getRow(2).getCell(6).toString();

    
    global.FirstName1 = inboundWorksheet.getRow(4).getCell(1).toString();
    
    global.lastName1 = inboundWorksheet.getRow(4).getCell(2).toString();
    global.EmailID2 = inboundWorksheet.getRow(4).getCell(3).toString();

   


    
    
    
});

describe('Code for Adding Users and Reset Users', function () {



    browser.ignoreSynchronization = true; // for non-angular websites
    it('open the browser', function () {
        browser.get(browser.params.url);
        // set implicit time to 30 seconds
        browser.manage().window().maximize();
        browser.manage().timeouts().implicitlyWait(30000);
        browser.sleep(3000);
    });


    it('click on Login button', function () {
                                
        var clickOnLoginButton =  element(by.xpath("//a[@class='pull-right']"));
        clickOnLoginButton.click();
        browser.sleep(6000);

    });

    it('Please enter Email Id', function () {
        var enterEmailID = element(by.xpath("//input[@id='email']"));
        enterEmailID.sendKeys(EmailID);
        browser.sleep(2000);
    });
    




it('Please enter Password', function () {
        var enterPassword= element(by.xpath("//input[@id='password']"));
        enterPassword.sendKeys(password);
        browser.sleep(2000);
    });
    it('click on sigin button', function () {
                                
        var clickOnSiginButton =  element(by.xpath("//app-root[1]//app-login[1]//form[1]/input[1]"));
        clickOnSiginButton.click();
        browser.sleep(2000);

    });
    
    it('click on User Module', function () {
                                
        var clickOnUserModule =  element(by.xpath("/html[1]/body[1]/app-root[1]/nav[1]/div[1]/ul[1]/li[2]/a[1]"));
        clickOnUserModule.click();
        browser.sleep(2000);

    });

    it('click on AddUser Button', function () {
                                
        var clickOnAddUser =  element(by.xpath("//button[@class='btn btn-sm btn-success pull-right']"));
        clickOnAddUser.click();
        browser.sleep(2000);

    });

    
    it('Please enter First Name', function () {
        var enterFirstName = element(by.xpath("//div[@class='jumbotron']//div[1]//input[1]"));
        enterFirstName.sendKeys(FirstName);
        browser.sleep(2000);
    });

    
    it('Please enter Last Name', function () {
        var enterLastName = element(by.xpath("//app-add[1]/div[1]//div[2]/div[1]/form[1]/div[2]/input[1]"));
        enterLastName.sendKeys(lastName);
        browser.sleep(2000);
    });

    
    it('Please enter Email Id', function () {
        var enterEmailID1 = element(by.xpath("//div[3]//input[1]"));
        enterEmailID1.sendKeys(EmailID1);
        browser.sleep(2000);
    });

    
    it('Please enter Password', function () {
        var enterPassword1 = element(by.xpath("//div[4]//input[1]"));
        enterPassword1.sendKeys(password1);
        browser.sleep(2000);
    });
    it('click on Add User', function () {
                                
        var clickOnAddUserToAdd =  element(by.xpath("//button[@class='btn btn-primary pull-right']"));
        clickOnAddUserToAdd.click();
        browser.sleep(6000);

    });
    it('click on View all', function () {
                                
        var clickOnViewAll =  element(by.xpath("//a[contains(text(),'View all')]"));
        clickOnViewAll.click();
        browser.sleep(2000);

    });

    //a[contains(text(),'View all')]

    // code for Reset
    it('click on AddUser Button', function () {
                                
        var clickOnAddUser =  element(by.xpath("//button[@class='btn btn-sm btn-success pull-right']"));
        clickOnAddUser.click();
        browser.sleep(2000);

    });


    
    it('Please enter First Name', function () {
        var enterFirstName = element(by.xpath("//div[@class='jumbotron']//div[1]//input[1]"));
        enterFirstName.sendKeys(FirstName);
        browser.sleep(2000);
    });

    
    it('Please enter Last Name', function () {
        var enterLastName = element(by.xpath("//app-add[1]/div[1]//div[2]/div[1]/form[1]/div[2]/input[1]"));
        enterLastName.sendKeys(lastName);
        browser.sleep(2000);
    });

    
    it('Please enter Email Id', function () {
        var enterEmailID1 = element(by.xpath("//div[3]//input[1]"));
        enterEmailID1.sendKeys(EmailID1);
        browser.sleep(2000);
    });

    
    it('Please enter Password', function () {
        var enterPassword1 = element(by.xpath("//div[4]//input[1]"));
        enterPassword1.sendKeys(password1);
        browser.sleep(2000);
    });
    it('click on Reset', function () {
                                
        var clickOnReset =  element(by.xpath("//input[@class='btn btn-danger pull-right']"));
        clickOnReset.click();
        browser.sleep(3000);

    });



    it('click on User Module', function () {
                                
        var clickOnUserModule =  element(by.xpath("//a[@class='nav-link']"));
        clickOnUserModule.click();
        browser.sleep(6000);

    });



    it('click on Edit Option', function () {
                                
        var clickOnEdit =  element(by.xpath("//tr[1]//td[4]//span[1]//button[1]"));
        clickOnEdit.click();
        browser.sleep(6000);

    });

     
    it('Please enter First Name', function () {
        var enterFirstName1 = element(by.xpath("//div[@class='jumbotron']//div[1]//input[1]"));
            enterFirstName1.clear();
                                        
        enterFirstName1.sendKeys(FirstName1);
        browser.sleep(2000);
    });

    
    it('Please enter Last Name', function () {
        var enterLastName1 = element(by.xpath("//app-root[1]//app-edit[1]//div[2]/div[1]/form[1]/div[2]/input[1]"));
                                              
            enterLastName1.clear();
        enterLastName1.sendKeys(lastName1);
        browser.sleep(2000);
    });

    
    it('Please enter Email Id', function () {
        var enterEmailID1 = element(by.xpath("//app-root[1]//app-edit[1]//div[2]//form[1]/div[3]/input[1]"));
            enterEmailID1.clear();
        enterEmailID1.sendKeys(EmailID2);
        browser.sleep(2000);
    });

    
    it('click on Update', function () {
                                
        var clickOnUpdate =  element(by.xpath("//button[@class='btn btn-primary pull-right']"));
        clickOnUpdate.click();
        browser.sleep(6000);

    });



    //code for Reset
  

    
    it('click on Edit Option', function () {
                                
        var clickOnEdit =  element(by.xpath("//tr[1]//td[4]//span[1]//button[1]"));
        clickOnEdit.click();
        browser.sleep(6000);

    });

   

     
    it('Please enter First Name', function () {
        var enterFirstName1 = element(by.xpath("//div[@class='jumbotron']//div[1]//input[1]"));
            enterFirstName1.clear();
                                        
        enterFirstName1.sendKeys(FirstName1);
        browser.sleep(2000);
    });

    
    it('Please enter Last Name', function () {
        var enterLastName1 = element(by.xpath("//app-root[1]//app-edit[1]//div[2]/div[1]/form[1]/div[2]/input[1]"));
                                              
            enterLastName1.clear();
        enterLastName1.sendKeys(lastName1);
        browser.sleep(2000);
    });

    
    it('Please enter Email Id', function () {
        var enterEmailID1 = element(by.xpath("//app-root[1]//app-edit[1]//div[2]//form[1]/div[3]/input[1]"));
            enterEmailID1.clear();
        enterEmailID1.sendKeys(EmailID2);
        browser.sleep(2000);
    });

    
    it('click on Reset', function () {
                                
        var clickOnReset =  element(by.xpath("//input[@class='btn btn-danger pull-right']"));
        clickOnReset.click();
        browser.sleep(6000);

    });

    



    



});
    