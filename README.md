<p align="center">
  <img width="160" height="160" src="https://avatars.githubusercontent.com/u/65117737?s=160&v=4" />
</p>
<h1 align="center">Template App</h1>
<h3 align="center">
  Quick start a new Open Web Desktop application.
</h3>

<br />

## Overview

A template for your new Open Web Desktop application. This template is designed to help you quickly bootstrap and build custom desktop apps.

[Demo](https://owdproject.github.io/) · [Documentation](https://owdproject.github.io/docs/) · [Support](https://github.com/sponsors/owdproject)

## Getting Started

### Method 1: Using the OWD CLI (Recommended)

Run the following command in your OWD workspace root to scaffold a new application automatically:

```bash
pnpm desktop create app <name>
```

This command will:
- Copy the template files into `apps/app-<name>`
- Perform package name and namespace replacements
- Run `pnpm install` in the workspace root
- Link the new app and register it under the `apps` key in your `desktop/desktop.config.ts`

### Method 2: Manual Installation

If you prefer to manually clone and set up the application template:

1. Download or clone this repository into your `/apps` directory:
   ```bash
   cd <your-owd-client-path>/apps
   wget -O - https://github.com/owdproject/app-template/archive/refs/heads/main.zip | unzip -d app-<name> -
   ```

2. Open the newly created `apps/app-<name>/package.json` and change the `"name"` field to `@owdproject/app-<name>`.

3. Register the app under the `apps` key in your `desktop/desktop.config.ts`:
   ```typescript
   export default defineDesktopConfig({
     apps: [
       '@owdproject/app-<name>'
     ]
   })
   ```

4. Install dependencies in your workspace to enable internal linking:
   ```bash
   pnpm install
   ```

## Development

Run the app playground to test your implementation:

```bash
cd apps/app-<name>
pnpm run dev
```

## License

This application is released under the [MIT License](LICENSE).

