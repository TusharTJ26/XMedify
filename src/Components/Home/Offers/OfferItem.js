import "./OfferItem.css";

export default function OfferItem() {
  const offerCards = [
    "./images/Offers/first.png",
    "./images/Offers/second.png",
    "./images/Offers/first.png",
  ];
  return (
    <div className="offerItemHolder">
      {offerCards.map((item, index) => {
        return (
          <div key={index} className="offer-item">
            <img
              src={item}
              width="398.3px"
              height="199.15px"
              style={{ objectFit: "cover" }}
            />
          </div>
        );
      })}
    </div>
  );
}
