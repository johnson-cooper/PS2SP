---
name: OPL-Daily-Builds
slug: opl-daily-builds-yagami55
summary: OPL "Daily" Builds (Releases)
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
homepage: 'http://www.ps2-home.com/forum/viewtopic.php?f=13&t=3'
source:
  provider: github
  repository: YAGAMI55/OPL-Daily-Builds
  repositoryId: '588271441'
repository:
  archived: false
  defaultBranch: master
  stars: 1
  forks: 0
  lastCommit: '2023-01-27T07:23:40Z'
latestRelease:
  tag: v1.2.0-PSXPB-1.0-6f6aacf
  name: v1.2.0-PSXPB-1.0-6f6aacf
  publishedAt: '2023-01-21T08:14:45Z'
  url: >-
    https://github.com/YAGAMI55/OPL-Daily-Builds/releases/tag/v1.2.0-PSXPB-1.0-6f6aacf
activity:
  lastSynchronized: '2026-11-21T08:46:04.198Z'
automation:
  sync: true
discovery:
  method: 'fork-network:Jay-Jay-OPL/OPL-Daily-Builds'
  confidence: 100
  evidence:
    - README explicitly mentions PlayStation 2
    - README contains PS2 development/toolchain evidence
    - published GitHub release present
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: ps2homebrew/Open-PS2-Loader'
  maturity: prerelease-only
verified: false
featured: false
hidden: false
relationships:
  forkOf: Jay-Jay-OPL/OPL-Daily-Builds
  source: ps2homebrew/Open-PS2-Loader
---

Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
