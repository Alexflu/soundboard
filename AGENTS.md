# AGENTS.md

## Role
You are modifying a soundboard application.  
Prioritize minimal, clean, data-driven changes.

---

## Project Rules

- Do NOT break existing behavior
- Keep changes localized and simple
- Avoid nested conditionals
- Prefer mappings / data-driven logic
- Reuse existing playback logic
- Do NOT introduce preset sounds

---

## Existing Hotkeys (Default Behavior)

- Ctrl+F1 → play random sound from local storage
- Ctrl+F2–F8 → play sounds from search list

These MUST remain defaults.

---

## Goals

- Allow hotkeys to be customizable
- Store hotkeys in config (not hardcoded)
- Separate:
  - keybinding logic
  - playback logic
- Keep "random sound" as a distinct action

---

## Structure Expectations

- Identify where:
  - hotkeys are handled
  - random sound is triggered
  - search list playback happens
  - config/settings exist (or create one)

---

## Implementation Rules

- Defaults must work even with no config
- Do not trigger hotkeys while typing in inputs
- Do not rename core functions unless necessary
- Do not refactor unrelated code

---

## Workflow

Before editing:
- List files to be changed
- Explain why

After editing:
- List changed files
- Explain how defaults are preserved
- Give exact steps to test

---

## Upgrade Task (Important)

Bring the repository more up to date:

- Update dependencies safely
- Fix obvious deprecated usage
- Keep compatibility with current code
- Do NOT introduce breaking changes
- Do NOT rewrite large sections unless required

---

## Boundaries

Always:
- Keep behavior intact
- Keep code readable

Never:
- Add unnecessary complexity
- Replace working systems without reason