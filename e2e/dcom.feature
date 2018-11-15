Feature: Cucumber proof of concept

  Scenario: First Scenario
    Given I start on a SERP page for the word "light"
    Then I expect the title of the page "Light | Define Light at Dictionary.com"
    When I look for "flower"
    Then I should land on serp with title "Flower | Define Flower at Dictionary.com"


