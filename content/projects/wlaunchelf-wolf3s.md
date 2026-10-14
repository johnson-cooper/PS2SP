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
  lastSynchronized: '2026-10-14T17:12:10.157Z'
automation:
  sync: true
  github:
    repoEtag: W/"a4232ec0f207cd0bac688dcf66877b771d85ab38c3ad362f821fdcdd9cc8c70a"
    releasesEtag: W/"9e5c17e4c0d69e19373fd0a9edc936ad4803b86ee7c06f8a65b41c4451348fb7"
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
