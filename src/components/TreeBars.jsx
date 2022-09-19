import { useLottie, useLottieInteractivity } from "lottie-react";
import treeDots from "./bars.json";

export default function TreeBars() {
  const lottieObj = useLottie(
    {
      animationData: treeDots,
    },
    {
      border: "1px solid black",
      height: "800px",
    }
  );

  const Animation = useLottieInteractivity({
    lottieObj,
    mode: "scroll",
    actions: [
      {
        visibility: [0, 0.33],
        type: "seek",
        frames: [0, 20],
      },
      {
        visibility: [0.33, 0.66],
        type: "seek",
        frames: [20, 40],
      },
      {
        visibility: [0.66, 1],
        type: "seek",
        frames: [40, 60],
      }
    ],
  });

  return Animation;
}
