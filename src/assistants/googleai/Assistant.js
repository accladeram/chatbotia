import { Model } from "./Model";
import { ChatSession } from "./ChatSession";

export class Assistant {
    #session;

    constructor(modelName = "gemini-2.5-flash") {
        const model = new Model(modelName);
        const chat = model.createChat();
        this.#session = new ChatSession(chat);
    }

    async chat(content) {
        try {
            return await this.#session.send(content);
        } catch (err) {
            console.error("Error in Assistant.chat:", err);
            throw err;
        }
    }
}
