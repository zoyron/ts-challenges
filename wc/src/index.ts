import * as fs from "fs";

let args: string | undefined | null = process.argv[2];
let fileName: string = process.argv[3];

/**
 * to check if everything is passed by the user
 * if the user doesn't pass the argument, then the string passed is assigned to the file name
 * the next step would check if that file exists or not
 * if the files exists and no argument is passed then all the functions will produce the output
 * if the file doesn't exist then user will be asked to enter a valid file name
 * if the correct argument with the name is passed, then that corresponding function would run
 * if the wrong argument is passed, but the file exists, then the user will be given a list of the valid argument options
 */

if (!fileName) {
  fileName = args;
  args = null;
}

if (fs.existsSync(fileName)) {
  switch (args) {
    case "-b":
      console.log(`${byteCount()} ${fileName}`);
      break;
    case "-l":
      console.log(`${lineCount()} ${fileName}`);
      break;
    case "-c":
      console.log(`${charCount()} ${fileName}`);
      break;
    case "-w":
      console.log(`${wordCount()} ${fileName}`);
      break;
    case null:
      console.log(
        `${lineCount()} ${wordCount()} ${byteCount()} ${charCount()} ${fileName}`
      );
      break;
    default:
      console.log(`Invalid option.\nThe following options are supported
        -w\tprints the number of words in the file
        -l\tprints the number of lines in the file
        -b\tprints the number of bytes in the file
        -c\tprints the number of characters in the file`);
  }
} else {
  console.log("Enter a valid file name that exists");
}

/**
 * implementation of functions
 */

// This function returns the number of bytes in the given file
function byteCount(): number | undefined {
  try {
    let buffer: Buffer = fs.readFileSync(fileName);
    return buffer.length;
  } catch (e: unknown) {
    const error = e as Error;
    console.log(error.message);
  }
}

// this function returns the number of lines in the given file
function lineCount(): number | undefined {
  try {
    let data: string = fs.readFileSync(fileName, "utf-8");
    return data.split(/\r\n|\r|\n/).length;
  } catch (e: unknown) {
    const error = e as Error;
    console.log(error.message);
  }
}

// This function returns the number of words in the given file
function wordCount(): number | undefined {
  try {
    let data: string = fs.readFileSync(fileName, "utf-8");
    return data.split(/\s+/g).filter(Boolean).length;
  } catch (e: unknown) {
    const error = e as Error;
    console.log(error.message);
  }
}

// This function returns the character count in the given file
function charCount(): number | undefined {
  try {
    let data: string = fs.readFileSync(fileName, "utf-8");
    return data.length;
  } catch (e: unknown) {
    const error = e as Error;
    console.log(error.message);
  }
}
