type LeadBody = {
  nombre?: unknown;
  email?: unknown;
  empresa?: unknown;
  cargo?: unknown;
};

function text(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  let body: LeadBody;
  try {
    body = (await request.json()) as LeadBody;
  } catch {
    return Response.json(
      { status: "error", message: "No pudimos leer la solicitud." },
      { status: 400 },
    );
  }

  const nombre = text(body.nombre);
  const email = text(body.email);
  const empresa = text(body.empresa);
  const cargo = text(body.cargo);

  if (!nombre || !email || !empresa || !cargo) {
    return Response.json(
      { status: "error", message: "Completa todos los campos para continuar." },
      { status: 400 },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json(
      { status: "error", message: "Ingresa un correo electrónico válido." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_TO_EMAIL;
  const from = process.env.LEAD_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    return Response.json(
      {
        status: "error",
        message:
          "El formulario aún no tiene un servicio de correo configurado. Define RESEND_API_KEY, LEAD_TO_EMAIL y LEAD_FROM_EMAIL en Vercel.",
      },
      { status: 503 },
    );
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `White Paper MPE — ${nombre}`,
      text: [
        "Nueva solicitud del white paper MPE",
        "",
        `Nombre: ${nombre}`,
        `Correo: ${email}`,
        `Empresa: ${empresa}`,
        `Cargo: ${cargo}`,
      ].join("\n"),
    }),
  });

  if (!response.ok) {
    return Response.json(
      {
        status: "error",
        message: "No pudimos enviar tu solicitud. Inténtalo de nuevo en unos minutos.",
      },
      { status: 502 },
    );
  }

  return Response.json({
    status: "success",
    message:
      "Recibimos tus datos. En breve te enviaremos el white paper de la Metodología Polimática Enfocada a tu correo.",
  });
}
