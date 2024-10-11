import { Request, Response } from "express"
import { PetsService } from "../services/petsService";

const service = new PetsService();

export const listPets = async (req: Request, res: Response) => {
    const pets = await service.fetchPets();
    res.status(200).json(pets);
};

export const createPet = async (req: Request, res: Response) => {
    const createdPet = await service.createPet(req.body);
    res.status(201).json(createdPet);
};

export const getPetById = async (req: Request, res: Response) => {
    
};

export const updatePetById = (req: Request, res: Response) => {
    console.log("update pet by Id");
};

export const deletePetById = (req: Request, res: Response) => {
    console.log("delete pet by Id");
};