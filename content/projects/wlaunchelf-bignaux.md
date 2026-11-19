---
name: wLaunchELF
slug: wlaunchelf-bignaux
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
  repository: bignaux/wLaunchELF
  repositoryId: '355276886'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2021-04-07T21:40:00Z'
latestRelease:
  tag: latest
  name: Latest development build
  publishedAt: '2021-04-07T21:40:01Z'
  url: 'https://github.com/bignaux/wLaunchELF/releases/tag/latest'
activity:
  lastSynchronized: '2026-11-19T03:30:48.846Z'
automation:
  sync: true
  github:
    repoEtag: W/"678522042c86e0e59fe15879ecb096580923372aac177364e1c61e3e934e3fa4"
    releasesEtag: W/"fd0773201c3a88c0f9e20aee6ff5d904e821d18dbe274befc96dfb253b58308e"
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
