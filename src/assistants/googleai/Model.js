import { ai } from "./aiClient";

export class Model {
    constructor(modelName = "gemini-2.5-flash") {
        this.modelName = modelName;
    }

    createChat(history = []) {
        return ai.chats.create({
            model: this.modelName,
            history,
        });
    }
}
