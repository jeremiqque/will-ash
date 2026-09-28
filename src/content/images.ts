/**
 * Every image on the site, imported statically so Next.js can:
 *  - read the real size (no layout shift),
 *  - generate a tiny blurred preview shown while the full image loads,
 *  - fingerprint the file so browsers cache it for a year.
 * To replace an image, overwrite the file in public/images/ with the same name.
 */
import heroLadyJustice from "../../public/images/hero-lady-justice-courthouse.jpg";
import columnsWillAsh from "../../public/images/columns-will-ash.jpg";
import libraryBusts from "../../public/images/library-busts.jpg";
import gavelScalesDesk from "../../public/images/gavel-scales-desk.jpg";
import briefcaseGavel from "../../public/images/briefcase-gavel.jpg";
import agreementClipboard from "../../public/images/agreement-clipboard.jpg";
import gavelOpenBook from "../../public/images/gavel-open-book.jpg";
import publicSectorBuilding from "../../public/images/public-sector-building.jpg";
import dataPrivacyPadlock from "../../public/images/data-privacy-padlock.jpg";
import financialServicesStatue from "../../public/images/financial-services-statue.jpg";
import lawyersMeeting from "../../public/images/lawyers-meeting.jpg";
import consultationBooking from "../../public/images/consultation-booking.jpg";
import logoSilver from "../../public/images/logo-silver.png";
import logoMarkSilver from "../../public/images/logo-mark-silver.png";
import logoMarkDark from "../../public/images/logo-mark-dark.png";

export const images = {
  heroLadyJustice,
  columnsWillAsh,
  libraryBusts,
  gavelScalesDesk,
  briefcaseGavel,
  agreementClipboard,
  gavelOpenBook,
  publicSectorBuilding,
  dataPrivacyPadlock,
  financialServicesStatue,
  lawyersMeeting,
  consultationBooking,
  logoSilver,
  logoMarkSilver,
  logoMarkDark,
};
