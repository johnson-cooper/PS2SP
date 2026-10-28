---
name: Open-PS2-Loader
slug: open-ps2-loader-killertamagotchi
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
  repository: Killertamagotchi/Open-PS2-Loader
  repositoryId: '323345081'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2026-10-24T15:23:55Z'
latestRelease:
  tag: latest
  name: latest
  publishedAt: '2026-10-24T15:23:56Z'
  url: 'https://github.com/Killertamagotchi/Open-PS2-Loader/releases/tag/latest'
activity:
  lastSynchronized: '2026-10-28T16:04:26.834Z'
automation:
  sync: true
  github:
    repoEtag: W/"e07d99ecc877551c158b231a2b8718025d5de04c4c3fe3b8924ab7c86c8ac34d"
    releasesEtag: W/"87c52c6b0601e7f9f1719b037bf53704ed6836fe94351b929c1630b7c1eb1c42"
discovery:
  method: 'incremental:ps2 in:name,description'
  confidence: 100
  evidence:
    - repository name explicitly identifies PS2
    - repository description explicitly identifies PS2
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
