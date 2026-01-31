import client from "./contentful";

export const getProducts = async () => {
  const response = await client.getEntries({
    content_type: "fishSite",
    include: 2,
  });

  return response.items.map((item) => {
    const pictures = item.fields.pictures;

    const images = Array.isArray(pictures)
      ? pictures
          .map((p) => p?.fields?.file?.url)
          .filter(Boolean)
          .map((url) => `https:${url}`)
      : pictures?.fields?.file?.url
      ? [`https:${pictures.fields.file.url}`]
      : [];

    return {
      id: item.sys.id,
      name: item.fields.name,
      description: item.fields.description,
      price: item.fields.price,
      category: item.fields.category,
      featured: item.fields.featured ?? false,
      images,
    };
  });
};
