@AGENTS.md

# One preview link at a time

Too many pull requests means too many preview links, and the people
reviewing this site are not technical. Default to **one open pull request**
for the website, so the newest preview link always contains everything that
has been changed so far.

1. Before starting any change, look for an open PR on
   `NareloEurope/narelo-website` (`list_pull_requests`, state `open`).
2. If one is open, work on **its** branch and push to it, even if this
   session was set up with a fresh branch name. Reusing the open PR's branch
   is a standing instruction from the team, so no need to ask again.
3. Only open a new PR when there is no open one (the last was merged or
   closed), or when the team explicitly asks for a change to be kept
   separate.
   In that case **open it straight away without asking**. Standing
   permission from the team: if a change is requested and no PR is open in
   the current conversation, create one, push the work, and report back with
   the preview link. Never pause to ask whether a PR may be opened.
4. Keep the PR description as a plain-English running list of everything
   included, newest first, so a reviewer can see what is in the preview
   without reading code.
5. When reporting back, give the same preview link and say it has been
   updated, rather than handing over a second link. There is only ever one
   link to check.

If several unrelated requests arrive in one conversation, they still go into
the same PR unless the team says otherwise. Batching is the point.

# Previewing changes

When asked to preview changes, see what a branch/PR looks like on the live
site, or anything like "what would this look like" — do not try to build or
deploy anything yourself. Instead:

1. Push the branch and make sure a PR is open on `NareloEurope/narelo-website`
   (or find the existing one). Opening/updating a PR is what triggers this.
2. The site auto-deploys via Vercel's GitHub integration: the Vercel team is
   `NareloEurope` (slug `narelo-europe`), project `narelo-website`, linked to
   `NareloEurope/narelo-website`. Every push to a branch with an open PR
   triggers an automatic preview deployment — nothing else needs to happen.
3. Use the Vercel MCP tools to find it: `list_teams` → `list_projects` (team
   `NareloEurope`) → `list_deployments` (that project). Match the deployment
   whose `meta.githubCommitSha` / `meta.githubPrId` corresponds to the current
   branch or PR, then give the user its `url` (state should be `READY`).
4. If `list_teams` shows anything other than `NareloEurope` (e.g. a stale
   personal account), the Vercel connector is authenticated as the wrong
   account. That's a Settings → Connectors reconnect on the user's end, not
   something to route around — don't try pushing to a different GitHub repo,
   and don't try to deploy the working tree directly (`deploy_to_vercel`):
   the project's images and video assets are far too large to embed through
   that path, and an automatic preview already exists once the PR is open.
