---
name: Open-PS2-Loader
slug: open-ps2-loader-minze25
summary: Game and app loader for Sony PlayStation 2
categories:
  - loaders
tags:
  - opl
  - hdloader
  - homebrew
  - fork
  - auto-discovered
features:
  - usb
  - hdd
  - network
  - mx4sio
authors: []
license: AFL-3.0
homepage: 'https://ps2homebrew.github.io/Open-PS2-Loader/'
source:
  provider: github
  repository: MinZe25/Open-PS2-Loader
  repositoryId: '993902556'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2025-06-03T21:41:07Z'
latestRelease:
  tag: latest
  name: latest
  publishedAt: '2025-06-03T21:41:08Z'
  url: 'https://github.com/MinZe25/Open-PS2-Loader/releases/tag/latest'
activity:
  lastSynchronized: '2026-10-30T19:23:25.908Z'
automation:
  sync: true
  github:
    repoEtag: W/"a933e84d01eb9d7744e2b480b41e94764680bec1689a5ef7719f92349e351bb1"
    releasesEtag: W/"5648bd213f996e065242bc9be6eac1a47f401d5517d6a6dbae4a48ce0d83883c"
discovery:
  method: 'fork-network:ps2homebrew/Open-PS2-Loader'
  confidence: 100
  evidence:
    - repository name explicitly identifies PS2
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - README contains PS2 development/toolchain evidence
    - published GitHub release present
    - release contains a PS2-style ELF asset
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: ps2homebrew/Open-PS2-Loader'
  maturity: prerelease-only
verified: false
featured: false
hidden: false
relationships:
  forkOf: ps2homebrew/Open-PS2-Loader
  source: ps2homebrew/Open-PS2-Loader
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
