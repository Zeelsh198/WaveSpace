/**
 * `AvatarFounders` displays a group of founder avatars using MUI's `AvatarGroup`,
 * followed by a short text indicating community support.
 * It is typically used to show social proof or founder endorsements.
 *
 * @component `AvatarFounders`
 * @example
 * <AvatarFounders />
 *
 * @returns {JSX.Element} A group of avatars with a supporting message
 */


import { Avatar, AvatarGroup } from "@mui/material";
import founder3 from "./FoundersAssets/67877f9495e27059b10a641e_founder img-1.webp";
import founder2 from "./FoundersAssets/67877f9495e27059b10a641f_founder img-2.webp";
import founder1 from "./FoundersAssets/67877f9495e27059b10a6435_ef5fd2a467fb1a0143aaf268d7342b19_ceo image.webp";

const AvatarFounders = () => {
  return (
    <div className="flex items-center">
      <AvatarGroup spacing={14}>
        <Avatar alt="Remy Sharp" src={founder1} />
        <Avatar alt="Travis Howard" src={founder2} />
        <Avatar alt="Cindy Baker" src={founder3} />
        <div className="flex flex-col mx-3 text-sm">
          <p>Loves by 500+</p>
          <p>founders</p>
        </div>
      </AvatarGroup>
    </div>
  );
};

export default AvatarFounders;
