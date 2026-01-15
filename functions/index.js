const PLAIN_TEXT_CARD = `
www:      vladsolomon.com
email:    me@vladsolomon.com
github:   @vlad-solomon
`.trim();

export async function onRequest(context) {
    const userAgent = context.request.headers.get("user-agent") || "";

    // Check if request is from curl, wget, httpie, etc.
    const isCli =
        userAgent.toLowerCase().includes("curl") ||
        userAgent.toLowerCase().includes("wget") ||
        userAgent.toLowerCase().includes("httpie");

    if (isCli) {
        return new Response(PLAIN_TEXT_CARD + "\n", {
            headers: {
                "content-type": "text/plain; charset=utf-8",
            },
        });
    }

    // Otherwise serve the React app
    return context.next();
}
