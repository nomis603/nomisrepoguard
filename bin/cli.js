#!/usr/bin/env node

"use strict";

const fs = require("node:fs");
const path = require("node:path");

// Find the AGENTS.md bundled with nomisrepoguard.
const sourceFile = path.resolve(__dirname, "..", "AGENTS.md");

// Install into the directory where the user ran the command.
const targetFile = path.resolve(process.cwd(), "AGENTS.md");

function showHelp() {
    console.log(`
🛡️ nomisrepoguard

Universal AI Agent Security Instructions

Usage:
  npx nomisrepoguard              Install AGENTS.md
  npx nomisrepoguard init         Install AGENTS.md
  npx nomisrepoguard --help       Show this help message
  npx nomisrepoguard --version    Show package version

The AGENTS.md file is installed into your current working directory.
`);
}

function showVersion() {
    const packageFile = path.resolve(__dirname, "..", "package.json");
    const packageInfo = JSON.parse(fs.readFileSync(packageFile, "utf8"));

    console.log(`nomisrepoguard v${packageInfo.version}`);
}

function initialize() {
    // Make sure the bundled AGENTS.md exists.
    if (!fs.existsSync(sourceFile)) {
        console.error("Error: Could not find the bundled AGENTS.md file.");
        console.error("The nomisrepoguard installation may be incomplete.");
        process.exitCode = 1;
        return;
    }

    // Prevent overwriting an existing AGENTS.md.
    try {
        fs.copyFileSync(
            sourceFile,
            targetFile,
            fs.constants.COPYFILE_EXCL
        );

        console.log("🛡️ nomisrepoguard initialized successfully!");
        console.log("");
        console.log(`Installed: ${targetFile}`);
        console.log("");
        console.log("Your project now contains nomisrepoguard instructions.");
        console.log("Your AI coding agent must support and read AGENTS.md");
        console.log("for these instructions to take effect.");

    } catch (error) {
        if (error.code === "EEXIST") {
            console.error("⚠️ An AGENTS.md file already exists in this directory.");
            console.error("");
            console.error(`Location: ${targetFile}`);
            console.error("");
            console.error("nomisrepoguard did not overwrite your existing file.");
            console.error("Back it up or merge the instructions manually if needed.");
        } else {
            console.error("Error: Could not install AGENTS.md.");
            console.error(error.message);
            process.exitCode = 1;
        }
    }
}

// Command handling.
const command = process.argv[2];

switch (command) {
    case undefined:
    case "init":
        initialize();
        break;

    case "--help":
    case "-h":
        showHelp();
        break;

    case "--version":
    case "-v":
        showVersion();
        break;

    default:
        console.error(`Unknown command: ${command}`);
        showHelp();
        process.exitCode = 1;
        break;
}
