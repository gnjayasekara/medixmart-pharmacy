import { Button } from "@/components/ui/button"

type Category = {
  id: string
  name: string
}

type ProductCategoriesProps = {
  categories: Category[]
  selectedCategory: string
  onSelectCategory: (categoryId: string) => void
}

export function ProductCategories({ categories, selectedCategory, onSelectCategory }: ProductCategoriesProps) {
  return (
    <div className="space-y-2">
      <h2 className="text-xl font-semibold mb-4">Categories</h2>
      {categories.map((category) => (
        <Button
          key={category.id}
          variant={selectedCategory === category.id ? "default" : "outline"}
          className="w-full justify-start"
          onClick={() => onSelectCategory(category.id)}
        >
          {category.name}
        </Button>
      ))}
    </div>
  )
}
