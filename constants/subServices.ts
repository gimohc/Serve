export interface SubServiceObject {
    service: string;
    subService: string;
    minPrice: number;
    maxPrice: number;
}
export const sub : SubServiceObject[]  = [
    {service:"PC", subService: "Maintenance", minPrice: 5, maxPrice: 20}, 
    {service:"PC", subService: "Cleaning", minPrice: 5, maxPrice: 10}, 
    {service:"PC", subService: "Upgrading", minPrice: 5, maxPrice: 15}
];