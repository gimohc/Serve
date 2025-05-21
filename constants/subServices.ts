export interface SubServiceObject {
    subService: string;
    minPrice: number;
    maxPrice: number;
}
export const subPCs : SubServiceObject[]  = [
    {subService: "Maintenance", minPrice: 5, maxPrice: 20}, 
    {subService: "Cleaning", minPrice: 5, maxPrice: 10}, 
    {subService: "Upgrading", minPrice: 5, maxPrice: 15}
];