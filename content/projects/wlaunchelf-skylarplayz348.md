---
name: wLaunchELF
slug: wlaunchelf-skylarplayz348
summary: ELF loader and File browser for Sony PlayStation 2
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
homepage: null
source:
  provider: github
  repository: fuzzyghosty/wLaunchELF
  repositoryId: '1008701575'
repository:
  archived: false
  defaultBranch: master
  stars: 1
  forks: 0
  lastCommit: '2025-07-08T21:18:08Z'
latestRelease:
  tag: Nightly
  name: Nightly
  publishedAt: '2025-07-08T21:18:09Z'
  url: 'https://github.com/fuzzyghosty/wLaunchELF/releases/tag/Nightly'
activity:
  lastSynchronized: '2026-10-18T05:55:57.927Z'
automation:
  sync: true
  github:
    repoEtag: W/"8a49b922d59cf78d5eab6a35029509b92fc8f04aac99e52598e796396ac836f1"
    releasesEtag: W/"075acaacb45847c47e89bafd29c573ca5d74e6eba6f349a5aa2c823a7903df60"
discovery:
  method: 'fork-network:ps2homebrew/wLaunchELF'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - published GitHub release present
    - release contains a PS2-style ELF asset
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: ps2homebrew/wLaunchELF'
  maturity: prerelease-only
verified: false
featured: false
relationships:
  forkOf: ps2homebrew/wLaunchELF
  source: ps2homebrew/wLaunchELF
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
