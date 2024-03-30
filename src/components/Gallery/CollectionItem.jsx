import './CollectionItem.css'

export const CollectionItem = ({poster}) => {
  return (
  
    <div className="item">
        <img src={poster} alt="poster" />
    </div>  
  )
}
