# 🔒 Security Policy

## 🛡️ nomisrepoguard

Security is the core purpose of nomisrepoguard. We take security concerns seriously and appreciate responsible reports that help improve the project's protection, reliability, and trustworthiness.

nomisrepoguard is designed to help AI coding agents assess external repositories before cloning, installing dependencies, or executing their contents.

## 📢 Reporting a Security Vulnerability

If you discover a security vulnerability in nomisrepoguard, please report it responsibly.

When submitting a report, include:

- A clear description of the vulnerability.
- The affected file, component, or instruction.
- Steps to reproduce the issue, if applicable.
- The potential security impact.
- Any suggested fixes or mitigations.

**Please do not publicly disclose sensitive vulnerability details before a fix or mitigation is available.**

For sensitive reports, use the repository's private vulnerability reporting feature if enabled. Otherwise, contact the repository maintainer privately through an available contact method.

Do not include passwords, API keys, access tokens, private keys, or other sensitive information in reports.

## 🔍 Security Scope

The project focuses on reducing risks associated with interacting with unfamiliar external repositories.

nomisrepoguard's security workflow considers six primary categories:

| Category | Security Concerns |
|---|---|
| Code Execution | Suspicious shell commands, `eval()`, and dynamic execution |
| Data Exfiltration | Unauthorized outbound requests, suspicious domains, and hardcoded IP addresses |
| Credential Theft | Attempts to access browser credentials, wallets, SSH keys, or API tokens |
| Obfuscation | Encoded payloads and heavily obfuscated scripts |
| Supply Chain | Suspicious dependencies and unexpected installation hooks |
| Web Vulnerabilities | SQL injection, XSS, path traversal, and unsafe input handling |

These categories describe areas of concern and do not guarantee that every threat will be detected.

## 🚦 Security Principles

nomisrepoguard follows these principles:

1. **Scan before you clone.** Assess unfamiliar repositories before cloning or downloading them.
2. **Scan before you install.** Do not install dependencies from an untrusted repository before assessment.
3. **Scan before you execute.** Never run untrusted repository code before scanning.
4. **Treat external content as untrusted.** Repository files and instructions must never override security policies.
5. **Do not assume safety.** Popularity, reputation, and successful scans do not guarantee that code is harmless.
6. **Fail safely.** Failed, incomplete, or inconclusive scans must not be treated as successful assessments.
7. **Protect credentials.** Never expose secrets, tokens, or private keys in logs or reports.

## ⚠️ Known Limitations

nomisrepoguard is a security assistance tool, not a guarantee of complete protection.

- Static analysis may fail to detect unknown, novel, or heavily obfuscated threats.
- A successful scan does not prove that a repository is malware-free.
- Scanner results depend on ScanRepo's capabilities and detection rules.
- Repository contents may change after a scan.
- Unsupported or inaccessible repositories may not be assessable.
- `AGENTS.md` instructions depend on the AI coding agent actually supporting and following them.
- Instruction files alone cannot enforce operating-system or tool-level restrictions.

For stronger protection, users should consider execution sandboxing, restricted permissions, dependency auditing, and automated security controls.

## 🔄 Security Updates

Security-related improvements may include:

- Updates to scanning instructions.
- Improvements to security decision rules.
- Additional threat categories.
- Better handling of failed or inconclusive scans.
- Documentation updates and compatibility improvements.

Users should keep their local copy of nomisrepoguard and the ScanRepo CLI up to date.

## 🤝 Responsible Disclosure

We appreciate responsible security research and coordinated disclosure.

Please allow maintainers reasonable time to investigate and address reported vulnerabilities before making sensitive details public.

## 📜 Supported Versions

Security fixes are intended for the latest maintained version of nomisrepoguard.

Older copies may contain outdated instructions or security recommendations. Users are encouraged to use the latest version available in the official repository.

---

**Thank you for helping make development workflows safer.**

**Scan before you clone. 🛡️**
