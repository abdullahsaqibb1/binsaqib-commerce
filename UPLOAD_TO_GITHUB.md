# Upload this project to GitHub

The ZIP contains the project files at its root. Do not upload the ZIP itself.

1. Download and extract `binsaqib-commerce-complete.zip` on your computer.
2. Open the extracted folder.
3. In GitHub, open `abdullahsaqibb1/binsaqib-commerce` and select the `main` branch.
4. Choose **Add file → Upload files**.
5. Drag the contents of the extracted folder into the upload area. Select the contents, not the outer folder.
6. On macOS, press **Command + Shift + .** if you need to reveal `.gitignore`, `.editorconfig`, and `.env.example`.
7. Use the commit message `feat: add BinSaqib commerce platform` and select **Commit directly to the main branch**.
8. Click **Commit changes** and wait for the upload to finish.

After the commit, the repository root should visibly contain `apps`, `docs`, `packages`, `package.json`, and `README.md`.

## Vercel project roots

Import the same GitHub repository three times and use these root directories:

| Vercel project | Root directory | Framework |
| --- | --- | --- |
| `binsaqib-storefront` | `apps/storefront` | Next.js |
| `binsaqib-admin` | `apps/admin` | Next.js |
| `binsaqib-api` | `apps/api` | Other |

Connect Neon only to `binsaqib-api`. Never upload `.env` files containing real credentials.
