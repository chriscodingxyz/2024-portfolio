"use server";

export async function sendEmail(formData: FormData) {
  "use server";
  console.log("server");

  console.log(formData.get("senderEmail"));
  console.log(formData.get("senderMessage"));
}
