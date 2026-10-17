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
  lastSynchronized: '2026-10-17T13:45:10.112Z'
automation:
  sync: true
  github:
    repoEtag: W/"d23e41822812d0105a43835ebc8d71b70055c9cd2efb01cc475da00cc961f1c9"
    releasesEtag: W/"e3380e29a00bc19f1595f04c7243e6522796979dff71cd8fcd86f31352a04300"
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
