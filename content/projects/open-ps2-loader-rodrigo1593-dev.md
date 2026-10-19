---
name: Open-PS2-Loader
slug: open-ps2-loader-rodrigo1593-dev
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
  repository: rodrigo1593-dev/Open-PS2-Loader
  repositoryId: '1177330496'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2026-05-11T16:00:53Z'
latestRelease:
  tag: latest
  name: latest
  publishedAt: '2026-05-11T16:00:55Z'
  url: 'https://github.com/rodrigo1593-dev/Open-PS2-Loader/releases/tag/latest'
activity:
  lastSynchronized: '2026-10-19T20:36:27.763Z'
automation:
  sync: true
  github:
    repoEtag: W/"cd59ef5d5066b14ff316ca5005a671c3e8e89a1ac8b03c9786c6ee17a295cdeb"
    releasesEtag: W/"f9734806ee1a06c496e1a94db85091f031e9b511ce939d7587e22d025064487a"
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
