import SectionTeam from "../components/SectionTeam";
import SecitonTrialOffer from "../components/SectionTrialOffer";
import SectionTop from "../components/team_page/SectionTop";
import SectionGallery from "../components/team_page/SectionGallery";

export default function Team() {
  return (
    <>
      <SectionTop />
      <SectionGallery />
      <SectionTeam />
      <SecitonTrialOffer />
    </>
  );
}