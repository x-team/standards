Requirements
====

Everyone has their own preference of tools and processes when it comes to capturing requirements, but in every case we need to be able to:

- find the latest requirements on a certain topic.
- evaluate the software to tell whether it fulfills a particular requirement or not.

With this in mind there some general guidelines we can follow:

Keep all requirements in the one place
----

- when trying to find out how something is supposed to be implemented, you shouldn't have to hunt.
- something extensible and searchable like a wiki is ideal.

Write acceptance tests to clarify requirements
----

- requirements often come in the form of _"As a user I want to ..."_. This can be useful but often leaves a lot of detail to interpretation.
- by writing acceptance tests (in a format like [end-user-tests](../end-user-tests/README.md)) we start describing in more definite terms how the software works under realistic conditions.
- the acceptance test can be automated, but even if it is executed manually it gives a tangible way to prove whether requirements have been fulfilled or not.
- it can be helpful to make developers responsible for writing the acceptance tests, then have a product owner review and confirm it. This forms a communication loop and helps isolate any misunderstandings on either side.

Build bridges between requirements and code
----

- any code we write has to be accountable to a certain requirement. If the software does any more or any less than the requirements state, something is not right.
- a good place to start is by automating the acceptance tests (or at least, some of the units they are made of). Then you have an easy way to cross the bridge from requirements to code:
 - for a requirement or story we can find the acceptance tests that describe it in action.
 - for an acceptance test we can find the end-user tests or unit tests that automate the steps involved.
 - for an automated test we can find the code the implements it.
- following this approach we also have good options for safely removing or updating code when requirements change.

Reduce distance between requirements and code
----

- requirements will change, so keeping them in sync with code is crucial.
- we can make synchronization easier by keeping the requirements and code together in some way. This might mean a wiki that has special integration with the repo. Or it might mean storing requirements in markdown files that are actually committed to the repo.
