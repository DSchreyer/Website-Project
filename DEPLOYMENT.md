# Deployment

## GitHub Pages

This project is a static site and deploys directly from the repository.

### One-time setup (repo owner)
1. Open repository settings: `Settings -> Pages`
2. Under **Build and deployment** choose:
   - **Source:** Deploy from a branch
   - **Branch:** `master`
   - **Folder:** `/ (root)`
3. Save.

### Live URL
- `https://dschreyer.github.io/Website-Project/`

### Update flow
1. Create a feature branch
2. Open a PR
3. Merge into `master`
4. GitHub Pages publishes the new version automatically

## Contact form
The contact form uses [FormSubmit](https://formsubmit.co/) and sends submissions to:
- `ds.danielschreyer@gmail.com`

No backend is required in this repo for contact form delivery.
