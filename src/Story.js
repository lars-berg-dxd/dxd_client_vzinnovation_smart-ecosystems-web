import { deepCopyFromTo, generateUUID } from "./utils.js";

class Chapter {
  constructor(options = {}) {
    Object.assign(
      this,
      {
        id: generateUUID(),
        isType: "Chapter",
        header:
          "this is a string that is displayed in big writing on the left side",
        type: "challenge",
        caption: `this is some text content that gets displayed relative to the image slideshow. There is more of it and it's a smaller font.`,
        // media: [..., images/video]
      },
      options
    );
  }
}

class Story {
  constructor(options = {}) {
    // defaults
    Object.assign(this, {
      id: generateUUID(),
      isType: "Story",
      persona: "Citizen", // Citizen, Student, Worker, Patient
      title: "I am the title.",
      chapters: {
        challenge: new Chapter({ type: "challenge" }),
        solution: new Chapter({ type: "solution" }),
        heroes: new Chapter({ type: "heroes" }),
        impact: new Chapter({ type: "impact" }),
      },
    });

    // copy options
    deepCopyFromTo(options, this);
  }
}

export { Story, Chapter };
