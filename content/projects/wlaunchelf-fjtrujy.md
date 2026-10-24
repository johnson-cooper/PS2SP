---
name: wLaunchELF
slug: wlaunchelf-fjtrujy
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
  repository: fjtrujy/wLaunchELF
  repositoryId: '322238616'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2021-08-01T18:09:37Z'
latestRelease:
  tag: latest
  name: Latest development build
  publishedAt: '2020-12-17T09:08:06Z'
  url: 'https://github.com/fjtrujy/wLaunchELF/releases/tag/latest'
activity:
  lastSynchronized: '2026-10-24T00:43:57.257Z'
automation:
  sync: true
  github:
    repoEtag: W/"fe50b0c3d3596c37c551162b7682253a59aa93bb2c612ac71c25e259a2b02d70"
    releasesEtag: W/"f0fd4e3dc58982d591ebbf95a0c4e1882d17649a39107d7733361c6218142b97"
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
