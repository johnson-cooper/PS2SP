const ISSUE_BASE = "https://github.com/johnson-cooper/PS2SP/issues/new";

export function brokenLinkIssueUrl(
  label: string,
  url: string,
  context: string,
  pageUrl?: string | null
) {
  const issueTitle = `Broken link: ${url}`;
  const lines = [
    "### Broken link report",
    "",
    `- Item: ${label}`,
    `- URL: ${url}`,
    `- Context: ${context}`
  ];

  if (pageUrl) lines.push(`- PS2SP page: ${pageUrl}`);

  lines.push(
    "",
    "The link appears to be broken, unavailable, or no longer points to the indexed PS2 resource."
  );

  return `${ISSUE_BASE}?title=${encodeURIComponent(issueTitle)}&body=${encodeURIComponent(lines.join("\n"))}`;
}
