"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, Instagram, Linkedin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setIsSent(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setErrorMessage(
          result.error || "Could not send message, try again later.",
        );
      }
    } catch (error) {
      setErrorMessage("Could not send message, try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="flex flex-col w-full h-full items-center justify-center p-4">
      <p className="text-center text-xl mb-2">
        Welcome to the contact page! From here you can reach out to me with
        questions through my contact form!
        <br />
        <br />
        Please double check all form fields before sending your message!
      </p>
      <form
        onSubmit={handleSubmitForm}
        className="flex flex-col w-full max-w-md space-y-4 p-6 border rounded-lg shadow-md"
      >
        {errorMessage && (
          <p className="mt-4 text-red-600 text-center">{errorMessage}</p>
        )}
        <label className="flex flex-col">
          Name:
          <input
            type="text"
            name="name"
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChange}
            className="p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </label>

        <label className="flex flex-col">
          Email:
          <input
            type="email"
            name="email"
            placeholder="your@email.com"
            value={formData.email}
            onChange={handleChange}
            className="p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </label>

        <label className="flex flex-col">
          Message:
          <textarea
            name="message"
            rows="4"
            placeholder="message..."
            value={formData.message}
            onChange={handleChange}
            className="p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            required
          ></textarea>
        </label>

        <Button
          type="submit"
          className="p-2 rounded-md transition"
          disabled={isSubmitting | isSent}
        >
          {isSubmitting
            ? "Sending..."
            : isSent
              ? "Message Sent!"
              : "Send Message"}
        </Button>
      </form>
      {isSent && (
        <div className="flex flex-row w-full h-full m-4">
          <Card>
            <CardHeader>
              <CardTitle>Thank you for reaching out!</CardTitle>
            </CardHeader>
            <CardContent>
              Please wait 2-3 business days for a reply. If you do not recieve a
              reply within that time frame, feel free to follow up with another
              email, or message me on my socials!
              <br />
              <br />
              Thanks, <br />
              Austin Adams
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
