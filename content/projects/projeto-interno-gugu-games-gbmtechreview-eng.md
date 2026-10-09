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
  lastSynchronized: '2026-10-09T16:14:00.995Z'
automation:
  sync: true
  github:
    repoEtag: W/"cb0cc9191cab9a0f4c5fbc3bc7a9f7fbaf81088d7174d734a6740dd966c8fe15"
    releasesEtag: W/"35aaa72bf6c93fd4fbef5ea4c289091d2e2dce2044f5db49d6fefa8a7f5686ea"
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
