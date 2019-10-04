import * as AdaptiveCards from "adaptivecards";

export default function showAdaptiveCard() {
    const card = {
        "type": "AdaptiveCard",
        "version": "1.0",
        "body": [
            {
                "type": "Image",
                "url": "http://adaptivecards.io/content/adaptive-card-50.png"
            },
            {
                "type": "TextBlock",
                "text": "Hello **Adaptive Cards!**"
            }
        ],
        "actions": [
            {
                "type": "Action.OpenUrl",
                "title": "Learn more",
                "url": "http://adaptivecards.io"
            },
            {
                "type": "Action.OpenUrl",
                "title": "GitHub",
                "url": "http://github.com/Microsoft/AdaptiveCards"
            }
        ]
    };

    // Create an AdaptiveCard instance
    let adaptiveCard = new AdaptiveCards.AdaptiveCard();

    adaptiveCard.hostConfig = new AdaptiveCards.HostConfig({
        fontFamily: "Segoe UI, Helvetica Neue, sans-serif"
    })

    adaptiveCard.onExecuteAction = function (action) {
        alert("Ow!");
    }

    adaptiveCard.parse(card);

    let renderCard = adaptiveCard.render();

    return renderCard;
}