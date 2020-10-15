/*
Author: chankruze (chankruze@geekofia.in)
Created: Thu Oct 15 2020 15:40:11 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

// https://www.npmjs.com/package/react-player

import React from "react";
import ReactPlayer from "react-player";

function VideoPlayerComp() {
  const url = "https://youtu.be/TvOvxGMnIO0";

  return (
    <div>
      <ReactPlayer
        url={url}
        controls
        pip="true"
        stopOnUnmount={false}
        onReady={() => console.log("[I] Video Ready")}
        onBuffer={() => console.log("[I] Video Buffering")}
        onDuration={(duration) => console.log("[I] Video Duration", duration)}
        onEnded={() => console.log("[I] Video Ended")}
        onError={() => console.log("[I] Video Error")}
        onPause={() => console.log("[I] Video Paused")}
        onPlay={() => console.log("[I] Video Playing")}
        onSeek={(position) => console.log("[I] Video Seeked", position)}
        onProgress={(progress) => console.log("[I] Video Progress", progress)}
        onEnablePIP={() => console.log("[I] PIP Enabled")}
        config={{
          youtube: {
            playerVars: { showinfo: 1 },
          },
          facebook: {
            appId: "12345",
          },
        }}
      />
    </div>
  );
}

export default VideoPlayerComp;
