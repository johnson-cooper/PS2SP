---
name: wLaunchELF
slug: wlaunchelf-wolf3s
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
  repository: Wolf3s/wLaunchELF
  repositoryId: '717908914'
repository:
  archived: false
  defaultBranch: master
  stars: 1
  forks: 0
  lastCommit: '2024-10-19T23:53:27Z'
latestRelease:
  tag: latest
  name: Latest development build
  publishedAt: '2024-10-19T23:31:02Z'
  url: 'https://github.com/Wolf3s/wLaunchELF/releases/tag/latest'
activity:
  lastSynchronized: '2026-11-14T17:11:09.895Z'
automation:
  sync: true
  github:
    repoEtag: W/"f4b6e8f9e0f668bb5ecba16e50a31182f1025e11a98df27b38df8bfb0a8ff7cb"
    releasesEtag: W/"a7653ba2cea7a6a88209568d89f546c037b276ab8ee3562ef8aaecedf2ea1490"
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
