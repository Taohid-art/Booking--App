import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft, faChevronRight, faTimes, faImage } from "@fortawesome/free-solid-svg-icons"
import "./Gallery.css"

const ImageGallery = () => {
  const [showModal, setShowModal] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

 
const images = [
    "https://i.pinimg.com/236x/b4/d7/95/b4d7959741db2077dd01fa331ea145b5.jpg",
    "https://i.pinimg.com/474x/b0/a3/2a/b0a32a8cd870df7c65535309810a27e1.jpg",
    "https://i.pinimg.com/236x/8f/03/88/8f0388d42507b375c46eebacbfc17ef1.jpg",
    "https://i.pinimg.com/236x/b4/d7/95/b4d7959741db2077dd01fa331ea145b5.jpg",
    "https://i.pinimg.com/474x/b0/a3/2a/b0a32a8cd870df7c65535309810a27e1.jpg",
    "https://i.pinimg.com/236x/8f/03/88/8f0388d42507b375c46eebacbfc17ef1.jpg",
    "https://i.pinimg.com/236x/b4/d7/95/b4d7959741db2077dd01fa331ea145b5.jpg",
    "https://i.pinimg.com/474x/b0/a3/2a/b0a32a8cd870df7c65535309810a27e1.jpg",
    "https://i.pinimg.com/236x/8f/03/88/8f0388d42507b375c46eebacbfc17ef1.jpg",
  ];
  const handleNextImage = (e) => {
    e.stopPropagation()
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const handlePrevImage = (e) => {
    e.stopPropagation()
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const openModal = (index) => {
    setCurrentImageIndex(index)
    setShowModal(true)
    document.body.style.overflow = "hidden"
  }

  const closeModal = () => {
    setShowModal(false)
    document.body.style.overflow = "unset"
  }

  return (
    <>
      <div className="gallery-grid">
        {/* Main large image */}
        <div className="gallery-item main-image" onClick={() => openModal(0)}>
          <img src={images[0] || "/placeholder.svg"} alt="Main view" />
        </div>

        {/* Grid of smaller images */}
        <div className="small-images-grid">
          {images.slice(1, 5).map((image, index) => (
            <div key={index} className="gallery-item" onClick={() => openModal(index + 1)}>
              <img src={image || "/placeholder.svg"} alt={`Room view ${index + 1}`} />
              {index === 3 && images.length > 5 && (
                <div className="more-photos">
                  <FontAwesomeIcon icon={faImage} />
                  <span>Show all photos</span>
                  <span className="photo-count">({images.length} photos)</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Modal/Lightbox */}
      {showModal && (
        <div className="gallery-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>
              <FontAwesomeIcon icon={faTimes} />
            </button>

            <div className="modal-image-container">
              <img src={images[currentImageIndex] || "/placeholder.svg"} alt={`View ${currentImageIndex + 1}`} />

              <button className="nav-button prev" onClick={handlePrevImage} disabled={currentImageIndex === 0}>
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>

              <button
                className="nav-button next"
                onClick={handleNextImage}
                disabled={currentImageIndex === images.length - 1}
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </button>

              <div className="image-counter">
                {currentImageIndex + 1} / {images.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ImageGallery

