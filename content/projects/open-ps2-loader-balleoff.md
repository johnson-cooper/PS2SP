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
  lastSynchronized: '2026-10-23T13:27:48.498Z'
automation:
  sync: true
  github:
    repoEtag: W/"39229df4aec8109f5ba4434c297f3c61ad0a195a046419d317560d2e93e00a63"
    releasesEtag: W/"0093d37e2f0010c0cb0f21183c244f28f46a63737c598d39d6b76df2548a1171"
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
