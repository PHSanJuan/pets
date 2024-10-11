import { NotFoundError } from "../models/notFound";
import { Pet } from "../models/pet";

const pets: Pet[] = [
    {
        id: 1,
        name:"Rex",
        age: 2,
        breed: "labrador",
        color: "brown",
        gender: "male",
    },
    {
        id: 2,
        name: "Sparky",
        age: 5,
        breed: "golden retriever",
        color: "golden",
        gender: "male",
    }
];

export class PetsService {
    
    async fetchPets(): Promise<Pet[]> {
        return pets;
    }

    async getPet(id: number): Promise<Pet | undefined> {
        const pet = pets.find((p) => pet.id === id);
        if (pet === null) throw NotFound;
        return pet;
    }

    async createPet(pet: Pet): Promise<Pet> {
        pets.push(pet);
        return pet;
    }

    async updatePet(id:number, pet:Pet): Promise<void> {
        const index = pets.findIndex((p) => p.id === id);
        if (index < 0) throw NotFoundError;
        pets[Index] = pet;
    }

    async deletePet(id:number): Promise<void> {
        const index = pets.findIndex((p) => p.id === id);
        if (index < 0) throw NotFoundError;
        pets.splice(index, 1)
    }
}