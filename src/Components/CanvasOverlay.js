// CanvasOverlay.js;'

// https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Manipulating_video_using_canvas
// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/filter
// https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Compositing/Example

const gco = [
  "destination-in",
  "destination-atop",
  "destination-out",
  "xor",
  "copy",
  "source-over",
  "source-in",
  "source-out",
  "source-atop",
  "destination-over",
  "lighter",
  "multiply",
  "screen",
  "overlay",
  "darken",
  "lighten",
  "color-dodge",
  "color-burn",
  "hard-light",
  "soft-light",
  "difference",
  "exclusion",
  "hue",
  "saturation",
  "color",
  "luminosity",
];

class CanvasOverlay {
  constructor(canvas, options = {}) {
    Object.assign(
      this,
      {
        canvas,
        canvasWidth: canvas.width,
        canvasHeight: canvas.height,
        ctx: canvas.getContext("2d"),
        video: null,
        vidDim: {
          x: 0,
          y: 0,
          width: canvas.width,
          height: canvas.height,
        },
        align: "center", // 'bottom', 'top'
        gcoIndex: 0,
      },
      options
    );

    const { canvasHeight, canvasWidth } = this;
    const ctx = canvas.getContext("2d");
    const vidDim = {
      x: 0,
      y: 0,
      width: canvasWidth,
      height: canvasHeight,
    };

    var gradient = ctx.createLinearGradient(0, 0, canvasWidth, 0);
    // var gradient = ctx.createLinearGradient(0, 0, 0, canvasHeight);
    gradient.addColorStop(0.2, "#00000000");
    gradient.addColorStop(0.4, "#000");
    gradient.addColorStop(0.6, "#000");
    gradient.addColorStop(0.8, "#00000000");

    const updateVideo = () => {
      if (video.paused || video.ended) {
        return;
      }
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      ctx.save();
      ctx.drawImage(video, vidDim.x, vidDim.y, vidDim.width, vidDim.height);
      ctx.globalCompositeOperation = gco[this.gcoIndex];

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvasWidth, canvasHeight);

      ctx.restore();

      // let frame = ctx.getImageData(0, 0, canvasWidth, canvasHeight);
      // let l = frame.data.length;

      // for (let r = 0, g = 1, b = 2; r < l; r += 4, g += 4, b += 4) {
      //   let red = frame.data[r];
      //   let green = frame.data[g];
      //   let blue = frame.data[b];

      //   frame.data[r] = frame.data[g] = frame.data[b] =
      //     red * 0.3 + green * 0.6 + blue * 0.1;
      // }
      // ctx.putImageData(frame, 0, 0);

      requestAnimationFrame(updateVideo);
    };

    video.addEventListener("canplay", (e) => {
      const { videoWidth, videoHeight } = video;
      const scl = canvasWidth / videoWidth;

      vidDim.x = 0;
      vidDim.width = canvasWidth;
      vidDim.height = videoHeight * scl;

      switch (this.align) {
        case "top":
          vidDim.y = 0;
          break;
        case "bottom":
          vidDim.y = canvasHeight - videoHeight * scl;
          break;
        case "center":
          vidDim.y = canvasHeight * 0.5 - videoHeight * scl * 0.5;
          break;
      }
    });

    video.addEventListener("play", (e) => {
      updateVideo();
    });
  }

  play() {
    if (this.video) {
      this.video.play();
    }
  }

  pause() {}

  stop() {}

  // TEMP.. just for
  getCurrentGCO() {
    return gco[this.gcoIndex];
  }

  incGCO() {
    this.gcoIndex = (this.gcoIndex + 1) % gco.length;
    console.log("blending: " + gco[this.gcoIndex]);
    return gco[this.gcoIndex];
  }
}

export default CanvasOverlay;
