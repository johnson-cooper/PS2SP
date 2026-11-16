---
name: yaopl
slug: yaopl-viktortestmetrstandart
summary: >-
  YAOPL — Yet Another Open PS2 Loader: a fork of Open PS2 Loader (OPL) that
  continues its development. Game and app loader for PlayStation 2.
categories:
  - loaders
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
homepage: 'https://yaopl.github.io/yaopl/'
source:
  provider: github
  repository: viktortestmetrstandart/yaopl
  repositoryId: '1458859345'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2026-11-16T01:11:58Z'
latestRelease:
  tag: latest
  name: v2.0.0-nightly.208-26173f6-yaopl
  publishedAt: '2026-11-16T01:11:59Z'
  url: 'https://github.com/viktortestmetrstandart/yaopl/releases/tag/latest'
activity:
  lastSynchronized: '2026-11-16T03:08:35.121Z'
automation:
  sync: true
discovery:
  method: 'incremental:ps2 in:name,description'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - README contains PS2 development/toolchain evidence
    - published GitHub release present
    - release contains a PS2-style ELF asset
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: ps2homebrew/Open-PS2-Loader'
  maturity: prerelease-only
verified: false
featured: false
hidden: false
relationships:
  forkOf: yaopl/yaopl
  source: ps2homebrew/Open-PS2-Loader
---

Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
