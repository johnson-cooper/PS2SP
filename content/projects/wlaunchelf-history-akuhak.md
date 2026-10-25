---
name: wLaunchELF-history
slug: wlaunchelf-history-akuhak
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
  repository: AKuHAK/wLaunchELF-history
  repositoryId: '285811009'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2022-11-06T17:48:43Z'
latestRelease:
  tag: latest
  name: Latest development build
  publishedAt: '2022-08-14T19:10:32Z'
  url: 'https://github.com/AKuHAK/wLaunchELF-history/releases/tag/latest'
activity:
  lastSynchronized: '2026-10-25T11:31:11.375Z'
automation:
  sync: true
  github:
    repoEtag: W/"0b6f342e9fc28acec1073201b60e2812f8d6c98e291b3dd85a55e018090b6094"
    releasesEtag: W/"38ec14caac78fdf3056c85cacc92074578a90af1506c3ad1476d0e2b4657870c"
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
