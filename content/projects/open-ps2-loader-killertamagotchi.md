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
  lastSynchronized: '2026-10-27T16:40:09.586Z'
automation:
  sync: true
  github:
    repoEtag: W/"24b7b6fd0a6c9f8045d18af3ed4b562235d1148b651f40116cac1aca63835c5b"
    releasesEtag: W/"44921b991b69ad400f08edbf445d0f6cc65586be61fcd60a8f1adf5e6da5ff1a"
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
