// PLACES WE'VE VISITED

const peter_visited = ["united states of america", "mexico", "honduras", "portugal", "spain", "france", "italy", "netherlands", "romania", "turkey", "japan", "south korea", "china", "taiwan", "hong kong"];
const meghan_visited = ["united states of america", "mexico", "ethiopia", "portugal", "spain", "france", "italy", "netherlands", "japan", "south korea", "china", "thailand", "vietnam", "australia", "new zealand", "canada", "singapore"];
markVisitedPaths(peter_visited, meghan_visited);

function markVisitedPaths(peter_visited, meghan_visited) {
  // Get all title elements
  const titleElements = document.getElementsByTagName('title');
  // Convert to array and loop through each title
  Array.from(titleElements).forEach(titleElement => {
    const titleText = titleElement.innerHTML.toLowerCase();
    // Check if any name matches the title text
    const peterMatchingName = peter_visited.find(name => 
      titleText.includes(name.toLowerCase())
    );
    const meghanMatchingName = meghan_visited.find(name => 
      titleText.includes(name.toLowerCase())
    );
    
    if (peterMatchingName && !meghanMatchingName) {
      // Find the closest parent path element
      let pathElement = titleElement.closest('path');
      if (pathElement) {
        if (pathElement) {
          // Add the "visited" class to the path element
          pathElement.classList.add('visited_peter');
        }
      } else {
        let currentElement = titleElement.nextElementSibling;
        let shouldTerminate = false;
      
        // Function to process path elements
        const processElement = (element) => {
          if (shouldTerminate) return;

          if (element.tagName.toLowerCase() === 'title') {
            shouldTerminate = true;
            return;
          }
          if (element.tagName.toLowerCase() === 'path') {
            element.classList.add('visited_peter');
          } else if (element.tagName.toLowerCase() === 'g') {
            // If it's a g tag, process all its child elements
            Array.from(element.children).forEach(processElement);
          }
        };
        
        // Continue until we reach the next title or run out of siblings
        while (currentElement && currentElement.tagName.toLowerCase() !== 'title') {
          processElement(currentElement);
          currentElement = currentElement.nextElementSibling;
        }
      }
    } else if (!peterMatchingName && meghanMatchingName) {
      // Find the closest parent path element
      let pathElement = titleElement.closest('path');
      if (pathElement) {
        if (pathElement) {
          // Add the "visited" class to the path element
          pathElement.classList.add('visited_meghan');
        }
      } else {
        let currentElement = titleElement.nextElementSibling;
        let shouldTerminate = false;
      
        // Function to process path elements
        const processElement = (element) => {
          if (shouldTerminate) return;

          if (element.tagName.toLowerCase() === 'title') {
            shouldTerminate = true;
            return;
          }
          if (element.tagName.toLowerCase() === 'path') {
            element.classList.add('visited_meghan');
          } else if (element.tagName.toLowerCase() === 'g') {
            // If it's a g tag, process all its child elements
            Array.from(element.children).forEach(processElement);
          }
        };
        
        // Continue until we reach the next title or run out of siblings
        while (currentElement && currentElement.tagName.toLowerCase() !== 'title') {
          processElement(currentElement);
          currentElement = currentElement.nextElementSibling;
        }
      }
    } else if (peterMatchingName && meghanMatchingName) {
      // Find the closest parent path element
      let pathElement = titleElement.closest('path');
      if (pathElement) {
        if (pathElement) {
          // Add the "visited" class to the path element
          pathElement.classList.add('visited_together');
        }
      } else {
        let currentElement = titleElement.nextElementSibling;
        let shouldTerminate = false;
      
        // Function to process path elements
        const processElement = (element) => {
          if (shouldTerminate) return;

          if (element.tagName.toLowerCase() === 'title') {
            shouldTerminate = true;
            return;
          }

          if (element.tagName.toLowerCase() === 'path') {
            element.classList.add('visited_together');
          } else if (element.tagName.toLowerCase() === 'g') {
            // If it's a g tag, process all its child elements
            Array.from(element.children).forEach(processElement);
          }
        };
        
        // Continue until we reach the next title or run out of siblings
        while (currentElement && currentElement.tagName.toLowerCase() !== 'title') {
          processElement(currentElement);
          currentElement = currentElement.nextElementSibling;
        }
      }
    }
  });
}


