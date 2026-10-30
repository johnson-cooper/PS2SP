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
  lastSynchronized: '2026-10-30T23:47:37.543Z'
automation:
  sync: true
  github:
    repoEtag: W/"a2c30f7b63cfa5e9578d2f20a653fb144a8a10fc8b857b11a09f39f76689c0eb"
    releasesEtag: W/"0841a04b1f5192fb567eba590d157eb587d2da79508f23c446749b56651380fa"
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
