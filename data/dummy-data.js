import Avocado from "../models/avocado";

export const AVOCADOS = [
  new Avocado(
    "A1",
    "Edeka",
    "Hass Class 1",
    "A1_Image",
    69,
    3.9,
    0,
    "Mexico",
    [
      "High water consumption in dry country",
      "Water extraction impacts geology",
      "Criminality around Avocado industry"
    ],
    "A1_Origin",
    "scoreOrange",
    423.2,
    [
      "Long distance transport of 9.841km",
      "Cooling and Ripening facility requires energy"
    ],
    "A1_Emission",
    "scoreOrange",
    "Industrial",
    ["Not organic, use of pesticides", "No fair pay information"],
    "A1_Farming",
    "scoreOrange"
  ),
  new Avocado(
    "A2",
    "Netto",
    "Hass Class 2",
    "A2_Image",
    43,
    2.7,
    0,
    "Peru",
    [
      "High water consumption in dry country",
      "Privatized water supply causes drinking water scarcity"
    ],
    "A2_Origin",
    "scoreOrange",
    566.2,
    [
      "Long Distance transport of 11.143km",
      "Cooling and Ripening facility requires energy"
    ],
    "A2_Emission",
    "scoreOrange",
    "Industrial",
    ["Not organic, use of pesiticides", "Reports of worker exploitation"],
    "A2_Farming",
    "scoreRed"
  ),
  new Avocado(
    "A3",
    "VollCorner",
    "Organic Hass",
    "A3_Image",
    82,
    4.5,
    0,
    "Spain",
    [
      "High water consumption w/ sufficient water supply",
      "Seasonal production",
      "Investments in sustainable production"
    ],
    "A3_Origin",
    "scoreGreen",
    122,
    [
      "Short transportation of ca. 600km",
      "Minimal requirement of ripening needed"
    ],
    "A3_Emission",
    "scoreOrange",
    "Organic and Fair",
    [
      "Organic farming without pesticides",
      "Fair pay to farmers",
      "Seasonal purchase"
    ],
    "A3_Farming",
    "scoreGreen"
  )
];
