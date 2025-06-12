const BenefitsCard = ({
  title,
  description,
  mediaUrl,
  mediaType = "video",
  className = "",
  titleDescriptionclasses
}) => {
  return (
    <div
      className={`bg-white  rounded-2xl p-6  flex  items-center text-center ${className}`}
      style={{ Width: "400px" }}
    ><div className={titleDescriptionclasses}>
      {title && <h3 className="text-2xl font-semibold mb-2">{title}</h3>}
      {description && <p className="text-gray-600 text-lg">{description}</p>}
      </div>
      {mediaUrl && (
        <div className="mb-4 w-full">
          {mediaType === "image" ? (
            <img
              src={mediaUrl}
              alt={title}
              className="max-h-48 w-auto mx-auto object-contain"
            />
          ) : mediaType === "video" ? (
            <video
              src={mediaUrl}
              loop
              muted
              autoPlay
              className="max-h-52 w-full mx-auto"
            >
              Your browser does not support the video tag.
            </video>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default BenefitsCard;
