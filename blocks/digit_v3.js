module.exports = {
    name: "Check Message for SteamID",

    description: "Checks if a message contains a 17 digit SteamID with 7 as the first number and @steam behind it.",

    category: "Message",

    inputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Executes this block.",
            "types": ["action"]
        },
        {
            "id": "message",
            "name": "Message",
            "description": "The message to check for the SteamID.",
            "types": ["object"],
            "required": true
        }
    ],

    options: [],

    outputs: [
        {
            "id": "true",
            "name": "True",
            "description": "Executes the following blocks if the message contains a SteamID with 7 as the first number and @steam behind it.",
            "types": ["action"]
        },
        {
            "id": "false",
            "name": "False",
            "description": "Executes the following blocks if the message does not contain a SteamID with 7 as the first number and @steam behind it.",
            "types": ["action"]
        }
    ],

    code(cache) {
        const message = this.GetInputValue("message", cache);

        if (message.content.match(/7\d{16}@steam/)) {
            this.RunNextBlock("true", cache);
        } else {
            this.RunNextBlock("false", cache);
        }
    }
};
