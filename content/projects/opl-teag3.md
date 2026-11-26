---
name: OPL
slug: opl-teag3
summary: >-
  A modern PlayStation 2 launcher based on Open PS2 Loader with a redesigned
  interface, visual improvements, cover art support, and enhanced browsing
  experience.
categories:
  - launchers
tags:
  - auto-discovered
  - fork
features: []
authors: []
license: AFL-3.0
homepage: null
source:
  provider: github
  repository: TEaG3/OPL
  repositoryId: '1468644889'
repository:
  archived: false
  defaultBranch: main
  stars: 0
  forks: 0
  lastCommit: '2026-11-26T03:08:35Z'
latestRelease:
  tag: v1.2.0-arabic-embedded
  name: OPL 1.2.0 - Arabic Embedded Edition
  publishedAt: '2026-11-26T03:08:36Z'
  url: 'https://github.com/TEaG3/OPL/releases/tag/v1.2.0-arabic-embedded'
activity:
  lastSynchronized: '2026-11-26T03:07:38.081Z'
automation:
  sync: true
discovery:
  method: 'incremental:"ps2 port" in:name,description,readme'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - published GitHub release present
    - release contains a PS2-style ELF asset
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: Irfanlesnar/PS2-Launcher'
  maturity: released-active
verified: false
featured: false
hidden: false
relationships:
  forkOf: Irfanlesnar/PS2-Launcher
  source: Irfanlesnar/PS2-Launcher
---

Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
