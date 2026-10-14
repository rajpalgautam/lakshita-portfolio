
import { useEffect } from "react";

export default function BotpressChatbot() {
  useEffect(() => {
    const scriptId = "botpress-webchat-script";

    // Prevent loading the chatbot more than once
    if (document.getElementById(scriptId)) return;

    const injectScript = document.createElement("script");
    injectScript.src =
      "https://cdn.botpress.cloud/webchat/v5.0/inject.js";
    injectScript.async = true;
    injectScript.id = scriptId;

    const botScript = document.createElement("script");
    botScript.src =
      "https://files.bpcontent.cloud/2026/10/14/04/20261014045952-TRNK2ZMG.js";
    botScript.defer = true;

    document.body.appendChild(injectScript);
    document.body.appendChild(botScript);
  }, []);

  return null;
}
