// All spacecraft information is stored here.
// All spacecraft information is stored here.
const objects = {
  Moon: [
    {
      name: "Apollo 11 Lunar Module / EASEP (Eagle / LM-5)",
      Nation: "United States of America (USA)",
      image: "https://nssdc.gsfc.nasa.gov/planetary/image/ap11_lm_as11_40_5927.jpg",
      Objective: "First crewed lunar landing (Mare Tranquillitatis / Sea of Tranquility) and deployment of the Early Apollo Scientific Experiment Package (EASEP)",
      Spacecraft_Mass: "15,103 kg ",
      Mission_Design_and_Management: "NASA - Office of Manned Space Flight ",
      Launch_Vehicle: "Saturn 5",
      Launch_Date_and_Time: "July 16, 1969 (Landed on Moon: July 20, 1969 at 20:17:40 UT; Ascent liftoff: July 21, 1969 at 17:54:01 UT)",
      Launch_Site: "Cape Canaveral, United States",
      Scientific_Instruments: [
      "Early Apollo Surface Experiments Package (EASEP)",
      "Passive Seismometer",
      "Lunar Dust Detector",
      "Laser Ranging Retroreflector (LRRR)",
      "Solar Wind Experiment",
      "Core Tube Soil Samplers & Lunar Sample Collection Apparatus"
     ],
      source: "https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1969-059C",
    },
    {
      name: "Apollo 15 Lunar Module /ALSEP (\"Falcon\", LM-10)",
      Nation: "United States of America (USA)",
      image: "https://nssdc.gsfc.nasa.gov/thumbnail/spacecraft/apollo_15_lm.gif",
      Objective: "Crewed Lunar Landing, Surface Exploration (with Lunar Roving Vehicle), Sample Collection, and Deployment of the Apollo Lunar Surface Experiments Package (ALSEP)",
      Spacecraft_Mass: "16,430 kg total ",
      Mission_Design_and_Management: "NASA",
      Launch_Vehicle: "Saturn 5",
      Launch_Date_and_Time: "July 26, 1971 (Lunar Landing: July 30, 1971 at 22:16:29 UT; Lunar Liftoff: August 2, 1971 at 17:11:22 UT)",
      Launch_Site: "Cape Canaveral, United States",
      Landing_Site: "Mare Imbrium region at the foot of the Apennine mountain range (26.13239° N, 3.63330° E)",
      Scientific_Instruments: [
      "Passive Seismometer (ALSEP)",
      "Lunar Surface Magnetometer (LSM - ALSEP)",
      "Solar Wind Spectrometer (ALSEP)",
      "Suprathermal Ion Detector (ALSEP)",
      "Cold Cathode Ion Gauge (ALSEP)",
      "Lunar Dust Detector (ALSEP)",
      "Heat Flow Experiment (ALSEP)",
      "Solar Wind Composition Experiment",
      "Soil Mechanics Investigations Apparatus",
      "Geologic Sample Collection & Surface Photography Equipment"
     ],
      source: "https://nssdc.gsfc.nasa.gov/"
    },

    {
      name: "Surveyor 3",
      Nation: "United States of America (USA)",
      image: "https://assets.science.nasa.gov/content/dam/science/psd/solar/2023/07/as12-48-7134_1280.jpg",
      Objective: "Lunar Soft-Landing",
      Spacecraft_Mass: "2,200 pounds (997.9 kilograms)",
      Mission_Design_and_Management: "NASA / JPL",
      Launch_Vehicle: "Atlas Centaur (AC-12 / Atlas D no. 292 / Centaur D)",
      Launch_Date_and_Time: "April 17, 1967 / 07:05:01 UT",
      Launch_Site: "Cape Canaveral, Fla. / Launch Complex 36B",
      Scientific_Instruments: "1. TV Camera<br>2. Surface Sample",
      source: "https://www.nasa.gov/"
    },

  ],
  Mars: [
    {
      name: "Sojourner Rover",
      Nation: "United States of America (USA)",
      image: "https://science.nasa.gov/wp-content/uploads/2024/03/mars-pathfinder-presidential-panorama-lg.jpg?resize=1536,265",
      Objective: "Technology demonstration to operate a free-ranging robotic rover on the Martian surface and analyze rocks and soil",
      Spacecraft_Mass: "23 pounds (10.6 kilograms)",
      Mission_Design_and_Management: "NASA / JPL-Caltech",
      Launch_Vehicle: "Delta II 7925",
      "Launch_Date_and_Time": "December 4, 1996 (UTC)",
      "Launch_Site": "Cape Canaveral Air Force Station, Florida",
      Scientific_Instruments: [
      "Alpha Proton X-ray Spectrometer (APXS)",
      "Three Cameras (provided images of the surrounding terrain for geological studies and documented performance/operating environment)"
      ],
      source: "https://science.nasa.gov/mission/mars-pathfinder/"
    },
    
    {
        name: "Spirit and Opportunity",
        Nation: "United States of America (USA)",
        image: "https://science.nasa.gov/wp-content/uploads/2024/03/mer-bythenumbers-infographic-feb2019.jpg?resize=1200,875",
        Objective: "Mars Surface Exploration (Look for signs of past water on Mars)",
        Spacecraft_Mass: "2,341 pounds (1,062 kilograms)(for each rover)",
        Mission_Design_and_Management: "NASA / JPL",
        Launch_Vehicle: "(Spirit) Delta 7925-9.5 (no. D298) and (Opportunity) Delta 7925H(no. D299)",
        Launch_Date_and_Time: "(Spirit) June 10, 2003 / 10:58:47 PDT and (Opportunity) July 7, 2003 / 20:18:15 PDT",
        Launch_Site: "Cape Canaveral",
        Scientific_Instruments: [
        "Panoramic Mast Assembly: Panoramic Cameras (Pancam), Navigation Cameras (Navcam), Miniature Thermal Emission Spectrometer (Mini-TES)",
        "Mössbauer Spectrometer (MB)",
        "Alpha Particle X-ray Spectrometer (APXS)",
        "Magnets (to collect dust particles)",
        "Microscopic Imager (MI)",
        "Rock Abrasion Tool (RAT)"
        ],
        source: "https://science.nasa.gov/mission/mars-exploration-rovers-spirit-and-opportunity/",
    },
    {
      name: "Phoenix",
      Nation: "United States of America (USA)",
      image: "https://assets.science.nasa.gov/dynamicimage/assets/science/psd/mars/downloadable_items/3/8/38686_Mars-InSight-Solar-Panels-Open-pia196641.jpg?w=2048&h=1365&fit=clip&crop=faces%2Cfocalpoint",
      Objective: "Mars Soft-Landing (Search for evidence of past or present microbial life and study the history of water in the Martian arctic)",
      Spacecraft_Mass: "1,477 pounds (670 kilograms) at launch ",
      Mission_Design_and_Management: "NASA / University of Arizona / JPL / Lockheed Martin Space Systems",
      Launch_Vehicle: "Delta II 7925 (three-stage)",
      Launch_Date_and_Time: "August 4, 2007 / 09:26:34 UT",
      Launch_Site: "Cape Canaveral Air Force Station, Fla. / Space Launch Complex 17A (SLC-17A)",
      Scientific_Instruments: [
    "Surface Stereo Imager (SSI)",
    "Robotic Arm (RA) & Robotic Arm Camera (RAC)",
    "Microscopy, Electrochemistry, and Conductivity Analyzer (MECA)",
    "Thermal and Evolved-Gas Analyzer (TEGA)",
    "Mars Descent Imager (MARDI)",
    "Meteorological Station (MET)",
      ],
      source: "https://science.nasa.gov/mission/phoenix/"
    },
  
  ]};

