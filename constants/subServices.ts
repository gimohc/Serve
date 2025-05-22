export interface SubServiceObject {
    service: string;
    subService: string;
    minPrice: number;
    maxPrice: number;
}
export const sub : SubServiceObject[]  = [
    {service:"PC", subService: "Maintenance", minPrice: 5, maxPrice: 20}, 
    {service:"PC", subService: "Cleaning", minPrice: 5, maxPrice: 10}, 
    {service:"PC", subService: "Upgrading", minPrice: 5, maxPrice: 15},
    {service:"Car", subService:"Car Service 1", minPrice:0, maxPrice:0},
    {service:"Car", subService:"Car Service 2", minPrice:0, maxPrice:0},
    {service:"Gardening", subService:"Gardening Service 1", minPrice:0, maxPrice:0},
    {service:"Gardening", subService:"Gardening Service 2", minPrice:0, maxPrice:0},
    {service:"Cleaning", subService:"Cleaning Service 1", minPrice:0, maxPrice:0},
    {service:"Cleaning", subService:"Cleaning Service 2", minPrice:0, maxPrice:0},

];