---
name: ejectdvd_menu
slug: ejectdvd-menu
summary: >-
  Application to eject and close the DVD drive in the case of a stuck eject
  button on a PS2.
categories:
  - launchers
tags:
  - auto-discovered
features: []
authors: []
license: MIT
homepage: null
source:
  provider: github
  repository: BarkhelicTriangle/ejectdvd_menu
  repositoryId: '1459251863'
repository:
  archived: false
  defaultBranch: main
  stars: 0
  forks: 0
  lastCommit: '2026-11-16T05:49:55Z'
latestRelease:
  tag: v1.0
  name: v1.0
  publishedAt: '2026-11-16T05:49:55Z'
  url: 'https://github.com/BarkhelicTriangle/ejectdvd_menu/releases/tag/v1.0'
activity:
  lastSynchronized: '2026-11-16T22:31:39.705Z'
automation:
  sync: true
discovery:
  method: 'incremental:ps2 in:name,description'
  confidence: 100
  evidence:
    - ps2-homebrew topic
    - PS2-specific topic
    - repository description explicitly identifies PS2
    - published GitHub release present
    - release contains a PS2-style ELF asset
  maturity: released-active
verified: false
featured: false
hidden: false
---

Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
