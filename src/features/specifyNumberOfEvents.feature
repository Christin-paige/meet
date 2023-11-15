Feature: Specify Number of Events
  Scenario: When a user hasn't specified a number, 32 events are shown by default.
    Given the main page is open
    When a user has not specified a number
    Then [32] events will be shown by default

  Scenario: User can change the number of events displayed.
    Given there are [32] events shown by default
    When the user specifies a number
    Then the specified number of events will be displayed

