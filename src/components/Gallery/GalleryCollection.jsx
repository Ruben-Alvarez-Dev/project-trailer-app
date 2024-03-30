import './GalleryCollection.css'
import poster from '../../assets/poster.jpg'
import { CollectionItem } from './CollectionItem'


export const GalleryCollection = ({title}) => {
  return (
    <>
    <div className="reference">
      <h2 className="collection-title">{title}</h2>
      <div className="collection">
      <div className="collection-display">
        <CollectionItem poster={poster} />
        <CollectionItem poster={poster} />
        <CollectionItem poster={poster} />
        <CollectionItem poster={poster} />
        <CollectionItem poster={poster} />
        <CollectionItem poster={poster} />
        <CollectionItem poster={poster} />
        <CollectionItem poster={poster} />
        <CollectionItem poster={poster} />
        <CollectionItem poster={poster} />
        <CollectionItem poster={poster} />
        <CollectionItem poster={poster} />
        <CollectionItem poster={poster} />
      </div>
      </div>
    </div>

    </>

  )
}
