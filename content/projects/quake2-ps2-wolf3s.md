---
name: quake2-ps2
slug: quake2-ps2-wolf3s
summary: A homebrew port of idSoftware's Quake 2 for the PlayStation 2 Console.
categories:
  - games
  - ports
tags:
  - quake
  - quake2
  - fps
  - ps2sdk
  - fork
  - auto-discovered
features:
  - memory-card
authors: []
license: GPL-2.0
homepage: 'https://glampert.github.io'
source:
  provider: github
  repository: Wolf3s/quake2-ps2
  repositoryId: '1405578273'
repository:
  archived: false
  defaultBranch: main
  stars: 0
  forks: 0
  lastCommit: '2026-10-17T10:27:58Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-10-17T11:10:50.101Z'
automation:
  sync: true
discovery:
  method: 'incremental:"ps2 port" in:name,description,readme'
  confidence: 100
  evidence:
    - repository name explicitly identifies PS2
    - repository description explicitly identifies PS2
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: glampert/quake2-ps2'
  maturity: active-unreleased
verified: false
featured: false
hidden: false
relationships:
  forkOf: glampert/quake2-ps2
  source: glampert/quake2-ps2
---

Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
