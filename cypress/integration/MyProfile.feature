Feature: MyProfile Page Functionality
    As a user
    I want to access the MyProfile page
    So that I can view my account information and data

    Background: Background name
        Given I should navigate to application
        When I should Sign In into the application
        Then Close the terms of service window
        And Click on My profile page

    Scenario: MyProfile Page visiblity
        Then Verify the Title of My Profile Page
        And User and User photo of MyProfile should be visible
        Then Profile and Account deatils section of MyProfile should be visible

 Scenario: Update Profile and Account Details 
        Then Enter tilte and phone no
        And Eelect Email preference 
        Then click on update button 
        And Verify the updated successfully

       



