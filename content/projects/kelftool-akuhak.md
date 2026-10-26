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
  lastSynchronized: '2026-10-26T23:54:11.519Z'
automation:
  sync: true
  github:
    repoEtag: W/"5910a4ca68e01d1550edb1c5340d8afcc0ff9dcf18f6c9bedd003b09f7a411fa"
    releasesEtag: W/"79a0f8cdfe8ac86c644d89c8e6b1b24e263f41ff6d61bf3ed2edbe676b91d75e"
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
