Technical Documentation
====

Recommendations for creating project documentation.

What should the docs include?
----

- think about a new developer joining an existing project. What things would they need to know in order to contribute to the project?
- this includes obvious things like how to install, and what code conventions to use.
- it's also really important that we document the design decisions that have influenced the code. Eg. _"We decided to use {TECHNIQUE} because of {REASON}"_.

Process
----

- try to avoid writing documentation in large chunks all at once. It should be done alongside development, allowing the developer to add extra context or reference notes.
- where possible, implement a peer-review process where devs are expected to include docs alongside code when submitting a pull-request.

How should files be named?
----

- use markdown formatting, with `.md` extension.
- put all docs for the project in a top-level `docs/` directory.


Markdown formatting
----

- each file should have exactly 1 level-1 heading (`<h1>`) and this should be unique.
