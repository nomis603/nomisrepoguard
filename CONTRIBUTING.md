# 🤝 Contributing to ScanRepo-Guard

Thank you for your interest in contributing to **ScanRepo-Guard**!

ScanRepo-Guard aims to make security scanning a standard part of working with external repositories. Contributions that improve security, reliability, documentation, and compatibility with AI coding agents are welcome.

## 🎯 Ways to Contribute

There are several ways you can help improve the project:

- **Report bugs:** Identify problems, incorrect instructions, or unexpected behavior.
- **Suggest improvements:** Propose new security checks, features, or workflow improvements.
- **Improve documentation:** Make the README, AGENTS.md, and other documentation clearer and easier to follow.
- **Improve compatibility:** Help ensure the instructions work across different AI coding agents and development environments.
- **Improve security:** Identify gaps in the scanning workflow or suggest additional safeguards.
- **Submit code:** Contribute fixes, scripts, or other improvements that support the project.

## 🚀 Getting Started

1. Fork the ScanRepo-Guard repository.
2. Clone your fork to your local machine.
3. Create a new branch for your changes.
4. Make your changes.
5. Review your work and test any scripts or configuration changes.
6. Commit your changes.
7. Open a pull request describing your contribution.

Example:

```bash
git clone https://github.com/YOUR_USERNAME/ScanRepo-Guard.git
cd ScanRepo-Guard

git checkout -b feature/your-improvement
```

Replace the repository URL with the actual URL of your fork.

## 🔒 Security Guidelines

Security is the primary focus of ScanRepo-Guard. Contributions must respect the project's security principles.

- Never introduce code that executes untrusted repository contents before scanning.
- Do not weaken or bypass the security checks defined in `AGENTS.md` without a clear security justification.
- Do not include real passwords, API keys, tokens, private keys, or other credentials.
- Do not introduce dependencies without considering their security and necessity.
- Clearly document new security checks and their limitations.
- Do not present suspicious indicators as confirmed malicious behavior without sufficient evidence.
- Never claim that static analysis guarantees a repository is safe.

If your contribution changes ScanRepo's commands, output format, or exit-code handling, verify the behavior against the current ScanRepo documentation.

## 📝 Documentation Contributions

Documentation improvements are especially welcome.

When editing documentation:

- Keep instructions clear and easy to understand.
- Preserve compatibility with different AI coding agents.
- Avoid instructions that depend exclusively on one AI provider or IDE.
- Keep the README and `AGENTS.md` consistent.
- Clearly distinguish confirmed functionality from assumptions or planned features.
- Include examples where they help explain a workflow.

## 🌿 Branch Naming

Use descriptive branch names where possible.

Examples:

```text
feature/new-security-check
fix/documentation-error
docs/update-installation-guide
improvement/agent-compatibility
```

## 💬 Commit Messages

Write clear commit messages that explain what changed.

Examples:

```text
Add additional security checks
Fix AGENTS.md instructions
Improve installation documentation
Update ScanRepo workflow
```

## 🔍 Pull Requests

Before submitting a pull request:

- Make sure your changes are relevant to the project.
- Review your changes for errors.
- Test scripts or commands you modified, where applicable.
- Check that no secrets or unnecessary generated files are included.
- Update documentation when your changes affect existing instructions.

When opening a pull request, include:

1. A short description of the changes.
2. The reason for the changes.
3. Any relevant testing performed.
4. Any security implications or limitations.

Pull requests should focus on one main improvement whenever possible.

## 🐛 Reporting Issues

When reporting a bug or security concern, provide as much useful information as possible.

Include:

- A clear description of the problem.
- Steps to reproduce it, if applicable.
- Expected behavior.
- Actual behavior.
- Relevant error messages or logs, with secrets removed.

**Do not publish sensitive credentials, private repository contents, or exploitable vulnerability details in public issues.** For sensitive security concerns, use a private reporting method if the repository provides one.

## 📜 Code of Conduct

Contributors are expected to be respectful, constructive, and welcoming.

- Be respectful of different opinions and experience levels.
- Provide constructive feedback.
- Focus discussions on improving the project.
- Avoid harassment, discrimination, or abusive behavior.

## 🙌 Thank You

Every contribution helps make ScanRepo-Guard more useful and secure.

Whether you're reporting a bug, improving documentation, suggesting a feature, or contributing code, your help is appreciated.

**Scan before you clone. Contribute to a safer development workflow. 🛡️**
