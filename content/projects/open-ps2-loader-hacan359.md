---
name: Open-PS2-Loader
slug: open-ps2-loader-hacan359
summary: >-
  Open PS2 Loader with a RetroAchievements agent, on branch ra: it hashes the
  game, reads console memory every frame and streams it to the xeRAbora PC
  client. The master branch mirrors ps2homebrew/Open-PS2-Loader.
categories:
  - loaders
  - utilities
tags:
  - opl
  - hdloader
  - homebrew
  - fork
  - auto-discovered
features:
  - usb
  - hdd
  - network
  - mx4sio
authors: []
license: AFL-3.0
homepage: 'https://ps2homebrew.github.io/Open-PS2-Loader/'
source:
  provider: github
  repository: hacan359/Open-PS2-Loader
  repositoryId: '1347525341'
repository:
  archived: false
  defaultBranch: ra
  stars: 1
  forks: 1
  lastCommit: '2026-09-29T16:39:21Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-10-01T03:27:44.437Z'
automation:
  sync: true
discovery:
  method: 'incremental:ps2 in:name,description'
  confidence: 100
  evidence:
    - ps2-homebrew topic
    - PS2-specific topic
    - repository name explicitly identifies PS2
    - repository description explicitly identifies PS2
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: ps2homebrew/Open-PS2-Loader'
  maturity: active-unreleased
verified: false
featured: false
relationships:
  forkOf: ps2homebrew/Open-PS2-Loader
  source: ps2homebrew/Open-PS2-Loader
---

Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
