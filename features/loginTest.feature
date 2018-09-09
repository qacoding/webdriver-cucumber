# Created by hiremathv at 8/20/18
Feature: #Enter feature name here
  # Enter feature description here
@skip
  Scenario: Login test
    # Enter steps here
  Given on Login page
  When entered username "foo"
  And  entered password "bar"
  When clicked on submit button 
  Then expect text "Your username is invalid!"
