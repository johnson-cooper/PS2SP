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
  lastSynchronized: '2026-11-07T16:27:43.550Z'
automation:
  sync: true
  github:
    repoEtag: W/"a249b64276598ca3ad14260e8e1223ada29a4b581a9f523915eee574f2c9c7df"
    releasesEtag: W/"e4f696aa356d6abe9aba5636705e5accb3d7ce25cb3b6496e75d1c4772429fdd"
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
