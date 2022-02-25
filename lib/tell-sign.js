import { getDateDetails } from "../utils/index.js";
import { getPossibleZodiacs, getZodiacDates, getZodiacSign } from "./helpers/index.js";
import { siderealSigns } from "./signs/sidereal.js";
import { tropicalSigns } from "./signs/tropical.js";

export const tellSign = ({ month, day, year }, type = "tropical") => {
  const signs = type === "sidereal" ? siderealSigns : tropicalSigns;
  const [birthMonth, birthDay] = getDateDetails(day, month, year);
  const filteredSigns = getPossibleZodiacs(signs, birthMonth, getZodiacDates);
  const signDetails = getZodiacSign(filteredSigns, { birthMonth, birthDay, getZodiacDates });
  return signDetails;
};
