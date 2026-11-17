---
name: mmceman
slug: mmceman-fjtrujy
summary: >-
  IOP kernel modules and manager for MMCE hardware devices on PlayStation 2,
  enabling memory card switching and Game ID integration.
categories:
  - hardware
  - drivers
tags:
  - auto-discovered
  - fork
features: []
authors: []
license: MIT
homepage: null
source:
  provider: github
  repository: fjtrujy/mmceman
  repositoryId: '1174850255'
repository:
  archived: false
  defaultBranch: main
  stars: 0
  forks: 0
  lastCommit: '2026-03-06T23:44:29Z'
latestRelease:
  tag: latest
  name: Latest mmceman IRX driver
  publishedAt: '2026-03-06T23:44:30Z'
  url: 'https://github.com/fjtrujy/mmceman/releases/tag/latest'
activity:
  lastSynchronized: '2026-11-17T03:55:20.875Z'
automation:
  sync: true
  github:
    repoEtag: W/"63a21491ffd3332c839b1694e43f90b82981585db6dda2fecb9df85edfa61959"
    releasesEtag: W/"8f02229ec43fb9353af6d0e89d55d0307894eefa456e972e1eb5fd75681d7132"
discovery:
  method: 'fork-network:ps2-mmce/mmceman'
  confidence: 100
  evidence:
    - README explicitly mentions PlayStation 2
    - README contains PS2 development/toolchain evidence
    - published GitHub release present
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: ps2-mmce/mmceman'
  maturity: prerelease-only
verified: false
featured: false
relationships:
  forkOf: ps2-mmce/mmceman
  source: ps2-mmce/mmceman
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
