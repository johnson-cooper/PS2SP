---
name: kelftool
slug: kelftool-akuhak
summary: 'Utility for decrypt, encrypt and sign PS2 KELF and PSX KELF files'
categories:
  - boot-tools
  - development
  - host-tools
tags:
  - fork
  - auto-discovered
features: []
authors: []
license: GPL-3.0
homepage: null
source:
  provider: github
  repository: AKuHAK/kelftool
  repositoryId: '458226917'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2024-09-03T22:13:39Z'
latestRelease:
  tag: latest
  name: Development build
  publishedAt: '2024-01-19T08:55:16Z'
  url: 'https://github.com/AKuHAK/kelftool/releases/tag/latest'
activity:
  lastSynchronized: '2026-11-01T23:36:30.203Z'
automation:
  sync: true
  github:
    repoEtag: W/"8fb960de67236e9b4f9a27051acfdbcc3592b4f06b56df6a1d36bc9b1c2a8a5c"
    releasesEtag: W/"199a1acaec617d7d77143eb8cdc979d4db501f4f470e0553deaa5b51a52065b1"
discovery:
  method: 'fork-network:ps2homebrew/kelftool'
  confidence: 95
  evidence:
    - repository description explicitly identifies PS2
    - published GitHub release present
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: xfwcfw/kelftool'
  maturity: prerelease-only
verified: false
featured: false
relationships:
  forkOf: ps2homebrew/kelftool
  source: xfwcfw/kelftool
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
