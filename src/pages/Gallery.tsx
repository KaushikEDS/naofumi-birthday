import './Gallery.css'

const Gallery = () => {
  // Actual photos from your collection
  const photos = [
    { id: 1, src: '/images/0447feaa-bde3-49c7-b671-ff6c1fc81188.jpg', alt: 'Memory 1' },
    { id: 2, src: '/images/107997d6-775e-4fe6-bcd9-e9a6009b20dc.jpg', alt: 'Memory 2' },
    { id: 3, src: '/images/115b2253-95a1-4ffc-bb95-38035e845722.jpg', alt: 'Memory 3' },
    { id: 4, src: '/images/2325b127-0fa4-4ba2-a1f7-2b29fc342002.jpg', alt: 'Memory 4' },
    { id: 5, src: '/images/2ed91b21-9a86-43d2-af14-79dc5069b0fb.jpg', alt: 'Memory 5' },
    { id: 6, src: '/images/4dafe874-91a3-47d2-8a35-8a2832ab267a.jpg', alt: 'Memory 6' },
    { id: 7, src: '/images/5cdb7fc7-b4ed-4603-b945-5d49cdd3140b.jpg', alt: 'Memory 7' },
    { id: 8, src: '/images/7cea4d93-2630-4e11-bcf4-7d7df26ba6ae.jpg', alt: 'Memory 8' },
    { id: 9, src: '/images/8adce09a-54de-4af0-9d5c-148d1071a3f9.jpg', alt: 'Memory 9' },
    // { id: 10, src: '/images/845e996e-e067-4cd1-b0f4-15b412f4d392.jpg', alt: 'Memory 10' },
    { id: 11, src: '/images/bb5c3350-fb2e-44e7-8c80-9d4f389dd348.jpg', alt: 'Memory 11' },
    // { id: 12, src: '/images/eb8d0ed9-66da-4d9c-9769-f92bf025f1e8.jpg', alt: 'Memory 12' },
    { id: 13, src: '/images/f3ac1bb2-bf16-4171-a3ef-4c84b2c6a9b8.jpg', alt: 'Memory 13' },
    { id: 14, src: '/images/IMG_8576.jpg', alt: 'Memory 14' },
    { id: 15, src: '/images/IMG_8577.jpg', alt: 'Memory 15' },
    { id: 16, src: '/images/IMG_8578.jpg', alt: 'Memory 16' },
    { id: 17, src: '/images/PHOTO-2023-12-03-10-59-22.jpg', alt: 'Memory 17' },
    { id: 18, src: '/images/PHOTO-2023-12-28-07-27-26.jpg', alt: 'Memory 18' },
    { id: 19, src: '/images/PHOTO-2024-10-14-14-36-01.jpg', alt: 'Memory 19' },
    { id: 20, src: '/images/PHOTO-2024-12-08-07-05-25.jpg', alt: 'Memory 20' },
  ]

  return (
    <div className="gallery-page page">
      <section className="gallery-header-section">
        <div className="container">
          <div className="header-decoration">
            <div className="header-line"></div>
            <h1 className="page-title">Gallery</h1>
            <div className="header-line"></div>
          </div>
          <p className="page-subtitle">Celebrating the moments we've shared together</p>
        </div>
      </section>

      <section className="gallery-content">
        <div className="container">
          <div className="gallery-grid">
            {photos.map((photo, index) => (
              <div 
                key={photo.id} 
                className="gallery-item"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img src={photo.src} alt={photo.alt} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Gallery
