export default function IconText({ classIcon, text, classText, ...rest }) {
    return (
      <span {...rest}>
        <i className={classIcon} />
        <span className={classText}>{text}</span>
      </span>
    );
  }