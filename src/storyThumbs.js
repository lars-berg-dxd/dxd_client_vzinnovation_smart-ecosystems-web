// import { clamp, mapLinear, lerp } from "./utils";

const lilFrames = [
  {
    width: 2.6778,
    height: 8.05556,
    left: 46.0268,
    top: 61.7593,
  },
  {
    width: 5.6338,
    height: 12.4074,
    left: 26.9866,
    top: 34.537,
  },
  {
    width: 2.55608,
    height: 7.68519,
    left: 43.4533,
    top: 69.7222,
  },
  {
    width: 2.55608,
    height: 7.68519,
    left: 43.5403,
    top: 0.555556,
  },
  {
    width: 2.55608,
    height: 7.68519,
    left: 43.5403,
    top: 31.2963,
  },
  // {
  //   width: 2.66041,
  //   height: 76.9444,
  //   left: 43.4533,
  //   top: 0.555556,
  // },
  {
    width: 2.55608,
    height: 7.68519,
    left: 53.8863,
    top: 84.2593,
  },
  {
    width: 2.53869,
    height: 7.68519,
    left: 53.9037,
    top: 84.2593,
  },
  {
    width: 5.11215,
    height: 7.68519,
    left: 48.7046,
    top: 30.7407,
  },
  {
    width: 5.14693,
    height: 7.77778,
    left: 48.6872,
    top: 30.6481,
  },
  {
    width: 2.55608,
    height: 7.68519,
    left: 48.6872,
    top: 23.0556,
  },
  {
    width: 2.57347,
    height: 7.77778,
    left: 48.6872,
    top: 23.0556,
  },
  {
    width: 2.55608,
    height: 7.68519,
    left: 45.9883,
    top: 92.2554,
  },
  {
    width: 2.59085,
    height: 7.74461,
    left: 45.9709,
    top: 92.2554,
  },
  {
    width: 2.55608,
    height: 7.68519,
    left: 61.6936,
    top: 23.0556,
  },
  {
    width: 2.57347,
    height: 7.77778,
    left: 61.6936,
    top: 22.963,
  },
  {
    width: 2.55608,
    height: 7.68519,
    left: 53.8167,
    top: 46.0185,
  },
  {
    width: 2.57347,
    height: 7.77778,
    left: 53.8167,
    top: 45.9259,
  },
  {
    width: 2.55608,
    height: 7.68519,
    left: 61.7023,
    top: 77.3148,
  },
  {
    width: 2.57347,
    height: 7.77778,
    left: 61.7023,
    top: 77.2222,
  },
  {
    width: 2.55608,
    height: 7.68519,
    left: 56.4597,
    top: 76.5741,
  },
  {
    width: 2.55608,
    height: 7.68519,
    left: 56.4597,
    top: 15.1852,
  },
  {
    width: 2.55608,
    height: 7.68519,
    left: 56.4597,
    top: 54.0741,
  },
  // {
  //   width: 2.57347,
  //   height: 69.0741,
  //   left: 56.4597,
  //   top: 15.1852,
  // },
  {
    width: 2.55608,
    height: 7.68519,
    left: 66.681,
    top: 84.6618,
  },
  {
    width: 2.53869,
    height: 7.68519,
    left: 66.6984,
    top: 84.6618,
  },
  {
    width: 2.55608,
    height: 7.65201,
    left: 58.9948,
    top: 92.348,
  },
  {
    width: 2.59085,
    height: 7.65201,
    left: 58.9774,
    top: 92.348,
  },
  {
    width: 2.55608,
    height: 7.68519,
    left: 46.1311,
    top: 15.3896,
  },
  {
    width: 2.59085,
    height: 7.77778,
    left: 46.1137,
    top: 15.3896,
  },
  {
    width: 2.64302,
    height: 7.96296,
    left: 46.0442,
    top: 45.9259,
  },
  {
    width: 2.64302,
    height: 7.96296,
    left: 46.0442,
    top: 45.9259,
  },
];

// // reposition them to absolute pixels
// const width = 5751;
// const height = 1080;

lilFrames.forEach((f) => {
  f.position = "absolute";
  f.left += "%";
  f.top += "%";
  f.width += "%";
  f.height += "%";
  // f.left = mapLinear(f.left, 0, 100, 0, width) + "px";
  // f.top = mapLinear(f.top, 0, 100, 0, height) + "px";
  // f.width = mapLinear(f.width, 0, 100, 0, width) + "px";
  // f.height = mapLinear(f.height, 0, 100, 0, height) + "px";
});

export default lilFrames;
