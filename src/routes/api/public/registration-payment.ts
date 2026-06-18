import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

export const Route = createFileRoute("/api/public/registration-payment")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const formData = await request.formData();
          const payload = {
            packageName: String(formData.get("packageName") ?? ""),
            packagePrice: String(formData.get("packagePrice") ?? ""),
            fullName: String(formData.get("fullName") ?? ""),
            email: String(formData.get("email") ?? ""),
            phone: String(formData.get("phone") ?? ""),
            about: String(formData.get("about") ?? ""),
            transactionId: String(formData.get("transactionId") ?? ""),
            screenshot: formData.get("screenshot"),
          };

          if (
            !payload.packageName ||
            !payload.packagePrice ||
            !payload.fullName ||
            !payload.email ||
            !payload.phone ||
            !payload.transactionId ||
            !(payload.screenshot instanceof File) ||
            payload.screenshot.size === 0
          ) {
            return Response.json({ ok: false, error: "Missing required fields" }, { status: 400 });
          }

          const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "application/pdf"];
          if (!allowedTypes.includes(payload.screenshot.type)) {
            return Response.json({ ok: false, error: "Invalid file type" }, { status: 400 });
          }

          // CRM / email integration point — payload ready for webhook or storage
          console.info("[registration-payment]", {
            ...payload,
            screenshot: {
              name: payload.screenshot.name,
              size: payload.screenshot.size,
              type: payload.screenshot.type,
            },
          });

          return Response.json({ ok: true });
        } catch (error) {
          console.error("[registration-payment]", error);
          return Response.json({ ok: false, error: "Submission failed" }, { status: 500 });
        }
      },
    },
  },
});
