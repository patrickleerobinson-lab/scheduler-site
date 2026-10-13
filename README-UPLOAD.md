# Scheduler v1.3.4 — GitHub website release package

This package updates the existing website and includes GitHub Issue Forms for bugs and feature requests. It does **not** include the Root application package.

## Publish to GitHub

1. Back up the current GitHub website repository.
2. Upload the **contents** of this folder to the repository root (not the containing folder). This assumes GitHub Pages publishes from the repository root. If your Pages site uses `/docs` or a separate branch, upload to that publishing location instead.
3. Keep the existing `privacy.html` and `assets/` files, which are included here.
4. Commit the changes and check the website on desktop and mobile.
5. In GitHub, enable **Issues** under repository settings if necessary. The `.github/ISSUE_TEMPLATE/` files will create separate Bug Report and Feature Request forms.
6. `site-config.js` is already configured for `patrickleerobinson-lab/scheduler-site`. No manual edits needed. The bug and feature buttons point to GitHub Issues forms.
7. After Root approves publication, update the release-status text in `index.html` to indicate the app is available and add the actual Root Store listing URL.

## Release accuracy

The site advertises the major capabilities discussed for Scheduler v1.3.4, but the final v1.3.4 source or feature manifest was not supplied in this conversation. Check the live app to confirm recurring-event behavior, invitations, and notification wording before publishing the site.

## Privacy

The previous privacy policy is preserved unchanged. Review it against the final released application's actual data collection and retention practices before publishing.

## Configured GitHub links

- Repository: https://github.com/patrickleerobinson-lab/scheduler-site
- Bug reports: https://github.com/patrickleerobinson-lab/scheduler-site/issues/new?template=bug_report.yml
- Feature requests: https://github.com/patrickleerobinson-lab/scheduler-site/issues/new?template=feature_request.yml

If issue forms do not appear, confirm Issues is enabled under Settings > General > Features and that the `.github/ISSUE_TEMPLATE/` files are committed to the repository default branch.
