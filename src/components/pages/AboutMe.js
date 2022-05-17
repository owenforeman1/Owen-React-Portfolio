import React from "react";
import image from "./IMG_0799.JPG";

export default function About() {
  return (
    <div>
      <img id="Me" src={image}></img>

      <p id="meText">
        My name is Owen Foreman and this is my first React portfolio! I have joined
        this program to further my knowledge of code and computers. Computers
        are my biggest hobby and I want to know as much as I can. Anything from
        gaming all night with my friends to researching new tech. I love 3d art,
        I'm getting into Blender and photoshop so I can further my hobby.
        Hopefully by the end of this program I have the capabilites to be a full
        stack web developer and can get my foot in the field!
      </p>
    </div>
  );
}
