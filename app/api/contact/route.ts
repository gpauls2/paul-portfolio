import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const {
            name,
            email,
            subject,
            message,
        } = body;

        if (
            !name ||
            !email ||
            !subject ||
            !message
        ) {
            return NextResponse.json(
                {
                    error:
                        "Please complete all required fields.",
                },
                {
                    status: 400,
                }
            );
        }

        const { data, error } =
            await resend.emails.send({
                from: "Portfolio Contact <onboarding@resend.dev>",

                to: [
                    "gpaulsray2@gmail.com",
                ],

                replyTo: email,

                subject: `Portfolio Contact — ${subject}`,

                html: `
          <div
            style="
              background:#0f1722;
              padding:40px 20px;
              font-family:Arial,Helvetica,sans-serif;
              color:#ffffff;
            "
          >
            <div
              style="
                max-width:620px;
                margin:0 auto;
                background:#172231;
                border:1px solid #2c3a4b;
                border-radius:20px;
                overflow:hidden;
              "
            >
              <div
                style="
                  padding:30px;
                  background:
                    linear-gradient(
                      135deg,
                      #172231,
                      #1c2940
                    );
                  border-bottom:
                    1px solid #2c3a4b;
                "
              >
                <div
                  style="
                    font-size:12px;
                    letter-spacing:3px;
                    color:#6dd5fa;
                    font-weight:700;
                    margin-bottom:12px;
                  "
                >
                  PORTFOLIO CONTACT
                </div>

                <h1
                  style="
                    margin:0;
                    font-size:28px;
                    line-height:1.2;
                  "
                >
                  New message from your portfolio
                </h1>
              </div>

              <div
                style="
                  padding:30px;
                "
              >
                <div
                  style="
                    margin-bottom:22px;
                  "
                >
                  <div
                    style="
                      font-size:11px;
                      letter-spacing:2px;
                      color:#8292a6;
                      margin-bottom:6px;
                    "
                  >
                    NAME
                  </div>

                  <div
                    style="
                      font-size:17px;
                      font-weight:700;
                    "
                  >
                    ${escapeHtml(name)}
                  </div>
                </div>

                <div
                  style="
                    margin-bottom:22px;
                  "
                >
                  <div
                    style="
                      font-size:11px;
                      letter-spacing:2px;
                      color:#8292a6;
                      margin-bottom:6px;
                    "
                  >
                    EMAIL
                  </div>

                  <div
                    style="
                      font-size:15px;
                    "
                  >
                    ${escapeHtml(email)}
                  </div>
                </div>

                <div
                  style="
                    margin-bottom:22px;
                  "
                >
                  <div
                    style="
                      font-size:11px;
                      letter-spacing:2px;
                      color:#8292a6;
                      margin-bottom:6px;
                    "
                  >
                    SUBJECT
                  </div>

                  <div
                    style="
                      font-size:15px;
                    "
                  >
                    ${escapeHtml(subject)}
                  </div>
                </div>

                <div>
                  <div
                    style="
                      font-size:11px;
                      letter-spacing:2px;
                      color:#8292a6;
                      margin-bottom:10px;
                    "
                  >
                    MESSAGE
                  </div>

                  <div
                    style="
                      white-space:pre-wrap;
                      line-height:1.7;
                      font-size:15px;
                      color:#d7e0ea;
                      background:#101923;
                      border:1px solid #273647;
                      padding:18px;
                      border-radius:14px;
                    "
                  >
                    ${escapeHtml(message)}
                  </div>
                </div>
              </div>

              <div
                style="
                  padding:20px 30px;
                  border-top:
                    1px solid #2c3a4b;
                  color:#8292a6;
                  font-size:12px;
                "
              >
                Sent from your portfolio contact form.
                You can reply directly to this email.
              </div>
            </div>
          </div>
        `,
            });

        if (error) {
            console.warn(
                "Resend contact error:",
                {
                    message: error.message,
                    name: error.name,
                }
            );

            return NextResponse.json(
                {
                    error:
                        "Unable to send message.",
                },
                {
                    status: 500,
                }
            );
        }

        return NextResponse.json(
            {
                success: true,
                id: data?.id,
            },
            {
                status: 200,
            }
        );
    } catch (error) {
        console.warn(
            "Portfolio contact API failed:",
            error
        );

        return NextResponse.json(
            {
                error:
                    "Something went wrong.",
            },
            {
                status: 500,
            }
        );
    }
}

function escapeHtml(
    value: unknown
) {
    return String(value ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}