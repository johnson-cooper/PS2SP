---
name: Open-PS2-Loader
slug: open-ps2-loader-atreus171
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
  repository: Atreus171/Open-PS2-Loader
  repositoryId: '1296566127'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2026-08-12T11:45:53Z'
latestRelease:
  tag: latest
  name: latest
  publishedAt: '2026-08-12T11:45:54Z'
  url: 'https://github.com/Atreus171/Open-PS2-Loader/releases/tag/latest'
activity:
  lastSynchronized: '2026-10-28T16:04:23.819Z'
automation:
  sync: true
  github:
    repoEtag: W/"68dd279d672f87ac2647a29af9dfcb5506b8c6cd578d21fdb07a9a67f9348563"
    releasesEtag: W/"124efb1932e191993dc34390ac6bf438132e2cae0088a6258d173d986b0853cc"
discovery:
  method: 'fork-network:ps2homebrew/Open-PS2-Loader'
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
relationships:
  forkOf: ps2homebrew/Open-PS2-Loader
  source: ps2homebrew/Open-PS2-Loader
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
