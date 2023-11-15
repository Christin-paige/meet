Feature: Show/hide an event's details
  Scenario: An event element is collapsed by default
    Given a user wants to see event details
    When the user selects an event
    Then the event will expand to show details

  Scenario: User can expand an event to see details
    Given the user would like to see more information about an event
    When the user selects an event
    Then the event will expand to show details

  Scenario: User can collapse an event to hide details
    Given the user wants to hide information about the event
    When user selects event details
    Then the event details will collapse

