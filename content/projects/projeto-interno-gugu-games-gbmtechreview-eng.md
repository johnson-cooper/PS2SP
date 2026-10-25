---
name: Projeto-Interno-GuGu-Games
slug: projeto-interno-gugu-games-gbmtechreview-eng
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
  repository: gbmtechreview-eng/Projeto-Interno-GuGu-Games
  repositoryId: '1236135859'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2026-05-17T22:48:23Z'
latestRelease:
  tag: latest
  name: latest
  publishedAt: '2026-05-17T22:48:24Z'
  url: >-
    https://github.com/gbmtechreview-eng/Projeto-Interno-GuGu-Games/releases/tag/latest
activity:
  lastSynchronized: '2026-10-25T16:20:45.019Z'
automation:
  sync: true
  github:
    repoEtag: W/"062d9109304f57b8b33cf042adbd36c3546f72bb4a49b3479d793f96bad5be5c"
    releasesEtag: W/"631ee14e71b3c12ec0a350e03ca9cc35d318f2cf214e34e976e749d60aa20cfc"
discovery:
  method: 'fork-network:ps2homebrew/Open-PS2-Loader'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
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
