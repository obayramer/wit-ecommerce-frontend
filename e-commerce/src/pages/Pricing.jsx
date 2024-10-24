import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PricingPlan from "../components/PricingPlan";
import {
  faAngleRight,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Clients from "../components/layout/Clients.jsx";
import Trial from "../components/layout/Trial.jsx";
import InnerHeader from "../components/layout/InnerHeader.jsx";
import Footer from "../components/layout/Footer.jsx";

function Pricing({ data }) {
  const pricing = data.pricing;
  const { title, description, monthly, yearly, save, plans } =
    pricing.pricingplans;
  const faqs = pricing.faqs;
  const trial = pricing.trial;

  return (
    <div className="Pricing">
      <InnerHeader data={data} />
      <div className="p-12 font-bold flex flex-col gap-4 items-center">
        <h5 className="text-base text-accent">{pricing.subtitle}</h5>
        <h1 className="text-[3.6rem] leading-[5rem]">{pricing.title}</h1>
        <nav className="text-sm flex items-center gap-4">
          <Link to="/">{pricing.history.prev}</Link>
          <FontAwesomeIcon
            icon={faAngleRight}
            className="text-neutral text-base"
          />
          <Link to="/team" className="text-accent">
            {pricing.history.current}
          </Link>
        </nav>
      </div>

      <div className="bg-info  text-center flex flex-col justify-center gap-12 p-28 font-bold">
        <div className="flex flex-col items-center">
          <h1 className="text-[2.5rem] leading-[3rem] font-bold pb-3">
            {title}
          </h1>
          <p className="w-[45%] text-sm text-accent">{description}</p>
        </div>
        <div className="flex justify-center items-center gap-3 font-bold">
          <span>{monthly}</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-secondary"></div>
          </label>
          <span>{yearly}</span>
          <span className="border-0 border-solid rounded-[37px] px-5 py-3 bg-secondary-focus text-secondary">
            {save}
          </span>
        </div>
        <div className="flex justify-center items-end">
          {plans.map((plan, index) => {
            return <PricingPlan data={plan} key={index} index={index} />;
          })}
        </div>
      </div>

      <div className="bg-info py-20">
        <h4 className="text-xl text-center">{pricing.clients}</h4>
        <Clients data={data.clients} />
      </div>

      <div className="py-20 flex flex-col gap-12">
        <div className="py-11 flex flex-col items-center gap-3">
          <h2 className="text-center text-[2.5rem] leading-[3rem] font-bold">
            {faqs.title}
          </h2>
          <p className="w-1/3 text-center text-xl text-accent">
            {faqs.description}
          </p>
        </div>
        <div className="w-[73%] mx-auto flex flex-wrap justify-center gap-7">
          {faqs.qas.map((qa, index) => {
            return (
              <div className="max-w-[45%] p-6 flex gap-5">
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="text-secondary text-base"
                />
                <div>
                  <h5 className="font-bold text-base">{qa.q}</h5>
                  <p className="text-sm text-accent">{qa.a}</p>
                </div>
              </div>
            );
          })}
        </div>
        <h4 className="text-xl text-accent text-center">{faqs.footnote}</h4>
      </div>

      <Trial data={data.trial} />

      <Footer data={data} inner={true} />
    </div>
  );
}

export default Pricing;