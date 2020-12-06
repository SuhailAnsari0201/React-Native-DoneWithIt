const config = require("config");

const mapper = (listing) => {
  const baseUrl = config.get("assetsBaseUrl");
  const mapImage = (image) => ({
    url: `${baseUrl}${image.fileName}_full.jpg`,
    thumbnailUrl: `${baseUrl}${image.fileName}_thumb.jpg`,
  });
  let list = {
    id: listing._id,
    title: listing.title,
    description: listing.description,
    price: listing.price,
    userId: listing.userId,
    categoryId: listing.categoryId,
    location: listing.location,
  };

  return {
    ...list, //...listing gives some extraa vlues but ...listing._doc give correct values
    images: listing.images.map(mapImage),
  };
};

module.exports = mapper;
