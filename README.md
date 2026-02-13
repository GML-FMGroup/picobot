# picobot

`picobot` is a lightweight, skills-first agent built with Google ADK, focused on learning and education use cases.

## Scope

- Keeps: local skill discovery and loading (`SKILL.md`)
- Removes: Telegram/Feishu/Discord/WhatsApp and other social-channel integrations
- Runtime: Google ADK (`LlmAgent` + function tools)
- Bundles built-in skills under `picobot/skills`
- Provides core tools for file, shell, web, messaging, and scheduling workflows

## Project Structure

```text
picobot/
├── pyproject.toml
├── README.md
└── picobot/
    ├── __init__.py
    ├── agent.py
    ├── cli.py
    ├── skills.py
    └── skills/
        └── general/
            └── SKILL.md
```

## Skill Model

`picobot` discovers skills from:

1. `PICOBOT_WORKSPACE/skills/*/SKILL.md` (workspace, higher priority)
2. Built-in `picobot/skills/*/SKILL.md`

The agent exposes two skill tools:

- `list_skills()`: list available skills as JSON
- `read_skill(name)`: read full `SKILL.md` content

## Built-in Action Tools

- `read_file`, `write_file`, `edit_file`, `list_dir`
- `exec` (implemented by `exec_command`)
- `web_search`, `web_fetch`
- `message` (local outbox log)
- `cron` (local persisted add/list/remove)

## Installation

```bash
cd picobot
pip install -e .
```

## Run

### Single-turn request (recommended)

```bash
cd picobot
python -m picobot.cli -m "Describe what you can do"
```

You can also pass explicit identifiers:

```bash
python -m picobot.cli -m "Describe what you can do" --user-id local --session-id demo001
```

### ADK CLI mode

```bash
adk run picobot
```

### Wrapper CLI

```bash
picobot run
```

### Utilities

```bash
picobot skills
picobot doctor
```

## Classic Usage Examples

```bash
python -m picobot.cli -m "Go to the workspace folder, search for the latest research progress today, and create a PPT for me."
python -m picobot.cli -m "Go to the workspace folder and download all PDF files from this page: https://bbs.kangaroo.study/forum.php?mod=viewthread&tid=467"
```

## Testing

```bash
source .venv/bin/activate
cd picobot
python -m unittest discover -s tests -v
```

## Environment Variables

- `PICOBOT_MODEL`: override model (default: `gemini-3-flash-preview`)
- `PICOBOT_WORKSPACE`: workspace root for custom skills
- `PICOBOT_BUILTIN_SKILLS_DIR`: override built-in skills directory
- `PICOBOT_DEBUG`: set to `1` to print debug details to stderr, including:
  - request payload sent to the LLM runner
  - every function calling / tool calling trace with input and output
  - skill discovery and `read_skill` selection details
  - LLM event stream details (`text` / `function_call` / `function_response` / errors / finish_reason)

## Acknowledgements

This project is inspired by and partially adapted from [nanobot](https://github.com/HKUDS/nanobot).
Some implementation patterns and skill-related resources are derived from that project.