const labels = document.querySelectorAll("text");

labels.forEach((label) => {
  label.addEventListener("mouseover", () => {
    const code = label.getAttribute("class");
    const elements = document.querySelectorAll(`.${code}`);

    for (const element of elements) {
      if (element.tagName !== "text") element.classList.add("hover");
    }
  });

  label.addEventListener("mouseleave", () => {
    const elements = document.querySelectorAll(`.hover`);

    for (const element of elements) {
      element.classList.remove("hover");
    }
  });
});

let selectedPalette = "normal";

const palettes = {
  signature: {
    background: "#87CEEB",
    land: "#FFF8DC",
    secondary: "#FFDEAD",
    text: "#800000",
  },
  grey: {
    background: "#fafafa",
    land: "#d3d3d3",
    secondary: "#939393",
    text: "#191919",
  },
  green: {
    background: "#dda15e",
    land: "#606c38",
    secondary: "#394021",
    text: "#fefae0",
  },
  calm: {
    background: "#9dc7e2",
    land: "#e1e0d0",
    secondary: "#c3c1a1",
    text: "#191919",
  },
  purple: {
    background: "#ffcdb2",
    land: "#b5838d",
    secondary: "#6d6875",
    text: "#023047",
  },
  dark: {
    background: "#2c3e50",
    land: "#f4a261",
    secondary: "#92613a",
    text: "#ffffff",
  },
};

const palettesDiv = document.getElementById("palettes");

for (const palette of Object.keys(palettes)) {
  const colors = Object.values(palettes[palette]);

  const group = document.createElement("div");
  group.setAttribute("class", "palette-colors");
  group.setAttribute("id", palette);
  palettesDiv.appendChild(group);

  colors.forEach((color) => {
    const cube = document.createElement("div");
    cube.style.backgroundColor = color;
    cube.style.height = "30px";

    group.appendChild(cube);
  });
}

const paletteColors = document.querySelectorAll(".palette-colors");

paletteColors.forEach((palette) => {
  palette.addEventListener("click", (e) => setColorPalette(e.target.id));
});

function setColorPalette(selectedPalette) {
  paletteColors.forEach((palette) => {
    palette.classList.remove("selected");
  });

  const paletteButton = document.getElementById(selectedPalette);
  paletteButton.classList.add("selected");

  const styles = `
    text {
      fill: ${palettes[selectedPalette].text};
    }

    #background {
      fill: ${palettes[selectedPalette].background};
    }

    .landxx {
      fill: ${palettes[selectedPalette].land};
      stroke: ${palettes[selectedPalette].secondary};
    }

    g:hover path,
    path:hover,
    path.hover,
    g.hover path {
      fill: ${palettes[selectedPalette].secondary};
    }
  `;

  const paletteStyle = document.getElementById("palette");
  paletteStyle?.remove();

  document.body.style.backgroundColor = palettes[selectedPalette].background;

  const svg = document.querySelector("#svg-map");
  const style = document.createElement("style");

  svg.prepend(style);
  style.setAttribute("id", "palette");

  style.appendChild(document.createTextNode(styles));
}

const labelsSwitch = document.getElementById("show-labels");

labelsSwitch.addEventListener("change", (e) => {
  const labels = document.getElementById("labels");
  labels.style.display = e.target.checked ? "block" : "none";
});

window.onload = function () {
  setColorPalette("signature");
};

document
  .getElementById("downloadButton")
  .addEventListener("click", function () {
    const svgContent = new XMLSerializer().serializeToString(
      document.querySelector("#svg-map")
    );

    const blob = new Blob([svgContent], { type: "image/svg+xml" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "SVG World Map with labels.svg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
