interface Plant {
    name: string;
    growthTime: number;
    yield: number;
    type: string;
    imageUrl: string;
}

interface PlantProps {
    plant: Plant;
}

const plantData = [
    {
        name: "Carrot",
        growthTime: 75,
        yield: 2,
        type: "vegetable",
        imageUrl: "/plants/carrot.jpg",
    },
    {
        name: "Tomato",
        growthTime: 60,
        yield: 5,
        type: "vegetable",
        imageUrl: "/plants/tomato.jpg",
    },
    {
        name: "Lettuce",
        growthTime: 45,
        yield: 1.5,
        type: "vegetable",
        imageUrl: "/plants/lettuce.jpg",
    },
    {
        name: "Cucumber",
        growthTime: 50,
        yield: 3,
        type: "vegetable",
        imageUrl: "/plants/cucumber.jpg",
    },
    {
        name: "Pepper",
        growthTime: 70,
        yield: 4,
        type: "vegetable",
        imageUrl: "/plants/pepper.jpg",
    },
    {
        name: "Rose",
        growthTime: 30,
        yield: 0,
        type: "flower",
        imageUrl: "/plants/rose.jpg",
    },
    {
        name: "Sunflower",
        growthTime: 70,
        yield: 0,
        type: "flower",
        imageUrl: "/plants/sunflower.jpg",
    },
];