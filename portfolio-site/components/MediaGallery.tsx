import Image from "next/image";

interface MediaItem {
  type: 'image' | 'video';
  src: string;
  alt?: string;
  title?: string;
  width?: number;
  height?: number;
}

interface MediaGalleryProps {
  mainImage: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
  additionalMedia?: MediaItem[];
}

export function MediaGallery({ mainImage, additionalMedia = [] }: MediaGalleryProps) {
  return (
    <div className="media-gallery mb-8">
      {/* Main large image */}
      <div className="main-image mb-6">
        <Image
          src={mainImage.src}
          alt={mainImage.alt}
          width={mainImage.width || 800}
          height={mainImage.height || 450}
          className="w-full h-auto rounded-lg shadow-lg object-contain"
          priority
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
        />
      </div>
      
      {/* Grid of smaller media items */}
      {additionalMedia.length > 0 && (
        <div className="additional-media grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {additionalMedia.map((item, index) => (
            <div key={index} className="media-item">
              {item.type === 'image' ? (
                <Image
                  src={item.src}
                  alt={item.alt || `Media item ${index + 1}`}
                  width={item.width || 400}
                  height={item.height || 225}
                  className="w-full h-full object-cover"
                />
              ) : (
                <iframe
                  src={item.src}
                  title={item.title || `Video ${index + 1}`}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}