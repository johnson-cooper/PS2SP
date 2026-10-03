---
name: wLaunchELF_ISR
slug: wlaunchelf-isr-eliankeil
summary: Stable fork of the most famous file browser for Playstation 2
categories:
  - launchers
  - file-managers
  - utilities
tags:
  - wlaunchelf
  - ulaunchelf
  - elf
  - fork
  - auto-discovered
features:
  - usb
  - hdd
  - network
  - memory-card
authors: []
license: null
homepage: 'https://israpps.github.io/projects/wlaunchelf-isr'
source:
  provider: github
  repository: eliankeil/wLaunchELF_ISR
  repositoryId: '1119811001'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2026-07-09T22:07:36Z'
latestRelease:
  tag: latest
  name: Latest automated build
  publishedAt: '2026-01-12T17:05:20Z'
  url: 'https://github.com/eliankeil/wLaunchELF_ISR/releases/tag/latest'
activity:
  lastSynchronized: '2026-10-03T22:26:09.550Z'
automation:
  sync: true
discovery:
  method: 'fork-network:israpps/wLaunchELF_ISR'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - published GitHub release present
    - release contains a PS2-style ELF asset
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: ps2homebrew/wLaunchELF'
  maturity: released-active
verified: false
featured: false
relationships:
  forkOf: israpps/wLaunchELF_ISR
  source: ps2homebrew/wLaunchELF
---

Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
