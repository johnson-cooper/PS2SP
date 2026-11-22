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
  lastSynchronized: '2026-11-22T03:17:51.386Z'
automation:
  sync: true
  github:
    repoEtag: W/"22e9c0739b9e28bb53cb23499d33c7a0a31bf76ed0fb5d3d46cdb9f9552b22ca"
    releasesEtag: W/"7f434d056a6a7a466d8e28e99c0fb3b075fac3c8f47bca8d460b5ed65c9b8235"
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
