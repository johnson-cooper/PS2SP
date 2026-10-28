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
  lastSynchronized: '2026-10-28T16:05:03.182Z'
automation:
  sync: true
  github:
    repoEtag: W/"a409ae219cc956d9607a33f4eacb290e17e0b42b171e61090e201bca5fafdaf1"
    releasesEtag: W/"e52bb63ca188261092ce1bbd832bce912f07d62d1f4cbcfff707c6b3ed272852"
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
