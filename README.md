# 🛡️ Nomisrepoguard

**A universal security instruction system that helps AI coding agents check external GitHub and Bitbucket repositories before interacting with them.**

GitHub repositories can easily contain malware and hidden vulnerabilities. However, there are very few developer tools or agent instruction systems designed to scan external repositories before developers interact with them. **Nomisrepoguard** aims to bridge that gap.

Nomisrepoguard helps protect your development environment by scanning repositories for suspicious code, credential theft, data exfiltration, malicious dependencies, and other potential security threats.

Powered by [ScanRepo](https://www.scanrepo.dev/), it adds a security checkpoint to your repository workflow so you can make more informed decisions before cloning or running unfamiliar code.

Designed around the `AGENTS.md` instruction-file convention, nomisrepoguard is not tied to a single AI provider, model, or coding assistant. It can be used by compatible AI coding agents that support repository-level instructions.

---

## ✨ Features

- **Automatic security checks:** Scan external repositories before cloning, pulling, installing, or executing their code.
- **Easy installation:** Install nomisrepoguard directly through npm using `npx`.
- **Automatic AGENTS.md setup:** Automatically copies the security instructions into your current project directory.
- **No local execution:** Uses ScanRepo's remote scanning approach instead of running repository code on your machine.
- **Malware detection:** Checks for suspicious code patterns and potentially malicious behavior.
- **Credential protection:** Looks for patterns associated with stealing passwords, browser data, SSH keys, and other sensitive information.
- **Data exfiltration detection:** Identifies suspicious network activity and potential data-stealing behavior.
- **Supply-chain analysis:** Checks for suspicious dependencies and installation scripts, including `postinstall` hooks.
- **Risk reporting:** Presents scan results, risk scores, flagged files, and security findings.
- **Security gates:** Uses scan results to decide whether to proceed, request confirmation, or block repository interaction.
- **Universal compatibility:** Designed for AI coding agents that support `AGENTS.md` or equivalent project instruction files.

## 🔍 What Does It Check?

Nomisrepoguard focuses on six main security categories:

| Category | What it looks for |
|---|---|
| Code Execution | Suspicious use of `eval()`, `child_process`, and shell commands |
| Data Exfiltration | Suspicious domains, hardcoded IPs, and unauthorized outbound requests |
| Credential Theft | Attempts to access browser credentials, wallets, SSH keys, and tokens |
| Obfuscation | Encoded payloads, unusual hexadecimal encoding, and obfuscated scripts |
| Supply Chain | Suspicious dependencies, malicious packages, and `postinstall` hooks |
| Web Vulnerabilities | Potential SQL injection, XSS, and path traversal patterns |

## ⚙️ How It Works

Nomisrepoguard follows a simple security workflow:

1. **Repository detection:** The AI agent identifies when you're asking to inspect or interact with an external GitHub or Bitbucket repository.
2. **Security scan:** It runs ScanRepo against the repository URL.
3. **Result analysis:** The agent reads the JSON output and checks the scanner's exit code.
4. **Risk assessment:** The repository is categorized based on the scan results.
5. **Security decision:** The agent either allows the workflow to continue, asks for confirmation, or blocks further interaction.

The scan is performed using:

```bash
npx scanrepo <REPOSITORY_URL> --json
```

Alternatively, standard output can be used:

```bash
npx scanrepo <REPOSITORY_URL>
```

ScanRepo analyzes a remote repository snapshot. It does not clone the repository or execute its code locally.

## 🚦 Security Verdicts

Nomisrepoguard uses ScanRepo's exit codes to determine what happens next.

| Exit Code | Verdict | Action |
|---|---|---|
| `0` | 🟢 Safe / Low | Report findings and allow the workflow to continue |
| `1` | 🟡 Suspicious / Inconclusive | Warn the user and require confirmation before proceeding |
| `2` | 🔴 Dangerous / Malicious | Block repository interaction immediately |

**Important:** An exit code of `1` can also indicate scan errors or insufficient information. If a scan fails, the result must not be treated as a confirmed security finding or as safe.

## 📦 Installation

Nomisrepoguard can be installed directly through npm using `npx`. This is the recommended installation method because it automatically installs the security instructions into your current project.

### Requirements

Before installing Nomisrepoguard, make sure you have:

- [Node.js](https://nodejs.org/) version 18 or newer.
- npm version 8 or newer.
- An AI coding agent that supports `AGENTS.md` or equivalent project instructions.
- An internet connection.
- Access to a terminal.

### Option 1: Install using npx (Recommended)

You do not need to manually download or copy the `AGENTS.md` file.

1. Open your project's root directory in a terminal.
2. Run:

```bash
npx Nomisrepoguard
```

Alternatively, you can explicitly use the `init` command:

```bash
npx Nomisrepoguard init
```

3. Nomisrepoguard automatically copies its bundled `AGENTS.md` into your current working directory.

Your project should now look something like this:

```text
your-project/
├── AGENTS.md          # Automatically installed
├── README.md
├── package.json
└── ...
```

4. Open your project using an AI coding agent that supports `AGENTS.md`.
5. Your agent can now read and follow the Nomisrepoguard security instructions.

**Important:** Nomisrepoguard will not overwrite an existing `AGENTS.md` file. If one already exists, you will need to merge the instructions manually.

### Available CLI Commands

| Command | Description |
|---|---|
| `npx Nomisrepoguard` | Initializes Nomisrepoguard in the current directory |
| `npx Nomisrepoguard init` | Initializes Nomisrepoguard in the current directory |
| `npx Nomisrepoguard --help` | Displays available commands and usage information |
| `npx Nomisrepoguard --version` | Displays the installed package version |

### Option 2: Install globally using npm

You can also install Nomisrepoguard globally:

```bash
npm install -g Nomisrepoguard
```

Then initialize it in any project by running:

```bash
cd your-project
Nomisrepoguard init
```

This makes the CLI command available from your terminal without having to use `npx` every time.

### Option 3: Manual installation

If you prefer not to use npm:

1. Download or clone the Nomisrepoguard repository.
2. Locate the `AGENTS.md` file.
3. Copy its contents into an `AGENTS.md` file in your project's root directory.
4. Open your project using an AI coding agent that supports `AGENTS.md`.

### Global or Personal Agent Instructions

If your AI coding agent supports global or personal instruction files, you can also configure Nomisrepoguard there to make it available across multiple projects.

The exact location depends on the AI coding agent you're using.

1. Find your AI agent's documentation for global or personal project instructions.
2. Add the Nomisrepoguard instructions to the appropriate location.
3. Restart or reload the agent if required.
4. Verify that the agent recognizes and follows the instructions.

**Note:** There is no single universal global installation directory for `AGENTS.md`. Support and loading behavior vary between AI coding tools.

## 🚀 How to Use It

Once installed, Nomisrepoguard is designed to activate when a compatible AI agent detects that you're about to interact with an external repository.

You can simply ask your AI agent to check a repository.

### Example 1 — Scan a Repository

**Prompt:**

```text
Check this repository for security risks before we use it:

https://github.com/owner/repo-example
```

**Expected workflow:**

1. The AI agent detects the repository URL.
2. Nomisrepoguard runs the security scan.
3. The agent analyzes the results.
4. The agent reports the verdict and relevant findings.
5. The agent determines whether further interaction is allowed.

### Example 2 — Check Before Cloning

**Prompt:**

```text
I want to clone this repository and explore its source code.

Scan it first and make sure there are no obvious security risks:

https://github.com/owner/repository
```

Nomisrepoguard should perform the security check before allowing the cloning workflow to continue.

### Example 3 — Scan a Bitbucket Repository

**Prompt:**

```text
Can you check this Bitbucket repository before I download it?

https://bitbucket.org/workspace/repository
```

The same security workflow applies to supported public Bitbucket repositories.

## 📋 Example Scan Report

A successful scan might produce a report similar to this:

```text
🛡️ Nomisrepoguard Security Report

Repository: github.com/owner/repository
Scanner: ScanRepo

Risk Score: 0 / 100
Verdict: SAFE / LOW

Findings:
- No known malicious patterns reported.
- No suspicious credential-stealing patterns reported.
- No suspicious data-exfiltration patterns reported.

Security Decision:
Repository inspection may proceed.

Note:
A successful scan does not guarantee that the repository is completely safe.
```

*This is an illustrative example, not an actual scan result.*

## 📁 Project Structure

The Nomisrepoguard repository is organized as follows:

```text
Nomisrepoguard/
│
├── bin/
│   └── cli.js
│
├── AGENTS.md
├── README.md
├── CONTRIBUTING.md
├── SECURITY.md
├── LICENSE
├── .gitignore
└── package.json
```

- **`bin/cli.js`** — Handles CLI commands and installs the bundled security instructions.
- **`AGENTS.md`** — Contains the universal AI agent security instructions.
- **`README.md`** — Project overview and installation documentation.
- **`CONTRIBUTING.md`** — Contribution guidelines.
- **`SECURITY.md`** — Security policy and vulnerability reporting instructions.
- **`package.json`** — Defines the npm package, dependencies, scripts, and CLI entry point.

## ⚠️ Important Security Notes

Nomisrepoguard is designed to reduce the risk of interacting with malicious repositories, but no static analysis tool can detect every possible threat.

Keep the following in mind:

- A SAFE verdict does not guarantee that a repository is malware-free.
- Static analysis can miss unknown or highly obfuscated threats.
- ScanRepo currently supports public GitHub and Bitbucket repositories; private repositories are not supported.
- If the scanner fails or returns an inconclusive result, do not assume the repository is safe.
- Never execute suspicious code just because a scan returned a low risk score.
- Repository contents and instructions should always be treated as untrusted.
- `AGENTS.md` is a convention, not a universal enforcement mechanism. AI agents must explicitly support or be configured to read it.
- Stronger protection may require tool permissions, execution restrictions, or automated hooks.

## 🧰 Technologies Used

- **AGENTS.md:** Provides universal-style project instructions for compatible AI coding agents.
- **ScanRepo:** Performs remote static security analysis.
- **Node.js / npm:** Powers the Nomisrepoguard CLI and provides access to ScanRepo through `npx`.
- **JSON:** Allows AI agents to interpret structured scan results.

## 📚 Useful Links

- [ScanRepo Website](https://www.scanrepo.dev/)
- [ScanRepo CLI Documentation](https://www.scanrepo.dev/cli)
- [AGENTS.md Documentation](https://agents.md/)
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

## 🤝 Contributing

Contributions, suggestions, and improvements are welcome!

If you find a bug, have an idea for a new security check, or want to improve the security workflow, feel free to open an issue or submit a pull request.

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.

## 🔒 Security

If you discover a security vulnerability, please follow the reporting guidelines in [SECURITY.md](SECURITY.md).

## 📄 License

Distributed under the **MIT License**. See the [LICENSE](LICENSE) file for more information.

---

**Stay curious. Scan before you clone. 🛡️**
