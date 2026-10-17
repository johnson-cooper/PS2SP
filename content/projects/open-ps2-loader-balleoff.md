---
name: Open-PS2-Loader
slug: open-ps2-loader-balleoff
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
  repository: balleoff/Open-PS2-Loader
  repositoryId: '1061424756'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2025-09-22T10:04:41Z'
latestRelease:
  tag: latest
  name: latest
  publishedAt: '2025-09-22T10:09:53Z'
  url: 'https://github.com/balleoff/Open-PS2-Loader/releases/tag/latest'
activity:
  lastSynchronized: '2026-10-17T13:44:17.401Z'
automation:
  sync: true
  github:
    repoEtag: W/"e45b02c167b581414a4337cee7ea2e131c1d9b8976b3a890ab5462726d7803c1"
    releasesEtag: W/"40c81b77b7bb89825aff43102c90a5ee701cfd000d3845c93e2c90fc8432a5f6"
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
relationships:
  forkOf: ps2homebrew/Open-PS2-Loader
  source: ps2homebrew/Open-PS2-Loader
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
