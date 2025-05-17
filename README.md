<p align="center">
  <img width="160" height="160" src="https://avatars.githubusercontent.com/u/65117737?s=160&v=4" />
</p>
<h1 align="center">Template App</h1>
<h3 align="center">
  Quick start a new Open Web Desktop application.
</h3>

<br />

## Overview

A template for your new Open Web Desktop application.

## Getting started

1.  Use this template for a new repository or simply download it into your `/apps` directory:

    ```bash
    cd <your-owd-client-path>/apps
    wget -O - https://github.com/owdproject/app-template/archive/refs/heads/main.zip | unzip -d app-template -
    ```

2.  Register the app in your desktop configuration file:

    ```typescript
    // /desktop/owd.config.ts
    export default defineDesktopConfig({
      apps: ['owd-app-template'],
    })
    ```

3.  Reinstall dependencies in your workspace to enable internal linking:

    ```bash
    pnpm install
    ```

## License

This application is released under the [MIT License](LICENSE).
