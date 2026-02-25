# VS Code SFTP Remote Development Setup

### Step 1 — Install the SFTP Extension
Open VS Code → Extensions → install “SFTP” by Natizyskunk.

![SFTP Extension Installation](/images/sftp_extension.png)

### Step 2 — Create Configuration
Open Command Palette using **Ctrl/Cmd + Shift + P**. Run: **SFTP: Config**. This creates `.vscode/sftp.json`.

### Step 3 — Configure sftp.json
Include the following configuration in your `.vscode/sftp.json`:

```json
{
  "name": "xlogin_LLMTSCS",
  "host": "xlogin.comp.nus.edu.sg",
  "protocol": "sftp",
  "port": 22,
  "username": "yuchenbo",
  "remotePath": "/home/y/yuchenbo/Projects/LLMTSCS",
  "uploadOnSave": true,
  "useTempFile": true,
  "openSsh": true,
  "privateKeyPath": "/Users/yyccbb/.ssh/id_ed25519",
  "downloadOnOpen": true,
  "concurrency": 4,
  "watcher": {
    "files": "**/*",
    "autoUpload": true,
    "autoDelete": false
  },
  "ignore": [
    ".vscode",
    ".git",
    ".DS_Store"
  ]
}
```

### Step 4 — Connect
Run **SFTP: List** from the Command Palette to verify the connection.

### Step 5 — Workflow
Edit locally → Save → Auto upload → Run remotely.

### Step 6 — Sync Options
- **Upload:** Use **SFTP: Upload Active File**.
- **Download:** Use **SFTP: Download Active File**.

### Step 7 — Recommended Initial Sync
Run **SFTP: Sync Local -> Remote** to ensure all files are synchronized.
