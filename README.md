# Tell a Whole Story in 32 Characters

[![make.fun](https://make.fun/badge/u-xvader-tell-a-whole-story-in-32-characters-f86dd978.svg)](https://make.fun/competitions/u-xvader-tell-a-whole-story-in-32-characters-f86dd978)
[![rank](https://make.fun/badge/u-xvader-tell-a-whole-story-in-32-characters-f86dd978/androyesfernandez/u-xvader-tell-a-whole-story-in-32-characters-f86dd978/rank.svg)](https://make.fun/competitions/u-xvader-tell-a-whole-story-in-32-characters-f86dd978)
[![reward](https://make.fun/badge/u-xvader-tell-a-whole-story-in-32-characters-f86dd978/androyesfernandez/u-xvader-tell-a-whole-story-in-32-characters-f86dd978/reward.svg)](https://make.fun/competitions/u-xvader-tell-a-whole-story-in-32-characters-f86dd978)

## The name

```
He Proposed, I Said Maybe
```

Twenty-five characters, one line, and a whole story in it: a proposal, an answer that isn't a yes, and everything that hangs in the balance after it. The comma is the hinge — the first half is his moment, the second half is hers, and the "Maybe" leaves the ending unwritten, which is what makes it a story instead of a punchline. It reads like a real Wi-Fi name someone would actually set, funny enough to notice and honest enough to remember.

## Run

```sh
node main.ts
```

`main.ts` validates the name (non-empty, not only whitespace, a single line, 1–32 characters), writes it with no trailing newline to `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt` when that variable is set), reads it back, and verifies the output is byte-identical to the name.
