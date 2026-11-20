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
  lastSynchronized: '2026-11-20T03:16:22.753Z'
automation:
  sync: true
  github:
    repoEtag: W/"e606b9a5fb72c663174fd6af0bdd4c6d870a1b1d1fb460a93ca873ff440a1e8d"
    releasesEtag: W/"b3743e2d607bd2cec9089573df2d6af1e8bd8ed03c6b6e61edff6a44c20e15ec"
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
