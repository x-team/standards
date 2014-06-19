End User Tests
====

Goal: define a standard format for end-user tests that can be written and run manually by non-programmers. The format should also naturally translate to an automation with something like selenium.

Example
----

```
Name: Infinite-scroll on the homepage

Scenario:
 - the "Featured Posts" database that populates the homepage stream has enough entries to fill more than 1 page of results.

Actions:
 - browse to the homepage.
 - scroll to the bottom of the page.
 - locate the "Load More" button (element ".featured-load-more")
 - click "Load More" button.
 - wait for new entries to appear (should be less than 5 seconds).
 - expect new entries to be visible.
```

Format
----

- `Name:` tells you what thing is being tested.
- `Scenario:` is a list of 1 or more things, which must be set up for the test to work correctly. This often translates to fixtures that must be activated before running the test.
- `Actions:` is a list of steps for the tester to take.

Action Vocabulary
----

Although the actions should generally read like normal english, we also want to follow a defined set of vocabulary and patterns where possible, to make the language more obvious.

- `browse to ____`: open a URL or page in the browser.
- `scroll to ____`: scroll to a certain part of the page.
- `locate ____ (element "____")`: locate and name a specific element on the page. The test should fail at this point if the element can't be found.
- `click ____`: click something.
- `type '____' into ____`: type some text into a field.
- `wait for ____`: wait for something to happen. The test might fail at this point if the tester is waiting for too long.
- `expect ____`: something for the tester to check. The test fails if the expectation isn't met. Tests should generally have at least one `expect` clause.