// Show one page and hide the others.
function showPage(pageId) {
  const pages = document.querySelectorAll(".page");
  pages.forEach(function(page) {
    page.classList.remove("active");
  });
  document.getElementById(pageId).classList.add("active");
}

// Show the objects for the selected planet.
function showObjects(planet) {
  showPage("gallery");
  document.getElementById("planetTitle").innerText = planet + " Objects";

  const list = document.getElementById("objectList");
  list.innerHTML = "";

  objects[planet].forEach(function(item, index) {
    list.innerHTML += `
      <div class="object" onclick="showDetails('${planet}', ${index})">
        <img src="${item.image}" alt="${item.name}">
        <h3>${item.name}</h3>
      </div>
    `;
  });
}

// Show all available information about one selected object.
function showDetails(planet, index) {
  const item = objects[planet][index];
  showPage("objectDetails");

  document.getElementById("details").innerHTML = `
    <img src="${item.image}" alt="${item.name}">
    <h1>${item.name}</h1>

    <div class="detail-row"><b>Nation:</b> ${item.Nation}</div>
    <div class="detail-row"><b>Objective:</b> ${item.Objective}</div>
    <div class="detail-row"><b>Spacecraft Mass:</b> ${item.Spacecraft_Mass}</div>
    <div class="detail-row"><b>Mission Design and Management:</b> ${item.Mission_Design_and_Management}</div>
    <div class="detail-row"><b>Launch Vehicle:</b> ${item.Launch_Vehicle}</div>
    <div class="detail-row"><b>Launch Date and Time:</b> ${item.Launch_Date_and_Time}</div>
    <div class="detail-row"><b>Launch Site:</b> ${item.Launch_Site}</div>
    <div class="detail-row"><b>Scientific Instruments:</b> ${item.Scientific_Instruments}</div>
    <p><b>Source:</b> <a href="${item.source}" target="_blank" style="color:#7ee7ff">NASA mission information</a></p>
  `;
}
function toggleMenu() {
    const menu = document.getElementById("dropdown");

    menu.classList.toggle("show");
}

