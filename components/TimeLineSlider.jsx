import React, { useState } from "react";
import HorizontalTimeline from "react-horizontal-timeline";
import previousProject from "@/src/previousProjects";

function App() {
	const [value, setValue] = useState(0);
	const [previous, setPrevious] = useState(0);

	// Extract dates, descriptions, and images from previousProject
	const VALUES = previousProject.map(project => project.date);
	const descriptions = previousProject.map(project => project.description);
	const images = previousProject.map(project => project.imageSrc);
  const links = previousProject.map(project => project.link);

	return (
		<div className="root-div text-white h-auto">
			<div style={{
				width: "100%",
				height: "100px",
				margin: "10px auto"
			}}>
				<HorizontalTimeline
					styles={{ outline: "#FFFFFF", foreground: "#FF0000" }}
					index={value}
					indexClick={(index) => {
						setValue(index);
						setPrevious(value);
					}}
					values={VALUES}
          getLabel={(date) => <div style={{ fontSize: "14px", color: "#FFF" }}>{date}</div>} // Adjust font size and color
				/>
			</div>
			<div className="text-center text-white">
        <div className="text-xl underline">
          {previousProject[value].title}
        </div>
        <div className="text-white" style={{ display: "flex", alignItems: "center" }}>
			  	<img src={images[value]} alt="Project" style={{ maxWidth: "50%", height: "auto", marginRight: "20px" }} />
			  	<div>
            {descriptions[value]}
            {links[value] && (
              <div>
                <a href={links[value]} rel="noopener noreferrer" target="_blank" className="text-red-500">Learn more</a>
              </div>
            )}
          </div>
			  </div>
			</div>
		</div>
	);
}

export default App;
