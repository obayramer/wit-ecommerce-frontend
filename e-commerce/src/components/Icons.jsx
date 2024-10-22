import { getClassName } from "../utils/ClassName";

function Icon({ classesDefault, classNameFromArgument }) {
  const className = getClassName(classesDefault, classNameFromArgument);

  return <i className={className} />;
}

export function IconFacebook({ className }) {
  return (
    <Icon
      classesDefault="fa-brands fa-facebook"
      classNameFromArgument={className}
    />
  );
}

export function IconFacebookSquare({className}) {

    return <Icon classesDefault="fa-brands fa-square-facebook" classNameFromArgument={className}/>
}

export function IconInstagram({ className }) {
  return (
    <Icon
      classesDefault="fa-brands fa-instagram"
      classNameFromArgument={className}
    />
  );
}

export function IconTwitter({ className }) {
  return (
    <Icon
      classesDefault="fa-brands fa-twitter"
      classNameFromArgument={className}
    />
  );
}

export function IconLinkedIn({className}) {

    return <Icon classesDefault="fa-brands fa-linkedin" classNameFromArgument={className}/>
}

export function IconPlay({ className }) {
  return (
    <Icon classesDefault="fa-solid fa-play" classNameFromArgument={className} />
  );
}

export function IconPhone({className}) {

    return <Icon classesDefault="fa-solid fa-phone" classNameFromArgument={className}/>
}

export function IconLocationDot({className}) {

    return <Icon classesDefault="fa-solid fa-location-dot" classNameFromArgument={className}/>
}

export function IconEnvelope({className}) {

    return <Icon classesDefault="fa-solid fa-envelope" classNameFromArgument={className}/>
}