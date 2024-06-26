Feature: MyProfile Page Functionality
    As a user
    I want to access the MyProfile page
    So that I can view my account information and data

    Background: Background name
        Given I should navigate to application
        When I should Sign In into the application
        Then Close the terms of service window
        And Click on My profile page

    Scenario: visibility check, Profile photo,Update Profile and Account Details
       Then Verify the Title of My Profile Page
        And User and User photo of MyProfile should be visible
        Then Profile and Account deatils section of MyProfile should be visible
        And Click on upload image icon
        Then Enter tilte and phone no
        And Select Email preference
        Then click on update button
        And Verify the updated successfully





