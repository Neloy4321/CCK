import Cook from "../model/cook.model.js";

export const getCook = async(req, res) => {
    try {
        const cook = await Cook.find();
        res.status(200).json(cook);
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json(error);
    }
};