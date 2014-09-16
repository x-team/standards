JS standards
====

jshint
----

Settings are in `.jshintrc`.  View the diff of `bad.js` and `good.js` to see examples of breaking / keeping the rules: https://gist.github.com/joshwnj/0a63dc346425acfadc4d

codepainter
----

We recommend using http://npmjs.org/package/codepainter to improve consistency of javascript source files across a team. That way team members can write and edit using the tools and style they are most comfortable with, as long as the final result is transformed with a common set of rules.

A common approach is:

- create a `sample.js` file that demonstrates the conventions you want to follow
- run `codepaint infer sample.js > sample.json`
- `codepaint xform --json sample.json $FILE` transforms a file to use those conventions.
