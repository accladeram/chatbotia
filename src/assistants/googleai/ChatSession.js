export class ChatSession {
    #chat;

    constructor(chatInstance) {
        this.#chat = chatInstance;
    }

    async send(content) {
        const result = await this.#chat.sendMessage({
            message: content,
        });

        return result.text;
    }
}

