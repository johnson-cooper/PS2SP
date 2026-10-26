---
name: wLaunchELF
slug: wlaunchelf-calos9999
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
  repository: calos9999/wLaunchELF
  repositoryId: '938142894'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2025-09-23T11:57:23Z'
latestRelease:
  tag: latest
  name: Latest development build
  publishedAt: '2025-09-23T11:57:24Z'
  url: 'https://github.com/calos9999/wLaunchELF/releases/tag/latest'
activity:
  lastSynchronized: '2026-10-26T13:09:54.378Z'
automation:
  sync: true
  github:
    repoEtag: W/"d676bbddbc7f0cc765766d1ec1681f84a340bbeffbe1b5fb097319ab2aa48ca8"
    releasesEtag: W/"a8aa77a78902a36db54727ca0d00483eaaafcd2a2f49d11100d227aed5a916b7"
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
