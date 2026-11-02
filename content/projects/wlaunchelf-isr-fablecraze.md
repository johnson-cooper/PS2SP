---
name: wLaunchELF_ISR
slug: wlaunchelf-isr-fablecraze
summary: Stable fork of the most famous file browser for Playstation 2
categories:
  - file-managers
  - launchers
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
  repository: FableCraze/wLaunchELF_ISR
  repositoryId: '1115443192'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2025-12-12T23:30:28Z'
latestRelease:
  tag: latest
  name: Latest automated build
  publishedAt: '2025-12-12T23:30:13Z'
  url: 'https://github.com/FableCraze/wLaunchELF_ISR/releases/tag/latest'
activity:
  lastSynchronized: '2026-11-02T06:05:08.975Z'
automation:
  sync: true
  github:
    repoEtag: W/"429e155be74f08bf4d00e8916b4b9441ed6abdb760eea93e33d7c404a825cf75"
    releasesEtag: W/"35b187825c910caf8d7389453156c3b1ec830659635da8c2e8200be3c015146e"
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
  maturity: released-legacy
verified: false
featured: false
relationships:
  forkOf: israpps/wLaunchELF_ISR
  source: ps2homebrew/wLaunchELF
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
