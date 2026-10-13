// OPTIONAL: Enter your GitHub repository in OWNER/REPO format.
// Example: const githubRepo = "example-org/scheduler";
const githubRepo = "patrickleerobinson-lab/scheduler-site";
if (/^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/.test(githubRepo)) {
  const base = `https://github.com/${githubRepo}/issues/new?template=`;
  document.getElementById("bug-link").href = base + "bug_report.yml";
  document.getElementById("feature-link").href = base + "feature_request.yml";
  document.getElementById("feedback-note").textContent = "Bug reports and feature requests open GitHub Issues. A GitHub account may be required.";
}
