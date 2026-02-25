# Remote Debugging with debugpy

### Step 1 — Request Runtime
Open a terminal and request a (gpu) runtime on the cluster.

### Step 2 — Add Debug Code
Insert the following snippet into your Python script:

```python
import debugpy
import os
debugpy.listen(("0.0.0.0", 5678))
print(f"Debugger listening on {os.uname()[1]}:5678. Waiting for attach…")
debugpy.wait_for_client()
```

### Step 3 — Create SSH Tunnel
On your local machine, open another terminal window and run this command to forward the port:

```bash
ssh -L 5678:<compute_node_name>:5678 username@hostname
```

### Step 4 — Configure VS Code launch.json
Add the following to your `.vscode/launch.json`:

```json
{
  "name": "Python Debugger: Remote Attach",
  "type": "debugpy",
  "request": "attach",
  "connect": {
    "host": "localhost",
    "port": 5678
  },
  "pathMappings": [
    {
      "localRoot": "<local_sftp_project_root>",
      "remoteRoot": "<remote_project_root>"
    }
  ]
}
```

### Step 5 — Start Debugging
Run **“Python Debugger: Remote Attach”** from the VS Code Debug panel.
