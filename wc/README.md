# Writing your own wc tool

Implementing a wc tool following [this challenge](https://codingchallenges.fyi/challenges/challenge-wc)

## wc tool

wcTool is a command-line tool for counting bytes, lines, words, and characters in a file.

### Usage

You can use ts-node to run the tool as follows:

```bash
npx ts-node index.ts [option] filename
```

The following options are supported:

- wctool -c path/to/your/file.txt _prints the number of characters in the file_
- wctool -b path/to/your/file.txt _prints the number of bytes in the file_
- wctool -l path/to/your/file.txt _prints the number of lines in the file_
- wctool -w path/to/your/file.txt _prints the number of words in the file_
