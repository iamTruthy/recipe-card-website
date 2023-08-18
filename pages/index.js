import Head from 'next/head';
import RecipeCard from '../components/RecipeCard';
import Link from 'next/link';


const recipes = [
    {
        "id": 1,
        "title": "Delicious Pasta",
        "description": "A delightful pasta dish with fresh tomatoes and basil.",
        "image": "/images/pasta.jpg",
        "ingredients": [
            "Pasta",
            "Tomatoes",
            "Basil",
            "Olive Oil",
            "Salt",
            "Pepper"
        ],
        "instructions": [
            "Boil the pasta until al dente.",
            "Chop the tomatoes and basil.",
            "Combine cooked pasta with tomatoes, basil, olive oil, salt, and pepper.",
            "Serve hot."
        ]
    },
    {
        "id": 2,
        "title": "Chocolate Brownies",
        "description": "Rich and gooey chocolate brownies that melt in your mouth.",
        "image": "/images/brownies.jpg",
        "ingredients": [
            "Dark Chocolate",
            "Butter",
            "Eggs",
            "Sugar",
            "Flour",
            "Vanilla Extract"
        ],
        "instructions": [
            "Melt the chocolate and butter together.",
            "Whisk eggs and sugar, then add melted chocolate mixture and vanilla extract.",
            "Fold in the flour until just combined.",
            "Bake in a preheated oven for 25-30 minutes.",
            "Let cool before cutting into squares."
        ]
    },
    {
        "id": 3,
        "title": "Delicious Parfait",
        "description": "A delightful layered dessert made with yogurt, granola, and fresh fruits.",
        "image": "/images/parfait.jpg",
        "ingredients": [
            "Yogurt (Greek or Regular)",
            "Granola",
            "Assorted Fresh Fruits (e.g., Berries, Banana, Mango)",
            "Honey"
        ],
        "instructions": [
            "In a glass or jar, layer yogurt, granola, and fresh fruits.",
            "Drizzle honey over each layer.",
            "Repeat the layers until the container is filled.",
            "Top with more fresh fruits and a drizzle of honey.",
            "Serve immediately and enjoy the delicious parfait!"
        ]
    },
    {
        "id": 4,
        "title": "Fresh Fruit Salad",
        "description": "A refreshing mix of seasonal fruits, perfect for a healthy snack or dessert.",
        "image": "/images/fruitsalad.jpg",
        "ingredients": [
            "Assorted Fresh Fruits (e.g., Berries, Melon, Grapes, Pineapple)",
            "Mint Leaves",
            "Honey or Maple Syrup (optional)"
        ],
        "instructions": [
            "Wash and chop the fresh fruits.",
            "Combine the fruits in a bowl.",
            "Drizzle with honey or maple syrup if desired.",
            "Garnish with mint leaves.",
            "Toss gently to combine.",
            "Chill in the refrigerator before serving.",
            "Enjoy the delicious and nutritious fruit salad!"
        ]
    }
];

export default function Home() {
    return (
        <div>
            <Head>
                <title>Recipe Cards</title>
                <meta name="description" content="Recipe cards showcase" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <nav className="navbar">
  <div className="logo">
    <img src="images/logo.jpg" className="logo-img" />
  </div>
  <h3 className="page-heading">Delicious Recipe Cards</h3>
</nav>


            <main>
                <div className="recipe-cards-container">
                    {recipes.map((recipe) => (
                        <RecipeCard key={recipe.id} recipe={recipe} />
                    ))}
                </div>
            </main>
        </div>
    );
}
