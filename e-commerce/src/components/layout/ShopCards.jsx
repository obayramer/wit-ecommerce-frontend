function renderCard(card, width, height, key, showContent = true) {
  return (
    <div key={key} className="relative" style={{ width: width, height: height }}>
      <img src={card.img} alt="" className="w-full h-full object-cover" />
      {showContent && (
        <div className="font-bold text-white bg-[#23a5f0c4] flex flex-col gap-5 absolute left-0 bottom-0 h-fit w-fit pl-[10%] pr-[25%] pt-[10%] pb-[7%] sm:w-full">
          <h4 className="text-2xl">{card.message}</h4>
          <button className="border border-solid rounded-md border-white py-4 px-10 text-sm">
            {card.button}
          </button>
        </div>
      )}
    </div>
  );
}

function ShopCards({ data }) {
  return (
    <div className="ShopCards py-[5rem] flex justify-center">
      {/* Shopcard 1 - Mesaj ve buton gösterilsin */}
      <div className="shopcard1" style={{ width: "611px", height: "572px" }}>
        {renderCard(data.cards[0], "611px", "572px", 0, true)} {/* showContent true */}
      </div>

      {/* Shopcard 2 ve 3 alanı */}
      <div className="ml-6 flex flex-col justify-between">
        {/* Shopcard 2 - Mesaj ve buton gösterilsin */}
        {renderCard(data.cards[1], "557px", "289px", 1, true)}

        {/* Boşluk */}
        <div className="h-[22px]"></div>

        {/* Shopcard 3 - Mesaj ve buton gösterilsin */}
        {renderCard(data.cards[2], "557px", "261px", 2, true)}
      </div>
    </div>
  );
}

export default ShopCards;