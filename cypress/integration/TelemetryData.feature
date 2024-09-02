Feature: TelemetryData  Page Functionality
    As a user
    I want to access the TelemetryData page
    So that I can view TelemetryData information and data

    Background: Background name
        Given I should navigate to application
        When I should Sign In into the application
        Then Close the terms of service window
        And Click on TelemetryData page

    Scenario:TelemetryData Page visiblity
        Then I should be redirected to the TelemetryData page
        # And Select Battery Charge Capacity
        # Then Verify the Battery Charge Capacity device and Graph
        # And Select OS Last Update 
        # Then Verify the OS Last Update device and Graph
        # And Select OS New Platform Version
        # Then Verify the OS New Platform Version device and Graph






