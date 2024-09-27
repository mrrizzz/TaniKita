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