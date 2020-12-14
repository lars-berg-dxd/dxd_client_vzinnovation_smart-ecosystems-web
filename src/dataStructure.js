import { deepCopyFromTo, generateUUID } from "./utils";

const defaultStory = {
  id: "uuid",
  persona: "citizen",
  storyName: "Story Name 3",
  thumbnail: {
    width: "2.64302%",
    height: "7.96296%",
    left: "46.0442%",
    top: "45.9259%",
    media: [], // urls to images & videos this
  },
  chapters: {
    challenge: {
      media: [], // urls to images/videos
      prompt: `What if everyone had access to the best doctors in the world, even those living in the most remote places?`,
      message: `Rural communities often face immense health-related challenges and lack of access to care. What if these communities had access to the best surgeons, connected across 3000 miles through precision robotics and the power of 5G?`,
    },

    solution: {
      media: [], // urls to images/videos
      prompt: `Rural communities often face immense health-related challenges and lack of access to care. What if these communities had access to the best surgeons, connected across 3000 miles through precision robotics and the power of 5G?`,
      message: `Verizon is collaborating with Corindus to deliver robotic-assisted healthcare procedures across geographies and demographics. Thanks to the low latency and high bandwidth of 5G, patients in underserved locations can access the best surgeons and undergo safer procedures with better outcomes.`,
    },

    heroes: {
      partnes: [
        {
          logo: `some/url/to/an/img`,
          message: `The 5G Labs works with startups, academia and enterprise teams to build a 5G-powered world. We work on 5G trials, hackathons, industry partnerships, prototyping challenges and more.`,
        },
        {
          logo: `some/url/to/an/img`,
          message: `Combining smart capital with access to Verizon's ecosystem and strategic roadmap, Verizon Ventures helps innovators advance their businesses in growing and impactful sectors.`,
        },
        {
          logo: `some/url/to/an/img`,
          message: `Corindus is a global technology leader in robotic-assisted vascular interventions.`,
        },
      ],
    },

    impact: {
      media: [], // urls to images/video
      attribution: `- Dr. Ryan Madder, Cardiologist`,
      quote: `"We've demonstrated that it’s technically feasible now for a physician at any institution to reach patients as far as 3,000 miles”`,
    },
  },
};

class Story {
  constructor(options = {}) {
    // take in the defaults and generate a unique id
    Object.assign(this, deepCopyFromTo(defaultStory), { id: generateUUID() });

    // overwrite props with the options
    deepCopyFromTo(options, this);
  }
}

const stories = [
  new Story(),
  new Story(),
  new Story(),
  new Story(),
  new Story(),
];

const content = {
  Attract: {
    title: `Moving the world forward.`,
    subtitle: `we're helping people solve the worlds biggest problems`,
    prompt: "our mission",
  },

  Introduce: {
    prompt: `our mission`,
    title: `We are all connected.`,
    subtitle: `A new era of global, digital connectivity is is reshaping our shared experiences.`,
    personas: {
      citizen: {
        icon: "static/icons/icon-personas-citizens.svg",
        images: [],
        description: "Creating smart, connected, and safe communities",
      },
      student: {
        icon: "static/icons/icon-personas-students.svg",
        images: [],
        description: "Preparing people for the jobs of the future",
      },
      worker: {
        icon: "static/icons/icon-personas-workers.svg",
        images: [],
        description: "Delivering the promise of digital health",
      },
      patient: {
        icon: "static/icons/icon-personas-patients.svg",
        images: [],
        description: "Closing the divide through STEM learning",
      },
    },
  },

  Explore: {
    title: `Explore our stories.`,
    prompt: `begin exploring`,
    stories: stories,
  },
};

export default content;
