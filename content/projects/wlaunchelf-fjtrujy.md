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
  lastSynchronized: '2026-10-14T00:21:09.562Z'
automation:
  sync: true
  github:
    repoEtag: W/"5515f79bb53986609c2cdcc25dcd1facd24275d904c9f3b3b9f77c245efdb229"
    releasesEtag: W/"4ee5704e1474c9380583d50635afd4985203858fffad44c350f2b47c6859fd9f"
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
