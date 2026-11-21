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
  lastSynchronized: '2026-11-21T23:16:51.758Z'
automation:
  sync: true
  github:
    repoEtag: W/"eb3c367470271a656d8b4cb6c84d1d6cdf06294d4a28c52005ce4f4647ec35c4"
    releasesEtag: W/"b3ee23262b0c7666586f9a6dd2fb22266289ab360b9445255bc99df4bda69c09"
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
