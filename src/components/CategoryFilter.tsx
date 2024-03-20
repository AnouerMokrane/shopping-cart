type CategoryFilterProps = {
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
};

const CategoryFilter = ({
  setSelectedCategory,
  selectedCategory,
}: CategoryFilterProps) => {
  const categories = [
    "all",
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];
  return (
    <div>
      <h1 className="mb-4">Categories :</h1>
      <div className="flex gap-3 ">
        {categories.map((category) => (
          <button
            key={category}
            className={`text-xs  p-1 rounded-md ${
              selectedCategory === category
                ? "bg-black text-white"
                : "bg-gray-400"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
