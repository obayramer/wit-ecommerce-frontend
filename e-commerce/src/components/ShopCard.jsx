export default function ShopCard({ urlImg, text, title, className }) {
    const defaultClasses = "relative flex justify-center items-center";
    className = className ? `${defaultClasses} ${className}` : defaultClasses;
    return (
      <div className={className}>
        <img className="img-absolute" src={urlImg} alt="imgShopCard" />
        <div className="relative z-10 text-clr-light text-center">
          <span className="font-bold block">{title}</span>
          <span className="text-[0.875rem] block">{text}</span>
        </div>
      </div>
    );
  }