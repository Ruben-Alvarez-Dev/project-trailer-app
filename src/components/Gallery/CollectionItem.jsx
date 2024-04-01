import './CollectionItem.css';

export const CollectionItem = ({ item, onClick }) => {
  return (
    <div className="item" onClick={onClick}>
      <img src={item.poster} alt="poster" />
    </div>
  );
};