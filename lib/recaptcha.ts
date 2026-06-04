type RecaptchaVerifyResponse = {
  success: boolean;
  "error-codes"?: string[];
  score?: number;
  action?: string;
};

export async function verifyRecaptchaToken(
  token: string | null | undefined
): Promise<{ ok: boolean; error?: string }> {
  const secret = process.env.RECAPTCHA_SECRET_KEY;

  if (!secret) {
    return { ok: false, error: "reCAPTCHA is not configured on the server." };
  }

  if (!token) {
    return { ok: false, error: "Please complete the reCAPTCHA challenge." };
  }

  const body = new URLSearchParams({
    secret,
    response: token,
  });

  const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: body.toString(),
  });

  const data = (await response.json()) as RecaptchaVerifyResponse;

  if (!data.success) {
    return {
      ok: false,
      error: "reCAPTCHA verification failed. Please try again.",
    };
  }

  return { ok: true };
}
