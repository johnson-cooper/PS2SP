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
  lastSynchronized: '2026-11-05T03:32:13.569Z'
automation:
  sync: true
  github:
    repoEtag: W/"b7e5ba1f1c2c4c885871aeb6b82f9e4d524e430a5c10c5cae7771d3669547617"
    releasesEtag: W/"63c4d1af6e66cdd6946e31082bc49ce54e5c0686e6275a0bf561d914822582b3"
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
