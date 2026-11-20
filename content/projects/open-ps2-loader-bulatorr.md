---
name: Open-PS2-Loader
slug: open-ps2-loader-bulatorr
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
  repository: bulatorr/Open-PS2-Loader
  repositoryId: '741156907'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2026-05-14T08:47:31Z'
latestRelease:
  tag: latest
  name: latest
  publishedAt: '2026-04-07T12:28:34Z'
  url: 'https://github.com/bulatorr/Open-PS2-Loader/releases/tag/latest'
activity:
  lastSynchronized: '2026-11-20T03:16:30.974Z'
automation:
  sync: true
  github:
    repoEtag: W/"46a4bcc9d657bb475510fe932bcfea2802edda6af8450970a0c78f08f4df1dbc"
    releasesEtag: W/"7b6b186b9119bb5eef8472582ea45fa241483b1ae39a5ae3e84f113df514d02a"
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
hidden: false
relationships:
  forkOf: ps2homebrew/Open-PS2-Loader
  source: ps2homebrew/Open-PS2-Loader
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
