# picobot

`picobot` is a lightweight, skills-first agent built with Google ADK, focused on learning and education scenarios.

## Scope

- Keeps: local skills discovery + loading (`SKILL.md`)
- Removes: Telegram/Feishu/Discord/WhatsApp and other social channel integrations
- Runtime: Google ADK (`LlmAgent` + function tools)
- Bundles built-in skills under `picobot/skills`
- Provides core tools for file, shell, web, message, and schedule workflows

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

## Skills Model

`picobot` discovers skills from:

1. `PICOBOT_WORKSPACE/skills/*/SKILL.md` (workspace, higher priority)
2. Built-in `picobot/skills/*/SKILL.md`

The agent uses two function tools:

- `list_skills()`: returns discovered skills JSON
- `read_skill(name)`: returns full `SKILL.md` content

It also exposes core action tools:

- `read_file`, `write_file`, `edit_file`, `list_dir`
- `exec` (implemented by `exec_command`)
- `web_search`, `web_fetch`
- `message` (local outbox log)
- `cron` (local persisted add/list/remove)

## Install

```bash
cd /Users/wenhaojiang/Work/code/pytorch_research/basic_networks/agi/0_auto_agent/0_auto_agent/nanobot_google_adk/picobot
pip install -e .
```

## Run

### Option 0: Single-turn message (new)

```bash
cd /Users/wenhaojiang/Work/code/pytorch_research/basic_networks/agi/0_auto_agent/0_auto_agent/nanobot_google_adk/picobot
python -m picobot.cli -m "我的需求描述"
```

You can also pass identifiers:

```bash
python -m picobot.cli -m "我的需求描述" --user-id local --session-id demo001
```

### Option A: ADK official CLI (recommended)

```bash
adk run /Users/wenhaojiang/Work/code/pytorch_research/basic_networks/agi/0_auto_agent/0_auto_agent/nanobot_google_adk/picobot/picobot
```

### Option B: wrapper CLI

```bash
picobot run
```

### Utilities

```bash
picobot skills
picobot doctor
```

## Test

```bash
source /Users/wenhaojiang/Work/code/pytorch_research/basic_networks/agi/0_auto_agent/0_auto_agent/nanobot_google_adk/.venv/bin/activate
cd /Users/wenhaojiang/Work/code/pytorch_research/basic_networks/agi/0_auto_agent/0_auto_agent/nanobot_google_adk/picobot
python -m unittest discover -s tests -v
```

## Environment Variables

- `PICOBOT_MODEL`: override model (default: `gemini-3-flash-preview`)
- `PICOBOT_WORKSPACE`: workspace root for custom skills
- `PICOBOT_BUILTIN_SKILLS_DIR`: override built-in skills directory
- `PICOBOT_DEBUG`: set to `1` to print debug details to stderr, including:
  - request payload sent to the LLM runner
  - every function calling / tool calling trace with input and output
  - skills discovery and `read_skill` selection details
  - LLM event stream details (text / function_call / function_response / errors / finish_reason)
