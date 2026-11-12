---
name: Open-PS2-Loader
slug: open-ps2-loader-luisdallos
summary: PlayStation 2 software project discovered by PS2SP.
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
homepage: null
source:
  provider: github
  repository: luisdallos/Open-PS2-Loader
  repositoryId: '212773090'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2020-08-23T01:40:29Z'
latestRelease:
  tag: latest
  name: Latest development builds
  publishedAt: '2020-08-23T01:40:30Z'
  url: 'https://github.com/luisdallos/Open-PS2-Loader/releases/tag/latest'
activity:
  lastSynchronized: '2026-11-12T18:56:56.187Z'
automation:
  sync: true
  github:
    repoEtag: W/"2d5eed6fa1bc367587704d3eae39ff6fa7c3a671cab7f6c7be74f856fd86842d"
    releasesEtag: W/"50e2dcd778db3497adfd575988c75217e852e425ac420ab9885bd32be6c67bfa"
discovery:
  method: 'fork-network:ps2homebrew/Open-PS2-Loader'
  confidence: 100
  evidence:
    - repository name explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - README contains PS2 development/toolchain evidence
    - published GitHub release present
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
