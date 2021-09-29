export default function buildString(to, cc, bcc, subject, body) {
  let message = `mailto:${to}`;

  if (cc || bcc || subject || body) {
    message += "?";
  }

  if (cc) {
    message += `CC=${encodeURIComponent(cc)}`;
    if (bcc || subject || body) {
      message += "&";
    }
  }

  if (bcc) {
    message += `BCC=${encodeURIComponent(bcc)}`;
    if (subject || body) {
      message += "&";
    }
  }

  if (subject) {
    message += `Subject=${encodeURIComponent(subject)}`;
    if (body) {
      message += "&";
    }
  }

  if (body) {
    message += `Body=${encodeURIComponent(body)}`;
  }

  return message;
}
