---
name: Open-PS2-Loader
slug: open-ps2-loader-uyjulian
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
  repository: uyjulian/Open-PS2-Loader
  repositoryId: '71399154'
repository:
  archived: false
  defaultBranch: master
  stars: 1
  forks: 0
  lastCommit: '2026-10-13T04:06:58Z'
latestRelease:
  tag: latest
  name: latest
  publishedAt: '2026-10-13T04:07:00Z'
  url: 'https://github.com/uyjulian/Open-PS2-Loader/releases/tag/latest'
activity:
  lastSynchronized: '2026-11-28T02:01:14.508Z'
automation:
  sync: true
  github:
    repoEtag: W/"0aab8f4c214333de44c9ec05d168497d1773e4506d65ef25563833034a2ec5b9"
    releasesEtag: W/"41225ed1eeb0fcee001c9e2cc62901b26d2c4d26a3fe83697ceb42dba9cc683f"
discovery:
  method: 'fork-network:ps2homebrew/Open-PS2-Loader'
  confidence: 100
  evidence:
    - repository name explicitly identifies PS2
    - README contains PS2 development/toolchain evidence
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
