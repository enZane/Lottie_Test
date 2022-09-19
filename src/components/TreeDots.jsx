import { useLottie, useLottieInteractivity } from "lottie-react";
import treeDots from "./Frame 1-test.json";

const options = {
  animationData: treeDots,
};

export default function TreeDots() {
  const lottieObj = useLottie(options);

  const Animation = useLottieInteractivity({
    lottieObj,
    mode: "cursor",
    actions: [
      {
        position: { x: [0, 1], y: [0, 1] },
        type: "loop",
        frames: [0, 60],
      },
      {
        position: { x: -1, y: -1 },
        type: "stop",
        frames: [0],
      },
    ],
  });

  return Animation;
}
