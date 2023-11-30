export const sendContactForm = async (data) => {
  const resp = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(data),
  });
  return await resp.json();
};
