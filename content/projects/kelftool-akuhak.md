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
  lastSynchronized: '2026-10-24T23:15:24.811Z'
automation:
  sync: true
  github:
    repoEtag: W/"fbaa9642d757b5fea96645f6ecb13ce43c9187733cad022d32ee7fed30636540"
    releasesEtag: W/"06976a7d698f0fdbdc0fb47063d45b53825c1a7ee19b1f4f588a6a004c181b8d"
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
