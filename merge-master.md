Merge Master
====

![](http://i1.kym-cdn.com/photos/images/original/000/222/594/you_shall_not_pass_by_fusionmetroid-d4a3ip5.jpg)

Every team needs at least one merge-master. These people are the final checkpoint before any code is merged into a production branch, and so they also take responsibility for any bugs that are introduced into production.

What does a Merge Master need to do?
----

- when a development branch is ready for approval by Product, it also needs to be approved by a Merge Master. They review the diffs to see what changes are being introduced and make sure there are no unintended side-effects.

- if there is anything questionable in the diffs, the Merge Master needs to tactfully explain to Product that some things needs to be cleaned up before it can go live. Much better to spend a little extra time here fixing it than pay for it ten-fold later.
 - Let's use our own communication channels for discussing this rather than exposing clients to conversations like _"wtf josh, y u no semicolon??!?"_.

- when the code is finally merged, the Merge Master needs to review the merge.  Github has a nice button to auto-merge stuff, but one day it will auto-merge something in a very strange way. Review the merge diff.

- approve for launch!
