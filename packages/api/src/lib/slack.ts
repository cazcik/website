export const SimpleNotification = async (webhook: string, message: string) => {
  const response = await fetch(webhook, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      text: message,
    }),
  });

  if (response.ok) {
    return response;
  } else {
    throw new Error("failed to send notification");
  }
};
