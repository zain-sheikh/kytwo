"use server";

export async function submitContact(
  prevState: { success: boolean; message: string } | null,
  formData: FormData
) {
  try {
    const portalId = process.env.PORTAL_ID!;
    const formId = process.env.FORM_ID!;

    const endpoint = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`;

    const payload = {
      fields: [
        { name: "firstname", value: formData.get("name") },
        { name: "email", value: formData.get("email") },
        { name: "phone", value: formData.get("contact") },
        { name: "budget", value: formData.get("budget") },
        { name: "about_project", value: formData.get("about") },
      ],
    };

    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error("Submission failed");
    }

    return {
      success: true,
      message: "Thank you! We'll get back to you within 24 hours.",
    };
  } catch (error) {
    return {
      success: false,
      message:
        "Something went wrong. Please try again or email us directly at hello@kytwo.com",
    };
  }
}
