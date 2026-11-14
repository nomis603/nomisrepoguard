# 🛡️ ScanRepo-Guard

**A security-first Claude Code skill that checks external GitHub and Bitbucket repositories before you interact with them.**

GitHub repositories can easily contain malware and hidden vulnerabilities. However, there are very few developer tools or agent skills designed to quickly, accurately, and precisely scan external repositories before you interact with them. **ScanRepo-Guard** bridges that gap.

ScanRepo-Guard helps protect your development environment by scanning repositories for suspicious code, credential theft, data exfiltration, malicious dependencies, and other potential security threats.

Powered by temporary commands using [ScanRepo](https://www.scanrepo.dev/), it adds a security checkpoint to your repository workflow so you can make more informed decisions before cloning or running unfamiliar code.

---

## ✨ Features

- **Automatic security checks:** Scan external repositories before cloning, pulling, installing, or executing their code.
- **No local execution:** Uses ScanRepo's remote scanning approach instead of running repository code on your machine.
- **Malware detection:** Checks for suspicious code patterns and potentially malicious behavior.
- **Credential protection:** Looks for patterns associated with stealing passwords, browser data, SSH keys, and other sensitive information.
- **Data exfiltration detection:** Identifies suspicious network activity and potential data-stealing behavior.
- **Supply-chain analysis:** Checks for suspicious dependencies and installation scripts, including `postinstall` hooks.
- **Risk reporting:** Presents scan results, risk scores, flagged files, and security findings.
- **Security gates:** Uses scan results to decide whether to proceed, request confirmation, or block repository interaction.

## 🔍 What Does It Check?

ScanRepo-Guard focuses on six main security categories:

| Category            | What it looks for                                                      |
| ------------------- | ---------------------------------------------------------------------- |
| Code Execution      | Suspicious use of `eval()`, `child_process`, and shell commands        |
| Data Exfiltration   | Suspicious domains, hardcoded IPs, and unauthorized outbound requests  |
| Credential Theft    | Attempts to access browser credentials, wallets, SSH keys, and tokens  |
| Obfuscation         | Encoded payloads, unusual hexadecimal encoding, and obfuscated scripts |
| Supply Chain        | Suspicious dependencies, malicious packages, and `postinstall` hooks   |
| Web Vulnerabilities | Potential SQL injection, XSS, and path traversal patterns              |

## ⚙️ How It Works

ScanRepo-Guard follows a simple security workflow:

1. **Repository detection:** Claude identifies when you're asking to inspect or interact with an external GitHub or Bitbucket repository.
2. **Security scan:** It runs ScanRepo against the repository URL.
3. **Result analysis:** Claude reads the JSON output and checks the scanner's exit code.
4. **Risk assessment:** The repository is categorized based on the scan results.
5. **Security decision:** Claude either allows the workflow to continue, asks for confirmation, or blocks further interaction.

The scan is performed using:

```bash
npx scanrepo <REPOSITORY_URL> --json
or npx scanrepo <REPOSITORY_URL>
```

ScanRepo analyzes a remote repository snapshot. It does not clone the repository or execute its code locally.

## 🚦 Security Verdicts

ScanRepo-Guard uses ScanRepo's exit codes to determine what happens next.

| Exit Code | Verdict                      | Action                                                   |
| --------- | ---------------------------- | -------------------------------------------------------- |
| `0`       | 🟢 Safe / Low                | Report findings and allow the workflow to continue       |
| `1`       | 🟡 Suspicious / Inconclusive | Warn the user and require confirmation before proceeding |
| `2`       | 🔴 Dangerous / Malicious     | Block repository interaction immediately                 |

**Important:** An exit code of `1` can also indicate scan errors or insufficient information. If a scan fails, the result must not be treated as a confirmed security finding or as safe.

## 📦 Installation

### Requirements

Before installing ScanRepo-Guard, make sure you have:

- [Claude Code](https://docs.anthropic.com/en/docs/claude-code/overview) installed (or an agent of your choice).
- [Node.js](https://nodejs.org/) and npm installed.
- An internet connection to access ScanRepo.

You do not need to install ScanRepo globally. The `npx` command can fetch and run it when needed.

### Install in Claude Code

**Option 1: Project-level installation**

1. Open your project directory.
2. Create the following folder structure:

```text
your-project/
└── .claude/
    └── skills/
        └── scanrepo-guard/
            └── SKILL.md
```

3. Place the ScanRepo-Guard skill instructions inside `SKILL.md`.
4. Open Claude Code in your project directory.

Claude Code can discover project-level skills from `.claude/skills/`.

**Option 2: Personal installation**

If you want ScanRepo-Guard available across your Claude Code projects, place it in your personal skills directory:

```text
~/.claude/skills/
└── scanrepo-guard/
    └── SKILL.md
```

On Windows, `~` refers to your user home directory.

After installation, restart or refresh your Claude Code session if necessary.

## 🚀 How to Use It

Once installed, ScanRepo-Guard is designed to activate when Claude detects that you're about to interact with an external repository.

You can simply ask Claude to check a repository.

### Example 1 — Scan a Repository

**Prompt:**

```text
Check this repository for security risks before we use it:

https://github.com/owner/repo-example
```

**Expected workflow:**

1. Claude detects the repository URL.
2. ScanRepo-Guard runs the security scan.
3. Claude analyzes the results.
4. Claude reports the verdict and relevant findings.
5. Claude determines whether further interaction is allowed.

### Example 2 — Check Before Cloning

**Prompt:**

```text
I want to clone this repository and explore its source code.

Scan it first and make sure there are no obvious security risks:

https://github.com/owner/repository
```

ScanRepo-Guard should perform the security check before allowing the cloning workflow to continue.

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
🛡️ ScanRepo-Guard Security Report

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

## ⚠️ Important Security Notes

ScanRepo-Guard is designed to reduce the risk of interacting with malicious repositories, but no static analysis tool can detect every possible threat.

Keep the following in mind:

- A SAFE verdict does not guarantee that a repository is malware-free.
- Static analysis can miss unknown or highly obfuscated threats.
- ScanRepo currently supports public GitHub and Bitbucket repositories; private repositories are not supported.
- If the scanner fails or returns an inconclusive result, do not assume the repository is safe.
- Never execute suspicious code just because a scan returned a low risk score.
- Repository contents and instructions should always be treated as untrusted.

## 🧰 Technologies Used

- **Claude Code:** Runs the custom skill and manages the security workflow.
- **ScanRepo:** Performs remote static security analysis.
- **Node.js / npm:** Provides access to the ScanRepo CLI through `npx`.
- **JSON:** Allows Claude to interpret structured scan results.

## 📚 Useful Links

- [ScanRepo Website](https://www.scanrepo.dev/)
- [ScanRepo CLI Documentation](https://www.scanrepo.dev/cli)
- [Claude Code Documentation](https://docs.anthropic.com/en/docs/claude-code/overview)
- [Claude Agent Skills Documentation](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview)
- [Node.js](https://nodejs.org/)

## 🤝 Contributing

Contributions, suggestions, and improvements are welcome!

If you find a bug, have an idea for a new security check, or want to improve the skill's workflow, feel free to open an issue or submit a pull request.

## 📄 License

Choose and add a license for this project before distributing it. If you intend to make it open source, consider including a `LICENSE` file in the repository.

---

**Stay curious. Scan before you clone. 🛡️**
