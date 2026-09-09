# Publishing the site to narelo.es

The site is a set of plain files: no server, no database. Publishing means
building those files and copying them onto the hosting company's server.
GitHub does both automatically, so nobody has to drag files around.

**Every push to `main` republishes the site.** There is nothing else to run.

---

## One-time setup

Someone with admin rights on the GitHub repository does this once.

### 1. Store the FTP details

Go to **Settings > Secrets and variables > Actions > New repository secret**
and add three secrets, exactly these names:

| Name | Value |
|---|---|
| `FTP_SERVER` | the FTP address the host gave us, e.g. `ftp.narelo.es` |
| `FTP_USERNAME` | the FTP user |
| `FTP_PASSWORD` | the FTP password |

Once saved, GitHub will not show these again, and they never appear in the
repository or in the build logs. Keep them out of email and chat: paste them
straight from the host's panel into this page.

### 2. Check the destination folder

The site publishes into `/httpdocs/` by default, which is where Plesk serves a
domain from. If the host says narelo.es is served from somewhere else, add a
**variable** (same page, "Variables" tab) called `FTP_SERVER_DIR` with the
correct path.

If the host cannot do encrypted FTP, add a variable `FTP_PROTOCOL` set to
`ftp`. Try without it first: encrypted is the default and the safer choice.

### 3. Run it

**Actions > Deploy to narelo.es > Run workflow.** The first run uploads
everything, about 40 MB, so give it a few minutes. Later runs only send the
files that changed.

---

## Search engines

The site currently tells Google and everyone else **not** to index it. That is
deliberate: it stays invisible until the team says it is ready.

To open it up, add a repository variable `ALLOW_INDEXING` set to `true`, then
re-run the workflow. That single switch changes both the instruction to search
engines and the tag on every page.

---

## Still to sort out before launch

- **The contact form does not deliver anywhere.** It shows a thank-you message
  and the message goes nowhere. WhatsApp is the main way in, so this is not
  urgent, but the form should either be connected to a form service or removed.
- **There is no privacy policy.** The site collects personal data through the
  contact form and WhatsApp, so it probably needs one. That text has to come
  from the company's gestor or lawyer.
- **The legal notice is missing its Registro Mercantil entry** (tomo, folio,
  hoja), which was never supplied.

---

## Previews

This is separate from publishing. Every open pull request gets its own private
preview link from Vercel, for checking a change before it goes near narelo.es.
Previews change nothing on the live site.
